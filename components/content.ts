export const YELLOW = "#FFE800";
export const BLUE = "#2A4FFF";
export const RED = "#FF2233";
/** Venue accents: Tropical's logo sand, SpanicArts' logo teal. */
export const TROPICAL = "#E5D1B0";
export const SPANICARTS = "#03B9BA";

export const email = "coldanceexp@gmail.com";

/** Order mirrors the page. Section hrefs must match a rendered section id. */
export const nav = [
  { label: "Program", href: "#programa" },
  { label: "Classes", href: "#clases" },
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
  { day: "Thu", what: "Tropical YYC · salsa caleña, champeta, choque & afro, party style", level: "Intro · all ages · from Nov 12", time: "5 — 7 PM", teacher: "Juan & Sebas", accent: TROPICAL },
  { day: "Sun", what: "SpanicArts · technique, musicality and choreo", level: "Open level · from Nov 15", time: "5 — 7 PM", teacher: "Juan & Sebas", accent: SPANICARTS },
];

/** The two classes. Logos are mapped in Venues.tsx. */
export const venues: Array<{
  key: string;
  name: string;
  vibe: string;
  day: string;
  start: string;
  time: string;
  address: string;
  map: string;
  accent: string;
  body: string;
  rhythms: string[];
  notes: string[];
}> = [
  {
    key: "tropical",
    name: "Tropical YYC",
    vibe: "The party",
    day: "Thursdays",
    start: "Starts Nov 12",
    time: "5 — 7 PM",
    address: "1011 1 St SW, Calgary",
    map: "https://www.google.com/maps/search/?api=1&query=Tropical+YYC+1011+1+St+SW+Calgary",
    accent: TROPICAL,
    body: "An introduction to salsa caleña, champeta and the Afro-Colombian rhythms, made for having fun. Meet new people, build community and dance without worrying too much about the steps. Just feel the vibe.",
    rhythms: ["Colombian salsa", "Salsa choque", "Champeta", "Afro-Colombian rhythms"],
    notes: [
      "All ages, no experience needed",
      "Stay after for food and drinks",
      "Party nights at Tropical roughly every two weeks: stay and dance it out",
    ],
  },
  {
    key: "spanicarts",
    name: "SpanicArts",
    vibe: "The studio",
    day: "Sundays",
    start: "Starts Nov 15",
    time: "5 — 7 PM",
    address: "Lougheed Building, 131 6 Ave SW, Calgary",
    map: "https://www.google.com/maps/search/?api=1&query=Lougheed+Building+131+6+Ave+SW+Calgary",
    accent: SPANICARTS,
    body: "The technical class. Cultural context, real technique and musicality, with choreos and lots of experimenting with steps. Less party, more dancing: this is where you build the foundation.",
    rhythms: ["Colombian salsa", "Salsa choque", "Champeta", "Afro-Colombian rhythms"],
    notes: [
      "Cultural context behind every rhythm",
      "Technique, footwork and musicality",
      "Choreography and step experiments",
    ],
  },
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
    key: "both",
    featured: true,
    kicker: "The full experience",
    name: "Both venues",
    price: "$120",
    per: "8 sessions · 16 hours",
    items: [
      "Four Thursdays at Tropical YYC",
      "Four Sundays at SpanicArts",
      "The party and the technique, every week",
      "Best value: $15 a class",
    ],
    cta: "Get the full pass",
    href: "https://square.link/u/lfhW4M56",
  },
  {
    key: "tropical",
    featured: false,
    kicker: "Thursdays · the party",
    accent: TROPICAL,
    name: "Tropical pass",
    price: "$85",
    per: "4 sessions · 8 hours",
    items: ["Four Thursdays at Tropical YYC", "Starts Nov 12, 5 to 7 PM", "All ages, all levels", "Stay for food, drinks and the party"],
    cta: "Join at Tropical",
    href: "https://square.link/u/EVJOnfDc",
  },
  {
    key: "spanicarts",
    featured: false,
    kicker: "Sundays · the studio",
    accent: SPANICARTS,
    name: "SpanicArts pass",
    price: "$85",
    per: "4 sessions · 8 hours",
    items: ["Four Sundays at SpanicArts", "Starts Nov 15, 5 to 7 PM", "Technique, musicality and choreo", "The full arc, foundations to fusion"],
    cta: "Join at SpanicArts",
    href: "https://square.link/u/zFayYjVw",
  },
  {
    key: "dropin",
    featured: false,
    kicker: "Come see what it is",
    name: "Drop-in",
    price: "$25",
    per: "one session · 2 hours",
    items: ["Any single class, either venue", "Two hours on the floor", "No commitment"],
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
  { k: "Thursdays", v: "Tropical YYC · 5–7 PM" },
  { k: "Sundays", v: "SpanicArts · 5–7 PM" },
  { k: "Program length", v: "4 weeks · per venue" },
];

export const socials = [
  { label: "@coldanceexp", url: "https://instagram.com/coldanceexp" },
  { label: "@dancejuanda", url: "https://instagram.com/dancejuanda" },
  { label: "@seb.a.z", url: "https://instagram.com/seb.a.z" },
];
