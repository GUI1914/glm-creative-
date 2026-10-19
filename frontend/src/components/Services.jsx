import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Fingerprint, Share2, Globe2, Megaphone, ArrowUpRight } from "lucide-react";
import { FadeUp, Eyebrow } from "./Reveal";

const SERVICES = [
  {
    n: "01",
    icon: Fingerprint,
    title: "Identidade Visual",
    desc: "Criação de logos, elementos gráficos e identidades que tornam marcas reconhecíveis.",
  },
  {
    n: "02",
    icon: Share2,
    title: "Design para Redes Sociais",
    desc: "Artes profissionais, campanhas visuais e conteúdos para destacar negócios nas redes sociais.",
  },
  {
    n: "03",
    icon: Globe2,
    title: "Desenvolvimento de Sites",
    desc: "Landing pages e sites modernos, responsivos e pensados para transformar visitantes em potenciais clientes.",
  },
  {
    n: "04",
    icon: Megaphone,
    title: "Criativos Publicitários",
    desc: "Peças promocionais, banners e campanhas criativas para valorizar produtos e serviços.",
  },
];

const Card = ({ s, index }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 160, damping: 18 });
  const rY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 160, damping: 18 });
  const Icon = s.icon;

  const move = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const leave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <FadeUp delay={index * 0.09}>
      <motion.div
        ref={ref}
        data-testid={`service-card-${s.n}`}
        onMouseMove={move}
        onMouseLeave={leave}
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        className="group relative h-full rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-[#111111] to-[#0a0a0a] p-8 transition-colors duration-500 hover:border-white/[0.22] lg:p-10"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)" }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 shadow-[inset_0_0_0_1px_rgba(248,248,248,0.12),0_24px_60px_-24px_rgba(0,0,0,0.9)] transition-opacity duration-500 group-hover:opacity-100" />

        <div style={{ transform: "translateZ(30px)" }} className="relative">
          <div className="flex items-start justify-between">
            <span className="font-display text-sm font-bold tracking-[0.2em] text-[#525252] transition-colors duration-500 group-hover:text-[#A1A1A1]">
              {s.n}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:rotate-6 group-hover:border-white/25 group-hover:bg-white/[0.08]">
              <Icon className="h-5 w-5 text-[#A1A1A1] transition-colors duration-500 group-hover:text-[#F8F8F8]" />
            </span>
          </div>
          <h3 className="font-display mt-10 text-xl font-bold text-[#F8F8F8] sm:text-2xl">
            {s.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#A1A1A1]">{s.desc}</p>
          <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#525252] transition-colors duration-500 group-hover:text-[#F8F8F8]">
            Explorar
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
};

export const Services = () => (
  <section
    id="servicos"
    data-testid="services-section"
    className="relative py-28 lg:py-40"
    style={{ perspective: "1200px" }}
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
      <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <FadeUp>
            <Eyebrow>Serviços</Eyebrow>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display mt-8 max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tight text-[#F8F8F8] sm:text-4xl lg:text-5xl">
              O QUE PODEMOS <span className="text-stroke">CRIAR</span> PARA VOCÊ?
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <p className="max-w-sm text-sm leading-relaxed text-[#A1A1A1]">
            Da identidade à presença digital: soluções visuais completas para
            marcas que querem se destacar.
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {SERVICES.map((s, i) => (
          <Card key={s.n} s={s} index={i} />
        ))}
      </div>
    </div>
  </section>
);
