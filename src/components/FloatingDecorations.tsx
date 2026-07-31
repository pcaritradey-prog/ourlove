import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Flower2 } from 'lucide-react';

export const FloatingDecorations: React.FC = () => {
  // Generate randomized floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x position
      size: Math.random() * 16 + 10, // size in px
      duration: Math.random() * 18 + 14, // slow float duration
      delay: Math.random() * 8,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'flower' : 'sparkle',
      opacity: Math.random() * 0.35 + 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Soft Ambient Radial Background Glows */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-pink-200/30 rounded-full blur-[100px]" />
      <div className="absolute top-[50%] right-[5%] w-[30rem] h-[30rem] bg-purple-200/25 rounded-full blur-[90px]" />
      <div className="absolute bottom-[10%] left-[20%] w-[32rem] h-[32rem] bg-rose-200/30 rounded-full blur-[110px]" />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            bottom: '-5%',
            opacity: p.opacity,
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, Math.sin(p.id) * 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.type === 'heart' ? (
            <Heart size={p.size} className="text-pink-400 fill-pink-300/40" />
          ) : p.type === 'flower' ? (
            <Flower2 size={p.size} className="text-rose-300" />
          ) : (
            <Sparkles size={p.size} className="text-purple-300 fill-purple-200/50" />
          )}
        </motion.div>
      ))}
    </div>
  );
};
