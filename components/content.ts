export const YELLOW = "#FFE800";
export const BLUE = "#2A4FFF";
export const RED = "#FF2233";

export const email = "coldanceexp@gmail.com";

/** Order mirrors the page. Section hrefs must match a rendered section id. */
export const nav = [
  { label: "Program", href: "#programa" },
  { label: "Gallery", href: "#salon" },
  { label: "Schedule", href: "#horario" },
  { label: "Teachers", href: "#profes" },
  { label: "Pricing", href: "#pases" },
  { label: "Events", href: "#eventos" },
  { label: "Contact", href: `mailto:${email}` },
];

/** Two looping GIFs in the hero. Drop the files in /public/images/hero/. */
export const heroClips = [
  { src: "/images/hero/gif-1.gif", poster: "/images/gallery/5.jpg", badge: "Performance @expolatino", badgeBg: YELLOW, badgeFg: "#0A0A0A", caption: "Salsa caleña · Juan", offset: "lg:-translate-y-[30px]" },
  { src: "/images/hero/gif-2.gif", poster: "/images/gallery/3.jpg", badge: "An improv from sebas soul", badgeBg: BLUE, badgeFg: "#F4F2EE", caption: "Champeta · Sebas", offset: "lg:translate-y-[44px]" },
];

export const arc = [
  { step: "01", accent: YELLOW, title: "Cultural context", body: "Where the movement comes from." },
  { step: "02", accent: BLUE, title: "Body preparation", body: "Warm-up and stretching." },
  { step: "03", accent: RED, title: "Foundations", body: "Weight, footwork, timing." },
  { step: "04", accent: YELLOW, title: "Musicality", body: "Hear the song shift, answer it." },
];

export const schedule = [
  { day: "Thu", what: "Salsa caleña into salsa fusion, then afro, champeta & choque", level: "Open level", time: "6:30 — 8:30 PM", teacher: "Juan & Sebas", accent: YELLOW },
];

export const performancePhotos = [
  { src: "/images/gallery/5.jpg", caption: "On stage in Calgary" },
  { src: "/images/gallery/6.jpg", caption: "El team · 2026" },
  { src: "/images/gallery/3.jpg", caption: "Champeta with Sebas" },
];

export const teachers = [
  {
    name: "Juan",
    img: "/images/instructors/juan.jpg",
    handle: "@dancejuanda",
    url: "https://instagram.com/dancejuanda",
    styles: "Salsa caleña / Salsa fusion",
    accent: YELLOW,
    bio: "A dancer raised on salsa since childhood. My mission is to share the passion, energy, and soul of Colombia with a community that grows every day.",
    quote: "Salsa moves something in me that no other rhythm can."
  },
  {
    name: "Sebas",
    img: "/images/instructors/sebastian.jpg",
    handle: "@seb.a.z",
    url: "https://instagram.com/seb.a.z_sserna",
    styles: "Choque / Champeta / Afro / House",
    accent: BLUE,
    bio: "An urban dancer with roots in the Colombian coast. He fuses Afro tradition with body language to create something unique in every performance.",
    quote: "The body is the instrument — rhythm, the score.",
  },
];

/** PLACEHOLDER — replace with real events or render nothing. */
export const events = [
  { day: "28", month: "Aug", kind: "Workshop", accent: BLUE, img: "/images/events/2808.jpeg", title: "Colombian Dance Experience", venue: "Jaipur Bridge, Eau Claire · Calgary", time: "5 — 9 PM", body: "The ultimate COLDANCEEXP salsa, champeta, choque, afro + social", cta: "Register", href: "#eventos", price: "Free Entry" },
  { day: "04", month: "Sept", kind: "Social Class", accent: YELLOW, img: "/images/events/0409.jpg", title: "Gukie & Friends", venue: "semanticscafeyyc · Calgary", time: "4PM", body: "Open dance floor for salsa, champeta and choque.",href: "#eventos", price: "Free Entry" },
];

export const passes = [
  {
    key: "program",
    featured: true,
    kicker: "The full experience",
    name: "Four-week program",
    price: "$85",
    per: "4 sessions · 8 hours",
    items: [
      "All rhythms in one class, every week",
      "Cultural context, technique and musicality",
      "The full arc from foundations to the fusion",
      "Same room, same people, four weeks",
    ],
    cta: "Join the program",
    href: "https://square.link/u/lfhW4M56",
  },
  {
    key: "dropin",
    featured: false,
    kicker: "Come see what it is",
    name: "Drop-in",
    price: "$25",
    per: "one session · community $15",
    items: ["Any single session", "Two hours on the floor", "$15 for the CDE community", "No commitment"],
    cta: "Book a drop-in",
    href: "https://square.link/u/3dYTDSfX",
  },
];

/** Drop the clip in /public/videos/salon.mp4 — vertical footage fits this tile best. */
export const gallery: Array<{
  src: string;
  caption: string;
  span: string;
  accent: string;
  video?: boolean;
  poster?: string;
}> = [
  { src: "/videos/salon.mp4", poster: "/images/gallery/1.jpg", caption: "A session, cut down", span: "col-span-2 row-span-4 sm:col-span-1 sm:row-span-3", accent: YELLOW, video: true },
  { src: "/images/gallery/8.jpg", caption: "The studio", span: "col-span-2 row-span-1", accent: BLUE },
  { src: "/images/gallery/3.jpg", caption: "Champeta with Sebas", span: "col-span-1 row-span-2", accent: RED },
  { src: "/images/gallery/4.jpeg", caption: "fiesta on the street", span: "col-span-1 row-span-2", accent: YELLOW },
  { src: "/videos/footwork.mp4", poster: "/images/gallery/2.jpg", caption: "Footwork on fusion", span: "col-span-2 row-span-4 sm:col-span-1 sm:row-span-3", accent: RED, video: true },
  { src: "/images/gallery/5.jpg", caption: "Juan & Mapa · expolatino", span: "col-span-1 row-span-2", accent: BLUE },
  { src: "/images/gallery/1.jpg", caption: "Having fun during class", span: "col-span-1 row-span-1", accent: RED },
  { src: "/images/gallery/2.jpg", caption: "Social night · Calgary", span: "col-span-1 row-span-1", accent: YELLOW },
  { src: "/videos/expo.mp4", poster: "/images/instructors/juan.jpg", caption: "Post expolatino", span: "col-span-2 row-span-1", accent: BLUE, video: true },
  { src: "/images/gallery/6.jpg", caption: "El team · 2026", span: "col-span-1 row-span-1", accent: RED },
  { src: "/images/gallery/7.jpg", caption: "Sebas vibing", span: "col-span-1 row-span-1", accent: YELLOW },
];

export const details = [
  { k: "Studio", v: "SpanicArts · Calgary" },
  { k: "Thursdays", v: "6:30–8:30 PM" },
  { k: "Program length", v: "4 weeks · 4 sessions" },
];

export const socials = [
  { label: "@coldanceexp", url: "https://instagram.com/coldanceexp" },
  { label: "@dancejuanda", url: "https://instagram.com/dancejuanda" },
  { label: "@seb.a.z", url: "https://instagram.com/seb.a.z" },
];
