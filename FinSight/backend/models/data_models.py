from pydantic import BaseModel

class SummaryRequest(BaseModel):
    text: str

class BudgetCompareRequest(BaseModel):
    actual: dict
    planned: dict
