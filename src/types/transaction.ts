export type TransactionType = "income" | "expense";

export interface Transaction {
    id: string;
    amount: number;
    currency?: string;
    type: TransactionType;
    category: string;
    accountName: string;
    location: string;
    date: string;
    note?: string;
}