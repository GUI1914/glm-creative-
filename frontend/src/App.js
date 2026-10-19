import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import { Navbar, scrollToId } from "./components/Navbar";
import { Hero, IntroOverlay } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { LogoSection } from "./components/LogoSection";
import { Testimonials } from "./components/Testimonials";
import { Impact } from "./components/Impact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { PageWipe } from "./components/PageWipe";
import ProjectPage from "./components/ProjectPage";

const Home = ({ introDone }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const t = setTimeout(() => scrollToId(location.state.scrollTo), 500);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageWipe />
      <Navbar introDone={introDone} />
      <main>
        <Hero introDone={introDone} />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <LogoSection />
        <Testimonials />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

const AnimatedRoutes = ({ introDone }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home introDone={introDone} />} />
        <Route path="/projeto/:id" element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-[#080808] text-[#F8F8F8] antialiased">
      <AnimatePresence>
        {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
      </AnimatePresence>
      <BrowserRouter>
        <AnimatedRoutes introDone={introDone} />
      </BrowserRouter>
    </div>
  );
}

export default App;
