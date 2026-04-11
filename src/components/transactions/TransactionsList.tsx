import TransactionItem from "./TransactionItem";
import { formatTransactionDate } from "../../utils/formatTransactionDate";
import classes from "./TransactionsList.module.css";
import type { Transaction } from "../../types/transaction";

type GroupedTransactions = {
    title: string;
    items: Transaction[];
};

type TransactionsListProps = {
    transactions: Transaction[];
}

export default function TransactionsList({ transactions }: TransactionsListProps) {
    console.log(transactions)
    const groupedTransactions: GroupedTransactions[] = [];

    for (const transaction of transactions) {
        const groupTitle = formatTransactionDate(transaction.date);
        const existingGroup = groupedTransactions.find(group => group.title === groupTitle);

        if (existingGroup) {
            existingGroup.items.push(transaction);
        } else {
            groupedTransactions.push({
                title: groupTitle,
                items: [transaction]
            });
        }
    }

    return (
        <div>
            {groupedTransactions.map(group => (
                <div key={group.title} className={classes.group}>
                    <h3 className={classes.groupTitle}>{group.title}</h3>
                    <div>{
                        group.items.map(item => (
                            <TransactionItem key={item.id} transactionData={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}