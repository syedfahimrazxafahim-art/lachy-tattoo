import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Maximize2, X } from 'lucide-react';
import { TATTOO_PORTFOLIO, TattooItem } from '../data/tattooData';
import { CornerButton } from '../components/CornerButton';
import { LiquidText } from '../components/LiquidText';

interface PortfolioPageProps {
  onSelectTattoo: (item: TattooItem) => void;
  onBookTattoo: (item?: TattooItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectTattoo,
  onBookTattoo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Works (20)' },
    { id: 'realism', label: 'Black & Grey Realism' },
    { id: 'portraits', label: 'Portraits & Figures' },
    { id: 'fineline', label: 'Fine Line & Script' },
    { id: 'illustrative', label: 'Custom Illustrative' },
    { id: 'sleeves', label: 'Large Scale & Sleeves' },
  ];

  const filteredItems = useMemo(() => {
    return TATTOO_PORTFOLIO.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.placement.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          Master Artworks
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
          Tattoo <LiquidText text="Portfolio Gallery" variant="gold" />
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Every piece in our gallery represents a custom collaboration between client and artist. Built with high-contrast grey wash saturation, crisp single-needle detailing, and anatomical fit.
        </p>
      </div>

      {/* Filter Bar & Search Input */}
      <div className="mb-10 space-y-4">
        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-zinc-950 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                    : 'bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Field */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by placement, portrait, floral, sleeve..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400/80 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Gallery Grid (Preserving All 20 Real Images) */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center rounded-2xl bg-zinc-950/60 border border-zinc-800">
          <p className="text-zinc-400 text-sm mb-4">No tattoos found matching your search filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-amber-400 font-semibold uppercase cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTattoo(item)}
              className="group relative rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Artwork Media Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Inspect Button Overlay */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-zinc-300 group-hover:text-amber-300 transition-colors opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Placement Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] text-amber-300 font-mono tracking-wider uppercase mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Metadata and Actions */}
              <div className="p-4 space-y-3 bg-zinc-950 border-t border-zinc-900">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Placement:</span>
                  <span className="text-zinc-200 font-medium">{item.placement}</span>
                </div>

                <div className="pt-2 border-t border-zinc-900 flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTattoo(item);
                    }}
                    className="text-xs text-zinc-400 hover:text-amber-300 transition-colors"
                  >
                    Inspect
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookTattoo(item);
                    }}
                    className="px-3 py-1.5 rounded bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Book Style</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Conversion Banner */}
      <div className="mt-16 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-display font-bold text-white mb-2">
          Have a Custom Concept in Mind?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6">
          Lachy works directly with reference photos and custom ideas to craft one-of-a-kind tattoos.
        </p>
        <CornerButton
          variant="primary"
          size="md"
          onClick={() => onBookTattoo(undefined)}
        >
          Start Custom Booking
        </CornerButton>
      </div>
    </div>
  );
};
