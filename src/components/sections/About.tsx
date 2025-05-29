'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !textRef.current || !imageRef.current || !connectRef.current) return;

    // Limpiar ScrollTriggers existentes
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === sectionRef.current) {
        t.kill();
      }
    });

    // Establecer estados iniciales explícitos para evitar problemas de navegación
    gsap.set(titleRef.current.children, { y: 50, opacity: 0 });
    gsap.set(textRef.current.children, { y: 30, opacity: 0 });
    gsap.set(connectRef.current.children, { y: 20, opacity: 0 });

    // Timeline principal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse", // Añadido para mejor control
        refreshPriority: -1, // Prioridad baja para evitar conflictos
      }
    });

    // Animación del título
    tl.to(titleRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Animación del texto
    tl.to(textRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.5");

    // Animación de la sección de conexión
    tl.to(connectRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5");

    // Animación de la imagen con parallax (separada del timeline principal)
    const parallaxST = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(imageRef.current, {
          yPercent: -20 * self.progress,
          duration: 0.3,
          ease: "none"
        });
      }
    });

    // Refresh ScrollTrigger después de un breve delay para asegurar el layout
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      tl.kill();
      parallaxST.kill();
      // Limpiar estados para evitar conflictos al navegar (solo si los elementos existen)
      if (titleRef.current?.children && textRef.current?.children && connectRef.current?.children) {
        gsap.set([titleRef.current.children, textRef.current.children, connectRef.current.children], {
          clearProps: "all"
        });
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-[#f0f0f0] text-[#333333] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        {/* Título de sección */}
        <div ref={titleRef} className="mb-16 md:mb-24">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-0.5 w-12 bg-[#333333]"></div>
            <span className="text-sm uppercase tracking-wider">Sobre mí</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Creando experiencias <br className="hidden md:block" />
            web extraordinarias
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Columna de texto */}
          <div className="order-2 md:order-1">
            <div ref={textRef} className="space-y-8 text-lg md:text-xl">
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

            {/* Nueva sección de conexión minimalista */}
            <div ref={connectRef} className="mt-16 border-t border-[#333]/10 pt-8">
              <div className="flex flex-col space-y-4">
                <p className="text-lg md:text-xl font-light">
                  ¿Tienes un proyecto en mente?
                </p>
                <a 
                  href="#contact" 
                  className="group inline-flex items-center text-lg md:text-xl hover:text-[#3B5BFE] transition-colors duration-300"
                >
                  <span className="border-b border-current">Hablemos sobre ello</span>
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna de imagen */}
          <div ref={imageRef} className="order-1 md:order-2 h-[400px] md:h-[600px]">
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
          </div>
        </div>
      </div>
    </section>
  );
} 