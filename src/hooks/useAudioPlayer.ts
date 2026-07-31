import { useState, useEffect, useRef, useCallback } from 'react';

interface UseAudioPlayerProps {
  src: string; // e.g. "/audio/our-song.mp3"
}

export function useAudioPlayer({ src }: UseAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usingSynthFallback, setUsingSynthFallback] = useState(false);

  // Initialize HTML5 Audio element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.src = src;
    audio.preload = 'auto';
    audio.volume = volume;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setIsLoading(false);
      setIsError(false);
    };

    const handleCanPlay = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setIsLoading(false);
      setIsError(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration) && duration !== audio.duration) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      console.warn("Audio file failed to load from src:", src, "- enabling soft Web Audio fallback.");
      setIsError(true);
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
      if (synthCtxRef.current) synthCtxRef.current.close();
    };
  }, [src]);

  // Web Audio Synth Fallback (Plays a soft ambient romantic melody if MP3 fails)
  const startSynthMelody = useCallback(() => {
    try {
      if (!synthCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setUsingSynthFallback(true);
      setIsPlaying(true);
      setDuration(60); // 60 sec fallback loop

      const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 440.00, 349.23, 293.66];
      let step = 0;

      const playChime = () => {
        if (!synthCtxRef.current || synthCtxRef.current.state !== 'running') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const freq = notes[step % notes.length];
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const currentVol = isMuted ? 0 : volume * 0.15;
        gain.gain.setValueAtTime(currentVol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 2.5);

        step++;
        setCurrentTime((prev) => (prev + 1) % 60);
      };

      playChime();
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
      synthTimerRef.current = window.setInterval(playChime, 1500);
    } catch (e) {
      console.warn("Synth fallback error:", e);
    }
  }, [isMuted, volume]);

  const stopSynthMelody = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;

    if (isError || !audio) {
      if (isPlaying) {
        stopSynthMelody();
      } else {
        startSynthMelody();
      }
      return;
    }

    if (isPlaying) {
      if (usingSynthFallback) {
        stopSynthMelody();
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } else {
      try {
        setIsLoading(true);
        if (usingSynthFallback) {
          stopSynthMelody();
          setUsingSynthFallback(false);
        }
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        console.warn("Audio autoplay or play blocked:", err);
        setIsLoading(false);
        // Fallback to synth if play failed
        startSynthMelody();
      }
    }
  }, [isPlaying, isError, startSynthMelody, stopSynthMelody]);

  const seek = useCallback((time: number) => {
    setCurrentTime(time);
    if (audioRef.current && !usingSynthFallback) {
      audioRef.current.currentTime = time;
    }
  }, [usingSynthFallback]);

  const changeVolume = useCallback((newVol: number) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (newVol === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isLoading,
    isError,
    usingSynthFallback,
    togglePlay,
    seek,
    changeVolume,
    toggleMute
  };
}
