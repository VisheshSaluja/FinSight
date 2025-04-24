from fastapi import APIRouter
from pydantic import BaseModel
from services.gemini_client import query_gemini

router = APIRouter()

class ChatRequest(BaseModel):
    user_id: str
    question: str

@router.post("/chat")
def chat(data: ChatRequest):
    # You can enhance this later by pulling actual user data
    prompt = f"User asked: {data.question}\nRespond as a financial assistant."
    answer = query_gemini(prompt)
    return {"response": answer}
