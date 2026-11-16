/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';
import { DEFAULT_PORTFOLIO_DATA } from './data/defaultPortfolio';
import { PortfolioData, ProjectItem } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CustomizeDrawer } from './components/CustomizeDrawer';

const STORAGE_KEY = 'portfolio_personal_data_v1';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_PORTFOLIO_DATA, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default data if storage is unavailable
    }
    return DEFAULT_PORTFOLIO_DATA;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [customizeOpen, setCustomizeOpen] = useState(false);

  useEffect(() => {
    document.title = `${portfolioData.fullName} — Personal Portfolio`;
  }, [portfolioData.fullName]);

  const handleSaveData = (updated: PortfolioData) => {
    setPortfolioData(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleResetData = () => {
    setPortfolioData(DEFAULT_PORTFOLIO_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-slate-900">
      <Navbar fullName={portfolioData.fullName} />

      <main className="flex-1">
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection
          projects={portfolioData.projects}
          onSelectProject={setSelectedProject}
        />
        <AchievementsSection achievements={portfolioData.achievements} />
        <ContactSection data={portfolioData} />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-medium text-slate-800">
              {portfolioData.fullName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{portfolioData.department}</span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#home" className="hover:text-slate-900 transition-colors">
              Top
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
            <button
              type="button"
              onClick={() => setCustomizeOpen(true)}
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
            >
              <Pencil className="w-3 h-3" aria-hidden="true" />
              <span>Personalize Content</span>
            </button>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CustomizeDrawer
        isOpen={customizeOpen}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
        onClose={() => setCustomizeOpen(false)}
      />
    </div>
  );
}
