import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Heart } from 'lucide-react';
import { MemoryItem } from '../types/love';

interface LightboxProps {
  memory: MemoryItem | null;
  memories: MemoryItem[];
  onClose: () => void;
  onSelectMemory: (memory: MemoryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  memory,
  memories,
  onClose,
  onSelectMemory,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [memory?.id]);

  // Keyboard Navigation (Escape, Left, Right)
  useEffect(() => {
    if (!memory) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [memory, memories]);

  if (!memory) return null;

  const currentIndex = memories.findIndex((m) => m.id === memory.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + memories.length) % memories.length;
    onSelectMemory(memories[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % memories.length;
    onSelectMemory(memories[nextIndex]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/80 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full rounded-3xl bg-white/95 p-4 sm:p-6 shadow-2xl border border-pink-200 overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-rose-100 text-rose-800 hover:bg-rose-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Large Image Container */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-pink-50 mb-4 shadow-inner">
            {!imageError ? (
              <img
                src={memory.image}
                alt={memory.title}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : null}

            {/* Fallback Display if missing image */}
            {(imageError || !imageLoaded) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-md text-pink-500 mb-3">
                  <Heart className="w-8 h-8 fill-pink-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-rose-900 mb-1">
                  {memory.title}
                </h3>
              </div>
            )}

            {/* Previous & Next Navigation Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous Memory"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-rose-900 hover:bg-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Memory"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-rose-900 hover:bg-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption & Metadata */}
          <div className="px-2">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-rose-950">
                {memory.title}
              </h3>
              
              {memory.location && (
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-purple-500" />
                    <span>{memory.location}</span>
                  </span>
                </div>
              )}
            </div>

            <p className="font-script text-2xl text-rose-800 leading-relaxed pt-2 border-t border-pink-100">
              "{memory.caption}"
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-rose-700/80 pt-2">
              <span>
                Memory {currentIndex + 1} of {memories.length}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                Forever cherished
              </span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
