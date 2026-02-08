
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Languages, ArrowUp } from 'lucide-react';
import { Project, Language } from '../types';
import Lightbox from './Lightbox';

interface ProjectSectionProps {
  project: Project;
  lang: Language;
  isLast?: boolean;
  setLang: (l: Language) => void;
  onEmailClick: () => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, lang, isLast, setLang, onEmailClick }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);
  
  // State for WeChat QR Lightbox
  const [isWeChatLightbox, setIsWeChatLightbox] = useState(false);
  const weChatImgSrc = "https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/contact_WeChat.jpg";

  const next = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
  const prev = () => setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Touch handling for mobile swipe on the "Deck"
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      next();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      prev();
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id={project.id}
      className={`w-full ${isLast ? 'min-h-screen h-auto' : 'h-screen'} snap-start bg-white border-b border-gray-100 flex flex-col overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row flex-1 h-screen overflow-hidden">
        {/* Left/Top Content Block - Light Background */}
        <div className="w-full md:w-[40%] h-[45%] md:h-full flex flex-col border-b md:border-b-0 md:border-r border-gray-100 relative bg-white text-gray-900">
          
          {/* FIXED HEADER */}
          <div className="p-8 md:p-16 pb-4 md:pb-12 bg-white/95 backdrop-blur-sm md:backdrop-blur-none z-10 shrink-0">
            <span className="text-[10px] md:text-[11px] font-mono text-[#cc2d2d] font-bold tracking-[0.2em] uppercase block mb-2 md:mb-3">
              {project.num}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-2 md:mb-3">
              {project.title[lang]}
            </h2>
            <p className="text-[11px] md:text-sm font-bold text-gray-400 uppercase tracking-widest italic">
              {project.subtitle[lang]}
            </p>
          </div>

          {/* SCROLLABLE BODY */}
          <div className="flex-1 overflow-y-auto mobile-text-scroll px-8 md:px-16 pb-12">
            <div className="space-y-6 md:space-y-10">
              <div className="grid grid-cols-2 gap-4 md:gap-6 text-[10px] md:text-[11px] border-y border-gray-100 py-6 md:py-8">
                <div>
                  <p className="text-gray-400 font-bold uppercase mb-1 md:mb-2">{lang === 'zh' ? '地点' : 'LOCATION'}</p>
                  <p className="text-gray-800 font-black text-xs md:text-sm">{project.location[lang]}</p>
                </div>
                <div>
                  <p className="text-gray-400 font-bold uppercase mb-1 md:mb-2">{lang === 'zh' ? '时间' : 'TIME'}</p>
                  <p className="text-gray-800 font-black text-xs md:text-sm">{project.year}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-400 font-bold uppercase mb-1 md:mb-2">{lang === 'zh' ? '类别' : 'CATEGORY'}</p>
                  <p className="text-gray-800 font-black text-xs md:text-sm">{project.category[lang]}</p>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <p className="text-[10px] md:text-[11px] font-black text-[#cc2d2d] mb-2 md:mb-3 uppercase tracking-widest">{lang === 'zh' ? '设计挑战' : 'CHALLENGES'}</p>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">{project.logic.challenge[lang]}</p>
                </div>
                <div>
                  <p className="text-[10px] md:text-[11px] font-black text-[#cc2d2d] mb-2 md:mb-3 uppercase tracking-widest">{lang === 'zh' ? '设计思路' : 'IDEAS'}</p>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">{project.logic.idea[lang]}</p>
                </div>
              </div>

              <div className="pt-6 md:pt-10 border-t border-gray-100">
                <p className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
                  {lang === 'zh' ? '技术指标' : 'TECHNICAL INDICATORS'}
                </p>
                <p className="text-[11px] md:text-xs text-gray-500 font-mono leading-relaxed pb-8">
                  {project.indicators[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right/Bottom Image Block - Very Light Grey Background for contrast with images */}
        <div 
          className="w-full md:w-[60%] h-[55%] md:h-full bg-gray-50 relative group flex items-center justify-center p-8 md:p-12 lg:p-24 overflow-hidden"
          // Add touch handlers for mobile swipe
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mobile visible arrows (Removed hidden class) */}
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full text-gray-400 hover:text-[#cc2d2d] transition-all z-30 flex items-center justify-center bg-white/50 md:bg-transparent hover:bg-white hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-gray-100"
          >
            <ChevronLeft size={32} className="md:w-10 md:h-10" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full text-gray-400 hover:text-[#cc2d2d] transition-all z-30 flex items-center justify-center bg-white/50 md:bg-transparent hover:bg-white hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-gray-100"
          >
            <ChevronRight size={32} className="md:w-10 md:h-10" />
          </button>

          <div className="w-full h-full relative flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center max-w-5xl">
              {project.images.map((img, idx) => {
                const isActive = idx === currentImg;
                const offset = idx - currentImg;
                if (Math.abs(offset) > 2) return null;

                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      x: offset * 30,
                      y: offset * -20,
                      scale: isActive ? 1 : 0.82,
                      rotate: offset * 3,
                      opacity: isActive ? 1 : (0.35 - Math.abs(offset) * 0.1),
                      zIndex: 20 - Math.abs(offset)
                    }}
                    transition={{ type: 'spring', stiffness: 180, damping: 30 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    <img
                      src={img}
                      alt={`${project.title[lang]} ${idx}`}
                      loading={idx === 0 ? "eager" : "lazy"}
                      className={`max-w-[85%] max-h-[85%] object-contain shadow-2xl bg-white border border-gray-100 ${isActive ? 'cursor-pointer' : ''}`}
                      onClick={() => isActive && setIsLightbox(true)}
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-5 py-1.5 rounded-full border border-gray-200 shadow-sm z-30">
              <span className="text-[11px] md:text-xs font-mono font-black tracking-widest text-[#cc2d2d] uppercase">
                {currentImg + 1} / {project.images.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Project Lightbox */}
      <Lightbox 
        isOpen={isLightbox}
        onClose={() => setIsLightbox(false)}
        onPrev={prev}
        onNext={next}
        currentImageSrc={project.images[currentImg]}
        currentIndex={currentImg}
        totalImages={project.images.length}
      />

      {/* WeChat QR Code Lightbox (Single Mode) */}
      <Lightbox 
        isOpen={isWeChatLightbox}
        onClose={() => setIsWeChatLightbox(false)}
        currentImageSrc={weChatImgSrc}
        singleMode={true}
      />

      {/* Contact Strip - Dark Red/Black Theme - Keeping as a strong footer accent */}
      {isLast && (
        <div className="w-full bg-[#cc2d2d] py-10 md:py-16 px-6 md:px-20 text-white border-t border-white/10 relative overflow-hidden">
          {/* Noise texture overlay for better blending */}
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none"></div>

          <button 
            onClick={scrollToTop}
            className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-[#1a1a1a] text-[#cc2d2d] border border-[#cc2d2d] rounded-full flex flex-col items-center justify-center shadow-2xl hover:bg-black hover:text-white hover:border-white transition-all z-20 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform md:w-6 md:h-6" />
            <span className="text-[8px] font-black mt-1 leading-none">{lang === 'zh' ? '回顶部' : 'TOP'}</span>
          </button>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 w-full md:w-auto">
              <div className="flex items-center gap-4 md:gap-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-black/20 rounded-xl md:rounded-2xl flex items-center justify-center"><Phone size={18} className="md:w-[22px] md:h-[22px]"/></div>
                 <div>
                    <p className="text-[9px] md:text-[10px] opacity-60 uppercase font-mono tracking-widest mb-0.5">{lang === 'zh' ? '电话' : 'Phone'}</p>
                    <p className="text-base md:text-lg font-black tracking-tight">+86 15017648478</p>
                 </div>
              </div>
              <button 
                onClick={onEmailClick}
                className="flex items-center gap-4 md:gap-6 text-left hover:opacity-80 transition-opacity group"
              >
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-black/20 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#cc2d2d] transition-all"><Mail size={18} className="md:w-[22px] md:h-[22px]"/></div>
                 <div>
                    <p className="text-[9px] md:text-[10px] opacity-60 uppercase font-mono tracking-widest mb-0.5">{lang === 'zh' ? '电子邮箱' : 'Email'}</p>
                    <p className="text-base md:text-lg font-black tracking-tight border-b border-transparent group-hover:border-white transition-all">2982436740@qq.com</p>
                 </div>
              </button>
              <div className="flex items-center gap-4 md:gap-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-black/20 rounded-xl md:rounded-2xl flex items-center justify-center"><MapPin size={18} className="md:w-[22px] md:h-[22px]"/></div>
                 <div>
                    <p className="text-[9px] md:text-[10px] opacity-60 uppercase font-mono tracking-widest mb-0.5">{lang === 'zh' ? '目前所在地' : 'Location'}</p>
                    <p className="text-base md:text-lg font-black tracking-tight">{lang === 'zh' ? '中国 · 广州' : 'Guangzhou, CN'}</p>
                 </div>
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-8 self-center md:self-auto pt-4 md:pt-0">
               {/* Clickable WeChat QR Code */}
               <div 
                 onClick={() => setIsWeChatLightbox(true)}
                 className="w-16 h-16 md:w-24 md:h-24 bg-white p-1 rounded-lg md:rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                 title={lang === 'zh' ? '点击全屏查看二维码' : 'Click to view QR code'}
               >
                  <img src={weChatImgSrc} alt="WeChat QR" className="w-full h-full object-cover rounded md:rounded-xl" />
               </div>
               <div className="space-y-3 md:space-y-4">
                  <div className="flex gap-3 md:gap-4">
                    <button 
                      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                      className="flex items-center gap-2 text-[9px] md:text-[10px] font-black tracking-widest bg-black/20 px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-white hover:text-[#cc2d2d] transition-all uppercase"
                    >
                      <Languages size={12} className="md:w-3.5 md:h-3.5"/> {lang === 'zh' ? 'English' : '中文版'}
                    </button>
                    <button 
                      onClick={scrollToTop}
                      className="md:hidden flex items-center gap-2 text-[9px] font-black tracking-widest bg-black/20 px-4 py-2 rounded-full uppercase"
                    >
                       <ArrowUp size={12}/> TOP
                    </button>
                  </div>
                  <p className="text-[9px] md:text-[10px] opacity-40 font-mono tracking-[0.2em] uppercase">
                    © 2025 Li Xiang | SCUT Architecture
                  </p>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
