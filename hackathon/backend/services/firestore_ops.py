import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("firebase_service_account.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def add_manual_expense(user_id, data):
    db.collection("users").document(user_id).collection("expenses").add(data)

def get_expenses(user_id):
    return db.collection("users").document(user_id).collection("expenses").stream()
