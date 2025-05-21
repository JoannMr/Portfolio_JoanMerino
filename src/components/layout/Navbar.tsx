'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#f0f0f0]/90 backdrop-blur py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="text-lg font-medium tracking-tight font-dm-sans"
            style={{ letterSpacing: '-0.02em' }}
          >
            © Code by Joan
          </Link>
        </motion.div>

        {/* Navegación */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex space-x-10"
        >
          <Link
            href="/work"
            className="font-dm-sans font-medium text-[15px] hover:text-black/70 transition-colors duration-300"
            style={{ letterSpacing: '-0.01em' }}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="font-dm-sans font-medium text-[15px] hover:text-black/70 transition-colors duration-300"
            style={{ letterSpacing: '-0.01em' }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-dm-sans font-medium text-[15px] hover:text-black/70 transition-colors duration-300"
            style={{ letterSpacing: '-0.01em' }}
          >
            Contact
          </Link>
        </motion.nav>
      </div>
    </header>
  );
} 