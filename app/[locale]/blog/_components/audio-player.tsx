"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
  colorClass?: string;
}

export function AudioPlayer({ 
  src, 
  title, 
  description, 
  colorClass = "bg-emerald-500 text-white" 
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleEnded = () => setIsPlaying(false);
    const audioEl = audioRef.current;
    
    if (audioEl) {
      audioEl.addEventListener("ended", handleEnded);
      return () => audioEl.removeEventListener("ended", handleEnded);
    }
  }, []);

  return (
    <div className="my-6 flex items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 shadow-xl transition-all hover:border-white/20">
      <button
        onClick={togglePlay}
        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 ${colorClass}`}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className="ml-1" />}
      </button>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {description && <p className="mt-1 text-sm text-white/70">{description}</p>}
      </div>
      
      {/* Audio element is hidden. We use loop so it plays continuously to increase dwell time. */}
      <audio ref={audioRef} src={src} preload="none" loop />
    </div>
  );
}
