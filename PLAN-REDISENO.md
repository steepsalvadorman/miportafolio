# Plan de rediseño del portafolio

## 1. Objetivo y alcance

Facilitar que reclutadores y líderes técnicos comprendan el perfil de Steep
Salvador, encuentren evidencia de su trabajo y puedan contactarlo.

- Dirección confirmada: oscuro y profesional, con ámbar y detalles técnicos sutiles.
- Acción principal: contactar por correo. Repetir la misma llamada en el hero y al cierre.
- Acciones secundarias: explorar proyectos, LinkedIn y descargar el CV si existe una versión publicable y vigente.
- Alcance: página principal, certificados, navegación, pie de página, sistema visual y página 404.
- Conservar Astro, TypeScript, Tailwind CSS y las rutas actuales. No actualizar dependencias ni incorporar un framework de interfaz por motivos estéticos.
- Este documento es un plan; no supone cambios en las páginas.

Base metodológica: estrategia, jerarquía y sistema visual de `landing-page-design`,
cuyo contenido se revisó durante la instalación anterior. La skill no se pudo
invocar ni localizar en las ubicaciones consultadas de esta sesión. No instalar
otra copia para ejecutar este plan.

## 2. Diagnóstico de la implementación actual

Revisión realizada sobre el código, no sobre una página renderizada. La
compilación no se pudo ejecutar en esta sesión porque Node.js y npm no están disponibles.

| Hallazgo | Evidencia | Cambio propuesto |
|---|---|---|
| La portada presenta una declaración de código en lugar de una propuesta profesional directa | `src/pages/index.astro` | Hero con nombre, especialidad, aportación y contacto |
| No hay un `h1` en ninguna de las dos páginas | `src/pages/index.astro`, `src/pages/certificados.astro` | Un `h1` por página y encabezados ordenados |
| Los proyectos aparecen después de experiencia, logros, educación y tecnologías | `src/pages/index.astro` | Adelantar evidencia seleccionada y dejar la trayectoria como respaldo |
| Correo y redes compiten con el enlace destacado a certificados; falta cierre de contacto | `src/pages/index.astro` | Una acción principal clara y navegación secundaria |
| La interfaz combina ruido, parpadeo, rejillas, viñeta y canvas animado de pantalla completa | `src/styles/global.css`, `src/components/MatrixBackground.astro`, `src/components/TerminalShell.astro` | Fondos planos; retirar las capas CRT y el canvas del layout predeterminado |
| No se observa tratamiento de movimiento reducido | CSS global y canvas | Respetar `prefers-reduced-motion`; contenido visible sin animación o JavaScript |
| Monoespaciada en todo el sitio, texto justificado y múltiples opacidades y brillos | CSS global y página principal | Tipografía de lectura, alineación izquierda y contraste verificable |
| Proyectos, logros y certificados utilizan fotografías de stock | Datos del portafolio y certificados | Capturas reales o tarjetas tipográficas; no presentar stock como evidencia |
| Los niveles de idiomas se convierten en porcentajes arbitrarios | `src/components/SkillsPanel.astro` | Mostrar los niveles declarados como texto, sin porcentajes ni equivalencias inventadas |
| Certificados sin enlace de verificación y con todas las imágenes de carga inmediata | `src/data/certificates.ts`, `src/pages/certificados.astro` | Credenciales verificables cuando existan y carga diferida fuera de la primera vista |
| El layout tiene título y descripción, pero no metadatos sociales, canonical ni enlace para saltar al contenido | `src/layouts/Layout.astro` | Completar accesibilidad y metadatos con dominio e imagen reales |

## 3. Estructura de la página principal

Elegir un layout de hero y secciones: permite leer el perfil rápidamente y
profundizar en proyectos y experiencia sin convertir el portafolio en una página
comercial larga.

1. **Navegación:** nombre o marca personal, Proyectos, Experiencia, Certificados y Contacto. Indicar la página activa y ofrecer menú móvil accesible.
2. **Hero:** especialidad, propuesta de valor, contacto y una prueba profesional breve. En escritorio, acompañar con una ficha técnica o captura real; no simular una terminal interactiva.
3. **Proyectos destacados:** tres casos elegidos por relevancia para backend, automatización e integración industrial.
4. **Declaración de valor:** sección tipográfica de dos líneas, separada del hero.
5. **Áreas de aportación:** desarrollo backend, calidad automatizada e integración de sistemas, con ejemplos existentes.
6. **Experiencia:** cronología resumida; cargo, empresa, fechas y aportación antes que listas extensas.
7. **Tecnologías e idiomas:** categorías claras, priorizando el stack principal y evitando medidores de dominio.
8. **Formación y credenciales:** universidad y selección de certificados, con acceso al catálogo completo.
9. **Preguntas profesionales:** tres o cuatro respuestas útiles solo cuando haya información confirmada.
10. **Contacto final y footer:** repetir contacto por correo; GitHub, LinkedIn, copyright y enlaces relevantes.

Conservar los seis proyectos disponibles mediante una sección secundaria o una
lista ampliable accesible. No eliminar experiencia o logros: resumirlos y vincular
los resultados a sus casos cuando la relación esté confirmada.

### Borrador del hero

- Identificación: **Steep Salvador · Ingeniero de Sistemas**.
- H1: **Desarrollo software e integro sistemas para entornos críticos.**
- Subtítulo: **Combino Spring Boot, TypeScript y automatización de pruebas para construir soluciones en minería, banca y consultoría.**
- CTA principal: **Contactar por correo**.
- Enlace secundario: **Explorar proyectos**.
- Prueba: **Experiencia en minería y banca. Actualmente en QA Automation y liderazgo de desarrollo.**

### Aportaciones que debe comunicar

- **Backend mantenible:** APIs y arquitecturas con Spring Boot, apoyadas en los proyectos existentes.
- **Calidad integrada a la entrega:** automatización con Playwright y experiencia de QA.
- **Integración con operaciones reales:** sistemas industriales y datos de balanzas con Rust.
- **Criterio técnico y colaboración:** liderazgo y definición de estándares descritos en la trayectoria.

Declaración de valor propuesta:

> Software conectado con la operación.
> Calidad integrada a cada entrega.

No añadir testimonios, disponibilidad laboral, modalidad de trabajo, cifras de
impacto ni promesas no confirmadas. Las cifras actuales de logros deben validarse
con el propietario antes de destacarlas; no alterarlas para que parezcan más creíbles.

### Cómo explorar el perfil

Tres pasos ligeros, no una sección comercial obligatoria: revisar proyectos,
consultar experiencia y contactar. No incorporar precios, garantías, pruebas
gratuitas ni otras secciones que no correspondan a un portafolio laboral.

### Preguntas profesionales propuestas

- ¿En qué áreas se concentra tu experiencia? Responder con backend, QA e integración según los datos actuales.
- ¿Dónde puedo revisar tu código? Enlazar los repositorios publicados.
- ¿Cómo puedo contactarte? Correo y LinkedIn existentes.
- ¿Qué oportunidades buscas? Publicar solo después de confirmar roles, modalidad y disponibilidad.

## 4. Sistema visual

- **Fondos:** `#000000` y `#181818`, planos y sin gradientes decorativos.
- **Ámbar:** conservar `#FFB000` como acento de marca en CTA, enlaces y detalles; no usarlo para todos los encabezados.
- **Texto:** blanco suave y secundario neutro con contraste medido sobre cada fondo.
- **Hero:** si se aplica el gradiente textual de la skill, limitarlo al título, de `#FFFFFF` a `#9B9B9B`; no usar gradientes de fondo.
- **Tipografía:** Geist como familia principal; Geist Mono únicamente para código o datos que lo justifiquen. Preferir fuentes locales.
- **Escala:** tamaños predeterminados de Tailwind; cuerpo `text-base`, etiquetas `text-sm`, secciones `text-3xl` o `text-4xl`, hero `text-4xl` en móvil y hasta `text-6xl` en escritorio.
- **Lectura:** hero y subtítulo con ancho máximo de 680 px; `text-wrap: balance` en títulos y `text-wrap: pretty` en párrafos.
- **Espaciado:** ritmo coherente con tokens de Tailwind, sin valores improvisados. Contenedor amplio y dos columnas solo cuando el contenido lo permita.
- **Tarjetas:** superficies discretas, bordes completos o ninguno, sin sombras luminosas; radios coherentes y anidados según padding.
- **Iconos:** una sola familia, preferiblemente Phosphor si hacen falta; texto visible para las acciones.
- **Movimiento:** opcional, breve y no continuo, con easing explícito. Reveals con `IntersectionObserver`, nunca como requisito para leer el contenido.
- **Declaración de valor:** revelado por palabras solo con movimiento permitido; versión estática completa con movimiento reducido o sin JavaScript.
- **Estados:** hover, active y foco visible para todas las acciones. Si el menú móvil es modal, gestionar Escape, foco y retorno al disparador.

## 5. Proyectos, imágenes y certificados

### Casos destacados

Selección inicial propuesta: **Industrial Scale Integration**, **Enterprise API
Framework** y **CodeCraft Peru**. Confirmar qué repositorios y evidencias representan
mejor el trabajo actual antes de cerrar la selección.

Cada caso debe incluir problema, contribución personal, solución, tecnologías y
resultado comprobable; enlaces a código y demo únicamente si funcionan. Cuando
no haya una demo pública, indicarlo como contexto, no crear un botón inactivo.

Para trabajo empresarial, usar diagramas anonimizados o descripciones autorizadas.
No publicar código, capturas o datos internos sin permiso.

### Certificados

- Mantener `/certificados` y el regreso a la página principal.
- Introducción corta y un `h1` descriptivo.
- Tarjetas con título, emisor, fecha y verificación externa cuando exista.
- No equiparar automáticamente un curso con una certificación oficial del fabricante.
- No inventar IDs, enlaces o credenciales.
- Reemplazar fotografías genéricas por documento autorizado, marca permitida o diseño tipográfico.
- Añadir filtros solo si aportan valor al catálogo y después de definir categorías reales.
- No ocultar el catálogo cuando JavaScript esté deshabilitado.

## 6. SEO, accesibilidad y rendimiento

- Indexar el portafolio y certificados: son contenido profesional permanente.
- Título propuesto: **Steep Salvador | Ingeniería de software, backend y QA**.
- Descripción propuesta: **Portafolio de Steep Salvador, Ingeniero de Sistemas con experiencia en Spring Boot, TypeScript, automatización de pruebas e integración industrial.**
- Canonical y sitemap solo después de confirmar el dominio de producción.
- Open Graph y Twitter con una imagen propia; metadatos específicos por página.
- Datos estructurados `Person` solo con información pública confirmada; no añadir schema FAQ por defecto.
- Landmarks semánticos, salto al contenido, orden de encabezados y nombres accesibles.
- Contraste WCAG AA: 4.5:1 para texto normal y 3:1 para texto grande; comprobar también controles y foco.
- Imágenes con dimensiones explícitas y formatos optimizados. Carga diferida fuera de la primera vista.
- Retirar el canvas y las animaciones CRT del layout compartido para evitar trabajo continuo innecesario.
- 404 propia con regreso al inicio.
- No añadir formulario, analítica ni cookies por defecto. Evaluar privacidad y consentimiento si se incorporan servicios que lo requieran.

## 7. Secuencia de implementación

1. **Validar contenido y activos:** proyectos principales, cifras, capturas autorizadas, CV, dominio y objetivos laborales concretos.
2. **Definir base compartida:** tokens, tipografía, layout, navegación, footer y eliminación de efectos CRT predeterminados.
3. **Implementar hero:** jerarquía, contacto y evidencia; validar primero escritorio y móvil.
4. **Implementar proyectos y declaración de valor:** casos legibles, enlaces y activos reales.
5. **Reorganizar trayectoria:** experiencia, aportaciones, tecnologías, idiomas y formación conservando el contenido.
6. **Rediseñar certificados y contacto:** catálogo consistente y cierre orientado a reclutadores.
7. **Completar SEO, accesibilidad y 404:** sin inventar dominio ni datos.
8. **Validar y ajustar:** compilación, teclado, pantallas pequeñas, enlaces, contraste y mediciones de rendimiento.

Superficies principales: `src/layouts/Layout.astro`, `src/pages/index.astro`,
`src/pages/certificados.astro`, `src/styles/global.css`,
`src/components/SkillsPanel.astro`, `src/components/MatrixBackground.astro`,
`src/components/TerminalShell.astro`, `src/data/portfolio.ts` y
`src/data/certificates.ts`. Extraer componentes solo para piezas realmente
compartidas; evitar una arquitectura nueva para este rediseño.

## 8. Criterios de aceptación

- El primer bloque identifica nombre, especialidad y contacto sin depender de efectos.
- Una acción principal consistente en hero y cierre; certificados como navegación secundaria.
- Un `h1` por página y estructura semántica verificable.
- Ningún proyecto, empleo o certificado perdido por la reorganización.
- Sin porcentajes de idiomas inventados ni stock presentado como evidencia.
- Sin desbordamiento horizontal a 360, 390, 768, 1024 y 1440 px, y usable con zoom al 200%.
- Acciones principales con área objetivo de al menos 44 × 44 px.
- Navegación completa por teclado, foco visible y menú móvil operable con Escape si es modal.
- Con movimiento reducido, sin parpadeos, canvas ni reveals que oculten texto.
- Contenido, enlaces y contacto disponibles sin JavaScript.
- Imágenes sin saltos de layout y sin carga inmediata de todo el catálogo.
- `npm run build` correcto cuando se disponga del runtime requerido.
- Lighthouse móvil en build de producción: objetivo de al menos 90 en rendimiento y 95 en accesibilidad y SEO; revisar además manualmente, no tratar los puntajes como garantía.
- Objetivos de Core Web Vitals: LCP ≤ 2.5 s, CLS ≤ 0.1 e INP ≤ 200 ms. Confirmar INP con medición de interacción o datos de campo; no inferirlo solo de Lighthouse.

## 9. Pendientes antes de publicar

- Confirmar la ubicación de la skill original si se quiere invocarla en la implementación.
- Obtener capturas reales y decidir qué contenido empresarial puede mostrarse.
- Confirmar CV vigente, disponibilidad y preferencias de trabajo.
- Revisar enlaces públicos y cifras destacadas.
- Confirmar dominio para canonical, sitemap y metadatos.
- Disponer de Node.js y npm compatibles para compilar y realizar validación visual.

## 10. Estado de implementación (2026-10-11)

Implementado según este plan. La skill `landing-page-design` siguió sin estar
disponible para invocación; se usó como referencia su contenido original publicado
(MIT), sin instalar otra copia.

- Compilación verificada con Astro 7.3.8 usando el runtime Node v24 incluido en VS Code (`ELECTRON_RUN_AS_NODE=1`); Node.js y npm no están en el PATH.
- Validado en navegador: anchuras de 360 a 1440 px sin desbordamiento, menú móvil con teclado y Escape, movimiento reducido y lectura sin JavaScript.
- Geist y Geist Mono se sirven localmente desde `public/fonts/`.
- Cerca App se muestra sin enlace: `github.com/steepsalvadorman/Cachuelitoo` responde 404.

Pendiente: casos con problema, contribución y resultado; capturas autorizadas; CV
publicable; dominio para canonical, sitemap y `og:image`; validación de las cifras
de logros; preferencias laborales para la cuarta pregunta; Lighthouse y Core Web Vitals.

### Cambio de dirección visual (2026-10-11)

A petición del propietario, la dirección «oscuro con ámbar» se sustituyó por un
estilo pop/manga inspirado en un video de referencia. Del video se tomaron la paleta
(azul eléctrico `#1C32F8`, azul profundo `#1D298D`, rojo `#CC0D2C`, amarillo
`#F6D86A` en lugar del ámbar, cian, lavanda y rosa pálido), la ráfaga de cortes
rápidos, el escorzo y la tipografía kana. No se reutilizó ninguna imagen del video:
todas las ilustraciones son SVG originales generados en `MangaPanel.astro`.
El degradado del hero contradice la regla de fondos planos de la skill; se aplicó por
indicación explícita del propietario y el texto queda siempre sobre el tramo azul.
