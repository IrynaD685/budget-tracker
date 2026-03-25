import TransactionTypeTabs from "../components/transaction-form/TransactionTypeTabs";
import TransactionForm from "../components/transaction-form/TransactionForm";
import { useState } from "react";
import type { TransactionType } from "../types/transaction";

export default function AddTransactionPage() {
    const [activeType, setActiveType] = useState<TransactionType>("expense");

    return <section>
        <section>
            <TransactionTypeTabs activeType={activeType} onChange={setActiveType}/>
            <TransactionForm type={activeType}/>
        </section>
    </section>;
}