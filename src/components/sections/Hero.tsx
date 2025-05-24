'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/contexts/LoadingContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { isLoadingComplete } = useLoading();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLButtonElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll a contacto
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (!contentRef.current || !titleRef.current || !imageRef.current || !heroRef.current) return;
    
    // No ejecutar las animaciones hasta que la pantalla de carga termine
    if (!isLoadingComplete) return;

    let masterTl: gsap.core.Timeline | null = null;

    // Pequeño delay para asegurar transición suave
    const startAnimations = () => {
      if (!titleRef.current || !imageRef.current || !locationRef.current || 
          !avatarRef.current || !subtitleRef.current || !portfolioRef.current || 
          !scrollRef.current || !heroRef.current) return;

      // Master timeline with smooth, professional animations
      masterTl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // 1. Image reveal with elegant fade
      masterTl.to(imageRef.current, {
        opacity: 0.85,
        scale: 1,
        duration: 1.8,
        ease: "power2.out"
      })

      // 2. Top content with sophisticated stagger
      .to(locationRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1.2")
      
      .to(avatarRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, "-=0.9")

      // 3. Title reveal with dramatic effect
      .to(titleRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1.6,
        stagger: {
          amount: 0.3,
          ease: "power2.out"
        },
        ease: "power4.out"
      }, "-=0.6")

      // 4. Bottom content with elegant timing
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out"
      }, "-=0.8")
      
      .to(portfolioRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out"
      }, "-=1.0")

      // 5. Scroll indicator with subtle bounce
      .to(scrollRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(2)"
      }, "-=0.7");

      // Parallax scroll effect
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Subtle scroll animations for content
      gsap.to(titleRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2
        }
      });
    };

    // Ejecutar animaciones con un pequeño delay para transición perfecta
    const animationTimer = setTimeout(startAnimations, 200);

    return () => {
      clearTimeout(animationTimer);
      if (masterTl) {
        masterTl.kill();
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoadingComplete]); // Dependencia en isLoadingComplete

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#f0f0f0] text-[#333]"
    >
      {/* Fondo con imagen con efecto parallax */}
      <div 
        ref={imageRef} 
        className="absolute inset-0 z-0 opacity-0"
        style={{ transform: 'scale(1.1)' }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/Tandem-Joan-2-min.jpg"
            alt="Joan Merino"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            style={{
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
          <p 
            ref={locationRef} 
            className="text-lg font-light text-white opacity-0"
            style={{ transform: 'translateY(-30px)' }}
          >
            Ubicado en Barcelona
          </p>
          <button 
            ref={avatarRef} 
            onClick={scrollToContact}
            className="group relative flex items-center space-x-2 opacity-0 cursor-pointer"
            style={{ transform: 'translateY(-30px)' }}
          >
            {/* El círculo principal con animaciones */}
            <div className="relative h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/25">
              
              {/* Efecto de pulse sutil */}
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
              
              {/* Icono sutil en el centro */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/60 transition-all duration-300 group-hover:bg-white group-hover:scale-125"></div>
              </div>
              
              {/* Anillo exterior al hover */}
              <div className="absolute -inset-2 rounded-full border border-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
            </div>

            {/* Indicador de click siempre visible */}
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-center space-x-1.5">
                <span className="text-xs text-white/70 font-light tracking-wider transition-colors duration-300 group-hover:text-white">
                  Contacto
                </span>
                <div className="w-3 h-px bg-white/50 transition-all duration-300 group-hover:bg-white group-hover:w-4"></div>
              </div>
              <span className="text-[10px] text-white/40 font-light tracking-widest uppercase transition-colors duration-300 group-hover:text-white/60">
                Click
              </span>
            </div>

            {/* Tooltip elegante mejorado */}
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-1">
              <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                <span className="text-xs text-white font-medium tracking-wider">
                  Ir a contacto
                </span>
              </div>
              {/* Flecha del tooltip */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 border-l border-t border-white/20 rotate-45"></div>
            </div>
          </button>
        </div>

        {/* Título principal */}
        <div className="relative mt-auto mb-16 flex flex-col w-full overflow-hidden">
          <div ref={titleRef} className="flex flex-wrap px-6 md:px-12 lg:px-20">
            <h1 
              className="text-5xl font-bold leading-[0.9] md:text-7xl lg:text-[120px] xl:text-[160px] tracking-[-0.03em] text-white opacity-0"
              style={{ transform: 'translateY(150px)', transformOrigin: 'bottom left' }}
            >
              Joan
            </h1>
            <h1 
              className="text-5xl font-bold leading-[0.9] md:text-7xl lg:text-[120px] xl:text-[160px] tracking-[-0.03em] text-white ml-4 opacity-0"
              style={{ transform: 'translateY(150px)', transformOrigin: 'bottom left' }}
            >
              Merino
            </h1>
          </div>

          {/* Info inferior */}
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-between md:items-end mt-8">
            <p 
              ref={subtitleRef} 
              className="text-xl md:text-3xl font-light text-white opacity-0"
              style={{ transform: 'translateY(50px)' }}
            >
              Desarrollador Web Full Stack
            </p>
            <div 
              ref={portfolioRef} 
              className="mt-10 md:mt-0 opacity-0"
              style={{ transform: 'translateY(50px)' }}
            >
              <div className="flex flex-col items-start space-y-1">
                <p className="text-lg tracking-wide text-white">Portfolio 2025</p>
                <div className="h-0.5 w-12 bg-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha de scroll */}
        <div 
          ref={scrollRef} 
          className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center space-x-2 opacity-0"
          style={{ transform: 'translateY(30px)' }}
        >
          <div className="h-0.5 w-5 bg-white"></div>
          <span className="text-sm text-white">Scroll</span>
        </div>
      </div>
    </section>
  );
}
