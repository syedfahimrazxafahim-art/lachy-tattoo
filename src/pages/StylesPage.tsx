import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Layers, Compass } from 'lucide-react';
import { TATTOO_STYLES, TATTOO_PORTFOLIO, TattooItem, TattooStyleInfo } from '../data/tattooData';
import { CornerButton } from '../components/CornerButton';
import { LiquidText } from '../components/LiquidText';

interface StylesPageProps {
  onSelectTattoo: (item: TattooItem) => void;
  onBookTattoo: (style?: string) => void;
}

export const StylesPage: React.FC<StylesPageProps> = ({
  onSelectTattoo,
  onBookTattoo,
}) => {
  return (
    <div className="w-full py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          Technical Discipline
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
          Tattoo <LiquidText text="Styles & Disciplines" variant="gold" />
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Understanding the specific needle configurations, ink dilution spectrums, and healing dynamics that define each tattooing specialty at Lachy Tattoo in Las Vegas, NV.
        </p>
      </div>

      {/* Styles Detailed Breakdown */}
      <div className="space-y-20">
        {TATTOO_STYLES.map((style, idx) => {
          const matchingArtworks = TATTOO_PORTFOLIO.filter(
            (item) => item.category === style.categoryKey
          ).slice(0, 3);

          const isEven = idx % 2 === 0;

          return (
            <div
              key={style.id}
              className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/90 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } space-y-4`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 h-[380px] sm:h-[440px]">
                    <img
                      src={style.heroImage}
                      alt={style.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-xs font-mono text-amber-300 tracking-wider uppercase mb-1">
                        Specialty Showcase
                      </div>
                      <div className="text-xl font-display font-bold text-white">
                        {style.name}
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Previews from this style */}
                  <div className="grid grid-cols-3 gap-3">
                    {matchingArtworks.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => onSelectTattoo(art)}
                        className="group relative h-24 rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-400 cursor-pointer transition-all"
                      >
                        <img
                          src={art.imageUrl}
                          alt={art.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } space-y-6 text-left`}
                >
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    Discipline {idx + 1} of {TATTOO_STYLES.length}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {style.name}
                  </h2>

                  <p className="text-sm font-light text-amber-300/90 leading-relaxed italic">
                    "{style.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {style.description}
                  </p>

                  {/* Techniques */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>Studio Technique & Execution</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      {style.techniques.map((tech, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Placements */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2 flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      <span>Optimal Anatomical Placement</span>
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap text-xs text-zinc-400 font-mono">
                      {style.recommendedPlacement.map((p, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center gap-4">
                    <CornerButton
                      variant="primary"
                      size="md"
                      onClick={() => onBookTattoo(style.name)}
                      icon={<Sparkles className="w-4 h-4" />}
                    >
                      Book {style.name}
                    </CornerButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
