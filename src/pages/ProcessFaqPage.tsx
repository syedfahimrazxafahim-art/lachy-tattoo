import React, { useState } from 'react';
import { ChevronDown, Sparkles, ShieldCheck, Clock, HelpCircle, CheckCircle2, Search } from 'lucide-react';
import { TATTOO_PROCESS_STEPS, FAQ_ITEMS, BUSINESS_INFO } from '../data/tattooData';
import { CornerButton } from '../components/CornerButton';
import { LiquidText } from '../components/LiquidText';

interface ProcessFaqPageProps {
  onNavigate: (page: string) => void;
}

export const ProcessFaqPage: React.FC<ProcessFaqPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-01');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      faqSearch.trim() === '' ||
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          Transparency & Guidance
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
          The Process & <LiquidText text="Frequently Asked Questions" variant="gold" />
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Everything you need to know about preparing for your session, what happens during your appointment, and how to properly heal your new ink in Las Vegas, NV.
        </p>
      </div>

      {/* 1. The 4-Step Journey In-Depth */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
            Studio Protocol
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            From First Idea to Healed Art
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TATTOO_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/40 to-transparent" />
              <div>
                <div className="text-3xl font-mono font-bold text-amber-400 mb-4">
                  {step.step}.
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-light mb-4">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-400 leading-relaxed">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Day-by-Day Aftercare Protocol */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/90 mb-24 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Healing Guidelines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Tattoo Aftercare & Preservation
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            A tattoo's longevity is 50% artist technique and 50% how carefully you protect it during the first 3 weeks of cellular healing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              Phase 1: Days 1 – 4
            </div>
            <h3 className="text-base font-bold text-white mb-3">Dermal Shield & Plasma Stage</h3>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Keep medical bandage (SecondSkin) on for 3–4 days as instructed.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Plasma build-up under film is normal; do not puncture.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Shower gently with lukewarm water. Avoid hot baths.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              Phase 2: Days 5 – 14
            </div>
            <h3 className="text-base font-bold text-white mb-3">Peeling & Hydration Stage</h3>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Remove film under running warm water slowly.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Wash with unscented antibacterial soap (Dial Gold).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Apply ultra-thin layer of fragrance-free lotion 2-3x daily.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
              Phase 3: Days 15+
            </div>
            <h3 className="text-base font-bold text-white mb-3">Long-Term UV Protection</h3>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Skin will enter 'silver skin' phase as collagen settles.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Apply SPF 50+ sunscreen whenever exposed to Nevada desert sun.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Regular hydration maintains crisp black pigment contrast forever.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Searchable FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
            Questions & Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-center">
            {[
              { id: 'all', label: 'All Topics' },
              { id: 'booking', label: 'Booking & Rates' },
              { id: 'prep', label: 'Prep & Travel' },
              { id: 'process', label: 'Process & Custom Art' },
              { id: 'aftercare', label: 'Aftercare' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-amber-400 text-zinc-950 font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (deposits, travel, pain, healing)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-display font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-zinc-900 bg-zinc-900/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 mb-4">
            Still have specific questions about your upcoming tattoo concept?
          </p>
          <CornerButton
            variant="primary"
            size="md"
            onClick={() => onNavigate('booking')}
          >
            Submit a Booking Inquiry
          </CornerButton>
        </div>
      </div>
    </div>
  );
};
