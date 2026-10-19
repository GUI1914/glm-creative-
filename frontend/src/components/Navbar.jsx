import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../data/projects";

const LINKS = [
  { label: "Início", id: "inicio" },
  { label: "Sobre", id: "sobre" },
  { label: "Serviços", id: "servicos" },
  { label: "Portfólio", id: "portfolio" },
  { label: "Contato", id: "contato" },
];

export const Logo = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="none" stroke="rgba(248,248,248,0.25)" />
    <path
      d="M44 22c-2.6-3.4-6.8-5.2-11.4-5.2C23.4 16.8 17 23 17 32s6.4 15.2 15.6 15.2c5 0 9-1.8 11.4-5v-8.4H32v6h5.4v2.6c-1.2 1.5-3 2.4-5 2.4-5.4 0-8.8-4.6-8.8-12.8S27 19.2 32.4 19.2c3 0 5.4 1.2 7 3.4l4.6-0.6z"
      fill="#F8F8F8"
    />
    <circle cx="47" cy="17" r="3" fill="#F8F8F8" />
  </svg>
);

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = ({ introDone }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={introDone ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-[#080808]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12 lg:px-20">
          <button
            data-testid="nav-logo"
            onClick={() => go("inicio")}
            className="flex items-center gap-3"
            aria-label="GLM CREATIVE — Início"
          >
            <Logo />
            <span className="font-display text-sm font-bold tracking-[0.22em] text-[#F8F8F8]">
              GLM<span className="text-[#A1A1A1]"> CREATIVE</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="group relative text-[13px] font-medium tracking-wide text-[#A1A1A1] transition-colors duration-300 hover:text-[#F8F8F8]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#F8F8F8] transition-all duration-400 group-hover:w-full" />
              </button>
            ))}
            <a
              data-testid="nav-cta-orcamento"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-semibold text-[#F8F8F8] transition-all duration-400 hover:border-[#F8F8F8] hover:bg-[#F8F8F8] hover:text-[#080808]"
            >
              Orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            data-testid="nav-hamburger"
            onClick={() => setOpen(!open)}
            className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={`absolute h-px w-5 bg-[#F8F8F8] transition-all duration-400 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-[#F8F8F8] transition-all duration-400 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 92% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-center bg-[#0b0b0b] px-8 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  data-testid={`mobile-nav-link-${l.id}`}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  onClick={() => go(l.id)}
                  className="border-b border-white/5 py-4 text-left font-display text-3xl font-bold text-[#F8F8F8]"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
            <motion.a
              data-testid="mobile-nav-cta"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#F8F8F8] py-4 font-semibold text-[#080808]"
            >
              Solicite seu orçamento <ArrowUpRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
