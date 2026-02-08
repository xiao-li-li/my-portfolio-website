
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Zap, 
  BookOpen, 
  Users, 
  FileText,
  Download,
  ChevronDown,
  ChevronUp,
  LayoutGrid
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RESUME, PROJECTS } from '../constants';
import { Language } from '../types';

interface ResumeProps { lang: Language; }

const SectionHeader: React.FC<{ num: string; title: string; enTitle: string }> = ({ num, title, enTitle }) => (
  <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4">
    <span className="text-[#cc2d2d] font-black text-lg font-mono">{num}</span>
    <h2 className="text-xl font-black text-gray-900 flex items-baseline gap-2">
      {title} <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{enTitle}</span>
    </h2>
  </div>
);

const Resume: React.FC<ResumeProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const initialProjectsCount = 6;
  const displayedProjects = showAllProjects 
    ? RESUME.projects 
    : RESUME.projects.slice(0, initialProjectsCount);

  const handleDownload = () => {
    const pdfUrl = 'https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/LiXiang_%E7%AE%80%E5%8E%862026.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.setAttribute('download', 'LiXiang_Resume_2026.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewWorks = () => {
    if (PROJECTS.length > 0) {
      navigate('/#' + PROJECTS[0].id);
    }
  };

  return (
    <div className="w-full bg-white selection:bg-[#cc2d2d] selection:text-white relative min-h-screen text-gray-600">
      {/* Decorative side bar - lighter grey */}
      <div className="fixed top-0 right-0 w-1/4 h-screen bg-gray-50 -z-10 border-l border-gray-100" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24">
        {/* Header */}
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[9px] font-black tracking-[0.3em] uppercase mb-12 hover:gap-4 transition-all text-gray-400 hover:text-[#cc2d2d] group"
            >
              <ArrowLeft size={14} /> {lang === 'zh' ? '返回首页' : 'Home'}
            </button>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-none mb-4"
            >
              {lang === 'zh' ? '李 翔' : 'Li Xiang'}
            </motion.h1>
            <p className="text-xs font-bold text-[#cc2d2d] uppercase tracking-[0.2em] border-l-2 border-[#cc2d2d] pl-4 max-w-md">
              {lang === 'zh' ? '擅长领域：城市更新与遗产保护；BIM 智能建造；建筑设计；平面设计；' : 'Specialties: Urban Renewal & Heritage; BIM; Architectural Design; Graphic Design;'}
            </p>
          </div>

          <button 
            onClick={handleDownload}
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-[#cc2d2d] transition-all shadow-xl hover:shadow-2xl group"
          >
            <Download size={14} /> {lang === 'zh' ? '下载简历' : 'Download CV'}
          </button>
        </header>

        {/* 01 EDUCATION */}
        <section className="mb-24">
          <SectionHeader num="01" title="教育" enTitle="Education" />
          <div className="space-y-10 pl-4 md:pl-10">
            {RESUME.education.map((item, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-2 mb-2">
                  <h3 className="text-base font-bold text-gray-900">{item.title[lang]}</h3>
                  <span className="text-[10px] font-mono text-gray-500 font-bold bg-gray-100 px-3 py-0.5 rounded-full">{item.period}</span>
                </div>
                <p className="text-xs text-[#cc2d2d] font-bold mb-3 uppercase tracking-wide">{item.subtitle?.[lang]}</p>
                {item.details && (
                  <ul className="space-y-2">
                    {item.details.map((d, idx) => (
                      <li key={idx} className="text-[11px] text-gray-600 leading-relaxed font-light flex gap-2">
                        <span className="text-[#cc2d2d] mt-1">•</span> {d[lang]}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 02 EMPLOYMENT */}
        <section className="mb-24">
          <SectionHeader num="02" title="工作" enTitle="Employment" />
          <div className="space-y-12 pl-4 md:pl-10">
            {RESUME.employment.map((item, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-2 mb-2">
                  <h3 className="text-base font-bold text-gray-900">{item.title[lang]}</h3>
                  <span className="text-[10px] font-mono text-gray-500 font-bold">{item.period}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-[10px] mb-2 font-bold uppercase tracking-widest">
                  <span className="text-[#cc2d2d]">{item.subtitle?.[lang]}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">📍 {item.location}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400 italic">🏷️ {item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 PROJECTS */}
        <section className="mb-24 relative">
          <SectionHeader num="03" title="项目" enTitle="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pl-4 md:pl-10 overflow-hidden">
            <AnimatePresence initial={false}>
              {displayedProjects.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] font-mono text-[#cc2d2d] font-bold">{item.period}</span>
                    <h3 className="text-sm font-bold text-gray-900 border-l border-gray-200 pl-3 leading-tight group-hover:border-[#cc2d2d] transition-colors">{item.title[lang]}</h3>
                  </div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-12">{item.subtitle?.[lang]}</p>
                  <ul className="space-y-2 ml-12">
                    {item.details?.map((d, idx) => (
                      <li key={idx} className="text-[10px] text-gray-600 leading-relaxed font-light">
                        <strong className="text-gray-500 font-bold">{d[lang].split('：')[0]}：</strong>
                        {d[lang].split('：')[1]}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {RESUME.projects.length > initialProjectsCount && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="flex flex-col items-center gap-2 group text-gray-400 hover:text-[#cc2d2d] transition-colors"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  {showAllProjects 
                    ? (lang === 'zh' ? '收起项目' : 'Show Less') 
                    : (lang === 'zh' ? '查看更多项目' : 'See More Projects')
                  }
                </span>
                <motion.div
                  animate={{ y: showAllProjects ? -4 : 4 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                >
                  {showAllProjects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.div>
              </button>
            </div>
          )}
        </section>

        {/* 04 ACTIVITIES */}
        <section className="mb-24">
          <SectionHeader num="04" title="活动" enTitle="Activities" />
          <div className="space-y-10 pl-4 md:pl-10">
            {RESUME.activities.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-16">
                <span className="text-[10px] font-mono text-gray-500 font-bold w-12">{item.period}</span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title[lang]}</h3>
                  <p className="text-[11px] text-gray-600 font-light">{item.details?.[0][lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 AWARDS/SKILLS */}
        <section className="mb-24">
          <SectionHeader num="05" title="获奖/技能" enTitle="Awards/Skills" />
          <div className="pl-4 md:pl-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#cc2d2d]/30 transition-colors shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#cc2d2d] mb-6">1. 获奖荣誉 (Awards)</h4>
              <div className="space-y-4">
                {RESUME.awardsAndSkills.honors.map((h, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Award size={12} className="text-[#cc2d2d] shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-600 font-medium leading-relaxed">{h[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#cc2d2d]/30 transition-colors shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#cc2d2d] mb-6">2. 资格与语言 (Certs)</h4>
              <div className="space-y-4">
                {RESUME.awardsAndSkills.certs.map((c, idx) => (
                  <p key={idx} className="text-[10px] text-gray-600 font-bold flex gap-2">
                    <span className="text-[#cc2d2d]">/</span> {c[lang]}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#cc2d2d]/30 transition-colors shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#cc2d2d] mb-6">3. 专业软件技能 (Technical)</h4>
              <div className="space-y-6">
                {RESUME.awardsAndSkills.software.map((s, idx) => (
                  <div key={idx}>
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{s.category[lang]}</p>
                    <p className="text-[10px] font-bold text-gray-800">{s.tools}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 PRESS */}
        <section className="mb-24">
          <SectionHeader num="06" title="发表" enTitle="Press" />
          <div className="pl-4 md:pl-10 space-y-6">
            {RESUME.press.map((p, i) => (
              <div key={i} className="flex gap-4 group">
                <FileText size={16} className="text-gray-400 group-hover:text-[#cc2d2d] transition-colors shrink-0 mt-1" />
                <p className="text-[11px] text-gray-600 font-light italic leading-relaxed">{p[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* View Works Button */}
        <div className="flex justify-center mt-32 mb-16">
          <button 
            onClick={handleViewWorks}
            className="flex items-center gap-4 bg-[#cc2d2d] text-white px-10 py-5 rounded-full text-xs font-black tracking-[0.3em] uppercase hover:bg-black hover:scale-105 transition-all shadow-[0_10px_30px_-10px_rgba(204,45,45,0.4)] group"
          >
            <LayoutGrid size={18} className="group-hover:rotate-90 transition-transform duration-500" />
            {lang === 'zh' ? '查看作品' : 'View Works'}
          </button>
        </div>

        <footer className="pt-12 border-t border-gray-200 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <p className="text-[8px] font-mono uppercase tracking-widest text-gray-500">Architectural Portfolio © 2026</p>
           <p className="text-[8px] font-mono uppercase tracking-widest text-gray-500">Guangzhou, CN</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
