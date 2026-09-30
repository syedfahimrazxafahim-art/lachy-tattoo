import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tattooData';
import { CornerButton } from './CornerButton';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050507] border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3.5">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Lachy Tattoo Logo"
                className="w-12 h-12 rounded-full border border-amber-400/50 p-0.5 object-cover bg-zinc-900"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-white tracking-wider">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-amber-400/90 font-mono tracking-wider">
                  {BUSINESS_INFO.location}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Elevated custom tattoo craftsmanship in Las Vegas. Specializing in high-contrast black & grey realism, fine line elegance, realistic portraits, and anatomically fitted body masterworks.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400/90 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hospital-Grade Sterilization Standards</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-semibold">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs tracking-wider">
              {['home', 'portfolio', 'styles', 'about', 'process', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
                  >
                    {page === 'process' ? 'Process & FAQ' : page === 'styles' ? 'Tattoo Styles' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Direct Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-semibold">
              Studio Inquiries
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors group break-all"
                >
                  <Mail className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location} (By Appointment & Consultation)</span>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors mt-2"
                >
                  <span>Visit Official Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Booking CTA Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-semibold">
              Ready for Ink?
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Consultations for upcoming sessions in Las Vegas are open. Custom designs require advance reservation.
            </p>
            <CornerButton
              variant="primary"
              size="md"
              className="w-full"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => {
                onNavigate('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Start Consultation
            </CornerButton>
          </div>
        </div>

        {/* Bottom Bar with Metadata & Clean Separators */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {currentYear} {BUSINESS_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>{BUSINESS_INFO.location}</span>
            <span aria-hidden="true">·</span>
            <span>Custom Tattoo Craftsmanship</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('process')}
              className="hover:text-zinc-400 transition-colors"
            >
              Aftercare Protocol
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-zinc-400 transition-colors"
            >
              Studio Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
