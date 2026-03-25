import type { TransactionType } from "../types/transaction";

type TransactionOption = {
  value: TransactionType;
  label: string;
};

export const transactionOptions: TransactionOption[] = [
    {
        value: "expense",
        label: "Витрата"
    },
    {
        value: "income",
        label: "Прибуток"
    },
    {
        value: "transfer",
        label: "Переказ"
    },
    {
        value: "debt",
        label: "Борг"
    },
];