from fastapi import APIRouter, UploadFile, Form
from services import parser, firestore_ops

router = APIRouter()

@router.post("/upload-statement")
async def upload_statement(user_id: str = Form(...), file: UploadFile = Form(...)):
    content = await file.read()
    transactions = parser.parse_pdf(content)
    for txn in transactions:
        firestore_ops.add_manual_expense(user_id, txn)
    return {"message": "Parsed and stored"}
