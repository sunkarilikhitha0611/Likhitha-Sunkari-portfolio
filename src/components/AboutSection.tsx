import { PortfolioData } from '../types/portfolio';

interface AboutSectionProps {
  data: PortfolioData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Section Header Column */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm font-medium text-blue-600">01. About Me</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
              Academic foundation and engineering curiosity.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.aboutSummary}
            </p>
            <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-500 space-y-1.5">
              <p>
                <span className="text-slate-700 font-medium">Department:</span>{' '}
                {data.department}
              </p>
              <p>
                <span className="text-slate-700 font-medium">Section &amp; ID:</span>{' '}
                <span className="font-mono tabular-nums">
                  {data.section} · {data.registrationNumber}
                </span>
              </p>
            </div>
          </div>

          {/* Right Content Column: Education, Interests, Goals */}
          <div className="lg:col-span-8 space-y-12">
            {/* Educational Background */}
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-5">
                Educational Background
              </h3>
              <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-xl">
                {data.education.map((edu) => (
                  <div key={edu.id} className="p-6 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="font-display text-base font-semibold text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs text-slate-500 tabular-nums shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
                      <span className="font-medium text-slate-700">{edu.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-blue-600 font-medium">{edu.highlight}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      Relevant Coursework: {edu.coursework}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-5">
                Technical &amp; Academic Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.interests.map((interest) => (
                  <div
                    key={interest.title}
                    className="p-5 bg-white border border-slate-200 rounded-xl space-y-1.5"
                  >
                    <h4 className="font-display text-sm font-semibold text-slate-900">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {interest.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Goals & Career Aspirations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              <div className="space-y-2">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Learning Goals
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {data.learningGoals}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-base font-semibold text-slate-900">
                  Career Aspirations
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {data.careerAspirations}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
