import React from 'react';
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TATTOO_PORTFOLIO, TATTOO_STYLES, DEMO_TESTIMONIALS, TATTOO_PROCESS_STEPS, BUSINESS_INFO, TattooItem } from '../data/tattooData';
import { LiquidText } from '../components/LiquidText';
import { CornerButton } from '../components/CornerButton';
import { PerspectiveCarousel } from '../components/PerspectiveCarousel';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectTattoo: (item: TattooItem) => void;
  onBookTattoo: (item?: TattooItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectTattoo,
  onBookTattoo,
}) => {
  const featuredTattoos = TATTOO_PORTFOLIO.filter((t) => t.featured).slice(0, 7);
  const heroTattoos = TATTOO_PORTFOLIO.slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH CINEMATIC BACKGROUND IMAGE */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/fzobzdco/image/upload/v1790810289/e43b3587-232e-46fc-8610-46bd5b25decc.jpg')`,
        }}
      >
        {/* Cinematic Scrim & Contrast Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/95 via-[#070709]/80 to-[#070709]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/80 pointer-events-none" />

        {/* Ambient subtle warm gold accent glow */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#FF9900]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-[1.05] text-balance">
              Lachy Tattoo <br />
              <LiquidText text="Crafted in Skin" variant="gold" />
            </h1>

            <p className="text-base sm:text-lg text-zinc-200 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Master custom black & grey realism, surgical fine line, realistic portraits, and anatomically engineered sleeve compositions in Las Vegas, NV. Every tattoo is custom-designed for lifelong contrast and flow.
            </p>

            {/* Corner Button Primary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-7">
              <CornerButton
                variant="primary"
                size="lg"
                onClick={() => onBookTattoo()}
                icon={<Calendar className="w-4 h-4" />}
              >
                Book a Tattoo
              </CornerButton>

              <CornerButton
                variant="outline"
                size="lg"
                onClick={() => onNavigate('portfolio')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Portfolio
              </CornerButton>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Grid with real tattoo imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-2 gap-3.5 p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-2xl backdrop-blur-md">
              {heroTattoos.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => onSelectTattoo(item)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-[#FF9900]/90 transition-all duration-500 ${
                    index === 0 ? 'h-64 sm:h-72' : index === 1 ? 'h-52 sm:h-60' : index === 2 ? 'h-52 sm:h-60 -mt-12' : 'h-64 sm:h-72 -mt-4'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-[10px] text-[#FF9900] font-mono uppercase tracking-wider">
                      {item.categoryLabel}
                    </div>
                    <div className="text-xs font-display font-bold text-white line-clamp-1">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}

              {/* Central Floating Logo Stamp */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950 border-2 border-[#FF9900]/90 shadow-[0_0_30px_rgba(255,153,0,0.35)]">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Lachy Tattoo Seal"
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORKS — PERSPECTIVE CAROUSEL */}
      <section className="py-20 bg-zinc-950/60 border-t border-b border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
            Featured Tattoo Masterpieces
          </h2>

          <p className="text-sm text-zinc-400 max-w-xl mx-auto mt-2 font-light">
            Explore recent black & grey realism, custom portraiture, and anatomical compositions crafted by Lachy.
          </p>
        </div>

        {/* 3D Perspective Carousel with drag/click interaction */}
        <PerspectiveCarousel
          items={featuredTattoos}
          onSelectImage={onSelectTattoo}
          onBookItem={(item) => onBookTattoo(item)}
        />

        <div className="text-center mt-6">
          <CornerButton
            variant="secondary"
            size="md"
            onClick={() => onNavigate('portfolio')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View Complete 20-Piece Portfolio
          </CornerButton>
        </div>
      </section>

      {/* 3. TATTOO STYLES & SPECIALTIES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Artistic Mastery
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
              Tattoo Styles & Craftsmanship
            </h2>
          </div>
          <button
            onClick={() => onNavigate('styles')}
            className="text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>Learn More About Techniques</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TATTOO_STYLES.slice(0, 3).map((style) => (
            <div
              key={style.id}
              className="group relative rounded-2xl bg-zinc-950 border border-zinc-800/90 p-6 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-5 border border-zinc-800">
                  <img
                    src={style.heroImage}
                    alt={style.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-amber-300">
                    {style.name}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {style.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {style.tagline}
                </p>

                <div className="space-y-1.5 text-xs text-zinc-300 mb-6">
                  {style.techniques.slice(0, 2).map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-xs text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  View Style Gallery
                </button>
                <CornerButton
                  variant="primary"
                  size="sm"
                  onClick={() => onBookTattoo()}
                >
                  Book Style
                </CornerButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT LACHY TATTOO & ETHOS */}
      <section className="py-20 bg-zinc-950/70 border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 p-2 bg-zinc-900 shadow-2xl">
              <img
                src="https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/473710724_1291087408588124_5523621956844954902_n.jpg"
                alt="Lachy Tattoo Custom Artwork"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md">
                <div className="text-xs text-amber-400 font-mono">Artist Ethos</div>
                <div className="text-sm font-semibold text-white">Lázaro León (Lachy) · Las Vegas, NV</div>
                <div className="text-xs text-zinc-400 mt-1">Dedicated to the longevity of ink on living canvas.</div>
              </div>
            </div>
          </div>

          {/* Text & Ethos */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              The Artist & The Studio
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
              Anatomical Precision Meets Permanent Artistry
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Based in Las Vegas, Nevada, Lachy Tattoo is built on the belief that a great tattoo must work with the natural curvature and kinetics of the human body. We reject generic flash templates in favor of tailored, original compositions that look powerful today and retain pristine contrast for decades.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Clinical Sterilization</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Single-use disposable needle cartridges, medical barrier wraps, and certified sanitization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Custom Design Draft</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Every concept is scaled and customized to match your exact muscle geometry and tone.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <CornerButton
                variant="primary"
                size="md"
                onClick={() => onNavigate('about')}
              >
                Read Artist Story
              </CornerButton>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors"
              >
                Direct Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP TATTOO PROCESS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
            Seamless Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
            The Tattoo Journey
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            From initial consultation to healed masterpiece in Las Vegas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TATTOO_PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-bold text-amber-400/90 mb-3">
                  {step.step}.
                </div>
                <h3 className="text-base font-display font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROTOTYPE DEMO REVIEWS */}
      <section className="py-20 bg-zinc-950/80 border-t border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              Client Satisfaction
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
              Studio Impressions
            </h2>
            <div className="text-xs text-zinc-500 font-mono mt-1">
              (Prototype Demo Reviews for Interface Demonstration)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                    {'★'.repeat(review.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 text-left">
                  <div className="text-sm font-semibold text-white">{review.name}</div>
                  <div className="text-xs text-amber-400/90 font-mono mt-0.5">{review.style}</div>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    {review.location} · {review.sessionDetails}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL BOOKING CTA BANNER */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-amber-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Las Vegas, Nevada
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white text-balance">
              Transform Your Vision Into Permanent Art
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
              Appointments for custom tattoos in Las Vegas are booking now. Submit your ideas, placement preferences, and reference images to schedule a consultation with Lachy.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <CornerButton
                variant="primary"
                size="lg"
                onClick={() => onBookTattoo()}
                icon={<Calendar className="w-4 h-4" />}
              >
                Request Tattoo Consultation
              </CornerButton>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-xs font-mono text-zinc-300 hover:text-amber-400 transition-colors py-3 px-4 rounded-lg bg-zinc-900/80 border border-zinc-800"
              >
                Email: {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
