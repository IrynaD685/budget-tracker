import type { TransactionType } from "../../types/transaction";
import Input from "../ui/Input";
import classes from "./TransactionForm.module.css";
import { Controller, useForm, type FieldErrors } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
    amount: string;
    category: string;
    date: string;
    note?: string;
};

const schema: yup.ObjectSchema<FormData> = yup.object({
    amount: yup.string().required("Введіть суму").matches(/^$|^(?!\.)(\d+(\.\d*)?|\d+)$/, "Некоректна сума"),
    category: yup.string().trim().required("Введіть категорію"),
    date: yup.string().required("Оберіть дату"),
    note: yup.string().optional(),
}).required();

type Props = {
    type: TransactionType
}

export default function TransactionForm({ type }: Props) {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onValid = (data: FormData) => console.log(data);
    const onInvalid = (errors: FieldErrors<FormData>): void => console.log(errors)

    const handleChange = (value: string): string | undefined => {
        const validationRegex = /^$|^(?!\.)(\d+(\.\d*)?|\d+)$/;
        if (!validationRegex.test(value) && value !== "") {
            return undefined;
        }

        return value;
    }

    if (type === "transfer" || type === "debt") {
        return <div className={classes.placeholder}>Поки не реалізовано</div>;
    }

    return <form className={classes.form} onSubmit={handleSubmit(onValid, onInvalid )}>
        <Controller
            name="amount"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Input
                    label="Сума"
                    id="amount"
                    inputMode="decimal"
                    value={field.value}
                    error={errors.amount}
                    onChange={(e) => {
                        const newValue = handleChange(e.target.value);
                        if (newValue !== undefined) {
                            field.onChange(newValue);
                        }
                    }}
                />
            )} />
        <Input
            label="Категорія"
            id="category"
            error={errors.category}
            {...register("category")}
        />
        <Input
            label="Дата"
            id="date"
            type="date"
            error={errors.date}
            {...register("date")}
        />
        <Input
            label="Коментар"
            id="note"
            error={errors.note}
            {...register("note")}
        />
        <button className={classes.submit} type="submit" >Зберегти</button>
    </form>;
}