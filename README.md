# ShipLog - Sitio Web Corporativo

Sitio web corporativo B2B moderno para ShipLog, empresa de logística y transporte de carga pesada en Sudamérica.

## Características

### Diseño Moderno
- ✅ Colores azul (#0066FF) y blanco profesionales
- ✅ Animaciones de scroll suaves (fade-in, slide-in, scale-in)
- ✅ Efectos hover 3D en tarjetas
- ✅ Gradientes modernos y sombras sutiles
- ✅ Diseño 100% responsive

### Secciones Principales
1. **Hero** - Banner principal con estadísticas animadas
2. **Stats** - Números destacados con fondo gradiente
3. **Sobre la Empresa** - Información corporativa con imagen ilustrativa
4. **Características** - Por qué elegir ShipLog
5. **Servicios** - 6 servicios principales con iconos
6. **Proceso** - 5 pasos del flujo de trabajo
7. **Sectores** - Industrias que atendemos
8. **Galería** - Espacios para imágenes de operaciones
9. **Mapa de Rutas** - Mapa interactivo de Sudamérica con SVG
10. **CTA Banner** - Llamado a la acción destacado
11. **Testimonios** - Opiniones de clientes
12. **Cotizador** - Formulario completo de solicitud
13. **Contacto** - Información de contacto

### Animaciones Implementadas
- Intersection Observer para detectar scroll
- Fade-in para apariciones suaves
- Slide-in-left/right para deslizamientos laterales
- Scale-in para efectos de zoom
- Delays escalonados en grids
- Efectos de pulso en indicadores
- Floating animations en cards

### Espacios para Imágenes
- Hero background
- Sección About (ilustración de camión)
- Features (imagen principal + floating cards)
- Galería (6 espacios para fotos)
- Cada sección tiene placeholders SVG que puedes reemplazar

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## Estructura del Proyecto

```
shiplog-web/
├── src/
│   ├── components/
│   │   ├── Hero.astro           # Banner principal
│   │   ├── Stats.astro          # Estadísticas destacadas
│   │   ├── About.astro          # Sobre la empresa
│   │   ├── Features.astro       # Características
│   │   ├── Services.astro       # Servicios
│   │   ├── Process.astro        # Proceso de trabajo
│   │   ├── Sectors.astro        # Sectores/Rubros
│   │   ├── Gallery.astro        # Galería de imágenes
│   │   ├── RouteMap.astro       # Mapa interactivo
│   │   ├── CTA.astro            # Call to action
│   │   ├── Testimonials.astro   # Testimonios
│   │   ├── QuoteForm.astro      # Formulario cotización
│   │   └── Contact.astro        # Contacto
│   ├── layouts/
│   │   └── Layout.astro         # Layout con nav y footer
│   └── pages/
│       └── index.astro          # Página principal
└── public/                      # Archivos estáticos

```

## Personalización

### Colores
Edita las variables CSS en `src/layouts/Layout.astro`:
```css
:root {
  --primary: #0066FF;    /* Azul principal */
  --secondary: #00A3FF;  /* Azul secundario */
  --dark: #0A1628;       /* Texto oscuro */
  --light: #F8FBFF;      /* Fondo claro */
}
```

### Agregar Imágenes Reales
Reemplaza los SVG placeholders con imágenes reales:
```astro
<!-- Antes (SVG placeholder) -->
<svg viewBox="0 0 600 700">...</svg>

<!-- Después (imagen real) -->
<img src="/images/tu-imagen.jpg" alt="Descripción" />
```

### Contenido
- Servicios: `src/components/Services.astro`
- Sectores: `src/components/Sectors.astro`
- Rutas: `src/components/RouteMap.astro`
- Testimonios: `src/components/Testimonials.astro`

## Tecnologías

- Astro 4.16
- TypeScript
- CSS moderno con animaciones
- SVG para ilustraciones
- Intersection Observer API

## Despliegue

El sitio puede desplegarse en:
- Vercel (recomendado)
- Netlify
- GitHub Pages
- Cualquier hosting estático

```bash
npm run build
# Los archivos estarán en dist/
```

## Optimizaciones Incluidas

- Lazy loading de animaciones
- Smooth scroll nativo
- Transiciones CSS optimizadas
- SVG inline para mejor rendimiento
- Código minificado en producción

## Navegación

El navbar incluye scroll suave a todas las secciones:
- Inicio → Hero
- Empresa → About
- Servicios → Services
- Proceso → Process
- Sectores → Sectors
- Galería → Gallery
- Rutas → RouteMap
- Cotizar → QuoteForm (botón destacado)

## Soporte

Para dudas o personalizaciones adicionales, consulta la documentación de Astro: https://docs.astro.build

