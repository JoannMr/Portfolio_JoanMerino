'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DevLeapProject() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <main className="min-h-screen bg-[#f0f0f0] text-[#333333]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.9)' }}
          >
            <source src="/videos/imagen1.mp4" type="video/mp4" />
            <source src="/videos/imagen1.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            DevLeap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Plataforma educativa de programación y tecnología
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Detalles del Proyecto */}
      <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            style={{ opacity, scale }}
            className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre el Proyecto</h2>
              <p className="text-lg leading-relaxed mb-6">
                DevLeap es una plataforma educativa innovadora diseñada para ayudar a desarrolladores
                a mejorar sus habilidades y avanzar en sus carreras profesionales. La plataforma
                ofrece cursos interactivos, proyectos prácticos y una comunidad activa de
                desarrolladores.
              </p>
              <p className="text-lg leading-relaxed">
                El diseño se centra en la experiencia del usuario, con una interfaz limpia y
                moderna que facilita el aprendizaje y la interacción entre usuarios.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Rol</h3>
                <p className="text-lg">Diseño y Desarrollo Full Stack</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tecnologías</h3>
                <p className="text-lg">Next.js, React, Node.js, MongoDB, TailwindCSS</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Año</h3>
                <p className="text-lg">2025</p>
              </div>
            </div>
          </motion.div>

          {/* Galería de Imágenes */}
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300 z-10"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover scale-[1.01] group-hover:scale-100 transition-transform duration-700"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h3 className="text-white text-2xl font-semibold">Dashboard Principal</h3>
                <p className="text-white/80 mt-2">Interfaz intuitiva y moderna para una mejor experiencia de aprendizaje</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/devleap-courses.jpg"
                alt="DevLeap Courses"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/devleap-community.jpg"
                alt="DevLeap Community"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navegación entre Proyectos */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <Link
              href="/project/bloomi"
              className="group flex items-center space-x-4"
            >
              <span className="text-lg">← Proyecto Anterior</span>
              <span className="text-lg font-semibold group-hover:text-[#3B5BFE] transition-colors">
                Bloomi
              </span>
            </Link>
            <Link
              href="/project/velaour"
              className="group flex items-center space-x-4"
            >
              <span className="text-lg font-semibold group-hover:text-[#3B5BFE] transition-colors">
                Velaour&Co
              </span>
              <span className="text-lg">Siguiente Proyecto →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 