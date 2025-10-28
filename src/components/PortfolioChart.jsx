import React from 'react';
import { PieChart } from 'lucide-react';

const data = [
  { x: 0, y: 20 },
  { x: 1, y: 24 },
  { x: 2, y: 22 },
  { x: 3, y: 28 },
  { x: 4, y: 32 },
  { x: 5, y: 30 },
  { x: 6, y: 36 },
  { x: 7, y: 40 },
  { x: 8, y: 38 },
  { x: 9, y: 44 },
];

function AreaChart({ points, width = 540, height = 220 }) {
  const maxY = Math.max(...points.map((p) => p.y));
  const minY = Math.min(...points.map((p) => p.y));
  const padding = 16;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  const path = points
    .map((p, i) => {
      const x = padding + (p.x / (points.length - 1)) * innerW;
      const y = padding + innerH - ((p.y - minY) / (maxY - minY)) * innerH;
      return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
    })
    .join(' ');

  const area = `${path} L ${padding + innerW},${padding + innerH} L ${padding},${padding + innerH} Z`;

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#grad)" />
      <path d={path} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function PortfolioChart() {
  return (
    <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Portfolio Performance</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">Last 30 days</p>
        </div>
        <div className="h-9 w-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 grid place-items-center text-neutral-700 dark:text-neutral-200">
          <PieChart className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-4">
        <AreaChart points={data} />
      </div>
    </div>
  );
}
