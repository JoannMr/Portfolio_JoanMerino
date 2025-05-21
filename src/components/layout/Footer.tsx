'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#333333] text-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Columna 1: Logo y copyright */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link 
                href="/" 
                className="text-xl font-medium tracking-tight"
              >
                © Code by Joan
              </Link>
              <p className="text-sm text-white/70">
                &copy; {currentYear} Joan Merino. <br />
                Todos los derechos reservados.
              </p>
            </motion.div>
          </div>
          
          {/* Columna 2: Navegación */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/work"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Trabajo
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Columna 3: Redes sociales */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium mb-4">Conecta conmigo</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link 
                    href="mailto:correo@example.com"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    correo@example.com
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="h-px w-full bg-white/20 my-8"></div>
        
        {/* Texto de creación */}
        <div className="text-center text-sm text-white/50">
          Diseñado y desarrollado por Joan Merino con Next.js, Framer Motion y Tailwind CSS
        </div>
      </div>
    </footer>
  );
} 