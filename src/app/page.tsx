import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      </main>
  );
}
