
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence, useScroll, useMotionTemplate } from 'framer-motion';
import { ChevronDown, Send, X, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Language } from '../types';
import { useNavigate } from 'react-router-dom';
import ProjectSection from '../components/ProjectSection';
import FloatingElements from '../components/FloatingElements';

interface HomeProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Home: React.FC<HomeProps> = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
  const { scrollYProgress } = useScroll({ container: containerRef });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange(v => setProgress(v));
  }, [scrollYProgress]);

  // 处理从其他页面跳转回来的锚点定位 - 优化触发时机
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // 如果元素尚未渲染，尝试稍微延迟
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, []); // 仅在挂载时执行

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Mask coordinates (in pixels)
  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);

  // Create the mask gradient. Transparent at center (hole), black outside (visible).
  // Using client coordinates directly for the mask center. 
  // Radius ~120px for the "erase" effect.
  const maskImage = useMotionTemplate`radial-gradient(circle at ${maskX}px ${maskY}px, transparent 0px, transparent 80px, black 150px)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      
      maskX.set(e.clientX);
      maskY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, maskX, maskY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('sending');
    // Simulated sending
    setTimeout(() => {
      setEmailStatus('success');
      setTimeout(() => {
        setIsEmailModalOpen(false);
        setEmailStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050505]">
      <FloatingElements 
        lang={lang} 
        setLang={setLang} 
        scrollProgress={progress} 
        onEmailClick={() => setIsEmailModalOpen(true)}
      />

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#18181b] border border-white/10 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden relative text-white"
            >
              <button 
                onClick={() => setIsEmailModalOpen(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h3 className="text-3xl font-black tracking-tight mb-2">
                    {lang === 'zh' ? '在线发送邮件' : 'Send Message'}
                  </h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    {lang === 'zh' ? '直接通过网页与我取得联系' : 'Get in touch directly via this page'}
                  </p>
                </div>

                {emailStatus === 'success' ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center">
                    <CheckCircle size={64} className="text-[#cc2d2d] mb-6" />
                    <p className="text-xl font-bold">{lang === 'zh' ? '发送成功！' : 'Sent Successfully!'}</p>
                    <p className="text-sm text-gray-400 mt-2">{lang === 'zh' ? '我会尽快回复您的邮件。' : 'I will get back to you soon.'}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{lang === 'zh' ? '姓名' : 'Your Name'}</label>
                        <input required type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#cc2d2d] focus:border-transparent outline-none transition-all text-white placeholder-gray-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{lang === 'zh' ? '您的邮箱' : 'Your Email'}</label>
                        <input required type="email" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#cc2d2d] focus:border-transparent outline-none transition-all text-white placeholder-gray-700" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{lang === 'zh' ? '留言内容' : 'Message'}</label>
                      <textarea required rows={4} className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#cc2d2d] focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-700" />
                    </div>
                    <button 
                      disabled={emailStatus === 'sending'}
                      type="submit" 
                      className="w-full bg-[#cc2d2d] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#cc2d2d33] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                    >
                      {emailStatus === 'sending' ? (
                        <span className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                        </span>
                      ) : (
                        <>
                          <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          {lang === 'zh' ? '确认发送' : 'Send Now'}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {/* SECTION 0: HERO */}
        <section id="hero" className="relative w-full h-screen snap-start flex items-start justify-start p-4 md:p-12 bg-[#050505] overflow-hidden">
          {/* Background Layer with Interactive Reveal */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
            <motion.div
              style={{
                x: useTransform(springX, [-0.5, 0.5], [30, -30]),
                y: useTransform(springY, [-0.5, 0.5], [30, -30]),
                rotateX,
                rotateY,
                scale: 1.1,
              }}
              className="w-full h-full perspective-1000 relative"
            >
              {/* Layer 1 (Bottom): Background 2 - The one revealed by the 'eraser' */}
              <img
                src="https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/background2.png"
                alt="Background Layer 2"
                className="absolute inset-0 w-full h-full object-cover opacity-80" 
              />

              {/* Layer 2 (Top): Background 1 - The one being 'erased' */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{
                   backgroundImage: `url('https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/background1.png')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   maskImage,
                   WebkitMaskImage: maskImage
                }}
              />

              {/* Dark Overlay for ambiance */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none z-[2]" />
            </motion.div>
          </div>

          {/* Info Box - Redesigned for Dark Theme */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-6">
            <motion.div 
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              // Changed from solid red to Glassmorphism Dark
              className="w-[75%] md:w-[320px] h-[85%] bg-black/40 backdrop-blur-xl border-l-4 border-[#cc2d2d] rounded-r-[24px] rounded-bl-[24px] p-6 md:p-10 flex flex-col text-white shadow-2xl overflow-hidden ring-1 ring-white/10"
            >
              <div className="mb-6">
                <h1 className="serif-title text-2xl md:text-3xl font-bold tracking-tight mb-3 leading-[1.2] text-white">
                  {lang === 'zh' ? '李翔 | 建筑规划设计与遗产保护' : 'Li Xiang | Architecture & Heritage'}
                </h1>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-[#cc2d2d]">
                  {lang === 'zh' ? 'ARCHITECTURAL PORTFOLIO 2015-2026' : 'ARCHITECTURAL PORTFOLIO 2015-2026'}
                </p>
              </div>

              <div className="flex-none h-6 md:h-8"></div>

              <div className="mb-10">
                <button 
                  onClick={() => navigate('/resume')}
                  className="w-full py-4 px-2 bg-[#cc2d2d] border border-[#cc2d2d] rounded-full text-[11px] font-black tracking-[0.2em] uppercase hover:bg-transparent hover:text-white transition-all text-center text-white shadow-[0_0_20px_rgba(204,45,45,0.3)] hover:shadow-[0_0_30px_rgba(204,45,45,0.5)]"
                >
                  {lang === 'zh' ? '查看简历 | LI XIANG' : 'VIEW RESUME | LI XIANG'}
                </button>
              </div>

              <div className="flex-1 overflow-y-auto project-list-scrollbar pr-3 border-t border-white/10 pt-8">
                <div className="space-y-6">
                  {PROJECTS.map((project, idx) => (
                    <div 
                      key={project.id}
                      onClick={() => scrollToSection(project.id)}
                      className="group flex justify-between items-start cursor-pointer hover:bg-white/5 p-1 rounded transition-colors"
                    >
                      <div className="flex flex-col gap-1 max-w-[85%]">
                        <span className="text-[11px] md:text-xs font-semibold tracking-tight text-gray-300 group-hover:text-white group-hover:pl-1 transition-all truncate">
                          {project.title[lang]}
                        </span>
                        <div className="flex items-center gap-2 opacity-50">
                          <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-mono truncate text-gray-400">
                            {project.tag[lang]}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] opacity-30 font-mono group-hover:opacity-100 transition-opacity mt-1 text-[#cc2d2d]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-[50%] md:left-1/2 -translate-x-[55%] md:-translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            onClick={() => scrollToSection(PROJECTS[0].id)}
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/50">{lang === 'zh' ? '查看作品' : 'WORKS'}</span>
            <ChevronDown className="text-white" size={28} />
          </motion.div>
        </section>

        {/* PROJECT SECTIONS */}
        {PROJECTS.map((project, idx) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            lang={lang} 
            setLang={setLang}
            isLast={idx === PROJECTS.length - 1}
            onEmailClick={() => setIsEmailModalOpen(true)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
