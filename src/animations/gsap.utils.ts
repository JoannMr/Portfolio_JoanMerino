import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registramos los plugins necesarios
gsap.registerPlugin(ScrollTrigger);

// Animación de fade in desde abajo
export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out"
  });
};

// Animación de fade in desde la izquierda
export const fadeInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: -50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out"
  });
};

// Animación de fade in desde la derecha
export const fadeInRight = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out"
  });
};

// Animación de escala
export const scaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay,
    ease: "back.out(1.7)"
  });
};

// Animación al hacer scroll
export const scrollAnimation = (element: string | Element, animation: gsap.TweenVars) => {
  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=100",
      end: "bottom top",
      toggleActions: "play none none reverse"
    }
  });
};

// Animación de texto por letras
export const splitTextAnimation = (element: string | Element) => {
  const text = { value: 0 };
  const elementNode = typeof element === 'string' ? document.querySelector(element) : element;
  
  if (!elementNode || !elementNode.textContent) return;
  
  const originalText = elementNode.textContent;
  elementNode.textContent = '';
  
  return gsap.to(text, {
    value: originalText.length,
    duration: 2,
    onUpdate: () => {
      elementNode.textContent = originalText.slice(0, Math.floor(text.value));
    }
  });
}; 