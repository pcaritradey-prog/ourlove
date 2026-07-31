import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Stars, Calendar, ChevronDown } from 'lucide-react';
import { loveData } from '../data/loveData';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [heartBurst, setHeartBurst] = useState<{ id: number; x: number; y: number }[]>([]);
  const [daysTogether, setDaysTogether] = useState<number>(0);

  // Calculate live days together from relationshipDate
  useEffect(() => {
    if (loveData.relationshipDate) {
      const startDate = new Date(loveData.relationshipDate);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
    }
  }, []);

  const handlePhotoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHearts = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 80 - 40),
      y: y + (Math.random() * 80 - 40),
    }));

    setHeartBurst((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHeartBurst((prev) => prev.filter((h) => !newHearts.some((nh) => nh.id === h.id)));
    }, 1200);
  };

  const handleScrollClick = () => {
    const nextSection = document.querySelector('#story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/90 border border-pink-200/80 text-rose-800 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>{loveData.hero.badgeText}</span>
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-rose-950 font-semibold tracking-tight leading-[1.1] mb-4"
        >
          {loveData.hero.title}
        </motion.h1>

        {/* Subheading dynamically using her name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-script text-2xl sm:text-4xl text-rose-600 mb-8 max-w-2xl"
        >
          {loveData.hero.subtitle.includes(loveData.girlfriendName)
            ? loveData.hero.subtitle
            : `Happy Girlfriend's Day, ${loveData.girlfriendName} ♡`}
        </motion.p>

        {/* Main Hero Photo in Luxury Romantic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={handlePhotoClick}
          className="relative group cursor-pointer my-4 max-w-lg w-full"
        >
          {/* Outer Decorative Ring / Frame */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-500" />

          {/* Photo Card Container */}
          <div className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-2xl border border-pink-100 overflow-hidden">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-pink-50">
              
              {!imageError ? (
                <img
                  src={loveData.hero.image}
                  alt={`${loveData.girlfriendName} and ${loveData.senderName}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : null}

              {/* Graceful Fallback if photo missing */}
              {(imageError || !imageLoaded) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md mb-3 text-rose-500">
                    <Heart className="w-8 h-8 fill-pink-400" />
                  </div>
                  <h3 className="font-serif text-xl text-rose-900 font-medium">
                    {loveData.girlfriendName} & {loveData.senderName}
                  </h3>
                  <p className="text-xs text-rose-600/80 font-script text-base mt-1">
                    "Every second with you is magic"
                  </p>
                </div>
              )}

              {/* Heart Burst Particles Effect on Click */}
              <AnimatePresence>
                {heartBurst.map((h) => (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 1, scale: 0.5 }}
                    animate={{ opacity: 0, scale: 1.8, y: -60 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ left: h.x, top: h.y }}
                    className="absolute pointer-events-none z-30"
                  >
                    <Heart className="w-6 h-6 text-pink-500 fill-pink-400 drop-shadow-md" />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/30 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <span className="flex items-center gap-1">
                  <Stars className="w-3.5 h-3.5 text-amber-200" />
                  <span>Tap photo for love sparkles ♡</span>
                </span>
                <span className="font-script text-sm text-pink-200">
                  {loveData.girlfriendName} & {loveData.senderName}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Relationship Counter Badge */}
        {daysTogether > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card border border-pink-200 text-rose-900 text-xs sm:text-sm shadow-sm"
          >
            <Calendar className="w-4 h-4 text-pink-500" />
            <span>
              Together for <strong className="text-rose-600 font-semibold">{daysTogether.toLocaleString()} days</strong> of pure happiness
            </span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </motion.div>
        )}

        {/* Scroll Invitation */}
        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 group flex flex-col items-center gap-1.5 text-rose-700/80 hover:text-rose-950 transition-colors cursor-pointer"
        >
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {loveData.hero.scrollPromptText}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-rose-400 group-hover:text-rose-600" />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
};
