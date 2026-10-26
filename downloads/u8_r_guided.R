# SSE+ 0003 | Unit 8 guided example (not the independent assignment)
# Run in R: source("u8_r_guided.R") from this directory
# The standalone plot opens in R and is saved as u8_guided_plot.png.
day <- c("Mon", "Tue", "Wed")
amount <- c(1000, 1500, 500)
week <- data.frame(day=day, amount=amount)
stopifnot(nrow(week) == 3, all(is.finite(week$amount)), all(week$amount >= 0))
total <- sum(week$amount)
average <- mean(week$amount)
cat("Three-day total: TZS", total, "\n")
cat("Average: TZS", average, "\n")
stopifnot(total == 3000, average == 1000)
png("u8_guided_plot.png", width=900, height=600)
barplot(week$amount, names.arg=week$day, main="Guided three-day spending",
        xlab="Day", ylab="Amount (TZS)", col="steelblue")
dev.off()
cat("Saved: u8_guided_plot.png\n")
