import type { Transaction } from "../types/transaction";

export const mockTransactions: Transaction[] = [
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
];