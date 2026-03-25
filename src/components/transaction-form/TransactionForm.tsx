import type { TransactionType } from "../../types/transaction";
import Input from "../ui/Input";
import { useRef } from "react";
import classes from "./TransactionForm.module.css"

type Props = {
    type: TransactionType
}

export default function TransactionForm({ type }: Props) {
    const amountRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);    
    const noteRef = useRef<HTMLInputElement>(null);

    if (type === "transfer" || type === "debt") {
        return <div className={classes.placeholder}>Поки не реалізовано</div>;
    }

    return <form className={classes.form}>
        <Input
            label="Сума"
            id="amount"
            ref={amountRef}
            inputMode="decimal"
        />
        <Input
            label="Категорія"
            id="category"
            ref={categoryRef}
        />
        <Input
            label="Дата"
            id="date"
            ref={dateRef}
            type="date"
        />
        <Input
            label="Коментар"
            id="note"
            ref={noteRef}
        />
        <button className={classes.submit} type="submit" >Зберегти</button>
    </form>;
}