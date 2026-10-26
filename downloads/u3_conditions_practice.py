"""Unit 3 guided practice — comparison and branching examples."""
days = 5
print("Days valid:", 0 <= days <= 7)

balance = 0
if balance < 0:
    print("Over budget")
elif balance == 0:
    print("Exactly on budget")
else:
    print("Within budget")

food = 4000
transport = 2500
if food < 0 or transport < 0:
    print("Costs must be non-negative")
else:
    print("Costs accepted")
