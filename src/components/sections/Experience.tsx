'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ExperienceItem {
  title: string;
  company: string;
  companyLogo?: string;
  type?: string;
  date: string;
  duration?: string;
  location?: string;
  description: string;
  responsibilities?: string[];
  technicalSkills: string[];
  softSkills?: string[];
}

interface SkillCategory {
  name: string;
  skills: string[];
}

interface EducationItem {
  title: string;
  institution: string;
  institutionLogo?: string;
  date: string;
  grade?: string;
  description: string;
  keyCompetencies?: string[];
  finalProject?: string;
  skillCategories?: SkillCategory[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Desarrollador de front-end",
    company: "Tandem Projects",
    companyLogo: "/images/tandem.png",
    type: "Contrato de prácticas",
    date: "feb. 2025 - actualidad",
    duration: "4 meses",
    location: "Badalona, Cataluña, España · Presencial",
    description: "Desarrollo y mantenimiento de sitios web corporativos utilizando WordPress y tecnologías modernas. Mis principales responsabilidades incluyen:",
    responsibilities: [
      "Maquetación pixel-perfect de páginas web siguiendo los diseños proporcionados por el equipo de diseño",
      "Implementación y personalización de temas y plugins de WordPress",
      "Mantenimiento y optimización de sitios web existentes",
      "Resolución de incidencias y soporte técnico",
      "Colaboración con el equipo de diseño para asegurar la fidelidad de las implementaciones"
    ],
    technicalSkills: [
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    softSkills: ["Trabajo en equipo", "Resolución de problemas", "Comunicación"]
  }
];

const education: EducationItem[] = [
  {
    title: "Formación Profesional de Grado Superior, Desarrollo de aplicaciones web",
    institution: "Escuela Profesional Javeriana",
    institutionLogo: "/images/etpxavier.png",
    date: "sept. 2023 - may. 2025",
    grade: "Nota: 1r: 7.15 - 2n: 9.16",
    description: "Formación técnica de dos años centrada en el desarrollo web full stack, con especialización en frontend. He trabajado en proyectos prácticos combinando diseño, programación y bases de datos, aplicando metodologías de trabajo reales.",
    keyCompetencies: [
      "Desarrollo de interfaces web responsive y accesibles",
      "Programación del lado del cliente y del servidor (frontend y backend)",
      "Diseño y gestión de bases de datos relacionales",
      "Creación de APIs, validaciones y sistemas de autenticación",
      "Control de versiones con Git y despliegue con herramientas como Docker",
      "Trabajo en equipo con metodologías ágiles (Scrum)"
    ],
    finalProject: "Aplicación web full stack con autenticación, gestión de contenidos y consumo de APIs externas.",
    skillCategories: [
      {
        name: "Tecnologías principales",
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "PHP",
          "MySQL",
          "MongoDB",
          "JavaScript",
          "TailwindCSS",
          "Git"
        ]
      },
      {
        name: "Otras tecnologías",
        skills: [
          "Laravel",
          "Express.js",
          "GraphQL",
          "HTML5",
          "CSS3",
          "SASS",
          "SQLite",
          "Docker",
          "GitHub",
          "Vercel",
          "C#",
          "Figma"
        ]
      }
    ]
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-20 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ opacity, scale }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-0.5 w-12 bg-[#333333]"></div>
            <span className="text-sm uppercase tracking-wider text-[#333333]/70">Trayectoria</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#333333]">
            Experiencia y<br />Formación
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Experiencia */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#333333]">Experiencia</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-[#333333]/20"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#333333]" />
                  
                  {/* Header con logo */}
                  <div className="flex items-start gap-4">
                    {exp.companyLogo && (
                      <div className="relative w-12 h-12 rounded-md overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out border border-[#333333]/10 hover:border-[#333333]/20 group">
                        <Image
                          src={exp.companyLogo}
                          alt={exp.company}
                          fill
                          className="object-contain p-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold text-[#333333]">{exp.title}</h4>
                      <p className="text-lg text-[#333333]/80">{exp.company}</p>
                      <p className="text-sm text-[#333333] font-medium">{exp.type}</p>
                      <p className="text-sm text-[#333333]/60">{exp.date} · {exp.duration}</p>
                      <p className="text-sm text-[#333333]/60">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-base text-[#333333]/80 mt-4">{exp.description}</p>
                  {exp.responsibilities && (
                    <ul className="mt-4 space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#333333]">•</span>
                          <span className="text-base text-[#333333]/80">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Skills */}
                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-[#333333] mb-3">Tecnologías y herramientas</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technicalSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-[#333333]/10 text-[#333333] hover:bg-[#333333]/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#333333]">Formación</h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-[#333333]/20"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#333333]" />
                  
                  {/* Header con logo */}
                  <div className="flex items-start gap-4">
                    {edu.institutionLogo && (
                      <div className="relative w-12 h-12 rounded-md overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out border border-[#333333]/10 hover:border-[#333333]/20 group">
                        <Image
                          src={edu.institutionLogo}
                          alt={edu.institution}
                          fill
                          className="object-contain p-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold text-[#333333]">{edu.title}</h4>
                      <p className="text-lg text-[#333333]/80">{edu.institution}</p>
                      <p className="text-sm text-[#333333]/60">{edu.date}</p>
                      {edu.grade && (
                        <p className="text-sm font-medium text-[#333333]">{edu.grade}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-base text-[#333333]/80 mt-4">{edu.description}</p>

                  {edu.keyCompetencies && (
                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-[#333333] mb-3">Competencias clave</h5>
                      <ul className="space-y-3">
                        {edu.keyCompetencies.map((competency, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="mr-2 text-[#333333]">•</span>
                            <span className="text-base text-[#333333]/80">{competency}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.finalProject && (
                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-[#333333] mb-2">Proyecto final</h5>
                      <p className="text-base text-[#333333]/80">{edu.finalProject}</p>
                    </div>
                  )}

                  {edu.skillCategories && (
                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-[#333333] mb-3">Tecnologías y herramientas</h5>
                      <div className="space-y-4">
                        {edu.skillCategories.map((category, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <h6 className="text-sm text-[#333333]/70 mb-2">{category.name}</h6>
                            <div className="flex flex-wrap gap-2">
                              {category.skills.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2, delay: i * 0.05 }}
                                  className="px-3 py-1 text-sm rounded-full bg-[#333333]/10 text-[#333333] hover:bg-[#333333]/20 transition-colors duration-300"
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 