from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from services.pdf_parser import extract_text
from services.gemini_utils import generate_summary
from services.budget_compare import compare_budget
from services.chat import ask_question
from utils.firestore import save_summary, save_chat

app = FastAPI()

# 📄 Request models
class SummaryRequest(BaseModel):
    text: str

class BudgetCompareRequest(BaseModel):
    actual: dict
    planned: dict

class ChatRequest(BaseModel):
    history: list[str] = []
    question: str

# 🚀 Routes
@app.get("/")
def root():
    return {"message": "Welcome to FinSight GenAI Backend 🚀"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    text = extract_text(content)
    return {"text": text}

@app.post("/summarize")
def summarize(request: SummaryRequest):
    summary = generate_summary(request.text)
    save_summary(user_id="test_user", text=request.text, summary=summary)
    return {"summary": summary}


@app.post("/compare-budget")
def compare_budget_endpoint(request: BudgetCompareRequest):
    comparison = compare_budget(request.actual, request.planned)
    return {"comparison": comparison}

@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    response = ask_question(request.question, request.history)
    save_chat(user_id="test_user", question=request.question, answer=response)
    return {"answer": response}
