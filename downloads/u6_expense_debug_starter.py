"""SSE+ 0003 | Activity U6: deliberately faulty starter.

The programme contains several mistakes. Your assignment is to
reproduce, explain, repair and test them. Do not submit this file
unchanged as your finished work.

Faults relate to: loop bounds, counting zeros, budget equality,
average denominator and input checking.

Submit your OWN corrected version under StudentID_U6.py.
"""


def calculate_total(values):
    total = 0.0
    for i in range(len(values) - 1):  # Investigate this loop.
        total += values[i]
    return total


def count_zero_days(values):
    count = 0
    for amount in values:
        if amount == 0:
            count = 0  # Investigate how counting should work.
    return count


def budget_message(total, allowance):
    if total >= allowance:  # What if the two are equal?
        return "Over budget"
    elif total == allowance:
        return "Exactly on budget"
    else:
        return "Within budget"


def main():
    print("Five-day expenditure analyser — faulty starting point")
    allowance = float(input("Weekly allowance (TZS): "))
    expenses = []
    for day in range(1, 6):
        amount = float(input(f"Day {day} expense (TZS): "))
        expenses.append(amount)  # Does the value meet every requirement?

    total = calculate_total(expenses)
    zero_days = count_zero_days(expenses)
    average = total / (len(expenses) - 1)  # Investigate this denominator.
    status = budget_message(total, allowance)

    print(f"Total: TZS {total:.2f}")
    print(f"Average: TZS {average:.2f}")
    print(f"Zero-spend days: {zero_days}")
    print(f"Budget status: {status}")


if __name__ == "__main__":
    main()
