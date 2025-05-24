'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  // URL para Gmail Compose con mensaje precompuesto
  const handleGmailCompose = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=joanmerinoserrano@gmail.com&su=${encodeURIComponent('Hola Joan - Contacto desde tu Portfolio')}&body=${encodeURIComponent('Hola Joan,\n\nMe pongo en contacto contigo desde tu portfolio web.\n\n[Escribe tu mensaje aquí]\n\nSaludos!')}`;
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#262626] text-white relative overflow-hidden py-32">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3B5BFE] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B5BFE] rounded-full blur-3xl"></div>
          </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 relative">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Columna izquierda */}
          <div className="space-y-12">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/Tandem-Joan-2-min.jpg"
                    alt="Joan Merino"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1]">
                Creemos algo<br />
                <span className="text-[#3B5BFE]">extraordinario</span><br />
                juntos
              </h2>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
              className="text-xl text-white/70"
            >
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y explorar cómo podemos trabajar juntos para hacerlas realidad.
            </motion.div>
          </div>

          {/* Columna derecha */}
          <div className="lg:pl-12 space-y-12">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-white/50">Email</p>
                <motion.a
                  onClick={handleGmailCompose}
                  className="block text-xl hover:text-[#3B5BFE] transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  joanmerinoserrano@gmail.com
                </motion.a>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-white/50">Teléfono</p>
                <motion.a
                  href="tel:+34682846006"
                  className="block text-xl hover:text-[#3B5BFE] transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  +34 682 846 006
                </motion.a>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-white/50">Ubicación</p>
                <p className="text-xl">Barcelona, España</p>
              </div>
            </motion.div>

            {/* Botón de contacto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.button
                onClick={handleGmailCompose}
                className="flex items-center justify-between px-8 py-6 bg-[#3B5BFE] rounded-2xl text-lg font-medium hover:bg-[#2442E7] transition-all duration-300 group-hover:pr-6 w-full cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Envíame un mensaje</span>
                <motion.span
                  className="ml-4 text-2xl"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  →
                </motion.span>
              </motion.button>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3B5BFE] to-[#2442E7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10"></div>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <motion.a
                href="https://github.com/JoannMr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joan-merino-serrano-5a646324a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                LinkedIn
              </motion.a>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 