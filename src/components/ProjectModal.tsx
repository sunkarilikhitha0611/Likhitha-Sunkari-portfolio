import { useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl my-auto max-h-[90vh] flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-blue-600">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <ResilientImage
              src={project.imageUrl}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3">
            <h2
              id="project-modal-title"
              className="font-display text-2xl font-semibold text-slate-900"
            >
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
            <div className="space-y-2">
              <h3 className="font-display text-sm font-semibold text-slate-900">
                Architecture &amp; Implementation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.architecture}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-sm font-semibold text-slate-900">
                Key Outcomes
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-600 list-disc pl-4">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="leading-relaxed">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              <span className="font-medium text-slate-700">Stack:</span>{' '}
              {project.technologies.join(' · ')}
            </p>

            <div className="flex items-center gap-3 shrink-0">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
                >
                  <Github className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Project Link</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
