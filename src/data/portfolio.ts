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

export interface Interest {
  title: string;
  description: string;
}

export const personalInfo = {
  name: 'Steep Salvador',
  title: 'Ingeniero de Sistemas',
  phone: '(+51) 941 435 268',
  email: 'steepbsm@gmail.com',
  linkedin: 'linkedin.com/in/steepsalvador',
  github: 'github.com/steepsalvadorman',
};

export const summary =
  'Backend con Spring Boot, pruebas con Playwright e integración de sistemas en minería y banca.';

export const experience: Experience[] = [
  {
    company: 'HR Ingenieros Asociados',
    role: 'QA Automation Engineer / Programador',
    period: '06/2026 – actualidad',
    responsibilities: [
      'Pruebas automatizadas con Playwright, Java y TypeScript.',
      'Lidero al equipo: planificación, tareas y arquitectura.',
      'QA dentro del ciclo de CI/CD.',
    ],
  },
  {
    company: 'Marcobre S.A.C.',
    role: 'Practicante Profesional · Sistemas (SIG)',
    period: '09/2025 – 03/2026',
    responsibilities: [
      'Desarrollo del Sistema Integrado de Gestión.',
      'Oracle Aconex conectado a Power BI.',
      'Flujos automatizados en Power Platform.',
      'Soporte en auditorías ISO 9001 y BASC.',
    ],
  },
  {
    company: 'Compañía Minera Condestable S.A.',
    role: 'Practicante Profesional de Sistemas',
    period: '01/2025 – 06/2025',
    responsibilities: [
      'Módulos en PowerBuilder para la operación minera.',
      'Integración con balanzas e instrumentación.',
      'Pesaje de volquetes más corto y con menos errores.',
    ],
  },
  {
    company: 'R&B S.A.C.',
    role: 'Practicante Preprofesional de Ingeniería de Software',
    period: '03/2024 – 09/2024',
    responsibilities: [
      'App Android con Kotlin y Jetpack Compose.',
      'Arquitectura MVVM y APIs REST.',
      'Firebase para autenticación y datos en tiempo real.',
    ],
  },
  {
    company: 'NTT DATA Europe & Latam',
    role: 'Java Backend Junior / Solutions Assistant',
    period: '09/2019 – 02/2020',
    responsibilities: [
      'Módulos en Spring Boot y Spring Cloud para WISE, BCP.',
      'Pruebas funcionales y de rendimiento.',
      'Seguimiento de incidencias en producción.',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Banca BCP',
    description: 'Herramientas internas que bajaron los tiempos de respuesta del equipo un 30%.',
  },
  {
    title: 'Migración en dos semanas',
    description: 'Dos plataformas de Laravel pasaron a Spring Boot y React.',
  },
  {
    title: 'Pesaje minero',
    description: 'PowerBuilder y Rust en el pesaje de volquetes.',
  },
  {
    title: 'Flota de buques',
    description: 'Checklists de buques de ácido sulfúrico pasados a Power Apps.',
  },
];

export const interestsSummary =
  'Me interesan los problemas en los que el software tiene que interactuar con procesos reales, dispositivos o datos científicos.';

export const interests: Interest[] = [
  {
    title: 'Programación de sistemas en Rust',
    description: 'Herramientas industriales y de bajo nivel escritas en Rust.',
  },
  {
    title: 'Kernel de Linux',
    description: 'Funcionamiento interno del kernel y compilaciones propias.',
  },
  {
    title: 'Deep learning y matemática aplicada',
    description: 'Redes neuronales, aprendizaje profundo, probabilidad y matemática aplicada.',
  },
  {
    title: 'Investigación a largo plazo',
    description: 'Un posgrado en física aplicada y biología computacional, con interés en el diseño de proteínas asistido por deep learning.',
  },
];

export const conversationTopics = [
  'Arquitectura backend',
  'Sistemas industriales y de laboratorio',
  'Programación de sistemas',
  'Machine learning aplicado',
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
    description: 'Rust lee balanzas industriales TI420 por TCP y comprueba cada trama con STX/CKS.',
    technologies: ['Rust', 'Industrial IoT', 'TCP/IP'],
    githubUrl: 'https://github.com/steepsalvadorman/Rust_Scale_Weigth',
  },
  {
    id: 2,
    title: 'Cerca App',
    description: 'App Android para trabajo informal, con Jetpack Compose, MVVM y Firebase.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    id: 3,
    title: 'CodeCraft Peru',
    featured: true,
    description: 'Sitio de una comunidad de software, hecho con Astro.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/steepsalvadorman/CodeCraftPeru',
  },
  {
    id: 4,
    title: 'AI-Powered Assistant',
    description: 'Chat de empresa con Spring AI.',
    technologies: ['Java', 'Spring Boot', 'Spring AI'],
    githubUrl: 'https://github.com/steepsalvadorman/ChatAI',
  },
  {
    id: 5,
    title: 'Enterprise API Framework',
    featured: true,
    description: 'API de referencia con errores globales, validación de DTO y Docker.',
    technologies: ['Java', 'Spring Boot', 'Docker'],
    githubUrl: 'https://github.com/steepsalvadorman/APIRestWithExceptions',
  },
  {
    id: 6,
    title: 'Cinemapedia',
    description: 'Catálogo de cine en Flutter, con Riverpod.',
    technologies: ['Flutter', 'Dart', 'Riverpod'],
    githubUrl: 'https://github.com/steepsalvadorman/Cinemapedia',
  },
];

export const currentYear = new Date().getFullYear();
