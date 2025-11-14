## Diagnóstico
- Ruta: "Avances" navega a `/especificaciones` (components/navbar.tsx). La página está en `app/especificaciones/page.tsx` y usa componentes cliente con animaciones (`StickyScroll` en components/ui/sticky-scroll-reveal.tsx y `WorldMap` en components/ui/world-map.tsx).
- No hay consultas a BD ni llamadas API en esta vista; el coste actual proviene del JS/animaciones y de imágenes estáticas en `/public/images/especificaciones/**`.
- Config global mínima en `next.config.ts` (oportunidad para compresión y formatos de imagen modernos).

## Objetivos
- Transición a `/especificaciones` ≤ 1 segundo.
- Contenido visible (LCP del fold) ≤ 1 segundo en escritorio red rápida y ≤ 2 s en móvil.
- Experiencia fluida con animaciones no bloqueantes y sin esperas perceptibles.

## Implementación
### 1) Optimización de enrutamiento y precarga
- Navbar: asegurar `Link` hacia `/especificaciones` con `prefetch` activo (Next App Router suele prefetch por defecto). Agregar `router.prefetch('/especificaciones')` en `onMouseEnter`/`onFocus` del enlace (components/navbar.tsx) para preparar el chunk antes del click.
- Server Components: mantener `app/especificaciones/page.tsx` como server component (sin `"use client"`) para SSG y mínimo JS inicial.

### 2) Lazy loading de componentes no críticos
- Crear wrapper cliente `components/especificaciones/LazyAvances.tsx` que:
  - Importe dinámicamente `StickyScroll` y `WorldMap` con `next/dynamic` (`ssr:false`).
  - Monte cada uno bajo `IntersectionObserver` para que sólo se descarguen/ejecuten cuando entren en viewport.
- Sustituir en `app/especificaciones/page.tsx` las importaciones directas por el wrapper.
- Reducir coste en móvil: respetar `prefers-reduced-motion` en ambos componentes y bajar la intensidad/uso de `motion/react` si el dispositivo es móvil.

### 3) Optimización y compresión de recursos
- Migrar todas las `<img>` en `app/especificaciones/page.tsx` a `next/image`:
  - Fondos absolutos con `fill` y `sizes` adecuados.
  - Contenido con `width/height` y `sizes` responsivos; `priority` solo para la primera imagen visible en el fold.
- `next.config.ts`:
  - Activar `compress: true` y formatos `images.formats = ['image/avif', 'image/webp']`.
  - Añadir `headers()` con `Cache-Control: public, max-age=31536000, immutable` para `_next/static` y `/images/**`.
- Convertir imágenes críticas en `/public/images/especificaciones/**` a WebP/AVIF (manteniendo dimensiones visuales) para reducir bytes de origen.

### 4) Cacheo y gestión de estado
- Dado que hoy no hay datos dinámicos, aprovechar SSG para `/especificaciones` (ya aplicable). 
- Si se añaden datos: integrar SWR/React Query con `staleTime` elevado para datos frecuentes, deduplicación, y prefetch en la pantalla anterior; usar selección de campos y paginación.
- Mantener mínima gestión de estado cliente; evitar recalcular en scroll/resize más de lo necesario (throttling ya existe en StickyScroll, revisar ajustes).

### 5) Pruebas de rendimiento
- Baseline: `next build` + `next start`, medir `/especificaciones` con Lighthouse (móvil y escritorio). 
- Medir transición: instrumentar el enlace de navbar con `performance.mark` en click y `performance.measure` en `routeChangeComplete` para capturar tiempo de cambio de vista.
- Emular redes `Fast 3G` y `Slow 4G`; revisar LCP y TTI.

### 6) Monitoreo continuo
- Añadir componente de Web Vitals y montarlo en `app/layout.tsx` para registrar LCP/CLS/FCP/TTFB en consola y/o enviarlos a un endpoint (p. ej. `/api/vitals`).
- Configurar Lighthouse CI en el pipeline para proteger el presupuesto de rendimiento.
- Opcional: integrar `@next/bundle-analyzer` para verificar que `StickyScroll`/`WorldMap` quedan en chunks diferidos y que el JS inicial está acotado.

## Criterios de aceptación
- Transición a `/especificaciones` ≤ 1s (medición con marks/measure y Lighthouse).
- LCP ≤ 1s en escritorio, ≤ 2s en móvil (red media).
- Lighthouse Performance ≥ 90 escritorio y ≥ 80 móvil.
- Animaciones fluidas sin jank; CLS ≈ 0.

## Entregables
- Cambios en `components/navbar.tsx` (prefetch e instrumentación).
- Nuevo `components/especificaciones/LazyAvances.tsx` y actualización de `app/especificaciones/page.tsx`.
- Migración a `next/image` en la página de Especificaciones.
- `next.config.ts` con compresión, formatos modernos y headers de caché.
- Instrumentación de Web Vitals en `app/layout.tsx` y reporte básico.
- Informe de pruebas antes/después con métricas clave y capturas de Lighthouse.

¿Confirmas para ejecutar estos cambios y correr las pruebas de validación?