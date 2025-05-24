'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';

export default function Home() {
  useEffect(() => {
    // Manejar scroll automático cuando se navega con hash
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remover el #
        const element = document.getElementById(sectionId);
        if (element) {
          // Pequeño delay para asegurar que la página esté cargada
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Ejecutar al cargar la página
    handleHashScroll();

    // Limpiar el hash después del scroll para mantener la URL limpia
    const cleanupHash = () => {
      if (window.location.hash) {
        setTimeout(() => {
          window.history.replaceState(null, '', window.location.pathname);
        }, 1000);
      }
    };

    cleanupHash();
  }, []);

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
