import React from 'react';
import Hero3D from './components/Hero3D';
import StatsCards from './components/StatsCards';
import PortfolioChart from './components/PortfolioChart';
import TransactionsTable from './components/TransactionsTable';
import { Banknote, Bell, Settings, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-950 text-neutral-900 dark:text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-neutral-900 dark:bg-white grid place-items-center">
              <Banknote className="h-4 w-4 text-white dark:text-neutral-900" />
            </div>
            <span className="font-semibold tracking-tight">Fluent Finance</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 w-9 rounded-lg border border-neutral-200 dark:border-neutral-800 grid place-items-center text-neutral-700 dark:text-neutral-200">
              <Bell className="h-4 w-4" />
            </button>
            <button className="h-9 w-9 rounded-lg border border-neutral-200 dark:border-neutral-800 grid place-items-center text-neutral-700 dark:text-neutral-200">
              <Settings className="h-4 w-4" />
            </button>
            <button className="h-9 w-9 rounded-lg border border-neutral-200 dark:border-neutral-800 grid place-items-center text-neutral-700 dark:text-neutral-200">
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <Hero3D />

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <PortfolioChart />
          </div>
          <div className="lg:col-span-1">
            <TransactionsTable />
          </div>
        </div>
      </main>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Fluent Finance. Secure. Minimal. Modern.
        </div>
      </footer>
    </div>
  );
}

export default App;
