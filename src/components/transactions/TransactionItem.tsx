import type { Transaction } from "../../types/transaction";
import classes from "./TransactionItem.module.css";

type TransactionItemProps = {
    transactionData: Transaction
}

export default function TransactionItem({ transactionData }: TransactionItemProps) {
    const sign = transactionData.type === "expense" ? "-" : "+";
    const amountClassName = transactionData.type === "expense" ? classes.expense : classes.income;

    if (transactionData.type === "debt" || transactionData.type === "transfer") {
        return null;
    }

    return (
        <div className={classes.transaction}>
            <div className={classes.info}>
                <div className={classes.category}>{transactionData.category}</div>
                <div className={classes.meta}>{transactionData.accountName}</div>
                <div className={classes.meta}>{transactionData.location}</div>
            </div>
            <div className={`${classes.amount} ${amountClassName}`}>
                {sign}{transactionData.amount} {transactionData.currency ?? "₴"}
            </div>
        </div>
    );
}