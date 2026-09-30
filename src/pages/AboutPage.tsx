import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2, MapPin, Phone, Mail, Sparkles, Droplets } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tattooData';
import { CornerButton } from '../components/CornerButton';
import { LiquidText } from '../components/LiquidText';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          Identity & Craft
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
          About <LiquidText text="Lachy Tattoo" variant="gold" />
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Custom tattoo artistry rooted in anatomical precision, contrast longevity, and hospital-grade hygiene in Las Vegas, Nevada.
        </p>
      </div>

      {/* Main Story & Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 p-2 bg-zinc-950 shadow-2xl">
            <img
              src="https://res.cloudinary.com/fzobzdco/image/upload/v1790808830/469957929_18253040512283625_2578003491637497577_n.jpg"
              alt="Lachy Tattoo Las Vegas"
              referrerPolicy="no-referrer"
              className="w-full h-[480px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Lachy Tattoo Seal"
                  className="w-10 h-10 rounded-full border border-amber-400/80"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-white">Lachy (Lázaro León)</div>
                  <div className="text-xs text-amber-400 font-mono">Las Vegas, NV · Custom Tattoo Artist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Artist Philosophy
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-tight">
            Skin is a Living Canvas with Its Own Kinetics
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Tattooing is not merely transferring a 2D image onto a surface—it is sculpting light, dark, and negative space across moving muscle, bone ridges, and natural skin tension.
          </p>

          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            At Lachy Tattoo, every piece begins with a dedicated dialogue regarding the client's concept, emotional resonance, and exact body placement. Whether rendering a hyper-detailed grey wash portrait, single-needle floral spine garland, or full chest composition, the artwork is custom-drafted to look as sharp in twenty years as it does on session day.
          </p>

          {/* Key Ethos Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
                <Droplets className="w-4 h-4 text-amber-400" />
                <span>Custom Ink Dilutions</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Formulated grey wash gradients prevent premature muddying as the pigment settles beneath the epidermis.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
                <Heart className="w-4 h-4 text-amber-400" />
                <span>Client Comfort First</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Quiet, focused studio environment with ergonomic positioning and pace tailored to your pain tolerance.
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <CornerButton
              variant="primary"
              size="md"
              onClick={() => onNavigate('booking')}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Consult With Lachy
            </CornerButton>
          </div>
        </div>
      </div>

      {/* Hygiene & Clinical Standards Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/80 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sterilization Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Clinical Hygiene & Safety
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Your safety, comfort, and hygienic integrity are strictly maintained under hospital-grade protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <h3 className="text-sm font-semibold text-white mb-2">100% Single-Use Cartridges</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sterile, factory-sealed needle cartridges opened directly in front of you. Zero re-used or re-sterilized needle assemblies.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <h3 className="text-sm font-semibold text-white mb-2">Medical Barrier Protection</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Complete disposable machine cord sleeving, dental bib drapes, and hospital-grade EPA disinfectant wipe-downs between all clients.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <h3 className="text-sm font-semibold text-white mb-2">Medical Dermal Bandaging</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Direct application of breathable waterproof protective film (SecondSkin/Saniderm) for optimal plasma retention and fast healing.
            </p>
          </div>
        </div>
      </div>

      {/* Studio Location & Contact Anchor */}
      <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-display font-bold text-white mb-2">
          Visiting Las Vegas, Nevada?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
          Whether you are a Las Vegas local or traveling to Nevada for a tattoo session, we welcome advance consultation inquiries.
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap text-xs font-mono text-zinc-300">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{BUSINESS_INFO.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
