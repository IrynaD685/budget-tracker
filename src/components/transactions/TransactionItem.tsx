import type { Transaction, TransactionId } from "../../types/transaction";
import classes from "./TransactionItem.module.css";
import { useNavigate } from "react-router-dom";

type TransactionItemProps = {
    transactionData: Transaction
}

export default function TransactionItem({ transactionData }: TransactionItemProps) {
    const navigate = useNavigate();
    const sign = transactionData.type === "expense" ? "-" : "+";
    const amountClassName = transactionData.type === "expense" ? classes.expense : classes.income;

    if (transactionData.type === "debt" || transactionData.type === "transfer") {
        return null;
    }

    function openTransaction(id: TransactionId) {
        navigate(`edit/${id}`);
    }

    return (
        <div className={classes.transaction} onClick={() => openTransaction(transactionData.id)}>
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