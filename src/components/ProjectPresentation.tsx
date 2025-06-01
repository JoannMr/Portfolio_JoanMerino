'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ArrowLeft, ExternalLink, Code, Calendar, Github } from 'lucide-react';

interface ProjectPresentationProps {
  projectName: string;
  projectType: string;
  description: string;
  longDescription: string;
  year: string;
  status: 'live' | 'development' | 'planning' | 'completed';
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  mockupImage?: string;
  teamSize?: string;
  duration?: string;
  role: string;
}

export default function ProjectPresentation({
  projectName,
  projectType,
  description,
  longDescription,
  year,
  status,
  liveUrl,
  githubUrl,
  technologies,
  features,
  mockupImage,
  teamSize = "1 desarrollador",
  duration,
  role
}: ProjectPresentationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada
      const tl = gsap.timeline();
      
      tl.from(".project-hero", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out"
      })
      .from(".project-info", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".project-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .from(".project-details", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.6")
      .from(".project-navigation", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getStatusBadge = () => {
    switch (status) {
      case 'live':
        return (
          <span className="px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>En vivo</span>
          </span>
        );
      case 'development':
        return (
          <span className="px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>En desarrollo</span>
          </span>
        );
      case 'planning':
        return (
          <span className="px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-800 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span>En planificación</span>
          </span>
        );
      case 'completed':
        return (
          <span className="px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-800 flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>Completado</span>
          </span>
        );
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f0f0f0]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="project-hero text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="px-4 py-2 bg-[#333333]/10 rounded-full text-sm font-medium text-[#333333]">
                {projectType}
              </span>
              {getStatusBadge()}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#333333] mb-6 leading-[1.1]">
              {projectName}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-[#3B5BFE] text-white rounded-full hover:bg-[#3B5BFE]/90 transition-all duration-300 group"
                >
                  <span className="font-medium">Ver proyecto en vivo</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              )}
              
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-[#333333] text-white rounded-full hover:bg-[#333333]/90 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Ver código en GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="project-info lg:col-span-2">
              <div className="project-description bg-white rounded-2xl p-8 shadow-lg border border-[#333333]/10">
                <div className="flex items-center space-x-2 mb-6">
                  <Code className="w-6 h-6 text-[#3B5BFE]" />
                  <h2 className="text-2xl font-bold text-[#333333]">Sobre el proyecto</h2>
                </div>
                <p className="text-[#333333]/80 text-lg leading-relaxed mb-8">
                  {longDescription}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#333333] mb-4">Tecnologías utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-[#3B5BFE]/10 text-[#3B5BFE] font-medium hover:bg-[#3B5BFE]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-4">Características principales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#3B5BFE] mt-2 flex-shrink-0"></div>
                        <span className="text-[#333333]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="project-details space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#333333]/10">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-[#3B5BFE]" />
                  <h3 className="font-semibold text-[#333333]">Detalles del proyecto</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-[#333333]/60">Año</span>
                    <p className="font-medium text-[#333333]">{year}</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#333333]/60">Mi rol</span>
                    <p className="font-medium text-[#333333]">{role}</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#333333]/60">Equipo</span>
                    <p className="font-medium text-[#333333]">{teamSize}</p>
                  </div>
                  {duration && (
                    <div>
                      <span className="text-sm text-[#333333]/60">Duración</span>
                      <p className="font-medium text-[#333333]">{duration}</p>
                    </div>
                  )}
                </div>
              </div>

              {mockupImage && (
                <div className="bg-white rounded-xl p-6 shadow-lg border border-[#333333]/10">
                  <h3 className="font-semibold text-[#333333] mb-4">Vista previa</h3>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={mockupImage}
                      alt={`${projectName} preview`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="project-navigation flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-3 px-6 py-3 bg-[#333333] text-white rounded-full hover:bg-[#333333]/90 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Volver al portfolio</span>
            </Link>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-[#3B5BFE] text-white rounded-full hover:bg-[#3B5BFE]/90 transition-all duration-300 group"
              >
                <span className="font-medium">Visitar sitio web</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Ver en GitHub</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Decorative elements */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-[#3B5BFE]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-20 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
} 