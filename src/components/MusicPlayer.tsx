import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Disc,
  Heart,
  Music2,
  AlertCircle,
  Quote
} from 'lucide-react';
import { loveData } from '../data/loveData';

interface MusicPlayerProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isLoading: boolean;
  isError: boolean;
  usingSynthFallback: boolean;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onChangeVolume: (vol: number) => void;
  onToggleMute: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  isLoading,
  isError,
  usingSynthFallback,
  onTogglePlay,
  onSeek,
  onChangeVolume,
  onToggleMute,
}) => {
  const [coverError, setCoverError] = useState(false);

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="song" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-rose-500 font-script text-2xl mb-1"
          >
            <Music2 className="w-5 h-5 text-rose-400" />
            <span>The Soundtrack of Us</span>
            <Music2 className="w-5 h-5 text-rose-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-5xl text-rose-950 font-semibold"
          >
            OUR SPECIAL SONG
          </motion.h2>
        </div>

        {/* Music Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-pink-200/90 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            {/* Spinning Vinyl Cover Artwork */}
            <div className="relative group shrink-0">
              <div
                className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 shadow-xl border-4 border-white/80 transition-transform duration-700 ${
                  isPlaying ? 'rotate-animation' : ''
                }`}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-rose-300/40 bg-pink-100">
                  {!coverError ? (
                    <img
                      src={loveData.song.cover}
                      alt={loveData.song.title}
                      onError={() => setCoverError(true)}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isPlaying ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 text-rose-900 p-4 text-center">
                      <Disc size={48} className="text-rose-600 mb-2" />
                      <span className="font-serif text-xs font-bold">
                        {loveData.song.title}
                      </span>
                    </div>
                  )}

                  {/* Vinyl Record Center Hole */}
                  <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white border-4 border-pink-300 shadow-inner flex items-center justify-center">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
                  </div>
                </div>
              </div>

              {/* Musical Note Floating Badge */}
              <div className="absolute -bottom-2 -right-2 p-3 rounded-full bg-white shadow-md border border-pink-200 text-pink-500">
                <Music2 className="w-5 h-5" />
              </div>
            </div>

            {/* Song Info & Controls Area */}
            <div className="flex-1 w-full text-center md:text-left">
              
              {/* Song Title & Artist */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold uppercase tracking-wider mb-2">
                  Our Anthem ♡
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-rose-950">
                  {loveData.song.title}
                </h3>
                <p className="text-sm sm:text-base text-rose-700 font-medium mt-1">
                  {loveData.song.artist}
                </p>
              </div>

              {/* Lyrics Quote / Romantic Note */}
              <div className="p-3.5 rounded-2xl bg-white/60 border border-pink-100 mb-6 flex items-start gap-2 text-left">
                <Quote className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-script text-lg text-rose-800 leading-snug">
                    {loveData.song.lyricsQuote}
                  </p>
                  <p className="text-xs text-rose-600/80 mt-1 font-sans">
                    {loveData.song.note}
                  </p>
                </div>
              </div>

              {/* Audio Seeker / Progress Bar */}
              <div className="space-y-1.5 mb-6">
                <div className="relative w-full h-2 rounded-full bg-pink-200/60 overflow-hidden cursor-pointer group">
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-100"
                    style={{ width: `${progressPercent}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={(e) => onSeek(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-rose-700 font-medium">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Main Play Controls */}
              <div className="flex items-center justify-between gap-4">
                
                {/* Play / Pause Primary Button */}
                <button
                  onClick={onTogglePlay}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 active:scale-95 transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span>Pause Song</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                      <span>Play Our Song</span>
                    </>
                  )}
                </button>

                {/* Volume & Mute Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={onToggleMute}
                    className="p-2.5 rounded-full bg-pink-100/80 text-rose-800 hover:bg-pink-200 transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-600" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-rose-800" />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => onChangeVolume(Number(e.target.value))}
                    className="w-20 accent-pink-500 cursor-pointer"
                    aria-label="Volume slider"
                  />
                </div>

              </div>

              {/* Missing Audio State / Synth Fallback Notice */}
              {(isError || usingSynthFallback) && (
                <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Your song hasn't been added yet ♡ - currently playing gentle romantic chime tone
                  </span>
                </div>
              )}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
