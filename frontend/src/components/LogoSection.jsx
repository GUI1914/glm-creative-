import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Quote, ArrowUpRight } from "lucide-react";
import { FadeUp, Eyebrow } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { Lightbox } from "./Lightbox";
import {
  logos,
  logoFilters,
  logoBenefits,
  WHATSAPP_LOGO_URL,
  WHATSAPP_LOGO_TALK_URL,
} from "../data/projects";

const LogoCard = ({ logo, index, onOpen }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
  >
    <div
      data-testid={`logo-card-${logo.id}`}
      className="group relative h-full rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-[#111111] to-[#0a0a0a] p-4 transition-all duration-500 hover:border-white/[0.22] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
    >
      <button
        data-testid={`logo-view-${logo.id}`}
        onClick={() => onOpen(logo)}
        aria-label={`Ampliar logo ${logo.name}`}
        className="block w-full overflow-hidden rounded-[20px] bg-[#F8F8F8]"
      >
        <img
          src={logo.img}
          alt={logo.alt}
          loading="lazy"
          className="aspect-square w-full object-contain p-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] sm:p-8"
        />
      </button>
      <div className="flex items-center justify-between px-3 pb-3 pt-5">
        <div>
          <h3 className="font-display text-lg font-bold text-[#F8F8F8]">{logo.name}</h3>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#525252] transition-colors duration-500 group-hover:text-[#A1A1A1]">
            {logo.niche}
          </p>
        </div>
        <button
          data-testid={`logo-button-${logo.id}`}
          onClick={() => onOpen(logo)}
          className="group/btn inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[11px] font-semibold text-[#A1A1A1] transition-all duration-400 hover:border-[#F8F8F8] hover:text-[#F8F8F8]"
        >
          Ver logo
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </div>
  </motion.div>
);

export const LogoSection = () => {
  const [active, setActive] = useState("Todas");
  const [selected, setSelected] = useState(null);

  const list =
    active === "Todas" ? logos : logos.filter((l) => l.niche === active);

  return (
    <section
      id="logos"
      data-testid="logos-section"
      className="relative overflow-hidden py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute -right-40 top-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(248,248,248,0.04)_0%,transparent_65%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <Eyebrow>Criação de logos</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display mt-8 text-[clamp(1.5rem,6vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-[#F8F8F8]">
                LOGOS QUE DÃO <span className="text-stroke">IDENTIDADE</span> À
                SUA MARCA
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#A1A1A1] sm:text-lg">
                Criamos logos modernas, criativas e memoráveis para destacar
                negócios em diferentes nichos.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#A1A1A1]">
                Cada logo é pensada para transmitir profissionalismo,
                personalidade e valor, ajudando sua marca a se destacar no
                mercado.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {logoBenefits.map((b) => (
                  <li
                    key={b}
                    data-testid={`logo-benefit-${b.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-[#d6d6d6]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F8F8F8] text-[#080808]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.4} className="mt-10">
              <MagneticButton
                testId="logo-cta-request"
                variant="primary"
                href={WHATSAPP_LOGO_URL}
                arrow
              >
                Solicitar logo personalizada
              </MagneticButton>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="lg:col-span-5">
            <div
              data-testid="logo-impact-phrase"
              className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-gradient-to-br from-[#121212] via-[#0c0c0c] to-[#080808] p-10 lg:sticky lg:top-28 lg:p-12"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(248,248,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,0.03) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <Quote className="relative h-9 w-9 text-[#2c2c2c]" />
              <p className="font-display relative mt-8 text-2xl font-bold leading-snug text-[#F8F8F8] sm:text-3xl">
                Uma boa logo não é apenas bonita.{" "}
                <span className="text-stroke">
                  Ela faz sua marca ser lembrada.
                </span>
              </p>
              <div className="animate-pulse-glow absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(248,248,248,0.1)_0%,transparent_70%)] blur-xl" />
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div
            data-testid="logo-filters"
            className="mt-20 flex flex-wrap justify-center gap-3"
          >
            {logoFilters.map((f) => (
              <button
                key={f}
                data-testid={`logo-filter-${f.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => setActive(f)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors duration-400 ${
                  active === f
                    ? "text-[#080808]"
                    : "border border-white/10 text-[#A1A1A1] hover:border-white/30 hover:text-[#F8F8F8]"
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="logo-filter-pill"
                    className="absolute inset-0 rounded-full bg-[#F8F8F8]"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </FadeUp>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {list.map((logo, i) => (
              <LogoCard key={logo.id} logo={logo} index={i} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        <FadeUp delay={0.1} className="mt-20">
          <div className="flex flex-col items-center gap-8 rounded-[32px] border border-white/[0.07] bg-gradient-to-b from-[#101010] to-[#0a0a0a] px-8 py-16 text-center">
            <h3 className="font-display max-w-2xl text-[clamp(1.4rem,5vw,2.5rem)] font-extrabold leading-tight text-[#F8F8F8]">
              PRECISA DE UMA LOGO PARA O{" "}
              <span className="text-stroke">SEU NEGÓCIO?</span>
            </h3>
            <p className="max-w-lg text-base text-[#A1A1A1]">
              Criamos identidades visuais que combinam criatividade,
              profissionalismo e presença de marca.
            </p>
            <MagneticButton
              testId="logo-cta-talk"
              variant="primary"
              href={WHATSAPP_LOGO_TALK_URL}
              arrow
            >
              Falar sobre minha logo
            </MagneticButton>
          </div>
        </FadeUp>
      </div>

      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};
