import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, CreditCard } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 backdrop-blur">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span className="text-xs text-neutral-600 dark:text-neutral-300">Bank-grade security</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Modern Finance Dashboard
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            Track balances, analyze spending, and manage cards in a minimalist, glass-morphic interface.
            Built for clarity, speed, and a calm workflow.
          </p>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:shadow transition-shadow">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/60">
              <CreditCard className="h-4 w-4" /> Demo Card
            </button>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900/60">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 dark:to-black/20" />
        </div>
      </div>
    </section>
  );
}
