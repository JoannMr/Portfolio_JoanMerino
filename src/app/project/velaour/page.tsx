import ProjectPresentation from '@/components/ProjectPresentation';

export default function VelaourPage() {
  return (
    <ProjectPresentation
      projectName="Velaour & Co."
      projectType="E-commerce"
      description="Una elegante tienda online especializada en bolsos y carteras de lujo, con integración de pagos de Stripe, gestión de inventario en SQLite y experiencia de compra optimizada para productos premium."
      longDescription="Velour & Co. es una tienda online de lujo especializada en bolsos y carteras premium desarrollada completamente en PHP. El proyecto presenta una arquitectura robusta con base de datos SQLite, integración completa con Stripe para pagos seguros, sistema de carrito inteligente con sesiones PHP, y un diseño elegante enfocado en productos de alta gama. Incluye gestión dinámica de inventario, cálculo automático de IVA (21%), interfaz responsive y animaciones fluidas. La tienda está optimizada para conversiones y ofrece una experiencia de usuario premium acorde con el posicionamiento de lujo de la marca."
      year="2024"
      status="completed"
      role="Desarrollador Full Stack"
      teamSize="1 desarrollador"
      duration="1 mes"
      mockupImage="/images/Velaour&Co.png"
      technologies={[
        "PHP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "SQLite",
        "PDO",
        "Stripe API",
        "Composer",
        "Font Awesome",
        "XAMPP",
        "Session Management",
        "Responsive Design"
      ]}
      features={[
        "Catálogo de productos dinámico desde SQLite",
        "Carrito de compras con sesiones PHP",
        "Integración completa con Stripe Checkout",
        "Gestión de inventario en tiempo real",
        "Cálculo automático de IVA (21%)",
        "Sistema de cantidades dinámicas",
        "Interfaz responsive y mobile-first",
        "Animaciones de carrito interactivas",
        "Gestión de productos con imágenes",
        "Sistema de notificaciones de éxito",
        "Checkout seguro y optimizado",
        "Eliminación de productos del carrito",
        "Base de datos SQLite ligera",
        "API RESTful para operaciones AJAX",
        "Diseño elegante para productos premium",
        "Configuración de entorno local con XAMPP",
        "Manejo de errores y excepciones",
        "URLs de éxito y cancelación personalizables",
        "Estructura MVC organizada",
        "Código limpio y escalable"
      ]}
    />
  );
} 