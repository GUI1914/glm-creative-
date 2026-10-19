import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export const Lightbox = ({ project, onClose }) => {
  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      data-testid="portfolio-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
      className="fixed inset-0 z-[95] flex items-center justify-center bg-[#080808]/95 p-4 backdrop-blur-xl sm:p-10"
    >
      <button
        data-testid="lightbox-close"
        onClick={onClose}
        aria-label="Fechar visualização"
        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#F8F8F8] transition-colors hover:bg-white/10"
      >
        <X className="h-5 w-5" />
      </button>
      <motion.figure
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-6xl"
      >
        <img
          src={project.img}
          alt={project.alt}
          className="max-h-[78vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-[0_40px_120px_-30px_rgba(0,0,0,1)]"
        />
        <figcaption className="mt-5 flex items-center justify-between">
          <div>
            <p className="font-display text-lg font-bold text-[#F8F8F8]">{project.niche}</p>
            <p className="text-sm text-[#A1A1A1]">{project.name}</p>
          </div>
          <span className="rounded-full border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#A1A1A1]">
            {project.category}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};
