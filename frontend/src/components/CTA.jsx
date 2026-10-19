import { FadeUp, Eyebrow } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { WHATSAPP_URL } from "../data/projects";

export const CTA = () => (
  <section
    id="contato"
    data-testid="cta-section"
    className="relative overflow-hidden py-32 lg:py-48"
  >
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(248,248,248,0.05)_0%,transparent_60%)] blur-3xl" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

    <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-12">
      <FadeUp className="flex justify-center">
        <Eyebrow>Orçamento</Eyebrow>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="font-display mt-8 text-3xl font-extrabold leading-[1.05] tracking-tight text-[#F8F8F8] sm:text-5xl lg:text-6xl">
          TEM UMA IDEIA? <br />
          <span className="text-stroke">VAMOS TIRAR DO PAPEL.</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p className="mx-auto mt-8 max-w-md text-base text-[#A1A1A1] sm:text-lg">
          Seu próximo projeto começa com uma conversa.
        </p>
      </FadeUp>
      <FadeUp delay={0.3} className="mt-12 flex justify-center">
        <MagneticButton
          testId="cta-whatsapp-button"
          variant="primary"
          href={WHATSAPP_URL}
          arrow
          className="px-12 py-5 text-base"
        >
          Vamos criar juntos
        </MagneticButton>
      </FadeUp>
    </div>
  </section>
);
