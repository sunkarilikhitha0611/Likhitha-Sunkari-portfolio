import { useState } from 'react';
import { SkillCategoryKey, SkillEntry } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillEntry[];
}

type SkillFilter = 'all' | SkillCategoryKey;

const FILTER_OPTIONS: { key: SkillFilter; label: string }[] = [
  { key: 'all', label: 'All Skills' },
  { key: 'languages', label: 'Programming Languages' },
  { key: 'technical', label: 'Technical Skills' },
  { key: 'other', label: 'Other Relevant Skills' },
];

const CATEGORY_LABELS: Record<SkillCategoryKey, string> = {
  languages: 'Programming Language',
  technical: 'Technical Stack',
  other: 'Core Competency',
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all');

  const visibleSkills =
    activeFilter === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-medium text-blue-600">02. Skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
              Languages, technical stack, and collaborative strengths.
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Unboxed Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 bg-[#F8F9FB] border border-slate-200/90 rounded-xl flex flex-col justify-between gap-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-base font-semibold text-slate-900">
                    {skill.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span>{CATEGORY_LABELS[skill.category]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-700 font-medium">{skill.levelLabel}</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-medium text-slate-600 tabular-nums shrink-0">
                  {skill.proficiency}%
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {skill.context}
              </p>

              {/* Hairline proficiency indicator */}
              <div
                className="h-1 w-full bg-slate-200 rounded-full overflow-hidden"
                aria-hidden="true"
              >
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
