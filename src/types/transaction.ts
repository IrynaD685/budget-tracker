export type TransactionType = "expense" | "income" | "transfer" | "debt";
export type IncomeExpenseType = "income" | "expense";
export type DebtDirection = "i_lent" | "i_borrowed";
export type TransactionId = `${string}-${string}-${string}-${string}-${string}`;

export interface BaseTransaction {
    id: TransactionId;
    type: TransactionType;
    amount: string;
    date: string;
    currency?: string;
    note?: string;
}

export interface IncomeExpenseTransaction extends BaseTransaction {
    type: "income" | "expense";
    category: string;
    accountName: string;
    location?: string;
}

export interface TransferTransaction extends BaseTransaction {
    type: "transfer";
    fromAccountName: string;
    toAccountName: string;
}

export interface DebtTransaction extends BaseTransaction {
    type: "debt";
    debtDirection: DebtDirection;
    personName: string;
    accountName: string;
}

export type Transaction =
    | IncomeExpenseTransaction
    | TransferTransaction
    | DebtTransaction;