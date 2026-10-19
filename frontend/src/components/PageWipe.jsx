import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];
const LINE =
  "linear-gradient(90deg, transparent, rgba(248,248,248,0.85), transparent)";

export const PageWipe = () => {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      data-testid="page-wipe"
      className="pointer-events-none fixed inset-0 z-[92] bg-[#080808]"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      exit={{ y: "0%" }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: LINE, boxShadow: "0 0 24px rgba(248,248,248,0.5)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: LINE, boxShadow: "0 0 24px rgba(248,248,248,0.5)" }}
      />
      <div className="flex h-full items-center justify-center">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display text-xs font-bold uppercase text-[#525252]"
        >
          GLM Creative
        </motion.span>
      </div>
    </motion.div>
  );
};
