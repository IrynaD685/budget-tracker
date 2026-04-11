import type { Transaction } from "../types/transaction.js";

export const mockTransactions: Transaction[] = [
    {
    id: '434fb634-a974-48b4-b4fc-f41486b59cc9',
    amount: "37.00",
    type: 'expense',
    category: 'Кафе та ресторани',
    accountName: 'Картка',
    location: 'Nero espresso',
    date: '2026-03-17',
  },
  {
    id: '434fb634-a774-48b4-b4fc-f41486b59cc9',
    amount: "4000.00",
    type: 'income',
    category: 'Без категорії',
    accountName: 'Картка',
    location: 'Verovkin Oleksandr',
    date: '2026-03-17',
  },
  {
  id: '434fb634-a974-48m4-b4fc-f41486b59cc9',
  amount: "142.89",
  type: 'expense',
  category: 'Продукти',
  accountName: 'Картка',
  location: 'АТБ',
  date: '2026-03-16',
}
];