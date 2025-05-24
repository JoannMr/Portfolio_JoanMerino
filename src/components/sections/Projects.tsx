'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    image: '/images/Bloo.png',
    link: '/project/bloomi',
  },
  {
    id: 3,
    title: 'Velaour&Co',
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
    image: '/images/Descubre-España.png',
    link: '/project/descubre-espana',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mobileActiveProject, setMobileActiveProject] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsCount = projects.length;

  // Detectar dispositivos touch
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  // Efecto para seguir el cursor (solo desktop)
  useEffect(() => {
    if (isTouchDevice) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  // Animación del título
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      titleTl
        .from(".projects-line", {
          width: 0,
          duration: 1,
          ease: "power3.out"
        })
        .from(".projects-subtitle", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6")
        .from(".projects-title-word", {
          opacity: 0,
          y: 80,
          rotationY: 45,
          transformOrigin: "left center",
          duration: 1,
          stagger: 0.2,
          ease: "power4.out"
        }, "-=0.5");

    }, titleRef);

    return () => ctx.revert();
  }, []);

  // Animación de aparición/desaparición suave (solo desktop)
  useEffect(() => {
    if (isTouchDevice) return;
    
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
  }, [showImage, isTouchDevice]);

  // Animación de carrusel vertical (solo desktop)
  useEffect(() => {
    if (isTouchDevice || !imageContainerRef.current) return;
    
    gsap.to(imageContainerRef.current, {
      y: -activeIndex * 240, // 240 = altura de la imagen
      duration: 0.35 + 0.08 * Math.abs(activeIndex),
      ease: 'power2.inOut',
    });
  }, [activeIndex, isTouchDevice]);

  // Manejo de hover para el carrusel (solo desktop)
  const handleProjectEnter = (idx: number) => {
    if (isTouchDevice) return;
    setActiveProject(projects[idx].id);
    setShowImage(true);
    setActiveIndex(idx);
  };
  
  const handleProjectLeave = () => {
    if (isTouchDevice) return;
    setShowImage(false);
  };

  // Manejo de tap para mobile/tablet
  const handleMobileProjectTap = (projectId: number, idx: number) => {
    if (!isTouchDevice) return;
    
    if (mobileActiveProject === projectId) {
      setMobileActiveProject(null);
    } else {
      setMobileActiveProject(projectId);
      setActiveIndex(idx);
    }
  };

  // Navegación entre proyectos en mobile
  const navigateMobileProject = (direction: 'prev' | 'next') => {
    const currentIdx = projects.findIndex(p => p.id === mobileActiveProject);
    let newIdx;
    
    if (direction === 'prev') {
      newIdx = currentIdx > 0 ? currentIdx - 1 : projects.length - 1;
    } else {
      newIdx = currentIdx < projects.length - 1 ? currentIdx + 1 : 0;
    }
    
    setMobileActiveProject(projects[newIdx].id);
    setActiveIndex(newIdx);
  };

  // Swipe gesture handler
  const handleTouchStart = useRef<{ x: number; y: number } | null>(null);
  
  const onTouchStart = (e: React.TouchEvent) => {
    if (!isTouchDevice || !mobileActiveProject) return;
    handleTouchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isTouchDevice || !mobileActiveProject || !handleTouchStart.current) return;
    
    const deltaX = e.changedTouches[0].clientX - handleTouchStart.current.x;
    const deltaY = Math.abs(e.changedTouches[0].clientY - handleTouchStart.current.y);
    
    // Solo procesar swipe horizontal si el movimiento vertical es menor
    if (Math.abs(deltaX) > 50 && deltaY < 100) {
      if (deltaX > 0) {
        navigateMobileProject('prev');
      } else {
        navigateMobileProject('next');
      }
    }
    
    handleTouchStart.current = null;
  };

  return (
    <section id="work" className="py-20 px-6 md:px-12 lg:px-20 bg-[#f0f0f0]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Encabezado de la sección */}
        <div ref={titleRef} className="mb-20 md:mb-32">
          <div className="flex items-center space-x-4 mb-4">
            <div className="projects-line h-0.5 w-12 bg-[#333333]"></div>
            <span className="projects-subtitle text-sm uppercase tracking-wider text-[#333333]/70">Proyectos seleccionados</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#333333]">
            <span className="projects-title-word inline-block">Mi</span>{' '}
            <span className="projects-title-word inline-block">trabajo</span>
          </h2>
        </div>

        {/* Imagen flotante tipo carrusel (solo desktop) */}
        {!isTouchDevice && (
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
        )}

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
              <div
                onClick={() => isTouchDevice ? handleMobileProjectTap(project.id, idx) : undefined}
                className={`${isTouchDevice ? 'cursor-pointer' : ''} transition-all duration-300`}
              >
                <Link 
                  href={project.link}
                  className={`flex flex-col lg:flex-row lg:items-center justify-between py-8 border-t border-[#e0e0e0] hover:border-[#bdbdbd] transition-colors ${
                    isTouchDevice && mobileActiveProject === project.id ? 'border-[#3B5BFE]' : ''
                  }`}
                  onClick={(e) => {
                    if (isTouchDevice && mobileActiveProject !== project.id) {
                      e.preventDefault();
                      handleMobileProjectTap(project.id, idx);
                    }
                  }}
                >
                  <div className="flex items-start lg:items-center">
                    <span className="text-sm text-[#222] w-16 transition-colors duration-300">{project.year}</span>
                    <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold transition-colors duration-300 text-[#222] group-hover:text-[#bdbdbd] ${
                      isTouchDevice && mobileActiveProject === project.id ? 'text-[#3B5BFE]' : ''
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-4 lg:mt-0 flex items-center space-x-6">
                    <span className={`text-sm uppercase transition-colors duration-300 text-[#222] group-hover:text-[#bdbdbd] ${
                      isTouchDevice && mobileActiveProject === project.id ? 'text-[#3B5BFE]' : ''
                    }`}>
                      {project.category}
                    </span>
                    <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100">→</span>
                    {/* Indicador visual para mobile */}
                    {isTouchDevice && (
                      <div className="flex items-center space-x-2 lg:hidden">
                        <span className="text-xs text-[#666] uppercase tracking-wider">
                          {mobileActiveProject === project.id ? 'Ver proyecto' : 'Tocar para ver'}
                        </span>
                        <motion.div
                          animate={{ rotate: mobileActiveProject === project.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-4 h-4 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
              
              {/* Versión móvil mejorada de la imagen */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: (isTouchDevice ? mobileActiveProject === project.id : activeProject === project.id) ? 240 : 0,
                  opacity: (isTouchDevice ? mobileActiveProject === project.id : activeProject === project.id) ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="relative overflow-hidden lg:hidden"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {(isTouchDevice ? mobileActiveProject === project.id : activeProject === project.id) && (
                  <div className="relative w-full h-[240px] my-4 rounded-lg overflow-hidden border border-[#e0e0e0] bg-white shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Overlay con información del proyecto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-semibold text-lg mb-1">{project.title}</h4>
                        <p className="text-white/80 text-sm">{project.description}</p>
                      </div>
                    </div>
                    
                    {/* Botón View centrado */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link 
                        href={project.link}
                        className="bg-[#3B5BFE] text-white text-lg font-semibold rounded-full flex items-center justify-center w-20 h-20 shadow-lg select-none hover:bg-[#2A4BEE] transition-colors"
                      >
                        View
                      </Link>
                    </div>
                    
                    {/* Controles de navegación para mobile */}
                    {isTouchDevice && projects.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            navigateMobileProject('prev');
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#333] rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            navigateMobileProject('next');
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#333] rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* Indicadores de navegación */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {projects.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileActiveProject(projects[dotIdx].id);
                                setActiveIndex(dotIdx);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                dotIdx === activeIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                        
                        {/* Indicador de swipe */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black/20 text-white text-xs px-3 py-1 rounded-full">
                          Desliza para navegar
                        </div>
                      </>
                    )}
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