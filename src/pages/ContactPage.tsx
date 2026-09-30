import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tattooData';
import { CornerButton } from '../components/CornerButton';
import { LiquidText } from '../components/LiquidText';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', subject: 'General Question', message: '' });
    }, 2000);
  };

  return (
    <div className="w-full py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          Direct Connect
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
          Studio & <LiquidText text="Contact Information" variant="gold" />
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Connect directly with Lachy Tattoo in Las Vegas, NV for session inquiries, custom art discussions, and studio appointment scheduling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info & Social */}
        <div className="lg:col-span-5 space-y-8 text-left">
          {/* Studio Info Card */}
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6 shadow-xl">
            <div className="flex items-center gap-4 pb-6 border-b border-zinc-800">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Lachy Tattoo Logo"
                className="w-14 h-14 rounded-full border border-amber-400/80 p-0.5 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h2 className="text-xl font-display font-bold text-white">{BUSINESS_INFO.name}</h2>
                <div className="text-xs text-amber-400 font-mono">{BUSINESS_INFO.location}</div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-zinc-400">{BUSINESS_INFO.location}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Private studio setup · By Appointment Only</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Phone / Text</div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-amber-400 hover:text-amber-300 font-mono text-sm block mt-0.5"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email Consultation</div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-amber-400 hover:text-amber-300 font-mono text-xs sm:text-sm block mt-0.5 break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Operating Hours</div>
                  <div className="text-zinc-400">{BUSINESS_INFO.hours}</div>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <div className="pt-6 border-t border-zinc-800">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-blue-300 font-semibold text-xs flex items-center justify-between transition-colors"
              >
                <span>Connect on Official Facebook Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visitor Guidelines */}
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Studio Visit Guidelines</span>
            </div>
            <p>• All appointments are private to ensure undivided focus on your piece.</p>
            <p>• Valid government photo ID (18+) required for all tattoo services.</p>
            <p>• Clean, comfortable attire with easy access to the tattoo placement area recommended.</p>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Send a Direct Message
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mb-8 font-light">
              Have a quick question about tattoo rates, availability, or design ideas? Send a note below.
            </p>

            {sent ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Sent Successfully</h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Thank you for reaching out to Lachy Tattoo in Las Vegas. We will reply to your email or phone shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-amber-400 uppercase font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(702) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Inquiry Topic
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Tattoo Pricing Estimate">Tattoo Pricing / Deposit Question</option>
                    <option value="Cover-Up Assessment">Cover-Up Assessment</option>
                    <option value="Travel / Las Vegas Booking">Traveler Booking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can Lachy help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <CornerButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Direct Message
                  </CornerButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
