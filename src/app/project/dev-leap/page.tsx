import ProjectPresentation from '@/components/ProjectPresentation';

export default function DevLeapPage() {
  return (
    <ProjectPresentation
      projectName="DevLeap"
      projectType="Plataforma Educativa"
      description="Una plataforma innovadora de cursos online de programación y tecnologías IT, diseñada para impulsar el aprendizaje de desarrolladores de todos los niveles."
      longDescription="DevLeap es una plataforma educativa completa que revoluciona la forma en que los desarrolladores aprenden nuevas tecnologías. Combina contenido interactivo, proyectos prácticos y una comunidad activa para crear una experiencia de aprendizaje inmersiva. El proyecto incluye un sistema de gestión de cursos, editor de código integrado, sistema de certificaciones y dashboard personalizado para cada usuario."
      year="2025"
      status="live"
      liveUrl="https://dev-leap.vercel.app/"
      githubUrl="https://github.com/JoannMr/Dev-Leap"
      role="Diseñador y Desarrollador Full Stack"
      teamSize="1 desarrollador"
      duration="2 meses"
      mockupImage="/images/devleap.png"
      technologies={[
        "Next.js 15",
        "React 19",
        "TypeScript",
        "TailwindCSS v4",
        "Node.js",
        "Hygraph (GraphQL)",
        "Clerk",
        "Vercel",
        "Framer Motion",
        "React Hook Form",
        "Zod",
        "Resend",
        "Sonner",
        "Lucide React",
        "React Email"
      ]}
      features={[
        "Autenticación de usuarios segura con Clerk",
        "Catálogo de cursos con filtros avanzados",
        "Páginas detalladas de cursos con información completa",
        "Sistema de inscripción automático",
        "Visualización de lecciones con contenido multimedia",
        "Seguimiento de progreso visual",
        "Área personal 'Mis Cursos' para gestionar inscripciones",
        "Sistema de promociones y descuentos",
        "Sección especializada para empresas",
        "Sistema de FAQs con categorías",
        "Notificaciones toast elegantes en tiempo real",
        "Diseño completamente responsivo para todos los dispositivos",
        "Animaciones fluidas con Framer Motion",
        "APIs REST para funcionalidades backend",
        "Sistema de envío de emails automáticos",
        "Arquitectura moderna con App Router de Next.js",
        "CMS headless con GraphQL para gestión de contenido",
        "Plantillas de email modernas y responsivas",
        "Middleware de autenticación integrado",
        "Validación de formularios con React Hook Form y Zod"
      ]}
    />
  );
}