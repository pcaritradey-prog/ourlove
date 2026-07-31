import React from 'react';
import { FloatingDecorations } from './components/FloatingDecorations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { LoveLetter } from './components/LoveLetter';
import { MemoryGallery } from './components/MemoryGallery';
import { MusicPlayer } from './components/MusicPlayer';
import { Reasons } from './components/Reasons';
import { MemoryStory } from './components/MemoryStory';
import { FinalSection } from './components/FinalSection';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { loveData } from './data/loveData';

export default function App() {
  // Central Audio Player Hook
  const audioPlayer = useAudioPlayer({
    src: loveData.song.audio,
  });

  return (
    <div className="relative min-h-screen bg-[#fdf7f9] text-[#4a2e3f] overflow-x-hidden">
      {/* Ambient Floating Hearts & Sparkles Background */}
      <FloatingDecorations />

      {/* Floating Translucent Header Navbar */}
      <Header
        isPlayingAudio={audioPlayer.isPlaying}
        onToggleAudio={audioPlayer.togglePlay}
      />

      {/* 1. Hero Landing Section */}
      <Hero />

      {/* 2. Introduction & Milestone Journey */}
      <IntroSection />

      {/* 3. Memory Scrapbook Gallery */}
      <MemoryGallery />

      {/* 4. Multi-paragraph Love Letter */}
      <LoveLetter />

      {/* 5. Special Song Music Player */}
      <MusicPlayer
        isPlaying={audioPlayer.isPlaying}
        currentTime={audioPlayer.currentTime}
        duration={audioPlayer.duration}
        volume={audioPlayer.volume}
        isMuted={audioPlayer.isMuted}
        isLoading={audioPlayer.isLoading}
        isError={audioPlayer.isError}
        usingSynthFallback={audioPlayer.usingSynthFallback}
        onTogglePlay={audioPlayer.togglePlay}
        onSeek={audioPlayer.seek}
        onChangeVolume={audioPlayer.changeVolume}
        onToggleMute={audioPlayer.toggleMute}
      />

      {/* 6. Reasons I Love You */}
      <Reasons />

      {/* 7. Memory Story Slider */}
      <MemoryStory />

      {/* 8. Final Romantic Conclusion */}
      <FinalSection />
    </div>
  );
}
