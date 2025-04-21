def compare_budget(actual: dict, planned: dict) -> dict:
    result = {}
    for category in planned:
        actual_val = actual.get(category, 0)
        planned_val = planned[category]
        diff = actual_val - planned_val
        result[category] = {
            "actual": actual_val,
            "planned": planned_val,
            "difference": diff
        }
    return result
