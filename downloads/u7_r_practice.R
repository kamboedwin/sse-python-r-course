# SSE+ 0003 | UNIT 7 | Guided R practice
# Use base R. These are worked learning examples, not the Activity U7 answer.
# Run in R with: source("u7_r_practice.R") from its folder.

cat("=== R: first steps ===\n")
fare <- 1500
trips <- 6
cat("Travel cost (TZS):", fare * trips, "\n")

cat("\n=== Vector basics ===\n")
expenses <- c(2000, 3000, 0, 4000, 1000)
print(expenses)
cat("First R item:", expenses[1], "\n") # Not index zero
cat("Final R item:", expenses[5], "\n")
cat("Total:", sum(expenses), " Average:", mean(expenses), "\n")
cat("Highest:", max(expenses), " Zero days:", sum(expenses == 0), "\n")
stopifnot(length(expenses) == 5, sum(expenses) == 10000)
stopifnot(mean(expenses) == 2000, sum(expenses == 0) == 1)

cat("\n=== Filtering and vectorisation ===\n")
print(expenses[expenses > 2000])
prices <- c(1000, 1500, 2000)
quantities <- c(2, 1, 3)
stopifnot(length(prices) == length(quantities))
cat("Total purchased (TZS):", sum(prices * quantities), "\n")

cat("\n=== Missing values ===\n")
with_missing <- c(2000, NA, 0, 4000, 1000)
cat("Unknown amounts:", sum(is.na(with_missing)), "\n")
cat("Mean after excluding NA:", mean(with_missing, na.rm = TRUE), "\n")

cat("\n=== A small data frame ===\n")
report <- data.frame(day = c("Mon", "Tue", "Wed", "Thu", "Fri"),
                     expense = expenses)
print(report)
cat("Data-frame total:", sum(report$expense), "\n")

cat("\n=== Simple function and test ===\n")
calculate_total <- function(values) {
  stopifnot(is.numeric(values), all(is.finite(values)), all(values >= 0))
  sum(values)
}
stopifnot(calculate_total(expenses) == 10000)
cat("All guided checks passed.\n")

# Optional: remove the comment markers below to display a bar chart
# in a graphical R session or RStudio Plots pane.
# barplot(report$expense, names.arg = report$day,
#         main = "Five-day expenditure", xlab = "Day",
#         ylab = "Amount (TZS)", col = "steelblue")
