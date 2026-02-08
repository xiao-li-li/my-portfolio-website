
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentImageSrc: string;
  currentIndex?: number;
  totalImages?: number;
  // 如果是单张图片展示（如二维码），可以不传 index 和 total
  singleMode?: boolean; 
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentImageSrc,
  currentIndex = 0,
  totalImages = 0,
  singleMode = false
}) => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  // Reset scale when image changes
  useEffect(() => {
    setScale(1);
  }, [currentImageSrc]);

  // Swipe logic constants
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    setIsDragging(false);
    // 只有在未缩放状态下才允许滑动切换
    if (scale === 1 && !singleMode) {
      const swipe = swipePower(offset.x, velocity.x);

      if (swipe < -swipeConfidenceThreshold && onNext) {
        onNext();
      } else if (swipe > swipeConfidenceThreshold && onPrev) {
        onPrev();
      }
    }
  };

  const toggleZoom = () => {
    setScale(prev => prev === 1 ? 2.5 : 1);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(currentImageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // 尝试从 URL 获取文件名，如果不行则使用默认名
      const fileName = currentImageSrc.split('/').pop() || 'download_image.jpg';
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback for simple cross-origin images
      const link = document.createElement('a');
      link.href = currentImageSrc;
      link.target = '_blank';
      link.download = 'image.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center overflow-hidden touch-none"
        >
          {/* Background Overlay - Click to Close (only if not dragging/zoomed) */}
          <div className="absolute inset-0 z-0" onClick={() => scale === 1 && onClose()} />

          {/* Top Bar Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-[210] pointer-events-none">
            {/* Counter (Left) */}
            {!singleMode && (
              <div className="text-white/60 font-mono text-xs tracking-widest uppercase bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {currentIndex + 1} / {totalImages}
              </div>
            )}
            
            {/* Actions (Right) */}
            <div className="flex gap-4 pointer-events-auto">
               <button 
                onClick={handleDownload}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all border border-white/10"
                title="Download"
              >
                <Download size={18} />
              </button>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#cc2d2d] transition-all border border-white/10"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation Arrows - Visible on Mobile too now */}
          {!singleMode && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); onPrev && onPrev(); }}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[210]"
              >
                <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onNext && onNext(); }}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all z-[210]"
              >
                <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
              </button>
            </>
          )}

          {/* Image Container with Gestures */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            style={{ touchAction: 'none' }} // Crucial for preventing browser back/forward on mobile swipe
          >
            <motion.img 
              key={currentImageSrc}
              src={currentImageSrc} 
              alt="Gallery Image"
              
              // Gestures
              drag={scale > 1 ? true : "x"} // If zoomed, allow free drag. If 1x, only swipe horizontal.
              dragConstraints={scale > 1 ? { left: -500, right: 500, top: -500, bottom: 500 } : { left: 0, right: 0 }}
              dragElastic={scale > 1 ? 0.1 : 0.8} // Elasticity for swipe feel
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              
              // Zoom Animation
              animate={{ scale: scale, x: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              
              // Double Tap / Click
              onDoubleClick={toggleZoom}
              
              className="max-w-full max-h-full object-contain select-none cursor-grab active:cursor-grabbing"
              style={{ 
                cursor: scale > 1 ? 'grab' : 'default',
                maxWidth: '100vw',
                maxHeight: '100vh',
                padding: '0 md:40px'
              }}
            />
          </motion.div>

          {/* Bottom Zoom Controls (Mobile Friendly hint) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[210] flex gap-4 pointer-events-auto md:hidden">
             <button 
               onClick={toggleZoom}
               className="bg-black/40 backdrop-blur-md text-white/70 px-4 py-2 rounded-full text-xs font-bold border border-white/10 flex items-center gap-2"
             >
               {scale === 1 ? <ZoomIn size={14} /> : <ZoomOut size={14} />}
               {scale === 1 ? '双击缩放' : '复原'}
             </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
