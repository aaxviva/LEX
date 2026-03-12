import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import VideoLightbox from './VideoLightbox';

interface ReelSlide {
  id: number;
  video: string;
  label: string;
}

const reels: ReelSlide[] = [
  { id: 1, video: '/reels1.mp4', label: 'DENT CLINIC' },
  { id: 2, video: '/reels2.mp4', label: 'INFLUENCER' },
  { id: 3, video: '/reels3.mp4', label: 'LUXURY RESTAURANT' },
  { id: 4, video: '/reels4.mp4', label: 'PORSCHE' },
  { id: 5, video: '/reels5.mp4', label: 'COMMUNITY' },
  { id: 6, video: '/reels6.mp4', label: 'BENTLEY' },
];

export default function ReelsCarousel() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.centerIndex);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideClick = () => {
    setSelectedVideo(reels[activeIndex].video);
  };

  return (
    <>
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-benzin mb-12 md:mb-16">REELS</h2>

          <div className="space-y-8 md:space-y-12">
            {/* Carousel Container */}
            <div className="relative">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={20}
                grabCursor={true}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  320: {
                    spaceBetween: 12,
                  },
                  768: {
                    spaceBetween: 20,
                  },
                  1024: {
                    spaceBetween: 24,
                  },
                }}
                className="reels-swiper"
              >
                {reels.map((reel, index) => (
                  <SwiperSlide
                    key={reel.id}
                    className="!w-[280px] sm:!w-[320px] md:!w-[380px] lg:!w-[420px]"
                  >
                    {({ isActive }) => (
                      <div
                        className={`cursor-pointer transition-all duration-500 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                        }`}
                        onClick={() => {
                          if (isActive) {
                            handleSlideClick();
                          }
                        }}
                      >
                        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
                          <video
                            src={reel.video}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            autoPlay={isActive}
                            onCanPlay={(e) => {
                              if (isActive) {
                                (e.target as HTMLVideoElement).play().catch(() => {});
                              }
                            }}
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                              </div>
                            </div>
                          )}
                        </div>

                        <p className="text-center mt-4 text-sm md:text-base font-medium text-gray-300 tracking-wider">
                          {reel.label}
                        </p>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Controls - Desktop Only */}
            <div className="hidden md:flex justify-end items-center gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                aria-label="Next reel"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedVideo && (
        <VideoLightbox
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
