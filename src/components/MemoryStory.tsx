import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart, Sparkles, Maximize2, MapPin } from 'lucide-react';
import { loveData } from '../data/loveData';
import { Lightbox } from './Lightbox';
import { MemoryItem } from '../types/love';

export const MemoryStory: React.FC = () => {
  const memories = loveData.memories;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);
  const [direction, setDirection] = useState<number>(0);

  const currentMemory = memories[currentIndex] || memories[0];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const handleSelectThumbnail = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Swipe gesture handling for mobile
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  if (!memories || memories.length === 0) return null;

  return (
    <section id="story-slider" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/90 text-rose-600 text-sm font-medium mb-3 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Our Journey in Photos</span>
            <Sparkles className="w-4 h-4 text-pink-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-rose-950 font-semibold mb-2"
          >
            Memory Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-xl sm:text-2xl text-rose-600 italic"
          >
            Reliving our sweetest moments together ♡
          </motion.p>
        </div>

        {/* Main Slider Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-4 sm:p-8 border-2 border-pink-200/90 shadow-2xl relative overflow-hidden bg-white/90"
        >
          {/* Featured Large Image Container */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-pink-50 shadow-inner group">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentMemory.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => setSelectedMemory(currentMemory)}
                className="w-full h-full cursor-pointer relative"
              >
                <img
                  src={currentMemory.image}
                  alt={currentMemory.title}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Expand Icon Prompt */}
                <div className="absolute inset-0 bg-rose-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-rose-900 font-medium text-sm shadow-lg backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-rose-600" />
                    <span>Click to view full image</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous memory"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/85 text-rose-900 hover:bg-white hover:text-rose-600 shadow-lg transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next memory"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-white/85 text-rose-900 hover:bg-white hover:text-rose-600 shadow-lg transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1">
              <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
              <span>
                {currentIndex + 1} / {memories.length}
              </span>
            </div>
          </div>

          {/* Title & Caption below Featured Image */}
          <div className="mt-6 text-center px-2 sm:px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMemory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950">
                    {currentMemory.title}
                  </h3>
                </div>

                {currentMemory.location && (
                  <div className="flex items-center justify-center gap-3 text-xs text-rose-700/80 mb-3">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100/80 text-purple-900 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-purple-500" />
                      <span>{currentMemory.location}</span>
                    </span>
                  </div>
                )}

                <p className="font-script text-xl sm:text-2xl text-rose-800 leading-relaxed max-w-2xl mx-auto italic">
                  "{currentMemory.caption}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Clickable Thumbnail Strip */}
          <div className="mt-8 pt-6 border-t border-pink-200/60">
            <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-2 px-1">
              {memories.map((mem, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={mem.id}
                    onClick={() => handleSelectThumbnail(idx)}
                    aria-label={`Select memory ${mem.title}`}
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'ring-4 ring-rose-500 border-2 border-white scale-105 shadow-md opacity-100'
                        : 'opacity-60 hover:opacity-100 border border-pink-200 hover:scale-100'
                    }`}
                  >
                    <img
                      src={mem.image}
                      alt={mem.title}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-rose-500/10 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal when clicked */}
      <Lightbox
        memory={selectedMemory}
        memories={memories}
        onClose={() => setSelectedMemory(null)}
        onSelectMemory={(m) => setSelectedMemory(m)}
      />
    </section>
  );
};
