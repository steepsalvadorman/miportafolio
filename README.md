# 📟 Steep Salvador - Portafolio Profesional

Bienvenido a mi espacio profesional. Soy un Ingeniero de Sistemas enfocado en la creación de soluciones digitales eficientes y escalables para sectores industriales y empresariales. Mi experiencia abarca desde el desarrollo de software crítico en el sector minero hasta la arquitectura de sistemas modernos para la banca.

## 🛠️ Stack Tecnológico

- **Core:** Astro & TypeScript
- **Styling:** Tailwind CSS v4 (estilo pop/manga: azul eléctrico, rojo, amarillo y degradado a lavanda)
- **Tipografía:** Geist y Geist Mono, más un subconjunto de Dela Gothic One solo para el kana decorativo; todas servidas localmente desde `public/fonts/` (SIL OFL 1.1, licencias incluidas)
- **Backend:** Spring Boot & Rust
- **Cloud/DevOps:** Docker, Azure & AWS

## 🚀 Comandos

```bash
npm install
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Estructura

- `src/pages/`: inicio (`index.astro`), `certificados.astro` y `404.astro`.
- `src/data/`: contenido del portafolio y del catálogo de certificados.
- `src/layouts/Layout.astro`: metadatos, salto al contenido y mejoras progresivas.
- `src/components/`: cabecera, pie de página, panel de tecnologías, `MangaPanel` (ilustraciones SVG originales) y `BurstPanel` (ráfaga animada con pausa).

El contenido se puede leer sin JavaScript; las animaciones respetan
`prefers-reduced-motion` y la ráfaga se puede pausar. El rediseño sigue `PLAN-REDISENO.md`.

## Despliegue

El proyecto genera un sitio estatico en `dist/` con `npm run build`. Puedes
publicar esa carpeta en un hosting de archivos estaticos; no requiere
configuracion especifica de Netlify.

## 👤 Contacto y Enlaces

- **LinkedIn:** [linkedin.com/in/steepsalvador](https://www.linkedin.com/in/steepsalvador)
- **GitHub:** [github.com/steepsalvadorman](https://github.com/steepsalvadorman)
- **Email:** steepbsm@gmail.com

---
*Explorando la frontera entre la ingeniería de sistemas y la innovación tecnológica.*
