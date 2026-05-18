import type { IncomeExpenseTransaction } from "../../types/transaction";
import Input from "../ui/Input";
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
    classes: CSSModuleClasses,
    initialValues?: IncomeExpenseTransaction,
    children: any,
    onSubmit: (data: FormData) => void,
}

export default function IncomeExpenseForm({ classes, initialValues, children, onSubmit }: Props) {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            amount: initialValues?.amount ?? "",
            category: initialValues?.category ?? "",
            date: initialValues?.date ?? "",
            note: initialValues?.note ?? "",
        }
    });

    const onInvalid = (errors: FieldErrors<FormData>): void => console.log(errors);

    const handleChange = (value: string): string | undefined => {
        const validationRegex = /^$|^(?!\.)(\d+(\.\d*)?|\d+)$/;
        if (!validationRegex.test(value) && value !== "") {
            return undefined;
        }

        return value;
    }

    return <form className={classes.form} onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <Controller
            name="amount"
            control={control}
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
            )}
        />
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
        {children}
    </form>;

}