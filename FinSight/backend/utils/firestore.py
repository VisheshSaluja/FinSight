import os
from google.cloud import firestore
from dotenv import load_dotenv

load_dotenv()
db = firestore.Client()

def save_summary(user_id: str, text: str, summary: str):
    doc_ref = db.collection("users").document(user_id).collection("summaries").document()
    doc_ref.set({
        "original_text": text,
        "summary": summary
    })

def save_chat(user_id: str, question: str, answer: str):
    doc_ref = db.collection("users").document(user_id).collection("chat_history").document()
    doc_ref.set({
        "question": question,
        "answer": answer
    })
