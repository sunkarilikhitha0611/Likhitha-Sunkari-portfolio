import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

type ProjectFilter = 'All' | ProjectCategory;

const FILTER_TABS: { key: ProjectFilter; label: string }[] = [
  { key: 'All', label: 'All Projects' },
  { key: 'Full-Stack Web', label: 'Full-Stack Web' },
  { key: 'Machine Learning', label: 'Machine Learning' },
  { key: 'Embedded & Systems', label: 'Embedded & Systems' },
];

export function ProjectsSection({
  projects,
  onSelectProject,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-medium text-blue-600">03. Projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
              Selected academic and personal engineering builds.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start md:self-auto"
          >
            {FILTER_TABS.map((tab) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors hover:border-slate-300"
            >
              <div>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="block w-full text-left aspect-[4/3] overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-label={`Open case study for ${project.title}`}
                >
                  <ResilientImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>

                <div className="p-6 space-y-3">
                  {/* Unboxed Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-medium text-blue-600">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-900 leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <p className="text-xs text-slate-500 truncate">
                  {project.technologies.join(' · ')}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
