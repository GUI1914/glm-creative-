import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FadeUp, Eyebrow } from "./Reveal";
import { testimonials } from "../data/projects";

export const Testimonials = () => (
  <section
    id="depoimentos"
    data-testid="testimonials-section"
    className="relative overflow-hidden py-28 lg:py-40"
  >
    <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(248,248,248,0.04)_0%,transparent_65%)] blur-2xl" />

    <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
      <div className="mb-16">
        <FadeUp>
          <Eyebrow>Depoimentos</Eyebrow>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-display mt-8 max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-[#F8F8F8] sm:text-4xl lg:text-5xl">
            QUEM CRIOU COM A GLM, <span className="text-stroke">RECOMENDA.</span>
          </h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {testimonials.map((t, i) => (
          <FadeUp key={t.id} delay={i * 0.12} className={i === 1 ? "md:mt-12" : ""}>
            <motion.figure
              data-testid={`testimonial-card-${t.id}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full flex-col rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-[#111111] to-[#0a0a0a] p-8 transition-colors duration-500 hover:border-white/[0.22] lg:p-10"
            >
              <span className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.1)]" />
              <Quote className="h-8 w-8 text-[#2c2c2c] transition-colors duration-500 group-hover:text-[#A1A1A1]" />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-[#d6d6d6]">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.07] pt-6">
                <span className="font-display flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold text-[#F8F8F8]">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#F8F8F8]">{t.name}</span>
                  <span className="block text-xs text-[#525252]">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
