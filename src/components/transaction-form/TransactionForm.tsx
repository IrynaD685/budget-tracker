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

type IncomeExpenseFormData = {
    amount: string;
    category: string;
    date: string;
    note?: string;
};

type TransactionFormData = IncomeExpenseFormData; // todo add aditional types for other types of transactions

export default function TransactionForm({ type, mode, initialValues }: Props) {
    const { addNewTransaction, deleteTransaction } = useContext(TransactionsContext);

    const handleSubmitTransaction  = (data: TransactionFormData) => {
        if (type !== "income" && type !== "expense") {
            return;
        }

        if (mode === "create") {
            const newTransaction: IncomeExpenseTransaction = {
                id: crypto.randomUUID(),
                type,
                accountName: "Картка",
                ...data,
            };

            addNewTransaction(newTransaction);
            return;
        }

        if (mode === "edit") {
            console.log("тут потім буде update transaction", data);
        }
    };

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
            classes={classes}
            initialValues={initialValues as IncomeExpenseTransaction | undefined}
            onSubmit={handleSubmitTransaction}
        >
            {transactionActions}
        </IncomeExpenseForm>
    }

    return null;
}