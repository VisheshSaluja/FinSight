def summarize_transactions(text: str) -> dict:
    lines = text.split('\n')
    summary = {}
    for line in lines:
        if "Starbucks" in line:
            summary.setdefault("Food & Drink", []).append(line)
        elif "Uber" in line:
            summary.setdefault("Transport", []).append(line)
        # Add more rules here
    return summary
