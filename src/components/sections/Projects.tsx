'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

// Datos de los proyectos
const projects = [
  {
    id: 1,
    title: 'DevLeap',
    description: 'Una plataforma de cursos online de programación y otras cosas de IT.',
    category: 'Plataforma Educativa',
    year: '2025',
    image: '/images/devleap.png',
    link: '/project/dev-leap',
  },
  {
    id: 2,
    title: 'Bloomi',
    description: 'Una marca de bebidas saludables y ecológicas.',
    category: 'Sitio Corporativo',
    year: '2025',
    image: '/images/bloo.png',
    link: '/project/bloomi',
  },
  {
    id: 3,
    title: 'Velaour&Co eCommerce',
    description: 'Una plataforma de comercio electrónico con integración de pagos.',
    category: 'E-commerce',
    year: '2024',
    image: '/images/Velaour&Co.png',
    link: '/project/velaour',
  },
  {
    id: 4,
    title: 'Descubre España',
    description: 'Un buscador que proporciona información, imágenes, grados y ubicación en mapa sobre lugares de España.',
    category: 'Aplicación Web',
    year: '2024',
    image: '/images/descubre-españa.png',
    link: '/project/descubre-espana',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const projectsCount = projects.length;

  // Efecto para seguir el cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animación de aparición/desaparición suave
  useEffect(() => {
    if (showImage && imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.32, ease: 'power2.out' }
      );
    } else if (!showImage && imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 0.22,
        ease: 'power2.in',
      });
    }
  }, [showImage]);

  // Animación de carrusel vertical
  useEffect(() => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        y: -activeIndex * 240, // 240 = altura de la imagen
        duration: 0.35 + 0.08 * Math.abs(activeIndex),
        ease: 'power2.inOut',
      });
    }
  }, [activeIndex]);

  // Manejo de hover para el carrusel
  const handleProjectEnter = (idx: number) => {
    setActiveProject(projects[idx].id);
    setShowImage(true);
    setActiveIndex(idx);
  };
  const handleProjectLeave = () => {
    setShowImage(false);
  };

  return (
    <section id="work" className="py-20 px-6 md:px-12 lg:px-20 bg-[#f0f0f0]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Encabezado de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-0.5 w-12 bg-[#333333]"></div>
            <span className="text-sm uppercase tracking-wider text-[#333333]/70">Proyectos seleccionados</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#333333]">
            Mi trabajo
          </h2>
        </motion.div>

        {/* Imagen flotante tipo carrusel */}
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 120,
            width: 320,
            height: 240,
            overflow: 'hidden',
            display: showImage ? 'block' : 'none',
          }}
        >
          <div
            ref={imageContainerRef}
            style={{ height: projectsCount * 240, position: 'relative' }}
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                style={{
                  position: 'absolute',
                  top: idx * 240,
                  left: 0,
                  width: 320,
                  height: 240,
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl border border-[#e0e0e0] bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Botón View centrado */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#3B5BFE] text-white text-lg font-semibold rounded-full flex items-center justify-center w-20 h-20 shadow-lg select-none">
                      View
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-1">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => handleProjectEnter(idx)}
              onMouseLeave={handleProjectLeave}
              className="group transition-all duration-300 rounded-xl"
              style={{ position: 'relative' }}
            >
              <Link 
                href={project.link}
                className="flex flex-col lg:flex-row lg:items-center justify-between py-8 border-t border-[#e0e0e0] hover:border-[#bdbdbd] transition-colors"
              >
                <div className="flex items-start lg:items-center">
                  <span className="text-sm text-[#222] w-16 transition-colors duration-300">{project.year}</span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 text-[#222] group-hover:text-[#bdbdbd]">
                    {project.title}
                  </h3>
                </div>
                <div className="mt-4 lg:mt-0 flex items-center space-x-6">
                  <span className="text-sm uppercase transition-colors duration-300 text-[#222] group-hover:text-[#bdbdbd]">{project.category}</span>
                  <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100">→</span>
                </div>
              </Link>
              {/* Versión móvil de la imagen (visible solo en móvil/tablet) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeProject === project.id ? 180 : 0,
                  opacity: activeProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden lg:hidden"
              >
                {activeProject === project.id && (
                  <div className="relative w-full h-[180px] my-4 rounded-lg overflow-hidden border border-[#e0e0e0] bg-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* Botón View centrado en móvil */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#3B5BFE] text-white text-lg font-semibold rounded-full flex items-center justify-center w-16 h-16 shadow-lg select-none">
                        View
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 