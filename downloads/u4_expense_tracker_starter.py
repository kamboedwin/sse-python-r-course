"""SSE+ 0003 | Unit 4 independent activity starter.

Make this your own working programme. Replace each TODO with Python code.
A five-day tracker must validate negative numeric inputs, calculate a
running total and a daily average, count zero-spend days and report
whether the total is over, equal to or within the allowance.

Save the completed file as StudentID_U4.py.
"""

allowance = float(input("Weekly allowance in TZS: "))
# TODO: while allowance is negative, ask for it again.

total = 0.0
zero_days = 0

# TODO: for each of five days:
#   1. read the day's expense using float(input(...))
#   2. while the expense is negative, ask for a replacement for this day
#   3. add the accepted expense to total
#   4. if the expense equals zero, increase zero_days

# TODO: calculate the five-day average and budget balance.
# TODO: print total and average to two decimal places with TZS labels.
# TODO: print the number of zero-spend days.
# TODO: print exactly one budget status:
#         Over budget / Exactly on budget / Within budget
