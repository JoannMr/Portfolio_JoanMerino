import ProjectPresentation from '@/components/ProjectPresentation';

export default function BloomiPage() {
  return (
    <ProjectPresentation
      projectName="Bloomi"
      projectType="Sitio Corporativo"
      description="Una marca premium de bebidas saludables y ecológicas con un enfoque en la sostenibilidad y el bienestar."
      longDescription="Bloomi es una marca de bebidas naturales que nació en 2018 con la misión de crear productos funcionales que energicen sin comprometer la salud. El sitio web corporativo refleja los valores de la marca: naturalidad, sostenibilidad y bienestar. Incluye un catálogo completo de productos, sistema de suscripción, blog de contenidos y una experiencia de usuario optimizada para conversiones."
      year="2025"
      status="live"
      liveUrl="https://bloomi-one.vercel.app/"
      role="Diseñador UI/UX y Desarrollador Frontend"
      teamSize="1 desarrollador"
      duration="1 semana"
      mockupImage="/images/Bloo.png"
      technologies={[
        "HTML5",
        "Tailwind CSS",
        "JavaScript ES6",
        "AOS Animations",
        "Font Awesome",
        "Vercel"
      ]}
      features={[
        "Diseño responsive con enfoque mobile-first",
        "Catálogo interactivo con sistema de pestañas",
        "Presentación de 4 productos con packs promocionales",
        "Animaciones suaves con AOS library",
        "Sección de testimonios y estadísticas dinámicas",
        "Integración visual con feed de Instagram",
        "Formulario de suscripción con validación",
        "Menú móvil hamburguesa animado",
        "Efectos hover y microinteracciones",
        "Gradientes personalizados y paleta de colores vibrante",
        "Optimización SEO y performance",
        "Deploy automatizado en Vercel"
      ]}
    />
  );
} 