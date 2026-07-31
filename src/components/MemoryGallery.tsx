import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles } from 'lucide-react';
import { loveData } from '../data/loveData';
import { MemoryCard } from './MemoryCard';
import { Lightbox } from './Lightbox';
import { MemoryItem } from '../types/love';

export const MemoryGallery: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  return (
    <section id="memories" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Gallery Title & Subtitle */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-rose-500 font-script text-2xl mb-1"
          >
            <Camera className="w-5 h-5 text-rose-400" />
            <span>Captured Moments</span>
            <Camera className="w-5 h-5 text-rose-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-rose-950 font-semibold mb-3"
          >
            Our Scrapbook of Memories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-xl sm:text-2xl text-rose-600 flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>tap any polaroid to zoom into our memory ♡</span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </motion.p>
        </div>

        {/* Responsive Scrapbook Polaroid Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {loveData.memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
              onSelect={(m) => setSelectedMemory(m)}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        memory={selectedMemory}
        memories={loveData.memories}
        onClose={() => setSelectedMemory(null)}
        onSelectMemory={(m) => setSelectedMemory(m)}
      />
    </section>
  );
};
