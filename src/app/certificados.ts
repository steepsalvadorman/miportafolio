import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

@Component({
  selector: 'app-certificados',
  imports: [CommonModule, RouterModule],
  templateUrl: './certificados.html'
})
export class CertificadosComponent {
  public certificates: Certificate[] = [
    {
      title: 'Ondas Telecomunicaciones desde 0, Nivel 2',
      issuer: 'Poca Poca',
      date: 'Ene 2026',
      imageUrl: 'https://images.pexels.com/photos/221161/pexels-photo-221161.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Data Science: Machine Learning',
      issuer: 'edX - HarvardX',
      date: 'Jun 2025',
      imageUrl: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800'
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'EducacionIT',
      date: 'Jun 2024',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
    },
    {
      title: 'Spring Boot 3 y Spring Framework 6',
      issuer: 'Udemy',
      date: 'Nov 2023',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800'
    },
    {
      title: 'Curso completo del lenguaje Rust',
      issuer: 'Udemy',
      date: 'Mar 2024',
      imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800'
    },
    {
      title: 'Principios SOLID y Clean Code',
      issuer: 'Udemy',
      date: 'Mar 2024',
      imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800'
    },
    {
      title: 'Workshop: REACT DEVELOPER',
      issuer: 'Universidad Nacional de Ingeniería (UNI)',
      date: 'Feb 2024',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800'
    },
    {
      title: 'AWS Knowledge: Architecting',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Oct 2023',
      imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800'
    },
    {
      title: 'Docker - Guía práctica para desarrolladores',
      issuer: 'Udemy',
      date: 'Feb 2023',
      imageUrl: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Kotlin desde Cero',
      issuer: 'Platzi',
      date: 'Ene 2023',
      imageUrl: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800'
    },
    {
      title: 'Linux - Administración Básica',
      issuer: 'Universidad Nacional de Ingeniería (UNI)',
      date: 'Mar 2023',
      imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Arquitecturas Limpias',
      issuer: 'PRAGMA',
      date: 'Feb 2023',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
    }
  ];
}
