import { Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { Logo, scrollToId } from "./Navbar";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../data/projects";

const LINKS = [
  { label: "Início", id: "inicio" },
  { label: "Serviços", id: "servicos" },
  { label: "Portfólio", id: "portfolio" },
  { label: "Contato", id: "contato" },
];

export const Footer = () => (
  <footer
    data-testid="footer"
    className="relative border-t border-white/[0.06] bg-[#050505]"
  >
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-20">
      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-base font-bold tracking-[0.22em] text-[#F8F8F8]">
              GLM<span className="text-[#A1A1A1]"> CREATIVE</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#A1A1A1]">
            Design que transforma ideias em presença digital.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              data-testid="footer-social-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da GLM CREATIVE"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#A1A1A1] transition-all duration-400 hover:border-[#F8F8F8] hover:text-[#F8F8F8]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              data-testid="footer-social-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#A1A1A1] transition-all duration-400 hover:border-[#F8F8F8] hover:text-[#F8F8F8]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#525252]">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`footer-link-${l.id}`}
                    onClick={() => scrollToId(l.id)}
                    className="text-sm text-[#A1A1A1] transition-colors duration-300 hover:text-[#F8F8F8]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#525252]">
              Contato
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  data-testid="footer-whatsapp-number"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1A1] transition-colors duration-300 hover:text-[#F8F8F8]"
                >
                  WhatsApp: (11) 97108-9118
                </a>
              </li>
              <li className="text-sm text-[#525252]">Atendimento em todo o Brasil</li>
            </ul>
          </div>
        </div>

        <button
          data-testid="footer-back-to-top"
          onClick={() => scrollToId("inicio")}
          aria-label="Voltar ao topo"
          className="group hidden h-12 w-12 items-center justify-center self-start rounded-full border border-white/10 text-[#A1A1A1] transition-all duration-400 hover:border-[#F8F8F8] hover:text-[#F8F8F8] lg:flex"
        >
          <ArrowUp className="h-4 w-4 transition-transform duration-400 group-hover:-translate-y-0.5" />
        </button>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
        <p className="text-xs text-[#525252]">
          © 2026 GLM CREATIVE. Todos os direitos reservados.
        </p>
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#3a3a3a]">
          Design • Estratégia • Experiência
        </p>
      </div>
    </div>
  </footer>
);
