import { mockTransactions } from "../../data/mockTransactions";
import TransactionItem from "./TransactionItem";
import { formatTransactionDate } from "../../utils/formatTransactionDate.js";

type GroupedTransactions = {
    title: string;
    items: typeof mockTransactions;
};

export default function TransactionsList() {
    const groupedTransactions: GroupedTransactions[] = [];

    for (const transaction of mockTransactions) {
        const groupTitle = formatTransactionDate(transaction.date);
        const existingGroup = groupedTransactions.find(group => group.title === groupTitle);

        if (existingGroup) {
            existingGroup.items.push(transaction);
        } else {
            groupedTransactions.push({
                title: groupTitle,
                items: [transaction]
            });
        }
    }

    return (
        <div>
            {groupedTransactions.map(group => (
                <div key={group.title} className="">
                    <h3 className="">{group.title}</h3>
                    <div>{
                        group.items.map(item => (
                            <TransactionItem key={item.id} transactionData={item}/>
                        ))
                        }</div>
                </div>
            ))}
        </div>
    );
}