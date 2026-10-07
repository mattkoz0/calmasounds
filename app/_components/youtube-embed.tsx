"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <button
      type="button"
      aria-label={title}
      onClick={() => setIsPlaying(true)}
      className="group relative h-full w-full cursor-pointer overflow-hidden border-0 bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 350px) 100vw, 350px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
      {/* Centered glassmorphic play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/35 transition-transform duration-300 group-hover:scale-110">
          <FaPlay size={20} className="ml-1" />
        </div>
      </div>
    </button>
  );
}
