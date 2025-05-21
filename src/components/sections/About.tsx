'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Efectos de parallax para diferentes elementos
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-[#f0f0f0] text-[#333333] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Título de sección con animación */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-0.5 w-12 bg-[#333333]"></div>
            <span className="text-sm uppercase tracking-wider">Sobre mí</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Creando experiencias <br className="hidden md:block" />
            web extraordinarias
          </h2>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Columna de texto */}
          <motion.div 
            style={{ y: textY }}
            className="order-2 md:order-1"
          >
            <div className="space-y-8 text-lg md:text-xl">
              <p>
                Soy un desarrollador web full stack con sede en Barcelona, 
                especializado en crear experiencias digitales únicas y 
                funcionales que combinan diseño atractivo y código limpio.
              </p>
              <p>
                Mi enfoque se centra en la construcción de aplicaciones web 
                modernas con las tecnologías más actuales, priorizando la 
                experiencia del usuario y el rendimiento en todos mis proyectos.
              </p>
              <p>
                Tengo experiencia trabajando con React, Next.js, Node.js, 
                y una variedad de otras tecnologías que me permiten 
                desarrollar soluciones completas y escalables.
              </p>
            </div>

            {/* Estadísticas o habilidades */}
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-5xl font-bold mb-2">3+</h4>
                <p className="text-sm opacity-70">Años de experiencia</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold mb-2">20+</h4>
                <p className="text-sm opacity-70">Proyectos completados</p>
              </div>
            </div>
          </motion.div>

          {/* Columna de imagen */}
          <motion.div 
            style={{ scale: imgScale }}
            className="order-1 md:order-2 h-[400px] md:h-[600px]"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/about.jpg" 
                alt="Joan Merino trabajando"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#333333]/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 