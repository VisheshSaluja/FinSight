from fastapi import APIRouter
from pydantic import BaseModel
from services.firestore_ops import add_manual_expense

router = APIRouter()

class ManualExpense(BaseModel):
    user_id: str
    amount: float
    category: str
    date: str
    note: str

# @router.post("/manual-expense")
# def add_expense(data: ManualExpense):
#     add_manual_expense(data.user_id, data.dict(exclude={"user_id"}))
#     return {"message": "Manual expense added"}




@router.post("/manual-expense")
def add_expense(data: ManualExpense):
    try:
        add_manual_expense(data.user_id, data.dict(exclude={"user_id"}))
        return {"message": "Manual expense added"}
    except Exception as e:
        print("🔥 Error while adding expense:", e)
        return {"error": str(e)}
