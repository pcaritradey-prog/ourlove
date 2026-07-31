import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail, Sparkles, Feather } from 'lucide-react';
import { loveData } from '../data/loveData';

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [sentHeartCount, setSentHeartCount] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  const handleSendHeart = () => {
    setSentHeartCount((prev) => prev + 1);
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 80 + 10,
    };
    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 2000);
  };

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-rose-500 font-script text-2xl mb-1"
          >
            <Feather className="w-5 h-5 text-rose-400" />
            <span>Straight From My Heart</span>
            <Feather className="w-5 h-5 text-rose-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-rose-950 font-semibold mb-2"
          >
            {loveData.letterHeading || "A Letter From My Heart ♡"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-lg sm:text-xl text-rose-600 italic max-w-xl mx-auto"
          >
            {loveData.letterSubtitle || "For my sweetest princess, my happiness, my safe place ♡"}
          </motion.p>
        </div>

        {/* Closed Envelope State (If collapsed) */}
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative w-full max-w-md bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 border-2 border-pink-300 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center cursor-pointer hover:border-pink-400 transition-all transform hover:-translate-y-1"
            >
              <div className="w-20 h-20 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/30 mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 fill-white" />
              </div>
              <span className="font-serif text-2xl text-rose-950 font-semibold mb-1">
                To: {loveData.girlfriendName}
              </span>
              <span className="text-xs text-rose-700/80 font-medium tracking-widest uppercase">
                Tap wax seal to open love letter
              </span>
            </button>
          </motion.div>
        ) : (
          /* Open Letter Paper Presentation */
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9 }}
            className="relative w-full max-w-2xl sm:max-w-3xl mx-auto rounded-3xl paper-texture p-5 sm:p-10 md:p-12 shadow-2xl border-2 border-pink-200/90 text-rose-950 overflow-hidden"
          >
            {/* Top Envelope Flap Shadow Line */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-pink-200/50 to-transparent pointer-events-none" />

            {/* Corner Rose Flower Decorations */}
            <div className="absolute top-4 right-4 text-pink-300 pointer-events-none opacity-40">
              <Sparkles size={32} />
            </div>

            {/* Letter Header */}
            <div className="flex items-center justify-between pb-5 mb-8 border-b border-pink-200/80">
              <div className="flex items-center gap-2 text-rose-700">
                <Mail className="w-5 h-5 text-rose-500" />
                <span className="font-serif text-base sm:text-lg font-medium italic">
                  Confidential & Devoted
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 text-rose-800 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                <span>With All My Heart</span>
              </div>
            </div>

            {/* Letter Title Inside Paper */}
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-rose-950 font-semibold mb-1">
                {loveData.letterHeading || "A Letter From My Heart ♡"}
              </h3>
              <p className="font-script text-lg sm:text-xl text-rose-600 italic">
                {loveData.letterSubtitle || "For my sweetest princess, my happiness, my safe place ♡"}
              </p>
              <div className="flex items-center justify-center gap-2 text-pink-300 mt-3">
                <span className="h-[1px] w-12 bg-pink-200" />
                <span className="text-xs">♡</span>
                <span className="h-[1px] w-12 bg-pink-200" />
              </div>
            </div>

            {/* Multi-paragraph Letter Body */}
            <div className="space-y-5 sm:space-y-6 text-rose-950">
              {loveData.loveLetter.map((paragraph, index) => {
                const isGreeting = index === 0;

                if (isGreeting) {
                  return (
                    <p
                      key={index}
                      className="font-script text-2xl sm:text-3xl text-rose-700 font-bold mb-3 break-words"
                    >
                      {paragraph}
                    </p>
                  );
                }

                return (
                  <React.Fragment key={index}>
                    <p className="font-serif text-base sm:text-lg text-rose-900/90 leading-[1.85] sm:leading-[1.95] tracking-wide break-words">
                      {paragraph}
                    </p>
                    {/* Subtle aesthetic divider every 6 paragraphs */}
                    {(index === 5 || index === 11 || index === 16) && (
                      <div className="flex justify-center items-center gap-2 my-6 text-pink-300 text-xs select-none">
                        <span>♡</span>
                        <span className="w-8 h-[1px] bg-pink-200/80" />
                        <span>✿</span>
                        <span className="w-8 h-[1px] bg-pink-200/80" />
                        <span>♡</span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Special Ending Block */}
            {loveData.letterSpecialEnding && (
              <div className="mt-10 pt-8 border-t border-pink-200/80 space-y-5">
                {/* Special Line 1 Callout */}
                <div className="bg-gradient-to-r from-pink-100/80 via-rose-50 to-pink-100/80 border border-pink-200 rounded-2xl p-4 sm:p-5 text-center shadow-sm">
                  <p className="font-serif text-base sm:text-lg text-rose-900 font-medium italic break-words">
                    "{loveData.letterSpecialEnding.line1}"
                  </p>
                </div>

                {/* Special Line 2 */}
                <p className="font-serif text-base sm:text-lg text-rose-950 font-medium leading-relaxed break-words">
                  {loveData.letterSpecialEnding.line2}
                </p>

                {/* Special Line 3 */}
                <p className="font-sans text-lg sm:text-xl font-bold text-rose-600 tracking-wide break-words">
                  {loveData.letterSpecialEnding.line3}
                </p>

                {/* Special Signature */}
                <div className="pt-4 text-right pr-2">
                  <span className="font-script text-4xl sm:text-5xl text-rose-600 font-bold tracking-wide block drop-shadow-sm">
                    {loveData.letterSpecialEnding.signature}
                  </span>
                </div>
              </div>
            )}

            {/* Interactive "Send Heart Back" Action */}
            <div className="mt-10 pt-6 border-t border-pink-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-rose-700 font-medium">
                Did this letter bring a smile to your face?
              </span>

              <button
                onClick={handleSendHeart}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transform active:scale-95 transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Send a Heart Back</span>
                {sentHeartCount > 0 && (
                  <span className="ml-1 bg-white/30 px-2 py-0.5 rounded-full text-xs font-bold">
                    +{sentHeartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Floating Hearts Particles from button press */}
            <AnimatePresence>
              {floatingHearts.map((h) => (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 1, y: 0, scale: 0.8 }}
                  animate={{ opacity: 0, y: -120, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, ease: 'easeOut' }}
                  style={{ left: `${h.x}%`, bottom: '40px' }}
                  className="absolute pointer-events-none z-20"
                >
                  <Heart className="w-7 h-7 text-pink-500 fill-rose-400 drop-shadow-md" />
                </motion.div>
              ))}
            </AnimatePresence>

          </motion.div>
        )}

      </div>
    </section>
  );
};
