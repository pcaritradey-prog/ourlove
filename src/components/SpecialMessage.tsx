import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Quote, Sparkle } from 'lucide-react';
import { loveData } from '../data/loveData';

export const SpecialMessage: React.FC = () => {
  const [kissCount, setKissCount] = useState(0);
  const [kissParticles, setKissParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleKissClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setKissCount((prev) => prev + 1);

    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2 + (Math.random() * 120 - 60),
      y: rect.top + (Math.random() * 40 - 20),
    }));

    setKissParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setKissParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 1500);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-pink-200/90 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/90 via-pink-50/50 to-white/90"
        >
          {/* Animated floating hearts around the message */}
          <div className="absolute top-4 left-6 text-pink-300 animate-bounce pointer-events-none">
            <Heart className="w-6 h-6 fill-pink-200" />
          </div>
          <div className="absolute bottom-6 right-8 text-rose-300 animate-pulse pointer-events-none">
            <Heart className="w-8 h-8 fill-rose-200" />
          </div>

          <div className="inline-flex items-center gap-2 p-3 rounded-full bg-pink-100/90 text-rose-600 mb-6 shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-rose-950 font-bold mb-6 leading-tight">
            "{loveData.specialMessage.heading}"
          </h2>

          <div className="relative my-6 max-w-xl mx-auto">
            <Quote className="w-8 h-8 text-pink-300 mx-auto mb-2 opacity-60" />
            <p className="font-script text-2xl sm:text-3xl text-rose-800 leading-relaxed">
              {loveData.specialMessage.quote}
            </p>
            <p className="text-xs uppercase tracking-widest text-rose-600/80 font-semibold mt-3">
              — {loveData.specialMessage.author}
            </p>
          </div>

          <p className="text-base sm:text-lg text-rose-900/90 font-sans max-w-lg mx-auto mt-6 leading-relaxed">
            {loveData.specialMessage.note}
          </p>

          {/* Interactive Sweet Kiss Button */}
          <div className="mt-8 pt-6 border-t border-pink-200/60">
            <button
              onClick={handleKissClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Tap for a Sweet Kiss ♡</span>
              {kissCount > 0 && (
                <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs font-bold">
                  {kissCount}
                </span>
              )}
            </button>
          </div>

          {/* Kiss Explosion Particles */}
          <AnimatePresence>
            {kissParticles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 1, scale: 0.6 }}
                animate={{ opacity: 0, scale: 1.8, y: -80 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                style={{ left: p.x, top: p.y }}
                className="fixed pointer-events-none z-50"
              >
                <Sparkle className="w-6 h-6 text-pink-500 fill-pink-400 drop-shadow-md" />
              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
