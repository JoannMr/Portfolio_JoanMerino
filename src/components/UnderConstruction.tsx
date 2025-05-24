'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowLeft, Wrench, Clock, Code } from 'lucide-react';

interface UnderConstructionProps {
  projectName: string;
  projectType: string;
  description: string;
  expectedCompletion?: string;
  features?: string[];
}

export default function UnderConstruction({
  projectName,
  projectType,
  description,
  expectedCompletion = "Próximamente",
  features = []
}: UnderConstructionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada
      const tl = gsap.timeline();
      
      tl.from(".construction-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      })
      .from(".construction-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .from(".construction-features", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.4")
      .from(".construction-back", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");

      // Animación del icono
      gsap.to(iconRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      // Animación de pulsación sutil
      gsap.to(".pulse-element", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f0f0f0] flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="construction-header mb-12">
          <div ref={iconRef} className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#3B5BFE] mb-8 pulse-element">
            <Wrench className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-4">
            {projectName}
          </h1>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="px-4 py-2 bg-[#333333]/10 rounded-full text-sm font-medium text-[#333333]">
              {projectType}
            </span>
            <span className="px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-800 flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>En construcción</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="construction-content mb-12">
          <p className="text-xl md:text-2xl text-[#333333]/80 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#333333]/10">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Code className="w-6 h-6 text-[#3B5BFE]" />
              <h3 className="text-xl font-bold text-[#333333]">Desarrollo en progreso</h3>
            </div>
            
            <p className="text-[#333333]/70 mb-6">
              Actualmente estoy trabajando en este proyecto con mucha dedicación. 
              Pronto estará disponible con todas sus funcionalidades.
            </p>
            
            <div className="text-center">
              <span className="inline-flex items-center space-x-2 px-6 py-3 bg-[#3B5BFE]/10 rounded-full text-[#3B5BFE] font-medium">
                <Clock className="w-4 h-4" />
                <span>{expectedCompletion}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Features (si se proporcionan) */}
        {features.length > 0 && (
          <div className="construction-features mb-12">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">Características planeadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#333333]/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-[#3B5BFE]/10 flex items-center justify-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#3B5BFE]"></div>
                  </div>
                  <p className="text-[#333333]/80 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to home */}
        <div className="construction-back">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#333333] text-white rounded-full hover:bg-[#333333]/90 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Volver al portfolio</span>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#3B5BFE]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
} 