import Lenis from "lenis";
import About from "./sections/About";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";
import { useEffect } from "react";
import WhyUs from "./sections/WhyUs";
import Contact from "./sections/Contact";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <FeaturedProjects />
      <WhyUs />
      <Contact />
    </div>
  );
}
