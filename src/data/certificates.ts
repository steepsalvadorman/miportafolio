export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Ondas Telecomunicaciones desde 0, Nivel 2',
    issuer: 'Poca Poca',
    date: 'Ene 2026',
  },
  {
    title: 'Data Science: Machine Learning',
    issuer: 'edX · HarvardX',
    date: 'Jun 2025',
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'EducacionIT',
    date: 'Jun 2024',
  },
  {
    title: 'Spring Boot 3 y Spring Framework 6',
    issuer: 'Udemy',
    date: 'Nov 2023',
  },
  {
    title: 'Curso completo del lenguaje Rust',
    issuer: 'Udemy',
    date: 'Mar 2024',
  },
  {
    title: 'Principios SOLID y Clean Code',
    issuer: 'Udemy',
    date: 'Mar 2024',
  },
  {
    title: 'Workshop: REACT DEVELOPER',
    issuer: 'Universidad Nacional de Ingeniería (UNI)',
    date: 'Feb 2024',
  },
  {
    title: 'AWS Knowledge: Architecting',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2023',
  },
  {
    title: 'Docker · Guía práctica para desarrolladores',
    issuer: 'Udemy',
    date: 'Feb 2023',
  },
  {
    title: 'Kotlin desde Cero',
    issuer: 'Platzi',
    date: 'Ene 2023',
  },
  {
    title: 'Linux · Administración Básica',
    issuer: 'Universidad Nacional de Ingeniería (UNI)',
    date: 'Mar 2023',
  },
  {
    title: 'Arquitecturas Limpias',
    issuer: 'PRAGMA',
    date: 'Feb 2023',
  },
];
