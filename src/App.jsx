import Lenis from "lenis";
import About from "./sections/About";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import { useEffect, useState } from "react";
import WhyUs from "./sections/WhyUs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Preloader from "./sections/Preloader";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <About />
      <FeaturedProjects />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
