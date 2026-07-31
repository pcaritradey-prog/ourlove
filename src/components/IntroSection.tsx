import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { loveData } from '../data/loveData';
import { MilestoneStats } from './MilestoneStats';

export const IntroSection: React.FC = () => {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Intro Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-pink-200/80 shadow-xl relative overflow-hidden text-center"
        >
          {/* Subtle floral/sparkle decoration background */}
          <div className="absolute top-0 right-0 p-8 text-pink-200/40 pointer-events-none">
            <Sparkles size={80} />
          </div>

          <div className="inline-flex items-center gap-2 text-rose-500 font-script text-2xl mb-2">
            <Heart className="w-5 h-5 fill-rose-400" />
            <span>Our Journey</span>
            <Heart className="w-5 h-5 fill-rose-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-rose-950 font-semibold mb-6">
            {loveData.intro.greeting}
          </h2>

          <div className="space-y-4 text-rose-900/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans mb-10">
            {loveData.intro.storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Milestone Badges / Stats Grid */}
          <MilestoneStats />

        </motion.div>
      </div>
    </section>
  );
};
