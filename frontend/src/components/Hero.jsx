import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { scrollToId } from "./Navbar";
import { WHATSAPP_URL } from "../data/projects";

const EASE = [0.22, 1, 0.36, 1];
const BRAND = "GLM CREATIVE".split("");
const L1 = "TRANSFORMAMOS IDEIAS EM".split(" ");
const L2 = "EXPERIÊNCIAS VISUAIS.".split(" ");

const Word = ({ word, delay, introDone, accent }) => (
  <span className="mask-line -mb-[0.12em] mr-[0.28em] inline-block pb-[0.12em] pt-[0.08em] last:mr-0">
    <motion.span
      className={`inline-block ${accent ? "text-stroke" : ""}`}
      initial={{ y: "115%" }}
      animate={introDone ? { y: "0%" } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {word}
    </motion.span>
  </span>
);

export const Hero = ({ introDone }) => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const orb1x = useTransform(sx, (v) => v * 46);
  const orb1y = useTransform(sy, (v) => v * 34);
  const orb2x = useTransform(sx, (v) => v * -60);
  const orb2y = useTransform(sy, (v) => v * -42);
  const ringX = useTransform(sx, (v) => v * 24);
  const ringY = useTransform(sy, (v) => v * 18);

  useEffect(() => {
    if (reduce) return;
    const fn = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [mx, my, reduce]);

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ duration: 1.6 }}
        style={{
          background:
            "linear-gradient(180deg, #080808 0%, #101010 45%, #080808 100%)",
        }}
      />

      <motion.div
        style={{ x: orb1x, y: orb1y }}
        className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(248,248,248,0.07)_0%,transparent_65%)] blur-2xl"
      />
      <motion.div
        style={{ x: orb2x, y: orb2y }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(120,120,120,0.1)_0%,transparent_65%)] blur-2xl"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none absolute right-[12%] top-[16%] hidden h-72 w-72 rounded-full border border-white/[0.07] lg:block"
      >
        <div className="absolute inset-8 rounded-full border border-white/[0.05]" />
        <div className="animate-pulse-glow absolute -left-px top-1/2 h-1.5 w-1.5 rounded-full bg-[#F8F8F8] shadow-[0_0_18px_rgba(248,248,248,0.9)]" />
      </motion.div>
      <motion.div
        style={{ x: orb2x, y: ringY }}
        className="pointer-events-none absolute bottom-[14%] left-[8%] hidden h-40 w-40 rotate-45 rounded-3xl border border-white/[0.06] lg:block"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,248,248,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(248,248,248,0.025) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#A1A1A1]"
        >
          <span className="h-px w-12 bg-gradient-to-r from-[#F8F8F8]/70 to-transparent" />
          Estúdio de design & experiências digitais
        </motion.p>

        <h1
          data-testid="hero-headline"
          className="font-display max-w-5xl text-[5.2vw] font-extrabold leading-[1.12] tracking-tight text-[#F8F8F8] sm:text-6xl sm:leading-[1.02] lg:text-7xl xl:text-[86px]"
        >
          {L1.map((w, i) => (
            <Word key={i} word={w} delay={0.25 + i * 0.09} introDone={introDone} />
          ))}
          <br />
          {L2.map((w, i) => (
            <Word
              key={i}
              word={w}
              delay={0.55 + i * 0.09}
              introDone={introDone}
              accent={i === 0}
            />
          ))}
        </h1>

        <motion.p
          data-testid="hero-subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-[#A1A1A1] sm:text-lg"
        >
          Design estratégico, identidades marcantes e experiências digitais
          criadas para destacar sua marca.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <MagneticButton
            testId="hero-cta-projetos"
            variant="outline"
            onClick={() => scrollToId("portfolio")}
          >
            Conheça nossos projetos
          </MagneticButton>
          <MagneticButton
            testId="hero-cta-orcamento"
            variant="primary"
            href={WHATSAPP_URL}
            arrow
          >
            Solicite seu orçamento
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#525252]">
          role
          <motion.span
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-[#F8F8F8]/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export const IntroOverlay = ({ onDone }) => {
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(onDone, reduce ? 100 : 2500);
    return () => clearTimeout(t);
  }, [onDone, reduce]);

  if (reduce) return null;

  return (
    <motion.div
      data-testid="intro-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.95, ease: EASE }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-[70vw] -translate-x-1/2 -translate-y-1/2"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, times: [0, 0.55, 1], ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(248,248,248,0.95), transparent)",
          boxShadow: "0 0 28px rgba(248,248,248,0.6)",
        }}
      />
      <div className="flex overflow-hidden font-display text-[6vw] font-extrabold tracking-[0.06em] text-[#F8F8F8] sm:text-4xl md:text-5xl">
        {BRAND.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 + i * 0.05, ease: EASE }}
            className={l === " " ? "w-3 sm:w-6" : ""}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
