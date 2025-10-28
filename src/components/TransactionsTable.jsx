import React from 'react';
import { ArrowUpRight, ArrowDownRight, CreditCard, ShoppingBag, Laptop, Receipt } from 'lucide-react';

const items = [
  { id: 1, merchant: 'Apple Store', category: 'Electronics', amount: -1299.0, icon: Laptop, date: 'Today, 10:24 AM' },
  { id: 2, merchant: 'Stripe Payout', category: 'Income', amount: 2450.0, icon: Receipt, date: 'Yesterday, 6:12 PM' },
  { id: 3, merchant: 'Whole Foods', category: 'Groceries', amount: -86.45, icon: ShoppingBag, date: 'Oct 26, 3:18 PM' },
  { id: 4, merchant: 'Card Payment', category: 'Bills', amount: -120.0, icon: CreditCard, date: 'Oct 24, 11:02 AM' },
];

function Amount({ value }) {
  const positive = value >= 0;
  return (
    <span className={positive ? 'text-emerald-600' : 'text-rose-600'}>
      {positive ? '+' : '-'}${Math.abs(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </span>
  );
}

export default function TransactionsTable() {
  return (
    <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Recent Activity</h3>
        <button className="text-xs text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">View all</button>
      </div>
      <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800">
        {items.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 grid place-items-center text-neutral-700 dark:text-neutral-200">
                <tx.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-neutral-900 dark:text-white">{tx.merchant}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{tx.category} • {tx.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Amount value={tx.amount} />
              {tx.amount >= 0 ? (
                <ArrowUpRight className="h-4 w-4 text-emerald-600" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-rose-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
