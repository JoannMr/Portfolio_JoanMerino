'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Datos del tech stack
const techStack = [
  // Frontend
  { name: 'HTML5', icon: '/icons/html5.svg', category: 'Frontend' },
  { name: 'CSS3', icon: '/icons/css3.svg', category: 'Frontend' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'Frontend' },
  { name: 'React', icon: '/icons/react.svg', category: 'Frontend' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'Frontend' },
  { name: 'TailwindCSS', icon: '/icons/tailwind.svg', category: 'Frontend' },
  { name: 'SASS', icon: '/icons/sass.svg', category: 'Frontend' },
  { name: 'Figma', icon: '/icons/figma.svg', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'Backend' },
  { name: 'Express.js', icon: '/icons/express.svg', category: 'Backend' },
  { name: 'PHP', icon: '/icons/php.svg', category: 'Backend' },
  { name: 'C#', icon: '/icons/csharp.svg', category: 'Backend' },
  { name: 'GraphQL', icon: '/icons/graphql.svg', category: 'Backend' },
  { name: 'Laravel', icon: '/icons/laravel.svg', category: 'Backend' },
  
  // Databases
  { name: 'MySQL', icon: '/icons/mysql.svg', category: 'Database' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', category: 'Database' },
  { name: 'SQLite', icon: '/icons/sqlite.svg', category: 'Database' },
  
  // Tools
  { name: 'Docker', icon: '/icons/docker.svg', category: 'Tools' },
  { name: 'Vercel', icon: '/icons/vercel.svg', category: 'Tools' },
  { name: 'Git', icon: '/icons/git.svg', category: 'Tools' },
  { name: 'GitHub', icon: '/icons/github.svg', category: 'Tools' },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título principal
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      titleTl
        .from(".tech-line", {
          width: 0,
          duration: 0.9,
          ease: "power3.out"
        })
        .from(".tech-subtitle", {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: "power3.out"
        }, "-=0.5")
        .from(".tech-title-word", {
          opacity: 0,
          y: 60,
          rotationX: 45,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out"
        }, "-=0.4")
        .from(".tech-title-break", {
          opacity: 0,
          y: 60,
          rotationX: 45,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out"
        }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-[#f0f0f0] text-[#333333] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        {/* Encabezado de la sección */}
        <div ref={titleRef} className="mb-16 md:mb-24">
          <div className="flex items-center space-x-4 mb-4">
            <div className="tech-line h-0.5 w-12 bg-[#333333]"></div>
            <span className="tech-subtitle text-sm uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="tech-title-word inline-block">Tecnologías</span>{' '}
            <span className="tech-title-word inline-block">que</span>{' '}
            <br className="hidden md:block" />
            <span className="tech-title-break inline-block">utilizo</span>
          </h2>
        </div>

        {/* Carrusel de tecnologías */}
        <motion.div
          style={{ opacity, scale }}
          className="relative"
        >
          <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, // Ajusta la velocidad aquí
                ease: "linear",
            }}
            className="flex space-x-8 w-max"
            >
            {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                <div className="relative w-16 h-16">
                    <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                    />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
                <span className="text-xs text-gray-500">{tech.category}</span>
                </motion.div>
            ))}
            </motion.div>
          </div>

          {/* Gradientes para el efecto de desvanecimiento */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f0f0f0] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f0f0f0] to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
} 