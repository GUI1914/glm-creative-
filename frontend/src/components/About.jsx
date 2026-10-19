import { FadeUp, Eyebrow } from "./Reveal";

const WORDS = [
  { label: "Criatividade", top: "8%", left: "6%", r: "-6deg", d: "0s" },
  { label: "Identidade", top: "30%", left: "58%", r: "4deg", d: "1.2s" },
  { label: "Estratégia", top: "58%", left: "12%", r: "3deg", d: "0.6s" },
  { label: "Inovação", top: "74%", left: "52%", r: "-4deg", d: "1.8s" },
];

export const About = () => (
  <section
    id="sobre"
    data-testid="about-section"
    className="relative overflow-hidden py-28 lg:py-40"
  >
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
      <div>
        <FadeUp>
          <Eyebrow>Sobre a GLM Creative</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display mt-8 text-[clamp(1.15rem,4.9vw,2.375rem)] font-extrabold leading-[1.15] tracking-tight text-[#F8F8F8]">
            CRIATIVIDADE NÃO É APENAS DESIGN.{" "}
            <span className="text-stroke block">É DIFERENCIAÇÃO.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-[#A1A1A1]">
            Na GLM CREATIVE, desenvolvemos soluções visuais que unem
            criatividade, estratégia e identidade. Nosso objetivo é transformar
            ideias em projetos capazes de valorizar marcas e conquistar a
            atenção do público.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-6 sm:gap-10">
            <div>
              <p className="font-display text-2xl font-bold text-[#F8F8F8] sm:text-3xl">4</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#525252] sm:text-xs">
                Frentes criativas
              </p>
            </div>
            <span className="hidden h-10 w-px bg-white/10 sm:block" />
            <div>
              <p className="font-display text-2xl font-bold text-[#F8F8F8] sm:text-3xl">100%</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#525252] sm:text-xs">
                Sob medida
              </p>
            </div>
            <span className="hidden h-10 w-px bg-white/10 sm:block" />
            <div>
              <p className="font-display text-2xl font-bold text-[#F8F8F8] sm:text-3xl">5+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#525252] sm:text-xs">
                Segmentos
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.15} className="relative">
        <div
          data-testid="about-visual"
          className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-[#121212] via-[#0c0c0c] to-[#080808] sm:h-[480px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,248,248,0.16)_0%,transparent_70%)] blur-md" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F8F8] shadow-[0_0_30px_rgba(248,248,248,0.8)]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(248,248,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,0.03) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {WORDS.map((w) => (
            <span
              key={w.label}
              data-testid={`about-word-${w.label.toLowerCase()}`}
              className="animate-float-slow absolute rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#F8F8F8] backdrop-blur-md"
              style={{
                top: w.top,
                left: w.left,
                "--r": w.r,
                animationDelay: w.d,
              }}
            >
              {w.label}
            </span>
          ))}
        </div>
      </FadeUp>
    </div>
  </section>
);
