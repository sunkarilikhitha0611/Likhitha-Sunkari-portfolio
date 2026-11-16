import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  data: PortfolioData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const highlights = [
    { label: 'Academic Standing', value: data.cgpaStat, detail: 'B.Tech CSE' },
    { label: 'Selected Builds', value: data.projectsCountStat, detail: 'Web, ML & Systems' },
    { label: 'Credentials', value: data.certificationsCountStat, detail: 'Cloud, Data & DSA' },
    { label: 'Primary Focus', value: data.focusStat, detail: data.location },
  ];

  return (
    <section id="home" className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-blue-600 tracking-normal mb-4">
                {data.academicStatus}
              </p>

              <h1 className="font-display text-[clamp(2.35rem,4.5vw,3.75rem)] font-bold tracking-tight leading-[1.08] text-slate-900 text-balance">
                {data.fullName}
              </h1>

              <p className="mt-5 text-xl md:text-2xl font-display font-medium text-slate-700 leading-snug max-w-2xl text-balance">
                {data.headline}
              </p>

              <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
                {data.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <span>Explore Projects</span>
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>About Me</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span>{data.school}</span>
              <span aria-hidden="true">·</span>
              <span>{data.department}</span>
              <span aria-hidden="true">·</span>
              <span>{data.location}</span>
            </div>
          </div>

          {/* Right Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative h-80 sm:h-96 lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <ResilientImage
                src={data.heroImageUrl}
                alt={`Editorial portrait of ${data.fullName}`}
                fallbackTitle={data.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-200/80">
          {highlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs font-medium text-slate-500">{item.label}</p>
              <p className="font-display text-xl md:text-2xl font-semibold text-slate-900 tabular-nums">
                {item.value}
              </p>
              <p className="text-xs text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
