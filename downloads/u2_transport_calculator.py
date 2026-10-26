"""Unit 2 worked example: a simple transport cost calculator."""

fare = float(input("Fare per trip in TZS: "))
trips = int(input("Number of one-way trips: "))
total = fare * trips
print(f"Transport cost: TZS {total:.2f}")
