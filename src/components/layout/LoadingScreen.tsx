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
  const counterRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasStarted || !loaderRef.current || !nameRef.current || !lineRef.current || !subtitleRef.current || !dotRef.current || !counterRef.current || !circleRef.current || !percentRef.current) return;
    
    setHasStarted(true);

    // Establecer estados iniciales inmediatamente para evitar flash
    gsap.set(dotRef.current, { scale: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });
    gsap.set(nameRef.current.children, { y: 50, opacity: 0 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
    gsap.set(counterRef.current, { opacity: 0, y: 30 });

    // Configurar círculo de progreso
    const circumference = 2 * Math.PI * 45; // radio de 45
    gsap.set(circleRef.current, { 
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
      rotation: -90,
      transformOrigin: "center"
    });

    // Marcar que GSAP está listo
    setGsapReady(true);

    // Timeline principal con contador de progreso
    const tl = gsap.timeline();

    // Animación del contador de progreso - duración extendida para mejor visualización
    const progressTween = gsap.to({ value: 0 }, {
      value: 100,
      duration: 3.2, // Aumentado para que se vea mejor el contador
      ease: "power2.out",
      onUpdate: function() {
        const currentProgress = Math.round(this.targets()[0].value);
        
        // Actualizar círculo
        const offset = circumference - (currentProgress / 100) * circumference;
        gsap.set(circleRef.current, { strokeDashoffset: offset });
        
        // Actualizar texto del porcentaje
        if (percentRef.current) {
          percentRef.current.textContent = currentProgress.toString();
        }
      },
      onComplete: function() {
        // Animación especial cuando llega al 100%
        gsap.to(circleRef.current, {
          stroke: "#00ff88",
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Pulso de éxito en el contador
        gsap.to(counterRef.current, {
          scale: 1.1,
          duration: 0.2,
          ease: "back.out(1.7)",
          yoyo: true,
          repeat: 1
        });
        
        // Cambiar texto a "Completado"
        setTimeout(() => {
          if (percentRef.current?.parentElement?.nextElementSibling) {
            const textElement = percentRef.current.parentElement.nextElementSibling.querySelector('p');
            if (textElement) {
              textElement.textContent = 'COMPLETADO';
            }
          }
        }, 200);
      }
    });

    // Animación de entrada más rápida y dinámica
    tl.to(dotRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    })
    .to(lineRef.current, {
      scaleX: 1,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.3")
    .to(nameRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out"
    }, "-=0.4")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.3")
    .to(counterRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    
    // Iniciar contador de progreso después de que aparezcan los elementos
    .add(progressTween, "-=0.2")
    
    // Pausa breve para mostrar el estado completado
    .to({}, { duration: 0.5 })
    
    // Animación de transición hacia la página principal
    .to(counterRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in"
    })
    .to([nameRef.current, subtitleRef.current], {
      y: -30,
      opacity: 0.3,
      duration: 0.5,
      ease: "power3.in"
    }, "-=0.2")
    .to([lineRef.current, dotRef.current], {
      scaleX: 0,
      scale: 0,
      duration: 0.3,
      ease: "power3.in"
    }, "-=0.3")
    
    // Notificar que está listo para la transición
    .call(() => {
      setLoadingComplete(true);
    })
    
    // Pausa mínima para sincronización
    .to({}, { duration: 0.1 })
    
    // Efecto moderno de blur + scale out elegante
    .to(loaderRef.current, {
      filter: "blur(20px)",
      scale: 1.1,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        setIsLoading(false);
      }
    });

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

      {/* Contador de progreso circular */}
      <div 
        ref={counterRef}
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 ${!gsapReady ? 'opacity-0' : ''}`}
      >
        <div className="relative flex items-center justify-center">
          {/* Círculo de progreso SVG */}
          <svg 
            width="120" 
            height="120" 
            className="transform"
          >
            {/* Círculo de fondo */}
            <circle
              cx="60"
              cy="60"
              r="45"
              stroke="#333333"
              strokeWidth="1"
              fill="none"
              opacity="0.1"
            />
            {/* Círculo de progreso */}
            <circle
              ref={circleRef}
              cx="60"
              cy="60"
              r="45"
              stroke="#3B5BFE"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Porcentaje en el centro */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span 
              ref={percentRef}
              className="text-3xl font-bold text-[#333333] tabular-nums"
            >
              0
            </span>
            <span className="text-xs text-[#333333]/60 font-light tracking-widest mt-1">
              %
            </span>
          </div>
        </div>
        
        {/* Texto descriptivo */}
        <div className="text-center mt-4">
          <p className="text-xs text-[#333333]/50 font-light tracking-widest uppercase">
            Cargando experiencia
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