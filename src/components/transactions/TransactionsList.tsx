import TransactionItem from "./TransactionItem";
import { formatTransactionDate } from "../../utils/formatTransactionDate";
import classes from "./TransactionsList.module.css";
import type { Transaction } from "../../types/transaction";
import { sortTransactions } from "../../utils/utils";
import EmptyState from "../ui/EmptyState";

type TransactionsListProps = {
    transactions: Transaction[];
}

export default function TransactionsList({ transactions }: TransactionsListProps) {
    const sortedTransactions = sortTransactions(transactions);

    return (
        <div>
            {!transactions.length && <EmptyState>Ще немає транзакцій.</EmptyState>}
            {sortedTransactions.map(group => (
                <div key={group.title} className={classes.group}>
                    <h3 className={classes.groupTitle}>{formatTransactionDate(group.title)}</h3>
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