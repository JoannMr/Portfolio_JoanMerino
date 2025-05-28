# 🚀 Portfolio Joan Merino

Un portfolio moderno y minimalista construido con Next.js 15, TypeScript y animaciones GSAP profesionales. Diseñado para mostrar proyectos y habilidades con una experiencia de usuario excepcional.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green?style=for-the-badge&logo=greensock)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño minimalista y moderno** con paleta de colores profesional
- **Responsive design** optimizado para todos los dispositivos
- **Tipografía elegante** con DM Sans
- **Interfaz intuitiva** con navegación fluida

### 🎭 Animaciones Avanzadas
- **Sistema de animaciones GSAP** personalizado y reutilizable
- **Scroll suave** implementado con Lenis
- **Pantalla de carga minimalista** con efecto de typing
- **Animaciones sincronizadas** entre componentes
- **ScrollTrigger** para animaciones basadas en scroll

### ⚡ Rendimiento
- **Next.js 15** con App Router para máximo rendimiento
- **Optimización de imágenes** automática
- **Lazy loading** de componentes
- **Código splitting** automático
- **SEO optimizado**

### 🛠️ Arquitectura Técnica
- **TypeScript** para type safety
- **Componentes modulares** y reutilizables
- **Context API** para gestión de estado
- **Hooks personalizados** para lógica reutilizable
- **Estructura escalable** y mantenible

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18.0 o superior
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/Portfolio_JoanMerino.git
cd Portfolio_JoanMerino
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador**
Visita [http://localhost:3000](http://localhost:3000) para ver el portfolio.

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página principal
│   └── providers.tsx     # Providers de contexto
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx    # Header principal
│   │   ├── Footer.tsx    # Footer
│   │   └── SmoothScroll.tsx # Scroll suave con Lenis
│   ├── sections/         # Secciones principales
│   │   ├── Hero.tsx      # Sección hero
│   │   ├── About.tsx     # Sección sobre mí
│   │   ├── Projects.tsx  # Sección de proyectos
│   │   └── Contact.tsx   # Sección de contacto
│   └── ui/              # Componentes UI reutilizables
│       ├── LoadingScreen.tsx # Pantalla de carga
│       └── Button.tsx    # Botón personalizado
├── contexts/             # Contextos de React
│   └── LoadingContext.tsx # Contexto de carga
├── animations/           # Utilidades de animación
│   └── gsap.utils.ts    # Funciones GSAP reutilizables
└── types/               # Definiciones de tipos TypeScript
```

## 🎨 Tecnologías Utilizadas

### Frontend Core
- **[Next.js 15](https://nextjs.org/)** - Framework React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de interfaz de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[DM Sans](https://fonts.google.com/specimen/DM+Sans)** - Tipografía moderna
- **[Lucide React](https://lucide.dev/)** - Iconos SVG

### Animaciones
- **[GSAP 3.13](https://greensock.com/gsap/)** - Biblioteca de animaciones profesional
- **[Lenis](https://lenis.studiofreight.com/)** - Scroll suave y natural
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones React (componentes específicos)

### Desarrollo
- **[ESLint](https://eslint.org/)** - Linter de código
- **[PostCSS](https://postcss.org/)** - Procesador CSS

## 🎭 Sistema de Animaciones

### Funciones GSAP Disponibles

```typescript
// Animaciones de entrada
fadeInUp(element, delay?)     // Fade in desde abajo
fadeInLeft(element, delay?)   // Fade in desde la izquierda
fadeInRight(element, delay?)  // Fade in desde la derecha
scaleIn(element, delay?)      // Escala desde 0

// Animaciones de scroll
scrollAnimation(element, animation) // Animación con ScrollTrigger

// Animaciones de texto
splitTextAnimation(element)   // Animación letra por letra
```

### Ejemplo de Uso

```typescript
import { fadeInUp, scrollAnimation } from '@/animations/gsap.utils'

// Animación simple
fadeInUp('.hero-title', 0.5)

// Animación con scroll
scrollAnimation('.about-section', () => {
  fadeInUp('.about-content')
})
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con [Vercel](https://vercel.com)
2. El despliegue se realizará automáticamente

### Netlify
1. Ejecuta `npm run build`
2. Sube la carpeta `.next` a Netlify

### Otros Proveedores
El proyecto es compatible con cualquier proveedor que soporte Next.js.

## 🎯 Características Destacadas

### Pantalla de Carga Minimalista
- Efecto de typing letra por letra
- Sincronización perfecta con animaciones principales
- Transición suave al contenido principal

### Scroll Suave Avanzado
- Implementación con Lenis para experiencia natural
- Integración perfecta con GSAP ScrollTrigger
- Optimizado para rendimiento

### Arquitectura Escalable
- Componentes modulares y reutilizables
- Sistema de contextos para gestión de estado
- Hooks personalizados para lógica compleja

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Joan Merino** - Desarrollador Frontend

- 🌐 Portfolio: [tu-portfolio.com](https://tu-portfolio.com)
- 💼 LinkedIn: [linkedin.com/in/joan-merino](https://linkedin.com/in/joan-merino)
- 📧 Email: tu-email@ejemplo.com
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Hecho con ❤️ y mucho ☕ por Joan Merino**
