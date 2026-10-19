import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Eyebrow } from "./Reveal";
import { projects, filters } from "../data/projects";

const ViewCursor = ({ visible, x, y }) => (
  <motion.div
    data-testid="portfolio-cursor"
    className="pointer-events-none fixed left-0 top-0 z-[80] hidden items-center gap-2 rounded-full bg-[#F8F8F8] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#080808] lg:flex"
    style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
  >
    Visualizar
  </motion.div>
);

const ProjectCard = ({ p, index, onHover }) => {
  const navigate = useNavigate();
  const open = () => navigate(`/projeto/${p.id}`);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={index % 2 === 1 ? "lg:mt-20" : ""}
    >
      <div className="mb-5 flex items-end justify-between px-1">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#525252]">
            {String(index + 1).padStart(2, "0")} — {p.category}
          </p>
          <h3 className="font-display mt-2 text-2xl font-bold text-[#F8F8F8] sm:text-3xl">
            {p.niche}
          </h3>
        </div>
        <button
          data-testid={`project-explore-${p.id}`}
          onClick={open}
          className="group/btn hidden items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-xs font-semibold text-[#A1A1A1] transition-all duration-400 hover:border-[#F8F8F8] hover:text-[#F8F8F8] sm:inline-flex"
        >
          Visualizar projeto
          <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>

      <button
        data-testid={`project-card-${p.id}`}
        onClick={open}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        aria-label={`Abrir projeto ${p.niche}`}
        className="group relative block w-full overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0d0d] text-left transition-colors duration-500 hover:border-white/[0.2]"
      >
        <div className="overflow-hidden">
          <img
            src={p.img}
            alt={p.alt}
            loading="lazy"
            className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute bottom-0 left-0 flex w-full translate-y-4 items-center justify-between p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-display text-lg font-bold text-[#F8F8F8]">{p.name}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F8F8] text-[#080808]">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </button>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [active, setActive] = useState("Todos");
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const scx = useSpring(cx, { stiffness: 350, damping: 30 });
  const scy = useSpring(cy, { stiffness: 350, damping: 30 });

  const list =
    active === "Todos" ? projects : projects.filter((p) => p.niche === active);

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative py-28 lg:py-40"
      onMouseMove={(e) => {
        if (!reduce) {
          cx.set(e.clientX);
          cy.set(e.clientY);
        }
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(248,248,248,0.04)_0%,transparent_65%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="mb-14 text-center">
          <FadeUp className="flex justify-center">
            <Eyebrow>Portfólio</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display mx-auto mt-8 max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-[#F8F8F8] sm:text-4xl lg:text-5xl">
              PROJETOS QUE <span className="text-stroke">FALAM POR SI.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base text-[#A1A1A1]">
              Explore algumas possibilidades criativas desenvolvidas para
              diferentes segmentos.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div
            data-testid="portfolio-filters"
            className="mb-14 flex flex-wrap justify-center gap-3"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                data-testid={`filter-${f.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => setActive(f.value)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors duration-400 ${
                  active === f.value
                    ? "text-[#080808]"
                    : "border border-white/10 text-[#A1A1A1] hover:border-white/30 hover:text-[#F8F8F8]"
                }`}
              >
                {active === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[#F8F8F8]"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </FadeUp>

        <motion.div layout className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-10">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} onHover={setHovering} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {!reduce && <ViewCursor visible={hovering} x={scx} y={scy} />}
    </section>
  );
};
