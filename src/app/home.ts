import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  public personalInfo = {
    name: 'Steep Salvador',
    title: 'Ingeniero de Sistemas | Creando software con propósito',
    phone: '(+51) 941 435 268',
    email: 'steepbsm@gmail.com',
    linkedin: 'linkedin.com/in/steepsalvador',
    github: 'github.com/steepsalvadorman'
  };

  public summary = `
    Ingeniero de sistemas enfocado en transformar retos complejos en soluciones digitales simples y efectivas. 
    Construyo software escalable para sectores críticos usando <span class="text-[color:var(--term-primary)] font-bold">Spring Boot</span> y <span class="text-[color:var(--term-secondary)] font-bold">Angular</span>. 
    Para mí, desarrollar no es solo escribir código, sino diseñar herramientas con empatía que aporten valor real y faciliten la vida de las personas.
  `;

  public experience: Experience[] = [
    {
      company: 'Marcobre S.A.C.',
      role: 'Practicante Profesional - Sistemas (SIG)',
      period: '09/2025 - 03/2026',
      responsibilities: [
        'Programación del Sistema Integrado de Gestión, optimizando procesos operativos.',
        'Integración de Oracle Aconex con Power BI para reportes gerenciales.',
        'Automatización de flujos mediante Power Platform, mejorando eficiencia y trazabilidad.',
        'Soporte técnico en auditorías ISO 9001 y BASC.'
      ]
    },
    {
      company: 'Compañía Minera Condestable S.A.',
      role: 'Practicante Profesional de Sistemas',
      period: '01/2025 - 06/2025',
      responsibilities: [
        'Programación de módulos en PowerBuilder para el sistema operativo minero.',
        'Integración de sistemas con balanzas e instrumentación, asegurando consistencia de datos.',
        'Optimización del proceso de pesaje de volquetes, reduciendo tiempos y errores operativos.'
      ]
    },
    {
      company: 'R&B S.A.C.',
      role: 'Practicante Preprofesional de Ingeniería de Software',
      period: '03/2024 - 09/2024',
      responsibilities: [
        'Desarrollo de aplicación Android con Kotlin y Jetpack Compose.',
        'Implementación de arquitectura MVVM y consumo de APIs REST.',
        'Integración con Firebase para autenticación y manejo de datos en tiempo real.'
      ]
    },
    {
      company: 'NTT DATA Europe & Latam',
      role: 'Java Backend Junior / Solutions Assistant',
      period: '09/2019 - 02/2020',
      responsibilities: [
        'Desarrollo de módulos en Spring Boot y Spring Cloud para el sistema WISE - BCP (Banca).',
        'Ejecución de pruebas funcionales y de rendimiento.',
        'Identificación y seguimiento de incidencias en entornos productivos.'
      ]
    }
  ];

  public achievements: Achievement[] = [
    {
      title: 'Liderazgo Técnico en Migración de Plataformas',
      description: 'Liderazgo en la migración exitosa de 2 plataformas críticas de PHP (Laravel) a una arquitectura moderna en un tiempo récord de 2 semanas, utilizando Spring Boot para el backend y React.',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Reconocimiento a la Innovación - Banca BCP',
      description: 'Destacada participación en la creación de herramientas internas de optimización para Banca BCP, mejorando significativamente los tiempos de respuesta del equipo en un 30%.',
      imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Innovación en Optimización de Pesaje Minero',
      description: 'Mejora e innovación en el proceso de pesaje de volquetes integrando PowerBuilder y motores de optimización de alto rendimiento en Rust.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Automatización SIG: Flota de Buques Mineros',
      description: 'Optimización de reportes y procesos en el Sistema Integrado de Gestión (SIG). Digitalización de checklists manuales para encuestas de buques de ácido sulfúrico utilizando Power Apps.',
      imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  public education: Education[] = [
    {
      institution: 'Universidad de Lima',
      degree: 'Ingeniería de Sistemas',
      location: 'Lima, Perú'
    }
  ];

  public skills: SkillCategory[] = [
    { category: 'Backend', skills: ['Spring Boot', 'Spring WebFlux', 'Spring AMQP', 'Spring Cloud', 'Spring Boot Actuator', 'Spring Data JPA', 'Spring Data MongoDB', 'Keycloak'] },
    { category: 'Frontend', skills: ['Angular', 'TypeScript', 'React'] },
    { category: 'Arquitectura', skills: ['Microservice Architecture', 'Layered Architecture', 'APIs REST', 'Clean Architecture'] },
    { category: 'Cloud & DevOps', skills: ['Docker', 'Kubernetes', 'Azure', 'OCI', 'CI/CD'] },
    { category: 'Bases de datos', skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'] },
    { category: 'Otros', skills: ['Power Platform', 'LIMS', 'Android (Kotlin)', 'Flutter', 'Rust', 'Balanzas de laboratorio e industriales'] },
    { category: 'Idiomas', skills: ['Inglés (Avanzado)', 'Francés (Básico)', 'Italiano (Básico)'] }
  ];

  public projects: Project[] = [
    {
      id: 1,
      title: 'Industrial Scale Integration',
      description: 'Sistema de alto rendimiento en Rust para la extracción de datos de balanzas industriales TI420. Implementa protocolos STX/CKS para garantizar la integridad de información crítica en el sector minero.',
      technologies: ['Rust', 'Industrial IoT', 'TCP/IP'],
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
      githubUrl: 'https://github.com/steepsalvadorman/Rust_Scale_Weigth'
    },
    {
      id: 2,
      title: 'Cachuelitoo App',
      description: 'Plataforma móvil nativa orientada al mercado laboral informal. Desarrollada con Jetpack Compose y arquitectura MVVM, utiliza Firebase para la gestión de datos en tiempo real y geolocalización.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
      githubUrl: 'https://github.com/steepsalvadorman/Cachuelitoo'
    },
    {
      id: 3,
      title: 'CodeCraft Peru',
      description: 'Plataforma web para una comunidad de desarrollo de software. Optimizada para rendimiento y SEO mediante Astro, con un diseño moderno enfocado en la entrega de contenido técnico eficiente.',
      technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop',
      githubUrl: 'https://github.com/steepsalvadorman/CodeCraftPeru'
    },
    {
      id: 4,
      title: 'AI-Powered Assistant',
      description: 'Integración de modelos de lenguaje de gran tamaño (LLM) en entornos empresariales utilizando Spring AI. Permite procesamiento de lenguaje natural y generación de contenido dinámico.',
      technologies: ['Java', 'Spring Boot', 'Spring AI'],
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
      githubUrl: 'https://github.com/steepsalvadorman/ChatAI'
    },
    {
      id: 5,
      title: 'Enterprise API Framework',
      description: 'Arquitectura de referencia para el desarrollo de APIs robustas. Incluye manejo global de excepciones, validación DTO y contenedorización avanzada con Docker para entornos productivos.',
      technologies: ['Java', 'Spring Boot', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop',
      githubUrl: 'https://github.com/steepsalvadorman/APIRestWithExceptions'
    },
    {
      id: 6,
      title: 'Cinemapedia',
      description: 'Aplicación multiplataforma de catálogo cinematográfico con Clean Architecture. Implementa gestión de estado avanzada con Riverpod y consumo de APIs externas optimizado.',
      technologies: ['Flutter', 'Dart', 'Riverpod'],
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop',
      githubUrl: 'https://github.com/steepsalvadorman/Cinemapedia'
    }
  ];

  public currentYear = new Date().getFullYear();
}
