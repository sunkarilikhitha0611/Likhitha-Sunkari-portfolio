export type SkillCategoryKey = 'languages' | 'technical' | 'other';

export interface SkillEntry {
  id: string;
  name: string;
  category: SkillCategoryKey;
  levelLabel: string;
  proficiency: number; // 0 - 100
  context: string;
}

export type ProjectCategory = 'Full-Stack Web' | 'Machine Learning' | 'Embedded & Systems';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  role: string;
  summary: string;
  architecture: string;
  outcomes: string[];
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  repoUrl?: string;
  liveUrl?: string;
}

export type AchievementCategory = 'Certification' | 'Award' | 'Participation';

export interface AchievementItem {
  id: string;
  title: string;
  category: AchievementCategory;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlight: string;
  coursework: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  website: string;
}

export interface PortfolioData {
  fullName: string;
  academicStatus: string;
  school: string;
  department: string;
  registrationNumber: string;
  section: string;
  location: string;
  headline: string;
  intro: string;
  heroImageUrl: string;
  cgpaStat: string;
  projectsCountStat: string;
  certificationsCountStat: string;
  focusStat: string;
  aboutSummary: string;
  interests: { title: string; detail: string }[];
  learningGoals: string;
  careerAspirations: string;
  education: EducationEntry[];
  skills: SkillEntry[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  email: string;
  social: SocialLinks;
}
