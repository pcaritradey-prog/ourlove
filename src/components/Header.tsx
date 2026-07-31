import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Music, Menu, X, Play, Pause } from 'lucide-react';
import { loveData } from '../data/loveData';

interface HeaderProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isPlayingAudio, onToggleAudio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Memories', href: '#memories' },
    { name: 'Love Letter', href: '#letter' },
    { name: 'Our Song', href: '#song' },
    { name: 'Reasons', href: '#reasons' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'glass-card bg-white/80 backdrop-blur-md shadow-lg shadow-pink-500/5 border border-pink-200/50'
            : 'bg-white/40 backdrop-blur-sm border border-white/60'
        }`}
      >
        {/* Brand / Title */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2 text-rose-900 font-serif font-semibold text-lg sm:text-xl tracking-wide group"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart className="w-5 h-5 text-rose-500 fill-rose-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span>
            Love Letter <span className="text-pink-500 font-script font-normal text-xl sm:text-2xl ml-1">for {loveData.girlfriendName}</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-rose-900/80 hover:text-rose-950 hover:bg-pink-100/60 transition-all"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Header Right Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Song Toggle */}
          <button
            onClick={onToggleAudio}
            title={isPlayingAudio ? 'Pause Our Song' : 'Play Our Song'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isPlayingAudio
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20 animate-pulse'
                : 'bg-rose-100/80 text-rose-800 hover:bg-rose-200/80'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isPlayingAudio ? 'Playing' : 'Our Song'}</span>
            {isPlayingAudio ? <Pause className="w-3 h-3 ml-0.5" /> : <Play className="w-3 h-3 ml-0.5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-rose-900 hover:bg-pink-100/50 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-sm mx-auto glass-card bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-pink-200"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-rose-900 hover:bg-pink-100/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Heart className="w-3.5 h-3.5 text-pink-300" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
