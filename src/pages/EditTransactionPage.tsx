import TransactionForm from "../components/transaction-form/TransactionForm";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TransactionsContext } from "../store/transactions-context";
import { getTransactionById } from "../utils/utils";
import type { Transaction } from "../types/transaction";

export default function EditTransactionPage() {
    const { id } = useParams();
    const { transactions } = useContext(TransactionsContext);
    const transaction = getTransactionById(transactions, id);

    return <section>
        <TransactionForm type={transaction?.type} mode="edit" initialValues={transaction}/>
    </section>
}