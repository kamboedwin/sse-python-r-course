"""SSE+ 0003 | Unit 8 guided example (not the independent assignment).
Run: python u8_python_guided.py
Simple three-day transport example using familiar Python skills.
"""

def calculate_total(amounts):
    if len(amounts) != 3 or any(type(x) not in (int, float) or x < 0 for x in amounts):
        raise ValueError("Three non-negative values are required")
    return sum(amounts)

if __name__ == "__main__":
    amounts = [1000, 1500, 500]
    allowance = 4000
    total = calculate_total(amounts)
    result = "Within budget" if total < allowance else ("Exactly on budget" if total == allowance else "Over budget")
    print(f"Three-day total: TZS {total:,.2f}")
    print(f"Average: TZS {total/3:,.2f}")
    print(f"Status: {result}")
    assert total == 3000
    print("Guided check passed")
