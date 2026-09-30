import React, { useState, useEffect } from 'react';
import { Calendar, Upload, Sparkles, CheckCircle2, Phone, Mail, Clock, AlertCircle, Image as ImageIcon, MapPin, X } from 'lucide-react';
import { BUSINESS_INFO, TattooItem } from '../data/tattooData';
import { CornerButton } from '../components/CornerButton';
import { LiquidText } from '../components/LiquidText';

interface BookingPageProps {
  initialStyle?: string;
  initialItem?: TattooItem | null;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialStyle,
  initialItem,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    isLocal: 'local',
    tattooStyle: initialStyle || (initialItem ? initialItem.categoryLabel : 'Black & Grey Realism'),
    placement: initialItem ? initialItem.placement : 'Forearm / Inner Arm',
    size: 'Medium (4" – 7")',
    colorPreference: 'Black & Grey Wash Only',
    preferredDate: '',
    timeframe: 'Next 2–4 Weeks',
    conceptDescription: initialItem ? `Inspired by ${initialItem.title} - ` : '',
    budgetRange: '$400 – $800',
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({
        ...prev,
        tattooStyle: initialItem.categoryLabel,
        placement: initialItem.placement,
        conceptDescription: `Interested in a piece styled similarly to "${initialItem.title}". `,
      }));
      setUploadedFiles([initialItem.imageUrl]);
    } else if (initialStyle) {
      setFormData((prev) => ({
        ...prev,
        tattooStyle: initialStyle,
      }));
    }
  }, [initialItem, initialStyle]);

  const placements = [
    'Forearm / Inner Arm',
    'Outer Bicep / Shoulder',
    'Full Arm Sleeve',
    'Chest / Sternum',
    'Full Back / Spine',
    'Thigh / Quadriceps',
    'Calf / Lower Leg',
    'Ribcage / Torso',
    'Hand / Wrist / Ankle',
    'Other / Custom Placement',
  ];

  const styles = [
    'Black & Grey Realism',
    'Portraits & Figures',
    'Fine Line & Script',
    'Custom Illustrative',
    'Full Sleeves & Large Scale',
    'Cover-Up Consultation',
  ];

  const sizes = [
    'Small (2" – 4")',
    'Medium (4" – 7")',
    'Large / Half-Sleeve (8" – 12")',
    'Full Sleeve / Multi-Session',
    'Full Back / Torso Piece',
  ];

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const simulatedUrl = URL.createObjectURL(file);
      setUploadedFiles((prev) => [...prev, simulatedUrl]);
    }
  };

  const removeUploadedFile = (idx: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="w-full py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
          Consultation Request
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-4">
          Book Your <LiquidText text="Tattoo Session" variant="gold" />
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Submit your tattoo concept, sizing, and placement details. Lachy reviews each request for anatomical fit and design longevity.
        </p>
      </div>

      {isSubmitted ? (
        /* Submission Success / Realistic Prototype Feedback */
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-amber-500/40 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400 flex items-center justify-center mx-auto text-amber-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Consultation Request Received
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your tattoo request for <span className="text-amber-400 font-medium">{formData.tattooStyle}</span> on the <span className="text-amber-400 font-medium">{formData.placement}</span> has been logged for review in Las Vegas, NV.
          </p>

          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left max-w-lg mx-auto space-y-2 text-xs font-mono text-zinc-400">
            <div className="flex justify-between">
              <span>Client:</span>
              <span className="text-zinc-200">{formData.fullName} ({formData.phone})</span>
            </div>
            <div className="flex justify-between">
              <span>Email:</span>
              <span className="text-zinc-200">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span>Approx. Size:</span>
              <span className="text-zinc-200">{formData.size}</span>
            </div>
            <div className="flex justify-between">
              <span>Timeframe:</span>
              <span className="text-zinc-200">{formData.timeframe}</span>
            </div>
            <div className="flex justify-between">
              <span>Location Status:</span>
              <span className="text-zinc-200">{formData.isLocal === 'local' ? 'Las Vegas Local' : 'Traveling Visitor'}</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 max-w-lg mx-auto flex items-center gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Prototype Note: This is an interactive inquiry demonstration. For immediate artist communication, call 1 (702) 409-2728 or email directly.</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200 hover:text-amber-400 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Studio Directly</span>
            </a>

            <CornerButton
              variant="primary"
              size="md"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  isLocal: 'local',
                  tattooStyle: 'Black & Grey Realism',
                  placement: 'Forearm / Inner Arm',
                  size: 'Medium (4" – 7")',
                  colorPreference: 'Black & Grey Wash Only',
                  preferredDate: '',
                  timeframe: 'Next 2–4 Weeks',
                  conceptDescription: '',
                  budgetRange: '$400 – $800',
                });
                setUploadedFiles([]);
              }}
            >
              Submit Another Inquiry
            </CornerButton>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/90 shadow-2xl space-y-10"
        >
          {/* Step 1: Style & Placement */}
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
              <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <span className="text-amber-400 font-mono">01.</span>
                <span>Tattoo Style & Placement</span>
              </h2>
              <span className="text-xs font-mono text-zinc-500">Step 1 of 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Tattoo Style *
                </label>
                <select
                  value={formData.tattooStyle}
                  onChange={(e) => setFormData({ ...formData, tattooStyle: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  {styles.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Anatomical Placement *
                </label>
                <select
                  value={formData.placement}
                  onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  {placements.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Sizing & Concept */}
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
              <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <span className="text-amber-400 font-mono">02.</span>
                <span>Dimensions & Concept Idea</span>
              </h2>
              <span className="text-xs font-mono text-zinc-500">Step 2 of 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Approximate Size *
                </label>
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  {sizes.map((sz) => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Color / Wash Preference
                </label>
                <select
                  value={formData.colorPreference}
                  onChange={(e) => setFormData({ ...formData, colorPreference: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Black & Grey Wash Only">Black & Grey Wash Only (Specialty)</option>
                  <option value="Black & Grey + Opaque White Highlights">Black & Grey + Opaque White Highlights</option>
                  <option value="Cover-Up Assessment Needed">Cover-Up Assessment Needed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                Describe Your Tattoo Vision *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe your subject, key elements, mood, references, and any personal meaning..."
                value={formData.conceptDescription}
                onChange={(e) => setFormData({ ...formData, conceptDescription: e.target.value })}
                className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 leading-relaxed"
              />
            </div>
          </div>

          {/* Step 3: Reference Image Upload Prototype */}
          <div className="space-y-4">
            <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
              <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <span className="text-amber-400 font-mono">03.</span>
                <span>Reference Images (Optional)</span>
              </h2>
              <span className="text-xs font-mono text-zinc-500">Step 3 of 4</span>
            </div>

            <div className="border-2 border-dashed border-zinc-800 hover:border-amber-400/60 rounded-2xl p-6 text-center transition-colors bg-zinc-900/30">
              <Upload className="w-8 h-8 text-zinc-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-zinc-200 mb-1">
                Upload Tattoo References or Body Placement Photos
              </div>
              <div className="text-xs text-zinc-500 mb-4">
                Supported formats: JPG, PNG, WEBP (Max 15MB)
              </div>
              <label className="inline-block px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-amber-300 cursor-pointer transition-colors border border-zinc-700">
                <span>Select Files from Device</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSimulatedUpload}
                  className="hidden"
                />
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="flex items-center gap-3 flex-wrap pt-2">
                {uploadedFiles.map((url, idx) => (
                  <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden border border-amber-400/60 group">
                    <img src={url} alt="Uploaded reference" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeUploadedFile(idx)}
                      className="absolute top-1 right-1 p-1 bg-black/80 rounded-full text-white hover:text-red-400"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Step 4: Contact & Scheduling */}
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
              <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <span className="text-amber-400 font-mono">04.</span>
                <span>Contact & Availability</span>
              </h2>
              <span className="text-xs font-mono text-zinc-500">Step 4 of 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(702) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="yourname@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Location Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isLocal: 'local' })}
                    className={`py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border cursor-pointer ${
                      formData.isLocal === 'local'
                        ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    Las Vegas Local
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isLocal: 'visitor' })}
                    className={`py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border cursor-pointer ${
                      formData.isLocal === 'visitor'
                        ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    Visiting Nevada
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Desired Timeframe
                </label>
                <select
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="Next 1–2 Weeks">Next 1–2 Weeks</option>
                  <option value="Next 2–4 Weeks">Next 2–4 Weeks</option>
                  <option value="Next 1–2 Months">Next 1–2 Months</option>
                  <option value="Specific Travel Dates (Noted in message)">Specific Travel Dates</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Button & Security Note */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Studio response within 24–48 hours</span>
            </div>

            <CornerButton
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              icon={<Calendar className="w-4 h-4" />}
            >
              {isLoading ? 'Processing Request...' : 'Submit Consultation Request'}
            </CornerButton>
          </div>
        </form>
      )}
    </div>
  );
};
