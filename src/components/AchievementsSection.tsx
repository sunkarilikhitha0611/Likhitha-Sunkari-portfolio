import { useState } from 'react';
import { AchievementCategory, AchievementItem } from '../types/portfolio';

interface AchievementsSectionProps {
  achievements: AchievementItem[];
}

type AchievementFilter = 'All' | AchievementCategory;

const FILTER_OPTIONS: { key: AchievementFilter; label: string }[] = [
  { key: 'All', label: 'All Highlights' },
  { key: 'Certification', label: 'Certifications' },
  { key: 'Award', label: 'Awards' },
  { key: 'Participation', label: 'Participation' },
];

export function AchievementsSection({
  achievements,
}: AchievementsSectionProps) {
  const [filter, setFilter] = useState<AchievementFilter>('All');

  const filtered =
    filter === 'All'
      ? achievements
      : achievements.filter((item) => item.category === filter);

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-medium text-blue-600">04. Achievements</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
              Certifications, academic honors, and event participation.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter achievements by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto"
          >
            {FILTER_OPTIONS.map((tab) => {
              const isActive = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(tab.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <div className="md:col-span-3 space-y-1">
                <p className="text-xs font-medium text-blue-600">
                  {item.category}
                </p>
                <p className="font-mono text-xs text-slate-500 tabular-nums">
                  {item.date}
                </p>
              </div>

              <div className="md:col-span-9 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  {item.credentialId && (
                    <span className="font-mono text-xs text-slate-500 tabular-nums shrink-0">
                      ID: {item.credentialId}
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-700">
                  {item.issuer}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
