export interface Experience {
  company: string;
  sector?: string;
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
  cv: '/cv/Steep-Salvador-CV.pdf',
};

export const summary =
  'Backend con Spring Boot, pruebas con Playwright e integración de sistemas en minería y banca.';

export const experience: Experience[] = [
  {
    company: 'HR Ingenieros Asociados',
    sector: 'Consultoría minera',
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
    sector: 'Minería',
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
    sector: 'Minería',
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
    sector: 'Consultoría de TI',
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
    title: 'WeighFlow IoT',
    featured: true,
    description:
      'Lee balanzas industriales de cualquier marca por RS-232, muestra el peso en tiempo real, lo escribe como teclado en Excel o SAP y firma cada lectura con HMAC-SHA256.',
    technologies: ['Rust', 'RS-232', 'HMAC-SHA256'],
    githubUrl: 'https://github.com/steepsalvadorman/MiningSmartScale',
  },
  {
    id: 2,
    title: 'DaiBot',
    featured: true,
    description:
      'Bot multicanal para Kick: verifica la firma RSA de cada webhook, guarda el estado en PostgreSQL y controla la cola de video, el TTS y el overlay de OBS por Socket.IO.',
    technologies: ['Rust', 'Axum', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/steepsalvadorman/DaiBotkick',
  },
  {
    id: 3,
    title: 'E-commerce en microservicios',
    featured: true,
    description:
      'Gateway, Config Server y Eureka con Spring Cloud, seguridad con Keycloak y servicios de producto, pedido, inventario y notificación sobre MongoDB, MySQL y PostgreSQL.',
    technologies: ['Java', 'Spring Cloud', 'Keycloak', 'Docker'],
    githubUrl: 'https://github.com/steepsalvadorman/microservices_java',
  },
  {
    id: 4,
    title: 'Evaluador ROSA',
    description: 'Evalúa la ergonomía de puestos de oficina con el método ROSA: mide la postura por cámara y exporta el informe a Excel.',
    technologies: ['Python', 'MediaPipe', 'OpenCV'],
    githubUrl: 'https://github.com/steepsalvadorman/newposture_detector',
  },
  {
    id: 5,
    title: 'Industrial Scale Integration',
    description: 'Rust lee balanzas industriales TI420 por TCP y comprueba cada trama con STX/CKS.',
    technologies: ['Rust', 'Industrial IoT', 'TCP/IP'],
    githubUrl: 'https://github.com/steepsalvadorman/Rust_Scale_Weigth',
  },
  {
    id: 6,
    title: 'Patrón SAGA por coreografía',
    description: 'Pedidos y pagos coordinados por eventos entre microservicios, sin un orquestador central.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud Stream'],
    githubUrl: 'https://github.com/steepsalvadorman/Patron-de-Diseno-SAGA-Choreography',
  },
  {
    id: 7,
    title: 'CodeCraft Peru',
    description: 'Sitio de una comunidad de software, hecho con Astro.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/steepsalvadorman/CodeCraftPeru',
  },
];

export const currentYear = new Date().getFullYear();
