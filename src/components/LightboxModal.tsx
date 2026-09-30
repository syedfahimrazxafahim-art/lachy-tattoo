import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, Sparkles, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';
import { TattooItem } from '../data/tattooData';
import { CornerButton } from './CornerButton';

interface LightboxModalProps {
  item: TattooItem | null;
  allItems: TattooItem[];
  onClose: () => void;
  onBookItem: (item: TattooItem) => void;
  onNavigateItem: (item: TattooItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onBookItem,
  onNavigateItem,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const next = allItems[(currentIndex + 1) % allItems.length];
        onNavigateItem(next);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const prev = allItems[(currentIndex - 1 + allItems.length) % allItems.length];
        onNavigateItem(prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, allItems, onClose, onNavigateItem]);

  if (!item) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        {/* Close Button Top-Right */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Column */}
        <div className="relative flex-1 bg-zinc-900/50 flex items-center justify-center p-4 md:p-8 overflow-hidden min-h-[340px] md:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className={`max-h-[75vh] w-auto max-w-full object-contain rounded-lg transition-transform duration-300 ${
              isZoomed ? 'scale-135 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Quick controls over image */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-700 text-xs text-zinc-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
              <span>{isZoomed ? 'Fit to Screen' : 'Zoom 100%'}</span>
            </button>
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-700 text-xs text-zinc-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>

          {/* Previous / Next Arrow buttons on Lightbox */}
          <button
            onClick={() => {
              const currentIndex = allItems.findIndex((i) => i.id === item.id);
              const prev = allItems[(currentIndex - 1 + allItems.length) % allItems.length];
              onNavigateItem(prev);
            }}
            aria-label="Previous artwork"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              const currentIndex = allItems.findIndex((i) => i.id === item.id);
              const next = allItems[(currentIndex + 1) % allItems.length];
              onNavigateItem(next);
            }}
            aria-label="Next artwork"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Artwork Spec & Inquiry Column */}
        <div className="w-full md:w-88 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 bg-zinc-950">
          <div>
            {/* Clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono tracking-wider mb-2">
              <span>{item.categoryLabel}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{item.placement}</span>
            </div>

            <h2 className="text-2xl font-display font-bold text-white tracking-tight mb-3">
              {item.title}
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            {item.details && item.details.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                  Technical Specifications
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800 mb-6">
              <div className="text-xs text-zinc-400 mb-1">Artist Studio</div>
              <div className="text-sm font-semibold text-zinc-200">Lachy Tattoo · Las Vegas, NV</div>
              <div className="text-xs text-zinc-500 mt-1">100% Custom anatomical composition</div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/80">
            <CornerButton
              variant="primary"
              size="lg"
              className="w-full"
              icon={<Sparkles className="w-4 h-4" />}
              onClick={() => {
                onClose();
                onBookItem(item);
              }}
            >
              Inquire About This Style
            </CornerButton>
          </div>
        </div>
      </div>
    </div>
  );
};
