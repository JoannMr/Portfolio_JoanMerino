'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLoading } from '@/contexts/LoadingContext';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const { setLoadingComplete } = useLoading();
  const loaderRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasStarted || !loaderRef.current || !nameRef.current || !lineRef.current || !subtitleRef.current || !dotRef.current) return;
    
    setHasStarted(true);

    // Establecer estados iniciales inmediatamente para evitar flash
    gsap.set(dotRef.current, { scale: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });
    gsap.set(nameRef.current.children, { y: 50, opacity: 0 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });

    // Marcar que GSAP está listo
    setGsapReady(true);

    // Timeline principal - tiempos reducidos significativamente
    const tl = gsap.timeline();

    // Animación de entrada más rápida y dinámica
    tl.to(dotRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
    })
    .to(lineRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2")
    .to(nameRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.04,
      ease: "power3.out"
    }, "-=0.3")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=0.2")
    
    // Pausa mínima para que se vea completo
    .to({}, { duration: 0.6 })
    
    // Notificar que está listo
    .call(() => {
      setLoadingComplete(true);
    })
    
    // Pausa muy breve para sincronización
    .to({}, { duration: 0.1 })
    
    // Salida más rápida
    .to([nameRef.current, subtitleRef.current, lineRef.current, dotRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.in"
    })
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setIsLoading(false);
      }
    }, "-=0.3");

  }, []); // Sin dependencias para evitar re-ejecuciones

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#f0f0f0] flex flex-col items-center justify-center"
    >
      {/* Contenedor principal */}
      <div className="relative">
        
        {/* Punto decorativo */}
        <div 
          ref={dotRef}
          className={`absolute -top-16 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#3B5BFE] rounded-full ${!gsapReady ? 'opacity-0 scale-0' : ''}`}
        ></div>

        {/* Línea horizontal */}
        <div 
          ref={lineRef}
          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-px bg-[#333333]/20 origin-center ${!gsapReady ? 'opacity-0 scale-x-0' : ''}`}
        ></div>

        {/* Nombre principal */}
        <div 
          ref={nameRef}
          className="text-center mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-[#333333] tracking-tight">
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>J</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>o</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>a</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>n</span>
            <span className={`inline-block ml-6 ${!gsapReady ? 'opacity-0' : ''}`}>M</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>e</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>r</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>i</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>n</span>
            <span className={`inline-block ${!gsapReady ? 'opacity-0' : ''}`}>o</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div 
          ref={subtitleRef}
          className={`text-center ${!gsapReady ? 'opacity-0' : ''}`}
        >
          <p className="text-lg md:text-xl text-[#333333]/60 font-light tracking-widest">
            FULL STACK DEVELOPER
          </p>
        </div>
      </div>

      {/* Elementos decorativos mínimos */}
      <div className="absolute top-1/4 left-16 w-px h-8 bg-[#3B5BFE]/30"></div>
      <div className="absolute bottom-1/4 right-16 w-px h-8 bg-[#3B5BFE]/30"></div>
      
      {/* Esquinas sutiles */}
      <div className="absolute top-12 left-12 w-4 h-4 border-l border-t border-[#333333]/10"></div>
      <div className="absolute bottom-12 right-12 w-4 h-4 border-r border-b border-[#333333]/10"></div>
    </div>
  );
} 