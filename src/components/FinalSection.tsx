import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, CheckCircle2, Circle, Infinity as InfinityIcon } from 'lucide-react';
import { loveData } from '../data/loveData';

export const FinalSection: React.FC = () => {
  const [promiseChecked, setPromiseChecked] = useState(true);

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="max-w-3xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-pink-200/90 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white via-pink-50/60 to-rose-100/40"
        >
          {/* Animated Heart Crest */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-rose-500/25"
          >
            <Heart className="w-10 h-10 fill-white" />
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-6xl text-rose-950 font-bold mb-3">
            {loveData.final.heading}
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-rose-600 mb-6">
            For My Dearest {loveData.girlfriendName}
          </p>

          <p className="font-serif text-xl sm:text-2xl text-rose-900/90 max-w-xl mx-auto leading-relaxed mb-8">
            "{loveData.final.paragraph}"
          </p>

          {/* Interactive Forever Promise Badge */}
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-pink-200 shadow-md mb-10 max-w-md w-full justify-center">
            <button
              onClick={() => setPromiseChecked(!promiseChecked)}
              className="flex items-center gap-2 text-rose-900 font-medium text-sm hover:text-rose-950 cursor-pointer"
            >
              {promiseChecked ? (
                <CheckCircle2 className="w-5 h-5 text-rose-500 fill-pink-100 shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-pink-300 shrink-0" />
              )}
              <span>I promise to love, protect, and cherish you forever.</span>
            </button>
          </div>

          <div className="pt-8 border-t border-pink-200/80 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-rose-700 font-semibold">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>{loveData.final.closingNote}</span>
              <Sparkles className="w-4 h-4 text-pink-500" />
            </div>

            <p className="font-script text-3xl text-rose-700 font-bold mt-1">
              {loveData.senderName} ♡
            </p>

            <div className="mt-4 flex items-center gap-1 text-[11px] text-rose-600/70 font-sans">
              <InfinityIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Girlfriend's Day Surprise • Crafted with Endless Devotion</span>
            </div>
          </div>

        </motion.div>

      </div>
    </footer>
  );
};
