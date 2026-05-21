import SummaryCard from "./SummaryCard";
import type { Transaction } from "../../types/transaction";
import classes from "./SummaryCards.module.css";
import { getTransactionsSummary } from "../../utils/utils";


type Props = {
    transactions: Transaction[]
}

export default function SummaryCards({ transactions }: Props) {
    const { income, expense, balance } = getTransactionsSummary(transactions);
    
    return <section className={classes.cards}>
        <SummaryCard title="Доходи" amount={income} />
        <SummaryCard title="Витрати" amount={expense} />
        <SummaryCard title="Баланс" amount={balance} />
    </section>
}