import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tattooData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'styles', label: 'TATTOO STYLES' },
    { id: 'about', label: 'ABOUT THE ARTIST' },
    { id: 'process', label: 'PROCESS & FAQ' },
    { id: 'contact', label: 'STUDIO & CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#0D0D0D] border-b ${
        isScrolled
          ? 'border-zinc-800/90 shadow-[0_8px_30px_rgba(0,0,0,0.85)] py-0.5'
          : 'border-zinc-800/60'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Section (Logo & Branding) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] rounded-lg select-none"
        >
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#FF9900]/70 p-0.5 bg-black shadow-[0_0_15px_rgba(255,153,0,0.25)] shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Lachy Tattoo Logo"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#FF9900] transition-colors whitespace-nowrap leading-tight">
              LACHY TATTOO
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-sans font-medium">
              LAS VEGAS, NV
            </span>
          </div>
        </button>

        {/* Center Section (Navigation Menu) */}
        <nav className="hidden xl:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 text-[13px] tracking-widest font-sans font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap group ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {/* Active & Hover Underline Effect */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-full bg-[#FF9900] shadow-[0_0_10px_rgba(255,153,0,0.8)]'
                      : 'w-0 group-hover:w-full bg-[#FF9900]/60'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Section (Call to Action / CTA) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* CTA Button: Vibrant amber/orange filled button with calendar icon */}
          <button
            onClick={() => handleNavClick('booking')}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#FF9900] hover:bg-[#ffaa22] active:bg-[#e68a00] text-zinc-950 font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,153,0,0.35)] hover:shadow-[0_0_25px_rgba(255,153,0,0.5)] active:scale-98 select-none"
          >
            <Calendar className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
            <span className="whitespace-nowrap">BOOK A TATTOO</span>
          </button>

          {/* Hamburger Menu on smaller screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="xl:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF9900]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-20 bg-[#0D0D0D]/98 border-b border-zinc-800 backdrop-blur-2xl p-6 shadow-2xl transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-left text-xs sm:text-sm font-sans tracking-widest font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#FF9900]' : 'text-zinc-600'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-mono font-medium text-white hover:text-[#FF9900]"
              >
                <Phone className="w-4 h-4 text-[#FF9900]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleNavClick('booking')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FF9900] hover:bg-[#ffaa22] text-zinc-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(255,153,0,0.3)]"
              >
                <Calendar className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
                <span>BOOK A TATTOO</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

