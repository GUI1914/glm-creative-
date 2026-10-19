import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Maximize2 } from "lucide-react";
import { projects, processSteps, WHATSAPP_URL } from "../data/projects";
import { Logo } from "./Navbar";
import { Lightbox } from "./Lightbox";
import { PageWipe } from "./PageWipe";
import { MagneticButton } from "./MagneticButton";
import { FadeUp } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1];

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(false);
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    navigate("/", { replace: true });
    return null;
  }

  const next = projects[(index + 1) % projects.length];
  const back = () => navigate("/", { state: { scrollTo: "portfolio" } });

  return (
    <div data-testid="project-page" className="min-h-screen bg-[#080808]">
      <PageWipe />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#080808]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12 lg:px-20">
          <button
            data-testid="project-back-button"
            onClick={back}
            className="group flex items-center gap-3 text-sm font-medium text-[#A1A1A1] transition-colors hover:text-[#F8F8F8]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-[#F8F8F8]">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </span>
            <span className="hidden sm:inline">Voltar ao portfólio</span>
          </button>
          <button onClick={() => navigate("/")} aria-label="GLM CREATIVE — Início">
            <Logo className="h-8 w-8" />
          </button>
          <a
            data-testid="project-cta-orcamento"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-semibold text-[#F8F8F8] transition-all duration-400 hover:border-[#F8F8F8] hover:bg-[#F8F8F8] hover:text-[#080808]"
          >
            Orçamento
            <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:px-12 lg:px-20 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#A1A1A1]"
        >
          <span className="h-px w-12 bg-gradient-to-r from-[#F8F8F8]/70 to-transparent" />
          {project.niche} — {project.category}
        </motion.p>

        <motion.h1
          data-testid="project-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="font-display mt-6 max-w-full text-[clamp(1.6rem,7.2vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#F8F8F8]"
        >
          {project.name}
        </motion.h1>

        <FadeUp delay={0.2} className="mt-14">
          <button
            data-testid="project-image"
            onClick={() => setZoom(true)}
            aria-label="Ampliar imagem do projeto"
            className="group relative block w-full overflow-hidden rounded-[32px] border border-white/[0.08]"
          >
            <img
              src={project.img}
              alt={project.alt}
              className="w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#080808]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F8F8F8] opacity-0 backdrop-blur-md transition-opacity duration-400 group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" /> Tela cheia
            </span>
          </button>
        </FadeUp>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <FadeUp className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-[#F8F8F8] sm:text-3xl">
              Sobre o projeto
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A1A1A1]">
              {project.description}
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.deliverables.map((d) => (
                <li
                  key={d}
                  data-testid={`project-deliverable-${d.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-[#d6d6d6]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F8F8F8] text-[#080808]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-[#F8F8F8] sm:text-3xl">
              Processo criativo
            </h2>
            <div className="mt-6 space-y-0">
              {processSteps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="group flex gap-5 border-b border-white/[0.07] py-5 last:border-0"
                >
                  <span className="font-display text-sm font-bold text-[#525252] transition-colors group-hover:text-[#F8F8F8]">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-semibold text-[#F8F8F8]">{s.title}</p>
                    <p className="mt-1 text-sm text-[#A1A1A1]">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} className="mt-24 flex flex-col items-center gap-10 rounded-[32px] border border-white/[0.07] bg-gradient-to-b from-[#101010] to-[#0a0a0a] px-8 py-16 text-center">
          <h2 className="font-display max-w-xl text-2xl font-extrabold leading-tight text-[#F8F8F8] sm:text-4xl">
            QUER ALGO ASSIM PARA O <span className="text-stroke">SEU NEGÓCIO?</span>
          </h2>
          <MagneticButton
            testId="project-cta-whatsapp"
            variant="primary"
            href={WHATSAPP_URL}
            arrow
          >
            Solicite seu orçamento
          </MagneticButton>
        </FadeUp>

        <FadeUp delay={0.05} className="mt-20">
          <button
            data-testid="project-next-button"
            onClick={() => navigate(`/projeto/${next.id}`)}
            className="group flex w-full items-center justify-between border-t border-white/[0.08] pt-10 text-left"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#525252]">
                Próximo projeto
              </p>
              <p className="font-display mt-3 text-3xl font-extrabold text-[#F8F8F8] transition-colors group-hover:text-white sm:text-5xl">
                {next.niche}
              </p>
            </div>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-[#F8F8F8] transition-all duration-500 group-hover:border-[#F8F8F8] group-hover:bg-[#F8F8F8] group-hover:text-[#080808]">
              <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </button>
        </FadeUp>
      </main>

      <AnimatePresence>
        {zoom && <Lightbox project={project} onClose={() => setZoom(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPage;
