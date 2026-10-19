import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const FadeUp = ({ children, delay = 0, className = "", y = 44 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.85, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children }) => (
  <span
    data-testid="section-eyebrow"
    className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#A1A1A1]"
  >
    <span className="h-px w-8 bg-gradient-to-r from-transparent via-[#F8F8F8]/60 to-transparent" />
    {children}
    <span className="h-px w-8 bg-gradient-to-r from-transparent via-[#F8F8F8]/60 to-transparent" />
  </span>
);

export const EASE_OUT = EASE;
