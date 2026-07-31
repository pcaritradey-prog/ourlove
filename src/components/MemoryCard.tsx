import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MapPin, ZoomIn } from 'lucide-react';
import { MemoryItem } from '../types/love';

interface MemoryCardProps {
  memory: MemoryItem;
  index: number;
  onSelect: (memory: MemoryItem) => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, index, onSelect }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Rotation style for handmade polaroid scatter feel
  const rotationDegrees = memory.rotation ?? (index % 2 === 0 ? -2 : 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ transform: `rotate(${rotationDegrees}deg)` }}
      className="group cursor-pointer hover:z-20 transition-all duration-300 hover:rotate-0"
      onClick={() => onSelect(memory)}
    >
      <div className="polaroid-frame rounded-2xl bg-white relative overflow-hidden">
        
        {/* Tape / Sticker decoration on top of Polaroid */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/50 backdrop-blur-sm border border-white/60 shadow-sm z-10 rotate-1 pointer-events-none" />

        {/* Photo Area */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-pink-50/80 mb-3 group-hover:shadow-inner">
          
          {!imageError ? (
            <img
              src={memory.image}
              alt={memory.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}

          {/* Graceful Fallback if photo missing */}
          {(imageError || !imageLoaded) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm text-pink-500 mb-2">
                <Heart className="w-6 h-6 fill-pink-300" />
              </div>
              <p className="font-serif text-sm font-semibold text-rose-900 line-clamp-1">
                {memory.title}
              </p>
            </div>
          )}

          {/* Zoom Overlay Hint */}
          <div className="absolute inset-0 bg-rose-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
            <div className="p-3 rounded-full bg-white/30 border border-white/40 shadow-lg flex items-center gap-1.5 text-xs font-medium">
              <ZoomIn className="w-4 h-4" />
              <span>Zoom Memory</span>
            </div>
          </div>

          {/* Heart Icon Badge */}
          <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-500 shadow-sm">
            <Heart className="w-4 h-4 fill-rose-400" />
          </div>
        </div>

        {/* Polaroid Handwritten Caption Section */}
        <div className="px-1 text-rose-950">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg font-semibold text-rose-900 group-hover:text-rose-600 transition-colors line-clamp-1">
              {memory.title}
            </h3>
            {memory.location && (
              <span className="flex items-center gap-0.5 text-[11px] text-rose-700/80 font-medium shrink-0">
                <MapPin className="w-3 h-3 text-rose-400" />
                <span>{memory.location}</span>
              </span>
            )}
          </div>
          <p className="font-script text-base text-rose-800 line-clamp-2 leading-tight">
            "{memory.caption}"
          </p>
        </div>

      </div>
    </motion.div>
  );
};
