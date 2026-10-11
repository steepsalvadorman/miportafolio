export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
}

export const personalInfo = {
  name: 'Steep Salvador',
  title: 'Ingeniero de Sistemas · Desarrollador y arquitecto · Spring Boot y TypeScript',
  phone: '(+51) 941 435 268',
  email: 'steepbsm@gmail.com',
  linkedin: 'linkedin.com/in/steepsalvador',
  github: 'github.com/steepsalvadorman',
};

export const summary =
  'Ingeniero de sistemas con perfil de desarrollador y arquitecto: diseño arquitecturas escalables y las llevo a producción con calidad y criterio técnico. ' +
  'Combino automatización de pruebas con Playwright, Java y TypeScript con desarrollo full stack en Spring Boot para entornos críticos de minería, banca y consultoría. ' +
  'Experiencia liderando equipos, definiendo estándares arquitectónicos e integrando sistemas complejos.';

export const experience: Experience[] = [
  {
    company: 'HR Ingenieros Asociados',
    role: 'QA Automation Engineer / Programador Líder',
    period: '06/2026 – actualidad',
    responsibilities: [
      'Diseño e implementación de pruebas automatizadas con Playwright, Java y TypeScript para elevar cobertura y estabilidad del producto.',
      'Liderazgo del equipo de desarrollo: planificación, asignación de tareas y definición de arquitectura.',
      'Integración de QA en el ciclo de entrega mediante estándares de testing y automatización en CI/CD.',
    ],
  },
  {
    company: 'Marcobre S.A.C.',
    role: 'Practicante Profesional · Sistemas (SIG)',
    period: '09/2025 – 03/2026',
    responsibilities: [
      'Programación del Sistema Integrado de Gestión, optimizando procesos operativos.',
      'Integración de Oracle Aconex con Power BI para reportes gerenciales.',
      'Automatización de flujos mediante Power Platform, mejorando eficiencia y trazabilidad.',
      'Soporte técnico en auditorías ISO 9001 y BASC.',
    ],
  },
  {
    company: 'Compañía Minera Condestable S.A.',
    role: 'Practicante Profesional de Sistemas',
    period: '01/2025 – 06/2025',
    responsibilities: [
      'Programación de módulos en PowerBuilder para el sistema operativo minero.',
      'Integración de sistemas con balanzas e instrumentación, asegurando consistencia de datos.',
      'Optimización del proceso de pesaje de volquetes, reduciendo tiempos y errores operativos.',
    ],
  },
  {
    company: 'R&B S.A.C.',
    role: 'Practicante Preprofesional de Ingeniería de Software',
    period: '03/2024 – 09/2024',
    responsibilities: [
      'Desarrollo de aplicación Android con Kotlin y Jetpack Compose.',
      'Implementación de arquitectura MVVM y consumo de APIs REST.',
      'Integración con Firebase para autenticación y manejo de datos en tiempo real.',
    ],
  },
  {
    company: 'NTT DATA Europe & Latam',
    role: 'Java Backend Junior / Solutions Assistant',
    period: '09/2019 – 02/2020',
    responsibilities: [
      'Desarrollo de módulos en Spring Boot y Spring Cloud para el sistema WISE · BCP (Banca).',
      'Ejecución de pruebas funcionales y de rendimiento.',
      'Identificación y seguimiento de incidencias en entornos productivos.',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Liderazgo Técnico en Migración de Plataformas',
    description:
      'Liderazgo en la migración exitosa de 2 plataformas críticas de PHP (Laravel) a una arquitectura moderna en un tiempo récord de 2 semanas, utilizando Spring Boot para el backend y React.',
  },
  {
    title: 'Reconocimiento a la Innovación · Banca BCP',
    description:
      'Destacada participación en la creación de herramientas internas de optimización para Banca BCP, mejorando significativamente los tiempos de respuesta del equipo en un 30%.',
  },
  {
    title: 'Innovación en Optimización de Pesaje Minero',
    description:
      'Mejora e innovación en el proceso de pesaje de volquetes integrando PowerBuilder y motores de optimización de alto rendimiento en Rust.',
  },
  {
    title: 'Automatización SIG: Flota de Buques Mineros',
    description:
      'Optimización de reportes y procesos en el Sistema Integrado de Gestión (SIG). Digitalización de checklists manuales para encuestas de buques de ácido sulfúrico utilizando Power Apps.',
  },
];

export const education: Education[] = [
  {
    institution: 'Universidad de Lima',
    degree: 'Ingeniería de Sistemas',
    location: 'Lima, Perú',
  },
];

export const skills: SkillCategory[] = [
  { category: 'QA & Testing', skills: ['Playwright', 'Cypress', 'Java', 'TypeScript'] },
  {
    category: 'Backend',
    skills: [
      'Spring Boot',
      'Spring WebFlux',
      'Spring AMQP',
      'Spring Cloud',
      'Spring Boot Actuator',
      'Spring Data JPA',
      'Spring Data MongoDB',
      'Keycloak',
    ],
  },
  { category: 'Frontend', skills: ['Angular', 'TypeScript', 'React'] },
  {
    category: 'Arquitectura',
    skills: ['Microservice Architecture', 'Layered Architecture', 'APIs REST', 'Clean Architecture'],
  },
  { category: 'Cloud & DevOps', skills: ['Docker', 'Kubernetes', 'Azure', 'OCI', 'CI/CD'] },
  { category: 'Bases de datos', skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'] },
  {
    category: 'Otros',
    skills: ['Power Platform', 'LIMS', 'Android (Kotlin)', 'Flutter', 'Rust', 'Balanzas de laboratorio e industriales'],
  },
  { category: 'Idiomas', skills: ['Inglés (Avanzado)', 'Francés (Básico)', 'Italiano (Básico)'] },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Industrial Scale Integration',
    featured: true,
    description:
      'Sistema de alto rendimiento en Rust para la extracción de datos de balanzas industriales TI420. Implementa protocolos STX/CKS para garantizar la integridad de información crítica en el sector minero.',
    technologies: ['Rust', 'Industrial IoT', 'TCP/IP'],
    githubUrl: 'https://github.com/steepsalvadorman/Rust_Scale_Weigth',
  },
  {
    id: 2,
    title: 'Cerca App',
    description:
      'Plataforma móvil nativa orientada al mercado laboral informal. Desarrollada con Jetpack Compose y arquitectura MVVM, utiliza Firebase para la gestión de datos en tiempo real y geolocalización.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    id: 3,
    title: 'CodeCraft Peru',
    featured: true,
    description:
      'Plataforma web para una comunidad de desarrollo de software. Optimizada para rendimiento y SEO mediante Astro, con un diseño moderno enfocado en la entrega de contenido técnico eficiente.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/steepsalvadorman/CodeCraftPeru',
  },
  {
    id: 4,
    title: 'AI-Powered Assistant',
    description:
      'Integración de modelos de lenguaje de gran tamaño (LLM) en entornos empresariales utilizando Spring AI. Permite procesamiento de lenguaje natural y generación de contenido dinámico.',
    technologies: ['Java', 'Spring Boot', 'Spring AI'],
    githubUrl: 'https://github.com/steepsalvadorman/ChatAI',
  },
  {
    id: 5,
    title: 'Enterprise API Framework',
    featured: true,
    description:
      'Arquitectura de referencia para el desarrollo de APIs robustas. Incluye manejo global de excepciones, validación DTO y contenedorización avanzada con Docker para entornos productivos.',
    technologies: ['Java', 'Spring Boot', 'Docker'],
    githubUrl: 'https://github.com/steepsalvadorman/APIRestWithExceptions',
  },
  {
    id: 6,
    title: 'Cinemapedia',
    description:
      'Aplicación multiplataforma de catálogo cinematográfico con Clean Architecture. Implementa gestión de estado avanzada con Riverpod y consumo de APIs externas optimizado.',
    technologies: ['Flutter', 'Dart', 'Riverpod'],
    githubUrl: 'https://github.com/steepsalvadorman/Cinemapedia',
  },
];

export const currentYear = new Date().getFullYear();
