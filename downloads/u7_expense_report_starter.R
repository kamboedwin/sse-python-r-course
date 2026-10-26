# SSE+ 0003 | Activity U7 | Independent base-R starter
# Rename this file StudentID_U7.R. Work out each TODO yourself.
# This is intentionally NOT a complete answer and is not an answer key.
# No extra packages are required.

# Example data for the normal case. Later use the five test cases
# shown in the website's Activity U7 brief.
days <- c("Mon", "Tue", "Wed", "Thu", "Fri")
expenses <- c(2000, 3000, 0, 4000, 1000)
allowance <- 20000

# TODO 1: Build a data.frame with named columns day and expense.
# report <- data.frame(...)

# TODO 2: Complete the function below and return a named list
# with fields total, average, highest, zero_days and budget_status.
# Requirements: exactly five finite non-negative numeric amounts;
# allowance must be one finite non-negative numeric value.
# Rule: > over; == exactly; < within.
analyse_expenses <- function(values, allowance) {
  stop("TODO: validate inputs, calculate results, return named list")
}

# TODO 3: Call your function for the normal case and print labelled
# results with TZS units.
# results <- analyse_expenses(expenses, allowance)
# print(results)

# TODO 4: Draw a base-R barplot using day names as category labels,
# with a meaningful title and vertical-axis units (TZS).
# barplot(...)

# TODO 5: Re-run your function on each of the five required test cases.
# Record expected and actual totals, averages, zero counts and status.
# Add stopifnot() tests for at least the normal case and equality case.

# TODO 6: Supply a separate document describing algorithm, five tests,
# chart interpretation and any help, websites or AI tools you used.
