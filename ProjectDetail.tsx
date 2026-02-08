
import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Language } from '../types';
import Lightbox from '../components/Lightbox';

interface ProjectDetailProps {
  lang: Language;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ lang }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  const nextImg = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % project.images.length);
    }
  };

  const prevImg = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#cc2d2d] selection:text-white">
      {/* Header - Changed to dark text for light background */}
      <header className="fixed top-0 left-0 right-0 z-40 p-8 flex justify-between items-center text-gray-900">
        {/* Added a subtle white gradient background to header for readability over scrolling content */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent pointer-events-none -z-10 h-32" />
        
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase hover:gap-6 transition-all group"
        >
          <div className="p-2 bg-black/5 rounded-full group-hover:bg-[#cc2d2d] group-hover:text-white transition-colors">
             <ArrowLeft size={16} /> 
          </div>
          {lang === 'zh' ? '返回首页' : 'Home'}
        </button>
        <div className="text-right">
          <h1 className="text-xs font-black tracking-widest uppercase mb-1 text-gray-900">{project.title[lang]}</h1>
          <p className="text-[9px] opacity-60 tracking-[0.2em] font-mono text-gray-500">{project.num}</p>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 px-8 md:px-20 pb-20">
        <div className="max-w-3xl mb-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {project.title[lang]}
            </h2>
            <p className="text-xs md:text-sm font-bold text-[#cc2d2d] uppercase tracking-[0.2em] italic">
              {project.subtitle[lang]}
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
              {project.logic.challenge[lang]}
            </p>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light italic">
              {project.logic.idea[lang]}
            </p>
          </div>
        </div>

        {/* Horizontal Slider - Optimized for light images */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {project.images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.99 }}
              className="flex-shrink-0 w-[85vw] md:w-[75vw] aspect-[16/9] bg-gray-50 relative group snap-center rounded-sm overflow-hidden border border-gray-100 shadow-sm"
            >
              <img 
                src={img} 
                alt={`${project.title[lang]} - View ${idx + 1}`} 
                loading="lazy"
                // Removed opacity-80, kept full opacity for clarity on light theme
                className="w-full h-full object-contain transition-all duration-1000" 
              />
              <div 
                onClick={() => setLightboxIndex(idx)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-white/20 backdrop-blur-[2px] cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#cc2d2d] rounded-full flex items-center justify-center text-white shadow-xl scale-75 group-hover:scale-100 transition-transform hover:bg-black">
                  <Maximize2 size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reusable Lightbox - Kept dark for contrast when viewing images */}
      <Lightbox 
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={prevImg}
        onNext={nextImg}
        currentImageSrc={lightboxIndex !== null ? project.images[lightboxIndex] : ''}
        currentIndex={lightboxIndex || 0}
        totalImages={project.images.length}
      />
    </div>
  );
};

export default ProjectDetail;
