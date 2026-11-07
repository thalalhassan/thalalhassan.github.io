import { useMotion } from "./hooks/useMotion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";

export default function App() {
  useMotion();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer mono">
        <span>© {new Date().getFullYear()} THALAL HASSAN</span>
        <span>
          DESIGNED & BUILT WITH CARE <b>✳</b>
        </span>
        <span>INDIA</span>
      </footer>
    </>
  );
}
