import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = ["SUA", "MARCA", "MERECE", "SER", "INESQUECÍVEL."];

const Word = ({ word, index, total, progress }) => {
  const start = index / total;
  const end = start + 1 / total;
  const color = useTransform(progress, [start, end], ["#333333", "#F8F8F8"]);
  const opacity = useTransform(progress, [start, end], [0.35, 1]);
  return (
    <motion.span style={{ color, opacity }} className="mr-[0.26em] inline-block last:mr-0">
      {word}
    </motion.span>
  );
};

export const Impact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section
      ref={ref}
      data-testid="impact-section"
      className="relative overflow-hidden bg-[#080808] py-36 lg:py-52"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(248,248,248,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full border border-white/[0.05]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8F8F8]/50 shadow-[0_0_16px_rgba(248,248,248,0.6)]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-12">
        <h2
          data-testid="impact-headline"
          className="font-display text-[5.6vw] font-extrabold leading-[1.1] tracking-tight sm:text-6xl sm:leading-[1.05] lg:text-[84px]"
        >
          {WORDS.map((w, i) => (
            <Word key={i} word={w} index={i} total={WORDS.length} progress={scrollYProgress} />
          ))}
        </h2>
      </div>
    </section>
  );
};
