import { createContext } from "react";
import type { Transaction } from "../types/transaction";

export type TransactionsContextType = {
  transactions: Transaction[];
  addNewTransaction: (transaction: Transaction) => void;
};

export const TransactionsContext = createContext<TransactionsContextType>({
  transactions: [],
  addNewTransaction: () => {},
});




