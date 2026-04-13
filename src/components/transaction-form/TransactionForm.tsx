import type { TransactionType } from "../../types/transaction";
import classes from "./TransactionForm.module.css";
import IncomeExpenseForm from "./IncomeExpenseForm";
import EmptyState from "../ui/EmptyState";

type Props = {
    type: TransactionType
}

export default function TransactionForm({ type }: Props) {
    if (type === "transfer" || type === "debt") {
        return <EmptyState>Поки не реалізовано</EmptyState>;
    }

    if (type === "income" || type === "expense") {
        return <IncomeExpenseForm type={type} classes={classes}/>
    }

    return null;
}