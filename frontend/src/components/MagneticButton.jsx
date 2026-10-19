import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const MagneticButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  testId,
  arrow = false,
}) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });
  const [pressed, setPressed] = useState(false);

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.34);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-500 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-[#F8F8F8] text-[#080808] hover:text-[#F8F8F8]"
      : "border border-[#2c2c2c] text-[#F8F8F8] hover:border-[#F8F8F8]/50";

  const content = (
    <>
      <span
        className={`absolute inset-0 origin-bottom scale-y-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 ${
          variant === "primary"
            ? "bg-gradient-to-b from-[#2a2a2a] to-[#080808]"
            : "bg-[#F8F8F8]"
        }`}
      />
      <span
        className={`pointer-events-none absolute inset-0 rounded-full transition-shadow duration-500 group-hover:shadow-[0_0_32px_rgba(248,248,248,0.25)] ${
          variant === "primary" ? "" : "group-hover:text-[#080808]"
        }`}
      />
      <span
        className={`relative z-10 transition-colors duration-500 ${
          variant === "outline" ? "group-hover:text-[#080808]" : ""
        }`}
      >
        {children}
      </span>
      {arrow && (
        <span className="relative z-10 flex h-5 w-5 items-center justify-center overflow-hidden">
          <ArrowUpRight
            className={`h-5 w-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-5 group-hover:opacity-0 ${
              variant === "outline" ? "group-hover:text-[#080808]" : ""
            }`}
          />
          <ArrowUpRight
            className={`absolute h-5 w-5 -translate-x-5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 ${
              variant === "outline" ? "group-hover:text-[#080808]" : ""
            }`}
          />
        </span>
      )}
    </>
  );

  const Tag = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
    : { onClick, type: "button" };

  return (
    <Tag
      ref={ref}
      data-testid={testId}
      {...linkProps}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{ x: sx, y: sy }}
      animate={{ scale: pressed ? 0.95 : 1 }}
      transition={{ duration: 0.2 }}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </Tag>
  );
};
