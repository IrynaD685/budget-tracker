import { createContext } from "react";
import type { Transaction } from "../types/transaction";

export type TransactionsContextType = {
  transactions: Transaction[];
  addNewTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: `${string}-${string}-${string}-${string}-${string}`) => void;
  editeTransaction: (transaction: Transaction) => void;
};

export const TransactionsContext = createContext<TransactionsContextType>({
  transactions: [],
  addNewTransaction: () => { },
  deleteTransaction: () => { },
  editeTransaction: () => { },

});




