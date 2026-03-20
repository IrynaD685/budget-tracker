export type TransactionType = "expense" | "income" | "transfer" | "debt";

export type DebtDirection = "i_lent" | "i_borrowed";

export interface BaseTransaction {
    id: string;
    type: TransactionType;
    amount: number;
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