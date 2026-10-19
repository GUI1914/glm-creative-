const ITEMS = [
  "IDENTIDADE VISUAL",
  "DESIGN GRÁFICO",
  "DESENVOLVIMENTO WEB",
  "CRIATIVOS PUBLICITÁRIOS",
  "SOCIAL MEDIA",
  "BRANDING",
];

export const Marquee = () => (
  <div
    data-testid="marquee-section"
    className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a0a0a] py-6"
  >
    <div className="animate-marquee flex w-max items-center">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
          {ITEMS.map((item) => (
            <span key={`${dup}-${item}`} className="flex items-center">
              <span className="font-display px-8 text-sm font-bold uppercase tracking-[0.3em] text-[#525252]">
                {item}
              </span>
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-[#F8F8F8]/40">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
