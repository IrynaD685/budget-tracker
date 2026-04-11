import type { TransactionType } from "../../types/transaction";
import classes from "./TransactionForm.module.css";
import IncomeExpenseForm from "./IncomeExpenseForm";

type Props = {
    type: TransactionType
}

export default function TransactionForm({ type }: Props) {
    if (type === "transfer" || type === "debt") {
        return <div className={classes.placeholder}>Поки не реалізовано</div>;
    }

    if (type === "income" || type === "expense") {
        return <IncomeExpenseForm type={type} classes={classes}/>
    }

    return null;
}