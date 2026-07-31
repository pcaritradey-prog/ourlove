import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Sparkles,
  Coffee,
  Sun,
  ShieldCheck,
  Music,
  Gift,
  Smile,
  Star
} from 'lucide-react';
import { loveData } from '../data/loveData';

export const Reasons: React.FC = () => {
  const [secretRevealed, setSecretRevealed] = useState(false);

  // Map icon names to Lucide components
  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-purple-600" />;
      default:
        return <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />;
    }
  };

  return (
    <section id="reasons" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-rose-500 font-script text-2xl mb-1"
          >
            <Star className="w-5 h-5 text-rose-400" />
            <span>1,000+ Reasons, But Here Are A Few</span>
            <Star className="w-5 h-5 text-rose-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-rose-950 font-semibold"
          >
            Reasons I Love You
          </motion.h2>
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveData.reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-pink-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-pink-100/90 border border-pink-200">
                    {renderIcon(reason.iconName)}
                  </div>
                  <span className="font-serif text-3xl font-bold text-pink-300">
                    #{reason.number < 10 ? `0${reason.number}` : reason.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-rose-950 mb-2">
                  {reason.title}
                </h3>

                <p className="text-sm text-rose-900/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-100 flex items-center gap-1.5 text-xs text-rose-600 font-medium">
                <Heart className="w-3.5 h-3.5 fill-rose-400" />
                <span>Adored every day</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secret Bonus Reason Interactive Button */}
        <div className="mt-12 text-center">
          {!secretRevealed ? (
            <button
              onClick={() => setSecretRevealed(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border-2 border-pink-300 text-rose-900 font-medium text-sm shadow-md hover:bg-pink-100/80 hover:border-pink-400 transition-all cursor-pointer group"
            >
              <Gift className="w-4 h-4 text-pink-500 group-hover:rotate-12 transition-transform" />
              <span>Tap to Reveal Secret Reason #7 ♡</span>
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto glass-card rounded-3xl p-6 border-2 border-rose-300 shadow-xl bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Smile className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-rose-950 mb-2">
                  {loveData.secretReason?.title || "Because With You, I Feel Safe"}
                </h3>
                <p className="font-serif text-base sm:text-lg text-rose-900/90 leading-relaxed">
                  {loveData.secretReason?.description || "I don't think love has to be explained with a list of reasons. All I know is that whenever I'm with you, I feel safe, comfortable, and completely myself. That's the feeling I never want to lose, and that's why you'll always be the most special person in my life. ❤️"}
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

      </div>
    </section>
  );
};
