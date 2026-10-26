"""SSE+ 0003 | Unit 4 guided loop examples."""

print("Example A: five days")
for day in range(1, 6):
    print("Day", day)

print("\nExample B: running total")
total = 0
for day in range(1, 4):
    amount = float(input(f"Day {day} amount: "))
    total += amount
    print("Running total:", total)
print("Final:", total)

print("\nExample C: valid amount")
amount = float(input("Enter a non-negative expense: "))
# EXERCISE: Add a while loop here so that negative numeric inputs are
# rejected and a new amount is requested until it is valid.
print("Accepted amount:", amount)
