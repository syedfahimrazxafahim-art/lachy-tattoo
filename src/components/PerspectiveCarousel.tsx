import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { TattooItem } from '../data/tattooData';

interface PerspectiveCarouselProps {
  items: TattooItem[];
  onSelectImage?: (item: TattooItem) => void;
  onBookItem?: (item: TattooItem) => void;
}

export const PerspectiveCarousel: React.FC<PerspectiveCarouselProps> = ({
  items,
  onSelectImage,
  onBookItem,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto py-10 px-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Perspective Stage */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[600px] flex items-center justify-center perspective-container overflow-hidden">
        {items.map((item, index) => {
          // Calculate offset relative to activeIndex in a circular manner
          const length = items.length;
          let offset = (index - activeIndex + length) % length;
          if (offset > length / 2) {
            offset -= length;
          }

          // Determine visibility and 3D positioning
          const isCenter = offset === 0;
          const isNear = Math.abs(offset) === 1;
          const isFar = Math.abs(offset) === 2;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          // Compute transform values for VengenceUI Perspective Carousel feel
          const translateX = offset * 280; // distance apart
          const translateZ = isCenter ? 80 : -140 * Math.abs(offset);
          const rotateY = offset * -18; // 3D angle
          const scale = isCenter ? 1 : Math.max(0.72, 1 - Math.abs(offset) * 0.16);
          const opacity = isCenter ? 1 : isNear ? 0.7 : 0.35;
          const zIndex = 30 - Math.abs(offset) * 10;

          return (
            <div
              key={item.id}
              onClick={() => {
                if (isCenter) {
                  onSelectImage?.(item);
                } else {
                  setActiveIndex(index);
                }
              }}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
              }}
              className={`absolute top-0 bottom-0 my-auto w-[270px] sm:w-[320px] md:w-[380px] h-[400px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out shadow-2xl border ${
                isCenter
                  ? 'border-amber-400/60 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(234,179,8,0.2)] ring-1 ring-amber-400/30'
                  : 'border-zinc-800/80 bg-zinc-950/60'
              }`}
            >
              {/* Artwork Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Contrast Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Center Card Corner Brackets */}
              {isCenter && (
                <>
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none" />
                </>
              )}

              {/* Card Meta Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left transition-all duration-300">
                <div className="flex items-center gap-2 text-xs text-amber-300/90 font-mono mb-1.5">
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="text-zinc-400">{item.placement}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide text-balance line-clamp-1 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-300/80 line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {isCenter && (
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectImage?.(item);
                      }}
                      className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-amber-300 font-medium transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Artwork</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookItem?.(item);
                      }}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Book Style</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Navigation Controls */}
      <div className="flex items-center justify-between max-w-md mx-auto mt-4 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous tattoo artwork"
          className="p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-amber-400 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicator dots */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-amber-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next tattoo artwork"
          className="p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-amber-400 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
