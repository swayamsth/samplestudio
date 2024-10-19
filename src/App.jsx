import About from "./sections/About";
import FeaturedProjects from "./sections/FeaturedProjects";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}
