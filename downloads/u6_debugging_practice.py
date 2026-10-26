"""SSE+ 0003 | Unit 6 guided practice: testing and debugging.

Student learning file. Two examples contain intentional defects.
Predict, run, trace, correct and record the results. This is not the
complete solution to Activity U6.
"""


def total_with_bug(values):
    """Deliberately omits the final list element."""
    total = 0
    for i in range(len(values) - 1):
        print("TRACE: index", i, "value", values[i], "before", total)
        total += values[i]
    return total


def budget_with_bug(total, allowance):
    """Deliberately misclassifies a total equal to the allowance."""
    if total >= allowance:
        return "Over budget"
    elif total == allowance:
        return "Exactly on budget"
    return "Within budget"


if __name__ == "__main__":
    test_values = [10, 20, 30]
    print("Practice A | Expected total:", 60)
    print("Practice A | Actual total:", total_with_bug(test_values))
    print()
    print("Practice B | Expected equality status: Exactly on budget")
    print("Practice B | Actual status:", budget_with_bug(15000, 15000))
    print()
    print("TO DO: Correct both functions and rerun the examples.")
    print("TO DO: Add tests for [10], [0, 0, 0], below and above allowance.")
