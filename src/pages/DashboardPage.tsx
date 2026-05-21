import SummaryCards from "../components/dashboard/SummaryCards";
import { useContext } from "react";
import { TransactionsContext } from "../store/transactions-context";
import EmptyState from "../components/ui/EmptyState";

export default function DashboardPage() {
    const { transactions } = useContext(TransactionsContext);

    if (!transactions.length) {
        return <EmptyState>Ще немає данних. Додайте транзакції.</EmptyState>
    }
    return <SummaryCards transactions={transactions}/>
}