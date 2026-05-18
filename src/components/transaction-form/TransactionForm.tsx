import type { TransactionType, Transaction, IncomeExpenseTransaction } from "../../types/transaction";
import classes from "./TransactionForm.module.css";
import IncomeExpenseForm from "./IncomeExpenseForm";
import EmptyState from "../ui/EmptyState";
import { useContext } from "react";
import { TransactionsContext } from "../../store/transactions-context";

type Props = {
    type: TransactionType | undefined,
    mode: "create" | "edit",
    initialValues?: Transaction
}

export default function TransactionForm({ type, mode, initialValues }: Props) {
    const { deleteTransaction } = useContext(TransactionsContext);
    let transactionActions = <button className={classes.submit} type="submit" >Додати транзакцію</button>;
    
    const handleDelete = () => {
        if (!initialValues) {
            return;
        }
        deleteTransaction(initialValues.id);
    }

    if (mode === "edit") {
        transactionActions = <div>
            <button type="submit">Зберегти</button>
            <button type="button" onClick={handleDelete}>Видалити</button>
        </div>;
    }

    if (type === "transfer" || type === "debt") {
        return <EmptyState>Поки не реалізовано</EmptyState>;
    }

    if (type === "income" || type === "expense") {
        return <IncomeExpenseForm
            type={type}
            classes={classes}
            initialValues={initialValues as IncomeExpenseTransaction | undefined}
        >
            {transactionActions}
        </IncomeExpenseForm>
    }

    return null;
}