"""SSE+ 0003 | Unit 5 guided practice: lists and simple functions.

Use these examples for practice. Finish the exercises and verify the outputs.
This is NOT the independent Activity U5 submission file.
"""

values = [500, 0, 750, 1200]
print("Values:", values)
print("First:", values[0])
print("Last:", values[-1])
print("Number of values:", len(values))

values.append(250)
print("After append:", values)


def square(n):
    return n * n


print("Square of 4:", square(4))


def total_of_list(items):
    """Exercise: return the sum of items using a for loop and accumulator."""
    # TODO: initialise total = 0.0, loop, update, return
    pass


# Expected totals when total_of_list is finished:
# [] -> 0.0; [1000] -> 1000.0; [2000, 0, 3000] -> 5000.0
