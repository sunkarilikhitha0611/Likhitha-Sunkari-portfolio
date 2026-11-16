import { useEffect, useState } from 'react';
import { RotateCcw, Save, X } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface CustomizeDrawerProps {
  isOpen: boolean;
  data: PortfolioData;
  onSave: (updated: PortfolioData) => void;
  onReset: () => void;
  onClose: () => void;
}

export function CustomizeDrawer({
  isOpen,
  data,
  onSave,
  onReset,
  onClose,
}: CustomizeDrawerProps) {
  const [draft, setDraft] = useState<PortfolioData>(data);

  useEffect(() => {
    setDraft(data);
  }, [data, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(draft);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="customize-drawer-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white h-full border-l border-slate-200 flex flex-col shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div>
            <h2
              id="customize-drawer-title"
              className="font-display text-lg font-semibold text-slate-900"
            >
              Personalize Portfolio Details
            </h2>
            <p className="text-xs text-slate-500">
              Update your academic, bio, and contact information locally.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close personalization panel"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Student Identity */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-slate-900 border-b border-slate-200 pb-2">
              Home &amp; Academic Identity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={draft.fullName}
                  onChange={(e) => setDraft({ ...draft, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  Registration Number
                </label>
                <input
                  type="text"
                  value={draft.registrationNumber}
                  onChange={(e) =>
                    setDraft({ ...draft, registrationNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  Section
                </label>
                <input
                  type="text"
                  value={draft.section}
                  onChange={(e) => setDraft({ ...draft, section: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  Location
                </label>
                <input
                  type="text"
                  value={draft.location}
                  onChange={(e) => setDraft({ ...draft, location: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Current Academic Status
              </label>
              <input
                type="text"
                value={draft.academicStatus}
                onChange={(e) =>
                  setDraft({ ...draft, academicStatus: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  School / University
                </label>
                <input
                  type="text"
                  value={draft.school}
                  onChange={(e) => setDraft({ ...draft, school: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  Department
                </label>
                <input
                  type="text"
                  value={draft.department}
                  onChange={(e) =>
                    setDraft({ ...draft, department: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Hero Headline
              </label>
              <input
                type="text"
                value={draft.headline}
                onChange={(e) => setDraft({ ...draft, headline: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Short Professional Introduction
              </label>
              <textarea
                rows={3}
                value={draft.intro}
                onChange={(e) => setDraft({ ...draft, intro: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* About Me */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-slate-900 border-b border-slate-200 pb-2">
              About Me &amp; Goals
            </h3>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                About Summary
              </label>
              <textarea
                rows={3}
                value={draft.aboutSummary}
                onChange={(e) =>
                  setDraft({ ...draft, aboutSummary: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Learning Goals
              </label>
              <textarea
                rows={2}
                value={draft.learningGoals}
                onChange={(e) =>
                  setDraft({ ...draft, learningGoals: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Career Aspirations
              </label>
              <textarea
                rows={2}
                value={draft.careerAspirations}
                onChange={(e) =>
                  setDraft({ ...draft, careerAspirations: e.target.value })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-slate-900 border-b border-slate-200 pb-2">
              Contact &amp; Links
            </h3>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700">
                Professional Email
              </label>
              <input
                type="email"
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={draft.social.github}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      social: { ...draft.social, github: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={draft.social.linkedin}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      social: { ...draft.social, linkedin: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-[#F8F9FB] flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              onReset();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
