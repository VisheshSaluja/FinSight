from fastapi import FastAPI
from api import statement, manual_expense, summary, chatbot


app = FastAPI()

@app.get("/")
def home():
    return {"message": "FinWise Backend API is live 🚀 Visit /docs for usage."}


app.include_router(statement.router)
app.include_router(manual_expense.router)
app.include_router(summary.router)
app.include_router(chatbot.router)
