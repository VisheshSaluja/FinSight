# services/chat.py

import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def ask_question(question: str, history: list[str] = None):
    try:
        model = genai.GenerativeModel("models/gemini-pro")
        chat = model.start_chat(history=[
            {"role": "user", "parts": [msg]} for msg in (history or [])
        ])
        response = chat.send_message(question)
        return response.text
    except Exception as e:
        return f"Chat Error: {str(e)}"
