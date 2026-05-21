import classes from "./SummaryCard.module.css";

type Props = {
    title: string,
    amount: number,
}

export default function SummaryCard({ title, amount }: Props) {
    const formattedAmount = `${amount.toFixed(2)} ₴`;
    return <article className={classes.card}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.amount}>{formattedAmount}</p>
    </article>
}