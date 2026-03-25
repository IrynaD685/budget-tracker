import type { TransactionType } from "../../types/transaction";
import classes from "./TransactionTypeTabs.module.css";
import { transactionOptions } from "../../constants/transactionOptions";

type Props = {
    activeType: TransactionType,
    onChange: (type: TransactionType) => void
}
export default function TransactionTypeTabs({ activeType, onChange }: Props) {

    return (
        <div className={classes.tabs}>
            {transactionOptions.map(option => (
                <button
                    type="button"
                    key={option.value}
                    className={activeType === option.value ? `${classes.button} ${classes.active}` : classes.button}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}