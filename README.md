# 📟 Terminal Portfolio - Matrix Amber CRT Edition

Este es mi portafolio profesional diseñado con una estética retro de **terminal de fósforo ámbar (CRT)**, inspirado en sistemas clásicos y la estética hacker de Matrix. El proyecto está construido utilizando tecnologías web modernas para garantizar un rendimiento óptimo y una experiencia de usuario fluida.

![Matrix Theme](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop)

## 🚀 Características Principales

- **Estética Retro-Futurista:** Interfaz de usuario basada en consola con efectos de scanlines, parpadeo sutil y paleta de colores ámbar neón.
- **Fondo Animado Persistente:** Un efecto de "lluvia de dígitos" en el fondo que se mantiene fluido durante la navegación entre páginas.
- **Navegación por Rutas:** Implementación de Angular Router para separar el currículum principal de la galería de certificados.
- **Diseño Responsivo:** Adaptado para una lectura cómoda tanto en monitores de escritorio como en dispositivos móviles.
- **Optimización para Ingenieros:** Estructura de datos clara, sin adornos innecesarios, enfocada en la legibilidad técnica.

## 🛠️ Tecnologías Utilizadas

- **Angular 19+:** Framework base para la estructura y lógica de la aplicación.
- **Tailwind CSS v4:** Motor de estilos de última generación para la implementación del sistema de diseño.
- **TypeScript:** Tipado estricto para un código más robusto y mantenible.
- **HTML5 Canvas:** Utilizado para la renderización de la animación de fondo de alto rendimiento.
- **Google Fonts (JetBrains Mono):** Tipografía optimizada para lectura de código y terminales.

## 📁 Estructura del Proyecto

```text
src/app/
├── app.ts                # Cascarón global (Animación de fondo y Router)
├── home.ts               # Vista principal: CV, Experiencia y Logros
├── home.html             # Template de la página principal
├── certificados.ts       # Vista de Galería de Certificados
├── certificados.html     # Template de la galería
└── app.routes.ts         # Configuración de navegación
```

## ⚙️ Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/steepsalvadorman/miportafolio.git
   cd miportafolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:4200`.

## 👤 Autor

**Steep Salvador** - Ingeniero de Sistemas enfocado en el desarrollo de soluciones escalables y diseño técnico de alto nivel.

---
*Desarrollado con ☕ y 🦀 (Rust vibes).*
