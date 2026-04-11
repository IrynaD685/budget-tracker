import { useContext } from "react";
import TransactionsList from "../components/transactions/TransactionsList";
import { TransactionsContext } from "../store/transactions-context";

export default function TransactionsPage() {

  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error("TransactionsContext is not provided");
  }

  const { transactions } = context;

  return <section>
    <TransactionsList transactions={transactions} />
  </section>;
}