import ProjectPresentation from '@/components/ProjectPresentation';

export default function DescubreEspanaPage() {
  return (
    <ProjectPresentation
      projectName="Descubre España"
      projectType="Aplicación Web"
      description="Una aplicación web interactiva que permite explorar información detallada sobre cualquier población de España, integrando datos de Wikipedia, clima en tiempo real, imágenes y mapas interactivos."
      longDescription="Descubre España es una aplicación web interactiva que conecta a usuarios con los lugares más fascinantes de España. Utiliza 5 APIs diferentes para ofrecer información turística completa: Wikipedia para datos históricos, Open-Meteo para el clima en tiempo real, Wikimedia Commons para galerías de imágenes, Nominatim para mapas interactivos y Web Speech API para búsqueda por voz. Una experiencia inmersiva que combina tecnología moderna con el patrimonio cultural español."
      year="2024"
      status="live"
      liveUrl="https://joannmr.github.io/Descubre-Spain-by-JoannMr/"
      role="Desarrollador Full Stack"
      teamSize="1 desarrollador"
      duration="Proyecto académico - 1 semana"
      mockupImage="/images/Descubre-España.png"
      technologies={[
        "HTML5",
        "CSS3", 
        "JavaScript (ES6+)",
        "Wikipedia API",
        "Open-Meteo API",
        "Wikimedia Commons API",
        "Nominatim API (OpenStreetMap)",
        "Web Speech API",
        "Leaflet.js",
        "APIs REST",
        "APIs de Navegador"
      ]}
      features={[
        "Sistema de selección en cascada: Comunidad → Provincia → Población",
        "Búsqueda por voz con reconocimiento en español",
        "Integración con 5 APIs diferentes (4 REST + 1 navegador)",
        "Información detallada de Wikipedia en tiempo real",
        "Datos meteorológicos actualizados con Open-Meteo",
        "Galería de imágenes automática desde Wikimedia Commons",
        "Mapas interactivos con Leaflet y Nominatim",
        "Interfaz modal informativa con guía de uso",
        "Normalización de texto para búsqueda por voz",
        "Síntesis de voz para guiar al usuario",
        "Almacenamiento local de la última búsqueda",
        "Diseño responsive y accesible",
        "Exploración de 8,000+ poblaciones españolas",
        "Coordenadas geográficas precisas",
        "Experiencia visual rica con datos en tiempo real"
      ]}
    />
  );
} 