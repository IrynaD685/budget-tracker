import type { IncomeExpenseTransaction } from "../../types/transaction.js";
import classes from "./TransactionItem.module.css";

type TransactionItemProps = {
    transactionData: IncomeExpenseTransaction
}

export default function TransactionItem({ transactionData }: TransactionItemProps) {
    const formattedAmount: string = transactionData.amount.toLocaleString('uk-UA', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const sign: string = transactionData.type === "expense" ? "-" : "+";
    const amountClassName = transactionData.type === "expense" ? classes.expense
        : classes.income;

    return (
        <div className={classes.transaction}>
            <div className={classes.info}>
                <div className={classes.category}>{transactionData.category}</div>
                <div className={classes.meta}>{transactionData.accountName}</div>
                <div className={classes.meta}>{transactionData.location}</div>
            </div>
            <div className={`${classes.amount} ${amountClassName}`}>
                {sign}{formattedAmount} {transactionData.currency ?? "₴"}
            </div>
        </div>
    );
}