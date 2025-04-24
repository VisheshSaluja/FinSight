from fastapi import APIRouter
from services.firestore_ops import get_expenses

router = APIRouter()

@router.get("/summary")
def get_summary(user_id: str):
    expenses = get_expenses(user_id)
    summary = {}
    for e in expenses:
        data = e.to_dict()
        category = data.get("category", "Other")
        amount = data.get("amount", 0)
        summary[category] = summary.get(category, 0) + amount
    return {"summary": summary}
