'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !titleRef.current || !imageRef.current || !heroRef.current) return;

    // Timeline principal
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animación de la imagen
    tl.from(imageRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 2,
    });

    // Animación del contenido superior
    const contentChildren = Array.from(contentRef.current.children);
    tl.from(contentChildren, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    }, "-=1.5");

    // Animación del título con efecto de split
    const titleElements = Array.from(titleRef.current.children);
    tl.from(titleElements, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out"
    }, "-=1");

    // Animación de scroll
    gsap.to(imageRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#f0f0f0] text-[#333]"
    >
      {/* Fondo con imagen con efecto parallax */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/Tandem-Joan-2-min.jpg"
            alt="Joan Merino"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            style={{
              opacity: 0.85,
              objectPosition: 'center 25%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-0 pt-40 pb-20">
        {/* Encabezado */}
        <div ref={contentRef} className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <p className="text-lg font-light text-white">
            Ubicado en Barcelona
          </p>
          <div className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md" />
          </div>
        </div>

        {/* Título principal */}
        <div className="relative mt-auto mb-16 flex flex-col w-full overflow-hidden">
          <div ref={titleRef} className="flex flex-wrap px-6 md:px-12 lg:px-20">
            <h1 className="text-5xl font-bold leading-[0.9] md:text-7xl lg:text-[120px] xl:text-[160px] tracking-[-0.03em] text-white">
              Joan
            </h1>
            <h1 className="text-5xl font-bold leading-[0.9] md:text-7xl lg:text-[120px] xl:text-[160px] tracking-[-0.03em] text-white ml-4">
              Merino
            </h1>
          </div>

          {/* Info inferior */}
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-between md:items-end mt-8">
            <p className="text-xl md:text-3xl font-light text-white">
              Desarrollador Web Full Stack
            </p>
            <div className="mt-10 md:mt-0">
              <div className="flex flex-col items-start space-y-1">
                <p className="text-lg tracking-wide text-white">Portfolio 2025</p>
                <div className="h-0.5 w-12 bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha de scroll */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center space-x-2">
          <div className="h-0.5 w-5 bg-white"></div>
          <span className="text-sm text-white">Scroll</span>
        </div>
      </div>
    </section>
  );
}
