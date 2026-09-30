/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { StylesPage } from './pages/StylesPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessFaqPage } from './pages/ProcessFaqPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { TATTOO_PORTFOLIO, TattooItem } from './data/tattooData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedTattoo, setSelectedTattoo] = useState<TattooItem | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    style?: string;
    item?: TattooItem | null;
  }>({});

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTattoo = (item: TattooItem) => {
    setSelectedTattoo(item);
  };

  const handleBookTattoo = (itemOrStyle?: TattooItem | string) => {
    if (typeof itemOrStyle === 'string') {
      setBookingPrefill({ style: itemOrStyle, item: null });
    } else if (itemOrStyle) {
      setBookingPrefill({ style: itemOrStyle.categoryLabel, item: itemOrStyle });
    } else {
      setBookingPrefill({});
    }
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070709] text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Multi-Page Route Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectTattoo={handleSelectTattoo}
            onBookTattoo={handleBookTattoo}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectTattoo={handleSelectTattoo}
            onBookTattoo={handleBookTattoo}
          />
        )}

        {currentPage === 'styles' && (
          <StylesPage
            onSelectTattoo={handleSelectTattoo}
            onBookTattoo={(style) => handleBookTattoo(style)}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'process' && <ProcessFaqPage onNavigate={handleNavigate} />}

        {currentPage === 'booking' && (
          <BookingPage
            initialStyle={bookingPrefill.style}
            initialItem={bookingPrefill.item}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Global High-Resolution Lightbox Modal */}
      {selectedTattoo && (
        <LightboxModal
          item={selectedTattoo}
          allItems={TATTOO_PORTFOLIO}
          onClose={() => setSelectedTattoo(null)}
          onBookItem={(item) => {
            setSelectedTattoo(null);
            handleBookTattoo(item);
          }}
          onNavigateItem={(item) => setSelectedTattoo(item)}
        />
      )}

      {/* Minimal Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
