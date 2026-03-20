export function formatTransactionDate(dateString: string): string {
    const transactionDate = new Date(dateString);
    const today = new Date();

    const diffInMs =
        new Date(today).setHours(0, 0, 0, 0) -
        new Date(transactionDate).setHours(0, 0, 0, 0);

    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays === 0) {
        return "Сьогодні";
    }

    if (diffInDays === 1) {
        return "Вчора";
    }

    return transactionDate.toLocaleDateString("uk-UA", {
        day: "numeric",
        month: "long",
    });
}