import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def generate_summary(text: str) -> str:
    try:
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(f"Summarize the following bank transaction text:\n\n{text}")
        return response.text
    except Exception as e:
        return f"Gemini Error: {str(e)}"
