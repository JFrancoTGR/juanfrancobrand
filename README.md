# Juan Franco — Sitio personal modular (V4)

Migración de la maqueta editorial V3 a **Astro estático con componentes reales**. La identidad permanece: Geist Light / Regular / Black, acento `#D8E557`, oscuro `#424242`, fondo `#F7F7F5`.

## Inicio rápido

```bash
npm install
npm run dev
npm run build
```

El resultado de compilación se genera en `dist/` y puede alojarse en hosting estático, incluido Hostinger.

## Organización

```text
src/
  pages/
    index.astro                  # Ensambla secciones; no contiene presentación
  layouts/
    BaseLayout.astro             # Documento, metadatos, estructura global
  components/
    global/
      SiteHeader.astro          # Navegación, menú, barra de progreso
      SiteFooter.astro
      RevealController.astro    # Animaciones con opt-in
    ui/
      ChapterHeading.astro      # Cabecera editorial reutilizable
    sections/
      HeroSection.astro
      ApproachSection.astro
      SolutionsSection.astro
      StackSection.astro
      JourneySection.astro
      ContactSection.astro
    interactive/
      ArchitectureExplorer.astro # Interfaz interactiva sin framework extra
      MethodStrip.astro
  data/
    site.ts                     # Identidad, correo, navegación
    content.ts                  # Capacidades, soluciones, stack, trayectoria
    architectures.ts           # Datos tipados de cada escenario
  scripts/
    header.ts                   # Menú, estado de navegación y progreso
    reveal.ts                   # IntersectionObserver accesible
    architectures.ts            # Interactividad aislada del explorador
  styles/
    global.css                  # Tokens, tipografía y utilidades editoriales
```

## Principios aplicados

- **Separación real:** las secciones no contienen código de otras secciones; sus estilos viven junto a cada componente.
- **Datos separados de interfaz:** modificar habilidades, experiencia o textos no exige editar markup repetido.
- **Interacción encapsulada:** arquitectura, navegación y apariciones tienen controladores específicos; no hay un único script global monolítico.
- **Reutilización:** `ChapterHeading` define un patrón común; el resto se compone.
- **Diseño sistemático:** variables CSS centrales; no introducir valores nuevos ad hoc.
- **Carga ligera:** Astro prerender, sin hidratar React para efectos que resuelve JS nativo.

## Para evolucionar

1. Completar contenido editorial del CV y verificar precisión de cada experiencia.
2. Sustituir el correo y LinkedIn de ejemplo cuando estén confirmados.
3. Agregar proyectos/casos de estudio como contenido tipado, sin acoplar la estructura a una sola empresa o industria.
4. Añadir servicios de juanfrancoconsultor como módulo/ruta independiente, manteniendo identidad visual y sistema de componentes.

No se han configurado integraciones reales ni se han conectado APIs externas. Esta es una base modular funcional y lista para iterar.
