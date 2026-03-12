import React from 'react';
import { X } from 'lucide-react';

interface VideoLightboxProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoLightbox({ videoUrl, onClose }: VideoLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-[85vh] sm:h-[80vh] md:h-[85vh] max-w-2xl sm:max-w-3xl md:max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </button>

        <video
          src={videoUrl}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}
