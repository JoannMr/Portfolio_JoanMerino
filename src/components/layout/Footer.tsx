'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false,
    timeZone: 'Europe/Madrid'
  });
  
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Versión */}
          <div>
            <h5 className="text-sm text-white/50 mb-2">Versión</h5>
            <p className="text-white/80">{currentYear} © Edition</p>
          </div>

          {/* Hora local */}
          <div>
            <h5 className="text-sm text-white/50 mb-2">Hora local</h5>
            <p className="text-white/80">{currentTime} CET</p>
          </div>

          {/* Redes sociales */}
          <div>
            <h5 className="text-sm text-white/50 mb-2">Redes sociales</h5>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://linkedin.com/in/joan-merino-serrano-5a646324a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/JoannMr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                GitHub
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 