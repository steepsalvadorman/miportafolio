export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  expires?: string;
  verifyUrl?: string;
}

export interface CourseInProgress {
  code: string;
  title: string;
}

export const inProgressProgram = 'PIT 2026, 11.ª edición';
export const inProgressIssuer = 'CTIC';

export const coursesInProgress: CourseInProgress[] = [
  { code: 'PIT713', title: 'Ansible: automatización de servidores en Linux' },
  { code: 'PIT729', title: 'Ciberseguridad: Ethical Hacking (C|EH)' },
  { code: 'PIT736', title: 'Computación cuántica' },
  { code: 'PIT745', title: 'Fundamentos de C++' },
  { code: 'PIT748', title: 'Fundamentos de ESP32: IoT' },
  { code: 'PIT788', title: 'Programación en Python intermedio' },
];

const udemy = (id: string) => `https://www.udemy.com/certificate/${id}/`;

export const certificates: Certificate[] = [
  {
    title: 'Fundamentos de Rust desde cero',
    issuer: 'Udemy',
    date: 'Sep 2026',
    credentialId: 'UC-eb0c9b43-2f24-4eba-985a-751bf8b07e30',
    verifyUrl: udemy('UC-eb0c9b43-2f24-4eba-985a-751bf8b07e30'),
  },
  {
    title: 'Ondas: Telecomunicaciones desde 0, Nivel 2',
    issuer: 'Poca Poca',
    date: 'Ene 2026',
    credentialId: 'jvdwyi9L-436163ba',
  },
  {
    title: 'Conceptos básicos: Telecomunicaciones desde 0, Nivel 1',
    issuer: 'Poca Poca',
    date: 'Dic 2025',
    credentialId: 'jvdwyi9L-4b0331b5',
  },
  {
    title: 'Transistores JFET: Electrónica analógica desde cero, Nivel 5',
    issuer: 'Poca Poca',
    date: 'Dic 2025',
    credentialId: 'jvdwyi9L-f3c1c3e1',
  },
  {
    title: 'Transistores bipolares: Electrónica analógica desde cero, Nivel 4',
    issuer: 'Poca Poca',
    date: 'Sep 2025',
    credentialId: 'jvdwyi9L-1753e507',
  },
  {
    title: 'Corriente alterna: Electrónica analógica desde cero, Nivel 3',
    issuer: 'Poca Poca',
    date: 'Ago 2025',
    credentialId: 'jvdwyi9L-f868ace3',
  },
  {
    title: 'Data Science: Machine Learning',
    issuer: 'edX · HarvardX',
    date: 'Jun 2025',
    credentialId: 'e52486d6db2d4cd58df3632441b46b0f',
    verifyUrl: 'https://courses.edx.org/certificates/e52486d6db2d4cd58df3632441b46b0f',
  },
  {
    title: 'Resolución de circuitos: Electrónica analógica desde cero, Nivel 2',
    issuer: 'Poca Poca',
    date: 'May 2025',
    credentialId: 'jvdwyi9L-62286a23',
  },
  {
    title: 'Principios básicos: Electrónica analógica desde cero, Nivel 1',
    issuer: 'Poca Poca',
    date: 'Abr 2025',
    credentialId: 'jvdwyi9L-e19ce5de',
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900T00)',
    issuer: 'EducacionIT',
    date: 'Jun 2024',
    credentialId: '101020871832',
  },
  {
    title: 'Curso completo del lenguaje Rust',
    issuer: 'Udemy',
    date: 'Mar 2024',
    credentialId: 'UC-06e14a79-288f-4e80-8f75-bc80aa820d53',
    verifyUrl: udemy('UC-06e14a79-288f-4e80-8f75-bc80aa820d53'),
  },
  {
    title: 'Principios SOLID y Clean Code',
    issuer: 'Udemy',
    date: 'Mar 2024',
    credentialId: 'UC-77bf345d-7f5f-4c39-a3a4-80150c976b5f',
    verifyUrl: udemy('UC-77bf345d-7f5f-4c39-a3a4-80150c976b5f'),
  },
  {
    title: 'Workshop: React Developer',
    issuer: 'Universidad Nacional de Ingeniería (UNI)',
    date: 'Feb 2024',
    credentialId: 'SISTEMAS UNI-CE-914-2024-008',
  },
  {
    title: 'Aprende programación backend en C# .NET',
    issuer: 'Udemy',
    date: 'Feb 2024',
    credentialId: 'UC-3ccd85c6-8183-4f27-b023-183518a70ee9',
    verifyUrl: udemy('UC-3ccd85c6-8183-4f27-b023-183518a70ee9'),
  },
  {
    title: 'Desarrollo de soluciones Windows con C#',
    issuer: 'Universidad Nacional de Ingeniería (UNI)',
    date: 'Ene 2024',
    credentialId: 'SISTEMAS UNI-CE-827-2024-021',
  },
  {
    title: 'Spring Boot 3 y Spring Framework 6',
    issuer: 'Udemy',
    date: 'Nov 2023',
    credentialId: 'UC-22e2bd1f-2778-4b61-9e0c-3da1353fcba1',
    verifyUrl: udemy('UC-22e2bd1f-2778-4b61-9e0c-3da1353fcba1'),
  },
  {
    title: 'AWS Knowledge: Architecting',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2023',
  },
  {
    title: 'Linux · Administración básica',
    issuer: 'Universidad Nacional de Ingeniería (UNI)',
    date: 'Mar 2023',
    credentialId: 'SISTEMAS UNI-CE-478-2023-030',
  },
  {
    title: 'Java · Desarrollador de aplicaciones web',
    issuer: 'Universidad Nacional de Ingeniería (UNI)',
    date: 'Mar 2023',
    credentialId: 'SISTEMAS UNI-CE-392-2023-026',
  },
  {
    title: 'TypeScript: tu completa guía y manual de mano',
    issuer: 'Udemy',
    date: 'Mar 2023',
    credentialId: 'UC-ed2606bf-e943-448f-abdb-53d4426f4596',
    verifyUrl: udemy('UC-ed2606bf-e943-448f-abdb-53d4426f4596'),
  },
  {
    title: 'Guía completa Jakarta EE 9: Java EE 9 de cero a experto',
    issuer: 'Udemy',
    date: 'Feb 2023',
    credentialId: 'UC-b72f8643-92e5-4b67-bf39-6b18266398b6',
    verifyUrl: udemy('UC-b72f8643-92e5-4b67-bf39-6b18266398b6'),
  },
  {
    title: 'Docker · Guía práctica de uso para desarrolladores',
    issuer: 'Udemy',
    date: 'Feb 2023',
    credentialId: 'UC-acd98833-e342-4bb0-9759-562789e258ff',
    verifyUrl: udemy('UC-acd98833-e342-4bb0-9759-562789e258ff'),
  },
  {
    title: 'Curso de Fundamentos de Python',
    issuer: 'Platzi',
    date: 'Feb 2023',
    credentialId: '780f2548-b8ed-4886-b166-0b6192635c54',
  },
  {
    title: 'Arquitecturas Limpias',
    issuer: 'PRAGMA',
    date: 'Feb 2023',
  },
  {
    title: 'Curso de Java SE Orientado a Objetos',
    issuer: 'Platzi',
    date: 'Ene 2023',
    credentialId: 'd92932d7-855a-4b80-82e7-d330bd1ba8b2',
  },
  {
    title: 'Curso de Introducción a Java SE',
    issuer: 'Platzi',
    date: 'Ene 2023',
    credentialId: '42531496-2f07-4f02-9d71-ee7b762a8828',
  },
  {
    title: 'Curso de Kotlin desde Cero',
    issuer: 'Platzi',
    date: 'Ene 2023',
    credentialId: 'a342cff6-b8d1-46af-b57f-838549abaa9f',
  },
  {
    title: 'Desarrollo de Apps Móviles',
    issuer: 'Google',
    date: 'Ene 2023',
    credentialId: 'FAX HST 3AW',
  },
  {
    title: 'Curso de Programación Orientada a Objetos: POO',
    issuer: 'Platzi',
    date: 'Ene 2023',
    credentialId: 'dc9cecc0-cbac-4b7b-b603-8acff332ab88',
  },
  {
    title: 'Curso Básico de Diseño de Interfaces con Android Studio',
    issuer: 'Platzi',
    date: 'Ene 2023',
    credentialId: '0bc473f4-2915-49c3-8dbd-39ec9b1757e7',
  },
  {
    title: 'Curso de Bases Técnicas de Android',
    issuer: 'Platzi',
    date: 'Ene 2023',
    credentialId: '9a2ffcb2-8230-4fc4-b8e9-471a5158b872',
  },
  {
    title: 'Unit Testing Java',
    issuer: 'PRAGMA',
    date: 'Nov 2022',
  },
  {
    title: 'Oracle Cloud Infrastructure 2022 Foundations Associate',
    issuer: 'Oracle',
    date: 'Sep 2022',
    expires: 'Sep 2024',
    credentialId: '13357851OCIF2022CA',
  },
  {
    title: 'Formulación y Evaluación de Proyectos',
    issuer: 'ISIL',
    date: 'Feb 2022',
  },
  {
    title: 'Business Model Canvas y Nuevos Modelos de Negocio',
    issuer: 'ISIL',
    date: 'Dic 2021',
  },
];
