import type { Transaction } from "../../types/transaction";

type TransactionItemProps = {
    transactionData: Transaction
}

export default function TransactionItem({ transactionData }: TransactionItemProps) {
    const formattedAmount: string = transactionData.amount.toLocaleString('uk-UA', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const sign: string = transactionData.type === "expense" ? "-" : "+";
    const amountClassName = transactionData.type === "expense" ? "transaction_amount_expense"
        : "transaction_amount_income";

    return (
        <div className="transaction">
            <div className="transaction_info">
                <div className="transaction_category">{transactionData.category}</div>
                <div className="transaction_meta">{transactionData.accountName}</div>
                <div className="transaction_meta">{transactionData.location}</div>
            </div>
            <div className={`transaction_amount ${amountClassName}`}>
                {sign}{formattedAmount} {transactionData.currency ?? "₴"}
            </div>
        </div>
    );
}