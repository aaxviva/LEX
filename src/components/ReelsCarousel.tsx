import React, { useState, useRef, useEffect } from 'react';
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
  { id: 6, video: '/videos/reels_6.mp4', label: 'BENTLEY' },
  { id: 1, video: '/videos/dent_.mp4', label: 'DENT CLINIC' },
  { id: 2, video: '/videos/reels_2.mp4', label: 'INFLUENCER' },
  { id: 3, video: '/videos/reels_3.mp4', label: 'LUXURY RESTAURANT' },
  { id: 4, video: '/videos/reels_4.mp4', label: 'PORSCHE' },
  { id: 5, video: '/videos/art.mp4', label: 'COMMUNITY' },
];

export default function ReelsCarousel() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: SwiperCore) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === realIndex) {
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  useEffect(() => {
    videoRefs.current[0]?.play().catch(() => {});
  }, []);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <>
      <section className="bg-black py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-benzin mb-12 md:mb-16">REELS</h2>

          <div className="space-y-8 md:space-y-12">
            <div className="relative">
              <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={20}
                grabCursor={true}
                loop={true}
                initialSlide={0}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  320: { spaceBetween: 12 },
                  768: { spaceBetween: 20 },
                  1024: { spaceBetween: 24 },
                }}
                className="reels-swiper"
              >
                {reels.map((reel, index) => (
                  <SwiperSlide
                    key={reel.id}
                    className="!w-[200px] sm:!w-[240px] md:!w-[280px] lg:!w-[320px]"
                  >
                    {({ isActive }) => (
                      <div
                        className={`cursor-pointer transition-all duration-500 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                        }`}
                        onClick={() => {
                          if (isActive) setSelectedVideo(reel.video);
                        }}
                      >
                        <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden group">
                          <video
                            ref={(el) => { videoRefs.current[index] = el; }}
                            src={reel.video}
                            className="w-full h-full object-cover"
                            autoPlay={index === 0}
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
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

      {selectedVideo && (
        <VideoLightbox
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
