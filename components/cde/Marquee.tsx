const items = [
  "Salsa Caleña", "✦", "Salsa Choque", "✦", "Champeta", "✦",
  "Afro Beats", "✦", "Urbano", "✦", "Calgary", "✦",
];
const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="bg-stone py-3 overflow-hidden select-none border-y border-cream/8" aria-hidden>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-condensed text-3xl whitespace-nowrap pr-8 ${
              item === "✦" ? "text-yellow" : "text-cream/60"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
