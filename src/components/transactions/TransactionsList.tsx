import { mockTransactions } from "../../data/mockTransactions";
import TransactionItem from "./TransactionItem";

export default function TransactionsList() {
    return <div>
        {mockTransactions.map((transaction) => <TransactionItem 
        key={transaction.id}
        transactionData={transaction}
        />)}
    </div>
}