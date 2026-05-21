import type { Transaction } from "../types/transaction";

type GroupedTransactions = {
    title: string;
    items: Transaction[];
};

export const sortTransactions = (transactions: Transaction[]): GroupedTransactions[] => {
    const groupedTransactions: GroupedTransactions[] = [];

    for (const transaction of transactions) {
        const existingGroup = groupedTransactions.find(group => group.title === transaction.date);

        if (existingGroup) {
            existingGroup.items.push(transaction);
        } else {
            groupedTransactions.push({
                title: transaction.date,
                items: [transaction]
            });
        }
    }

    groupedTransactions.sort((a, b) => {
        const date1 = new Date(a.title);
        const date2 = new Date(b.title);

        return date2.getTime() - date1.getTime();
    })

    return groupedTransactions;
}

export function getTransactionById(transactions: Transaction[], id: string | undefined): Transaction | undefined {
    return transactions.find(transaction => transaction.id === id);
}

export function getTransactionsSummary(transactions: Transaction[]) {
    return transactions.reduce(
        (summary, transaction) => {
            if (transaction.type === "income") {
                summary.income += Number(transaction.amount);
            }

            if (transaction.type === "expense") {
                summary.expense += Number(transaction.amount);
            }

            summary.balance = summary.income - summary.expense;

            return summary;
        },
        {
            income: 0,
            expense: 0,
            balance: 0,
        }
    );
}