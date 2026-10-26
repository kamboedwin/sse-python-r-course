"""Activity U8 | Campus Week Insights — Python independent starter.
Replace StudentID in your saved filename. Complete the TODOs yourself.
Use five weekdays; reject non-finite, negative or mismatched input.
Run this script in an installed Python interpreter to collect real test results.
"""
import math

DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"]
EXPENSES = [2000, 3000, 0, 4000, 1000]
STUDY_HOURS = [2, 1, 3, 2, 2]
ALLOWANCE = 15000

def validate_week(days, expenses, study_hours, allowance):
    """Check lengths and finite, non-negative numeric input."""
    # TODO: check all three lengths and numeric values; raise ValueError if invalid
    raise NotImplementedError("Complete validate_week")

def analyse_week(days, expenses, study_hours):
    """Return expenditure total, average, highest expense/day and total hours."""
    # TODO: include all requested summaries and a clear policy for tied maxima
    raise NotImplementedError("Complete analyse_week")

def classify_budget(total, allowance):
    """Return Over budget, Exactly on budget or Within budget."""
    # TODO: implement three-state comparison and equality boundary
    raise NotImplementedError("Complete classify_budget")

def main():
    validate_week(DAYS, EXPENSES, STUDY_HOURS, ALLOWANCE)
    report = analyse_week(DAYS, EXPENSES, STUDY_HOURS)
    # TODO: display labelled results in TZS and hours
    # TODO: use classify_budget and show allowance difference
    print(report)

if __name__ == "__main__":
    main()
