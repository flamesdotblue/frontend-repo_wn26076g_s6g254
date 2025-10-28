import React from 'react';
import { Wallet, TrendingUp, ArrowDownRight, ArrowUpRight, DollarSign } from 'lucide-react';

const stats = [
  {
    name: 'Total Balance',
    value: '$58,420',
    change: '+2.4% this week',
    trend: 'up',
    icon: Wallet,
  },
  {
    name: 'Income',
    value: '$12,300',
    change: '+8.1% vs last month',
    trend: 'up',
    icon: DollarSign,
  },
  {
    name: 'Expenses',
    value: '$7,940',
    change: '-3.2% vs last month',
    trend: 'down',
    icon: ArrowDownRight,
  },
  {
    name: 'Investments',
    value: '$24,780',
    change: '+5.6% growth',
    trend: 'up',
    icon: TrendingUp,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="group relative rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.name}</p>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-2xl font-semibold text-neutral-900 dark:text-white">{item.value}</p>
                <span
                  className={
                    'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]' +
                    (item.trend === 'up'
                      ? ' bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'
                      : ' bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300')
                  }
                >
                  {item.trend === 'up' ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {item.change}
                </span>
              </div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 grid place-items-center text-neutral-700 dark:text-neutral-200">
              <item.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
