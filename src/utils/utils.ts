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