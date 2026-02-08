
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquareMore, Languages, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import Lightbox from './Lightbox';

interface FloatingElementsProps {
  lang: Language;
  setLang: (lang: Language) => void;
  scrollProgress: number; // 0 to 1
  onEmailClick: () => void;
}

const Tooltip: React.FC<{ children: React.ReactNode; show: boolean }> = ({ children, show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, x: 8, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 8, scale: 0.9 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-2.5 py-2 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap pointer-events-none z-[60]"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const FloatingElements: React.FC<FloatingElementsProps> = ({ lang, setLang, scrollProgress, onEmailClick }) => {
  const [hovered, setHovered] = useState<'wechat' | 'email' | 'phone' | 'lang' | 'location' | null>(null);
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showWeChatModal, setShowWeChatModal] = useState(false);
  
  const weChatImgSrc = "https://raw.githubusercontent.com/xiao-li-li/portfolio-images/main/contact_WeChat.jpg";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isPastHero = scrollProgress > 0.05;
  const isAtEnd = scrollProgress > 0.94;

  const mobileVariants = {
    hero: { bottom: '24px', top: 'auto', opacity: 1 },
    content: { bottom: 'auto', top: '24px', opacity: 1 }
  };

  return (
    <>
      <AnimatePresence>
        {!isAtEnd && (
          <motion.div 
            initial={isMobile ? "hero" : { opacity: 0, y: 15 }}
            animate={isMobile 
              ? (isPastHero ? "content" : "hero")
              : { opacity: 1, y: 0, bottom: '24px', right: '24px' }
            }
            variants={isMobile ? mobileVariants : undefined}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed right-6 z-50 flex flex-col items-center"
            onMouseEnter={() => setIsPanelHovered(true)}
            onMouseLeave={() => setIsPanelHovered(false)}
          >
            <motion.div 
              animate={{ 
                backgroundColor: isPastHero 
                  ? (isPanelHovered ? 'rgba(204, 45, 45, 1)' : 'rgba(204, 45, 45, 0.1)') 
                  : 'rgba(204, 45, 45, 1)',
                backdropFilter: isPastHero ? 'blur(16px)' : 'blur(0px)',
                boxShadow: isPastHero && !isPanelHovered ? 'none' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ duration: 0.2 }}
              className="rounded-full px-3 py-5 flex flex-col gap-5 items-center relative border border-white/10"
            >
              {/* Language Toggle */}
              <div className="relative group border-b border-white/10 pb-3">
                <button
                  onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                  onMouseEnter={() => setHovered('lang')}
                  onMouseLeave={() => setHovered(null)}
                  className="text-white hover:scale-110 transition-transform cursor-pointer flex items-center justify-center p-1"
                >
                  <Languages size={16} />
                </button>
                <Tooltip show={hovered === 'lang'}>
                  <span className="text-xs font-bold tracking-widest uppercase">{lang === 'zh' ? 'EN' : '中文'}</span>
                </Tooltip>
              </div>

              {/* WeChat - Click to Open Lightbox */}
              <div className="relative group">
                <div 
                  onClick={() => setShowWeChatModal(true)}
                  onMouseEnter={() => setHovered('wechat')}
                  onMouseLeave={() => setHovered(null)}
                  className="text-white hover:scale-110 transition-transform cursor-pointer p-1"
                >
                  <MessageSquareMore size={16} />
                </div>
                {/* Desktop Hover Preview (Keep existing logic for desktop) */}
                <AnimatePresence>
                  {hovered === 'wechat' && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0, x: 8, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 8, scale: 0.8 }}
                      className="absolute right-14 top-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-2xl border border-gray-100 z-[60] w-28 h-28 pointer-events-none"
                    >
                      <img 
                        src={weChatImgSrc}
                        alt="WeChat QR" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div className="relative group">
                <button 
                  onClick={onEmailClick}
                  onMouseEnter={() => setHovered('email')}
                  onMouseLeave={() => setHovered(null)}
                  className="text-white hover:scale-110 transition-transform cursor-pointer block p-1"
                >
                  <Mail size={16} />
                </button>
                <Tooltip show={hovered === 'email'}>
                  <span className="text-xs font-mono">{lang === 'zh' ? '在线联系' : 'Contact Me'}</span>
                </Tooltip>
              </div>

              {/* Phone */}
              <div className="relative group">
                <div 
                  onMouseEnter={() => setHovered('phone')}
                  onMouseLeave={() => setHovered(null)}
                  className="text-white hover:scale-110 transition-transform cursor-pointer p-1"
                >
                  <Phone size={16} />
                </div>
                <Tooltip show={hovered === 'phone'}>
                  <span className="text-xs font-mono">15017648478</span>
                </Tooltip>
              </div>

              {/* Location */}
              <div className="relative group border-t border-white/10 pt-3">
                <div 
                  onMouseEnter={() => setHovered('location')}
                  onMouseLeave={() => setHovered(null)}
                  className="text-white hover:scale-110 transition-transform cursor-pointer p-1"
                >
                  <MapPin size={16} />
                </div>
                <Tooltip show={hovered === 'location'}>
                  <span className="text-xs font-bold tracking-widest">{lang === 'zh' ? '广州' : 'GZ'}</span>
                </Tooltip>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global WeChat QR Lightbox */}
      <Lightbox 
        isOpen={showWeChatModal} 
        onClose={() => setShowWeChatModal(false)} 
        currentImageSrc={weChatImgSrc}
        singleMode={true}
      />
    </>
  );
};

export default FloatingElements;
