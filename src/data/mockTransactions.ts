import type { IncomeExpenseTransaction } from "../types/transaction.js";

export const mockTransactions: IncomeExpenseTransaction[] = [
    {
    id: '1',
    amount: 37.00,
    type: 'expense',
    category: 'Кафе та ресторани',
    accountName: 'Картка',
    location: 'Nero espresso',
    date: '2026-03-17',
  },
  {
    id: '2',
    amount: 4000.00,
    type: 'income',
    category: 'Без категорії',
    accountName: 'Картка',
    location: 'Verovkin Oleksandr',
    date: '2026-03-17',
  },
  {
  id: '3',
  amount: 142.89,
  type: 'expense',
  category: 'Продукти',
  accountName: 'Картка',
  location: 'АТБ',
  date: '2026-03-16',
}
];