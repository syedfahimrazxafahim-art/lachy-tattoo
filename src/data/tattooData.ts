export interface TattooItem {
  id: string;
  title: string;
  category: 'realism' | 'portraits' | 'illustrative' | 'fineline' | 'sleeves';
  categoryLabel: string;
  placement: string;
  imageUrl: string;
  description: string;
  featured?: boolean;
  aspectRatio?: string;
  details?: string[];
}

export interface TattooStyleInfo {
  id: string;
  name: string;
  categoryKey: 'realism' | 'portraits' | 'illustrative' | 'fineline' | 'sleeves';
  tagline: string;
  description: string;
  techniques: string[];
  recommendedPlacement: string[];
  heroImage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  style: string;
  rating: number;
  date: string;
  quote: string;
  sessionDetails: string;
  isDemo?: boolean;
}

export interface FaqItem {
  id: string;
  category: 'booking' | 'prep' | 'process' | 'aftercare';
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Lachy Tattoo",
  tagline: "Custom Tattoo Artistry in Las Vegas",
  artist: "Lachy (Lázaro León)",
  location: "Las Vegas, Nevada",
  city: "Las Vegas",
  state: "NV",
  phone: "1 702-409-2728",
  phoneRaw: "17024092728",
  email: "lazaroleon21@yahoo.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=100030606326940",
  logoUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808829/291331991_695592878137583_881745344948415198_n.jpg",
  services: ["Black & Grey Realism", "Custom Illustrative", "Portraits & Figures", "Fine Line & Script", "Full Sleeves & Large Scale", "Cover-Up Consultations"],
  hours: "Tuesday – Saturday: 11:00 AM – 8:00 PM (By Appointment & Consultation)"
};

export const TATTOO_PORTFOLIO: TattooItem[] = [
  {
    id: "art-01",
    title: "Realistic Portrait & Shadow Flow",
    category: "portraits",
    categoryLabel: "Portraits & Realism",
    placement: "Forearm / Inner Arm",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808830/469957929_18253040512283625_2578003491637497577_n.jpg",
    description: "High-contrast tonal portraiture blending soft grey-wash gradients with crisp architectural contours.",
    featured: true,
    aspectRatio: "4:5",
    details: ["Multi-needle grey wash", "Custom photographic reference", "Healed contrast retention"]
  },
  {
    id: "art-02",
    title: "Neo-Classical Dark Mythos",
    category: "realism",
    categoryLabel: "Black & Grey Realism",
    placement: "Outer Bicep / Shoulder",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808829/134567890sdfghjk0987654sdfghjk.jpg",
    description: "Intricate mythological figure surrounded by atmospheric smoke and deep black negative space.",
    featured: true,
    aspectRatio: "3:4",
    details: ["Single pass black fill", "Dynamic anatomy flow", "Micro-detail highlights"]
  },
  {
    id: "art-03",
    title: "Gothic Flora & Intricate Spine",
    category: "fineline",
    categoryLabel: "Fine Line & Flora",
    placement: "Ribcage / Torso",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/470208824_1138781687846260_8052105794433934025_n.jpg",
    description: "Ultra-fine single needle floral composition following organic skeletal flow and natural muscle curves.",
    featured: true,
    aspectRatio: "4:5",
    details: ["Single needle 03RL", "Organic body mapping", "Smooth whip shading"]
  },
  {
    id: "art-04",
    title: "Chicano Iconography & Sacred Heart",
    category: "illustrative",
    categoryLabel: "Custom Illustrative",
    placement: "Chest / Sternum",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/473710724_1291087408588124_5523621956844954902_n.jpg",
    description: "Dramatic cultural symbolism with radiant halos, razor-sharp outlines, and velvety smooth drop shadows.",
    featured: true,
    aspectRatio: "1:1",
    details: ["Custom freehand elements", "Deep black saturation", "Symmetrical alignment"]
  },
  {
    id: "art-05",
    title: "Predator & Beast Realism",
    category: "realism",
    categoryLabel: "Black & Grey Realism",
    placement: "Thigh / Leg Sleeve",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/472149120_1153237616400667_8696723053358810370_n.jpg",
    description: "Hyper-detailed wildlife study featuring realistic fur texture, piercing eye focal points, and dynamic motion.",
    featured: true,
    aspectRatio: "4:5",
    details: ["Hair texture rendering", "Opaque white accents", "Layered depth"]
  },
  {
    id: "art-06",
    title: "Calavera & Rose Composition",
    category: "illustrative",
    categoryLabel: "Custom Illustrative",
    placement: "Full Outer Arm",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/470143697_18252882475283625_2772490401640092956_n.jpg",
    description: "Ornamented Day of the Dead portrait with delicate lace veil patterns and layered botanical petals.",
    featured: true,
    aspectRatio: "3:4",
    details: ["Layered botanical shading", "Micro filigree lines", "Contrast lighting"]
  },
  {
    id: "art-07",
    title: "Sculptural Roman Deity",
    category: "portraits",
    categoryLabel: "Portraits & Realism",
    placement: "Upper Arm",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/470188924_18253035184283625_1530436045324509776_n.jpg",
    description: "Classical marble sculpture rendering capturing photorealistic stone fractures and chiaroscuro lighting.",
    featured: false,
    aspectRatio: "4:5",
    details: ["Marble texture reproduction", "Cinematic light angle", "High durability tone"]
  },
  {
    id: "art-08",
    title: "Dark Ornamental Sleeve Extension",
    category: "sleeves",
    categoryLabel: "Large Scale & Sleeves",
    placement: "Full Arm Sleeve",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/475388672_1172538787803883_1013150045643795882_n.jpg",
    description: "Seamless sleeve integration weaving multiple custom concepts with cohesive background smoke and dark textures.",
    featured: true,
    aspectRatio: "3:4",
    details: ["Multi-session project", "Seamless wrist to shoulder blend", "Heavy black longevity"]
  },
  {
    id: "art-09",
    title: "Celestial Geometric & Fine Linework",
    category: "fineline",
    categoryLabel: "Fine Line & Flora",
    placement: "Back / Spine",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/477628784_1180147047043057_8963601293966122618_n.jpg",
    description: "Precision-measured geometric alignment combined with delicate celestial astronomy symbols.",
    featured: false,
    aspectRatio: "1:1",
    details: ["Stippled dotwork", "Balanced symmetry", "Zero blow-out depth control"]
  },
  {
    id: "art-10",
    title: "Hourglass & Temporal Ephemera",
    category: "realism",
    categoryLabel: "Black & Grey Realism",
    placement: "Forearm",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/758944045_1747977812899079_2946450867983308830_n.jpg",
    description: "Reflective glass realism with suspended sand particles and surrounding ornamental scrollwork.",
    featured: false,
    aspectRatio: "4:5",
    details: ["Glass transparency effects", "Fluid time theme", "Tight gradient sweeps"]
  },
  {
    id: "art-11",
    title: "Sacred Mask & Shadow Veil",
    category: "illustrative",
    categoryLabel: "Custom Illustrative",
    placement: "Calf / Lower Leg",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/469963258_18252880915283625_7386100200241814923_n.jpg",
    description: "Theatrical dark art study with high-sheen satin textures and razor-sharp decorative bordering.",
    featured: false,
    aspectRatio: "3:4",
    details: ["High contrast ink saturation", "Handcrafted custom motif", "Clean borders"]
  },
  {
    id: "art-12",
    title: "Chicano Script & Ornamental Banner",
    category: "fineline",
    categoryLabel: "Fine Line & Script",
    placement: "Collarbone / Chest",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/476596441_1179593020431793_5070948200718648144_n.jpg",
    description: "Custom hand-lettered calligraphy with dynamic flourishes, micro-shading, and pristine baseline curve.",
    featured: false,
    aspectRatio: "1:1",
    details: ["Custom typography draft", "Single needle flourish", "Sharp terminal tips"]
  },
  {
    id: "art-13",
    title: "Winged Angelic Guardian",
    category: "portraits",
    categoryLabel: "Portraits & Realism",
    placement: "Upper Back & Shoulder",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808834/774895354_1766196614410532_8944203064259589306_n.jpg",
    description: "Expansive feather-by-feather wing anatomy wrapping smoothly across the shoulder blade.",
    featured: true,
    aspectRatio: "4:5",
    details: ["Feather anatomy layering", "Anatomical movement", "Deep shadow contrast"]
  },
  {
    id: "art-14",
    title: "Warrior Helm & Battle Stare",
    category: "realism",
    categoryLabel: "Black & Grey Realism",
    placement: "Outer Thigh",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808833/771708732_1760601671636693_5990450133568707781_n.jpg",
    description: "Metallic armor sheen and battle-worn reflections in weathered bronze and steel textures.",
    featured: false,
    aspectRatio: "3:4",
    details: ["Metallic reflection gradients", "Deep skin depth", "Clean linework"]
  },
  {
    id: "art-15",
    title: "Serpent & Sacred Dagger",
    category: "illustrative",
    categoryLabel: "Custom Illustrative",
    placement: "Forearm / Wrist",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808833/766775539_1756261758737351_8322186365034841171_n.jpg",
    description: "Reptilian scale detail wrapping a jewel-encrusted blade with intricate filigree engraving.",
    featured: false,
    aspectRatio: "4:5",
    details: ["Individual scale rendering", "Filigree steel handle", "Wraparound composition"]
  },
  {
    id: "art-16",
    title: "Cinematic Cinema Noir Tribute",
    category: "portraits",
    categoryLabel: "Portraits & Realism",
    placement: "Bicep",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808834/766890078_1760614111635449_9159393050351811850_n.jpg",
    description: "High-contrast film frame portrait capturing subtle facial expressions and soft cinematic haze.",
    featured: false,
    aspectRatio: "3:4",
    details: ["Subtle tonal transitions", "Film noir lighting", "Sharp iris reflections"]
  },
  {
    id: "art-17",
    title: "Botanical Spine Garland",
    category: "fineline",
    categoryLabel: "Fine Line & Flora",
    placement: "Full Spine",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808834/771739779_1760601678303359_7004294578224455606_n.jpg",
    description: "Delicate vertical botanical branch with blooming peonies and cascading leaf veins.",
    featured: false,
    aspectRatio: "4:5",
    details: ["Spine alignment", "Soft dot shading", "Micro leaf veins"]
  },
  {
    id: "art-18",
    title: "Baroque Filigree & Mask Study",
    category: "illustrative",
    categoryLabel: "Custom Illustrative",
    placement: "Shoulder Cap",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808834/764116609_1753420572354803_3477632258927785034_n.jpg",
    description: "Intricate Italian baroque scrollwork framing a theatrical Venetian mask with gold leaf accents.",
    featured: false,
    aspectRatio: "1:1",
    details: ["Baroque scroll geometry", "Velvet texture mapping", "Zero needle drag"]
  },
  {
    id: "art-19",
    title: "Mythological Dragon & Smoke Flow",
    category: "sleeves",
    categoryLabel: "Large Scale & Sleeves",
    placement: "Full Leg Sleeve",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808834/asdfghjk6tgbsdfghjk.jpg",
    description: "Dynamic fluid dragon scale composition twisting seamlessly around leg muscle groups with atmospheric smoke.",
    featured: true,
    aspectRatio: "3:4",
    details: ["Multi-angle continuous flow", "Heavy black backgrounding", "Contrast preservation"]
  },
  {
    id: "art-20",
    title: "Precision Micro Realism Element",
    category: "realism",
    categoryLabel: "Black & Grey Realism",
    placement: "Inner Wrist / Forearm",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/472149120_1153237616400667_8696723053358810370_n.jpg",
    description: "Miniature realism piece demonstrating surgical needle control, dense black saturation, and fine gradients.",
    featured: false,
    aspectRatio: "4:5",
    details: ["Micro mag shading", "Crisp boundary preservation", "Long-term clarity"]
  }
];

export const TATTOO_STYLES: TattooStyleInfo[] = [
  {
    id: "style-realism",
    name: "Black & Grey Realism",
    categoryKey: "realism",
    tagline: "Photorealistic depth, seamless grey-wash gradients, and lifelong tonal integrity.",
    description: "Lachy Tattoo specializes in high-fidelity black & grey realism. Using calibrated dilutions of carbon black ink and hospital-grade rotary machines, every piece achieves the depth of an oil painting on human skin.",
    techniques: ["Multi-pass grey wash calibration", "Drop-shadow spatial layering", "Opaque highlight tipping", "Soft-edge blend mastery"],
    recommendedPlacement: ["Outer Arm & Bicep", "Forearm", "Thigh & Calf", "Chest Plates"],
    heroImage: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808830/469957929_18253040512283625_2578003491637497577_n.jpg"
  },
  {
    id: "style-portraits",
    name: "Portraits & Figures",
    categoryKey: "portraits",
    tagline: "Capturing authentic emotion, human likeness, and cinematic lighting in skin.",
    description: "Portraits require mathematical accuracy and an artist's sensitivity to human facial structure. Lachy works from high-contrast reference photos to recreate realistic eyes, hair texture, and natural expressions that age beautifully.",
    techniques: ["Anatomical facial mapping", "Micro-needle iris rendering", "Skin pore & shadow micro-texture", "Soft contour fading"],
    recommendedPlacement: ["Forearm (Flat plane)", "Outer Bicep", "Upper Back", "Thigh"],
    heroImage: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/470188924_18253035184283625_1530436045324509776_n.jpg"
  },
  {
    id: "style-fineline",
    name: "Fine Line & Custom Script",
    categoryKey: "fineline",
    tagline: "Surgical single-needle precision, delicate botanical florals, and elegant lettering.",
    description: "Designed for clients who desire refined, understated, yet technically flawless ink. Using single needle cartridges (01RL / 03RL) with controlled depth to eliminate blowouts while keeping crisp lines forever.",
    techniques: ["Single-needle 0.25mm cartridges", "Stippled dot shading (whip)", "Custom hand-drawn lettering", "Organic botanical curve matching"],
    recommendedPlacement: ["Spine & Ribs", "Collarbone", "Inner Forearm & Wrist", "Ankle"],
    heroImage: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/470208824_1138781687846260_8052105794433934025_n.jpg"
  },
  {
    id: "style-illustrative",
    name: "Custom Illustrative & Chicano",
    categoryKey: "illustrative",
    tagline: "Bold storytelling, sacred iconography, dark art, and custom mythological concepts.",
    description: "Combining strong linework with dark art aesthetics, Mexican-American Chicano traditions, and custom illustrative motifs created specifically for your anatomical proportions.",
    techniques: ["Heavy dynamic outlines", "Velvety black fill & contrast", "Custom freehand filigree", "Flow-tested stenciling"],
    recommendedPlacement: ["Full Back", "Chest & Ribs", "Full Sleeve", "Leg Sleeves"],
    heroImage: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808831/473710724_1291087408588124_5523621956844954902_n.jpg"
  },
  {
    id: "style-sleeves",
    name: "Full Sleeves & Large Scale",
    categoryKey: "sleeves",
    tagline: "Multi-session architectural masterworks engineered to flow with your body's motion.",
    description: "Large scale projects require comprehensive planning. Lachy designs sleeves that look cohesive from every angle, connecting major focal pieces with organic smoke, architecture, and seamless negative space.",
    techniques: ["360° 3D limb mapping", "Session-by-session contrast zoning", "Gap-filling texture harmony", "Muscle flex integration"],
    recommendedPlacement: ["Full Arm Sleeve", "Full Leg / Thigh to Ankle", "Full Back Piece", "Torso Wrap"],
    heroImage: "https://res.cloudinary.com/fzobzdco/image/upload/v1790808832/475388672_1172538787803883_1013150045643795882_n.jpg"
  }
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-01",
    name: "Marcus Vance",
    location: "Las Vegas, NV",
    style: "Black & Grey Realism Portrait",
    rating: 5,
    date: "Prototype Demo Review",
    quote: "Lachy's attention to detail is unmatched in Vegas. The portrait of my father on my forearm healed with zero loss of contrast. The studio atmosphere is clean, quiet, and 100% focused on the art.",
    sessionDetails: "6-Hour Single Session · Forearm",
    isDemo: true
  },
  {
    id: "test-02",
    name: "Elena Rostova",
    location: "Henderson, NV",
    style: "Fine Line Spine Peony",
    rating: 5,
    date: "Prototype Demo Review",
    quote: "I was nervous about spinal pain, but Lachy's technique is so gentle and steady. The lines are razor sharp without a single blowout. He took 40 minutes just getting the stencil alignment perfect before touching a needle.",
    sessionDetails: "3.5-Hour Session · Full Spine",
    isDemo: true
  },
  {
    id: "test-03",
    name: "David Chen",
    location: "Los Angeles, CA (Traveled to LV)",
    style: "Chicano Sacred Heart & Smoke Sleeve",
    rating: 5,
    date: "Prototype Demo Review",
    quote: "Flew in specifically to get my sleeve done with Lachy. The smooth grey wash gradients and how the art wraps around the elbow is pure mastery. Worth every mile.",
    sessionDetails: "2 Back-to-Back Full Day Sessions",
    isDemo: true
  }
];

export const TATTOO_PROCESS_STEPS = [
  {
    step: "01",
    title: "Inquiry & Vision Consultation",
    summary: "Submit your concept, reference images, placement preference, and approximate sizing through our booking portal.",
    description: "Lachy reviews your idea for anatomical feasibility, contrast balance, and longevity to ensure your tattoo will look incredible for decades."
  },
  {
    step: "02",
    title: "Custom Design & Body Stenciling",
    summary: "A tailored digital artwork draft is prepared specifically for your body curves and muscle flow.",
    description: "On session day, we test stencil placement and sizing in front of full-length studio mirrors until the alignment is 100% natural."
  },
  {
    step: "03",
    title: "Precision Ink & Needle Session",
    summary: "Executed in a clinical-grade, hospital-sterile studio setup using premium disposable cartridges and single-use supplies.",
    description: "Relax in an ergonomic studio chair while Lachy applies master grey wash gradients, crisp outlines, and white highlights."
  },
  {
    step: "04",
    title: "Medical Wrap & Lifetime Aftercare",
    summary: "Sealed with medical-grade breathable dermal film (Saniderm/SecondSkin) with detailed day-by-day healing instructions.",
    description: "We provide our comprehensive aftercare protocol, recommended ointments, and open communication during your healing journey."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-01",
    category: "booking",
    question: "How do I book an appointment with Lachy Tattoo in Las Vegas?",
    answer: "You can submit an appointment request directly through our online Booking page, or reach out via phone at 1 (702) 409-2728 and email at lazaroleon21@yahoo.com. Provide your concept, placement, estimated size, and any reference photos."
  },
  {
    id: "faq-02",
    category: "booking",
    question: "Is a deposit required to reserve a tattoo date?",
    answer: "Yes. Like all professional custom tattoo studios, a deposit is required to lock in your appointment date and begin custom design work. Deposits are deducted from your final session total."
  },
  {
    id: "faq-03",
    category: "prep",
    question: "How should I prepare before my tattoo session?",
    answer: "Get a full 8 hours of sleep, stay well hydrated, and eat a substantial meal 1–2 hours before your session. Avoid alcohol and blood-thinning medications for 24 hours prior. Wear comfortable, loose clothing that allows easy access to the tattoo placement area."
  },
  {
    id: "faq-04",
    category: "process",
    question: "Do you do custom designs or only flash tattoos?",
    answer: "Lachy specializes primarily in custom original designs tailored to each client's anatomy. You can bring reference images or ideas, and Lachy will create a unique composition that flows with your body."
  },
  {
    id: "faq-05",
    category: "aftercare",
    question: "What is your recommended tattoo aftercare routine?",
    answer: "Keep your protective dermal bandage on for 3–5 days as directed. Wash gently with unscented antibacterial soap and lukewarm water, pat dry with a clean paper towel, and apply a thin layer of recommended fragrance-free lotion (such as Aquaphor or Hustle Butter) 2–3 times daily. Never pick or scratch scabs, and avoid soaking in pools, hot tubs, or direct sun exposure for 3 weeks."
  },
  {
    id: "faq-06",
    category: "prep",
    question: "Can I travel to Las Vegas specifically for a tattoo session?",
    answer: "Absolutely. Many clients visit Las Vegas and schedule full-day or multi-day sessions with Lachy. We recommend booking at least 3–6 weeks in advance of your travel dates to guarantee availability."
  }
];
