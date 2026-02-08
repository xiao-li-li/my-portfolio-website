
export type Language = 'zh' | 'en';

export interface ProjectLogic {
  challenge: { zh: string; en: string };
  idea: { zh: string; en: string };
  coreValue?: { zh: string; en: string }; // 特用于故居修缮
  contribution?: { zh: string; en: string }; // 特用于学术研究
}

export interface Project {
  id: string;
  num: string; // 编号，如 B.Arch_05TH B_Proj01
  title: { zh: string; en: string };
  subtitle: { zh: string; en: string };
  location: { zh: string; en: string };
  year: string;
  category: { zh: string; en: string };
  logic: ProjectLogic;
  indicators: { zh: string; en: string };
  tag: { zh: string; en: string };
  coverImage: string;
  images: string[];
}

export interface ResumeItem {
  period: string;
  title: { zh: string; en: string };
  subtitle?: { zh: string; en: string };
  location?: string;
  tag?: string;
  details?: { zh: string; en: string }[];
}

export interface ResumeData {
  education: ResumeItem[];
  employment: ResumeItem[];
  projects: ResumeItem[];
  activities: ResumeItem[];
  awardsAndSkills: {
    honors: { zh: string; en: string }[];
    certs: { zh: string; en: string }[];
    software: { category: { zh: string; en: string }; tools: string }[];
  };
  press: { zh: string; en: string }[];
}
