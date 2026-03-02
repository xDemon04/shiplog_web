# 📸 Guía de Imágenes - ShipLog

Esta guía te muestra exactamente dónde y cómo colocar tus imágenes en el sitio web.

## 🎯 Ubicaciones de Imágenes

### 0. Logo (Icono de la Empresa)
**Archivo**: `public/images/logo.avif` (o .png, .svg, .jpg)

**Dónde se usa**: 
- Navbar (esquina superior izquierda)
- Footer (pie de página)

**Formatos soportados**:
- ✅ AVIF (recomendado - mejor compresión)
- ✅ SVG (ideal para logos)
- ✅ PNG (con transparencia)
- ✅ WebP
- ✅ JPG

**Cómo cambiar el formato**:
Si tu logo no es AVIF, abre `src/layouts/Layout.astro` y cambia:
```html
<!-- Línea 13 (navbar) -->
<img src="/images/logo.avif" alt="ShipLog" class="logo-image" />

<!-- Cambia a tu formato -->
<img src="/images/logo.png" alt="ShipLog" class="logo-image" />
<!-- o -->
<img src="/images/logo.svg" alt="ShipLog" class="logo-image" />
```

**Características recomendadas**:
- Altura: 200-400px (se ajusta automáticamente a 45px en navbar)
- Fondo: Transparente (PNG o SVG)
- Formato horizontal preferido
- Si es oscuro, se convertirá a blanco en el footer automáticamente

**Ajustar tamaño del logo**:
En `src/layouts/Layout.astro` línea ~90:
```css
.logo-image {
  height: 45px;  /* Cambia este valor */
  width: auto;
}
```

---

### 1. Hero Background (Imagen Principal)
**Archivo**: `public/images/hero-background.jpg`

**Dónde se usa**: Banner principal de la página

**Cómo cambiarla**:
1. Coloca tu imagen en `public/images/hero-background.jpg`
2. Abre `src/components/Hero.astro`
3. Busca la línea 52 (aproximadamente):
```css
background-image: url('/images/hero-background.jpg');
```
4. Cambia el nombre si tu archivo se llama diferente

**Características recomendadas**:
- Tamaño: 1920x1080px o mayor
- Tema: Camiones, carretera, logística, almacén
- Formato: JPG o WebP

**Ajustar transparencia del overlay**:
En la línea 60 de `Hero.astro`, cambia los valores de `rgba`:
```css
/* Más transparente (se ve más la imagen) */
background: linear-gradient(
  135deg, 
  rgba(0, 102, 255, 0.5) 0%,   /* 0.5 = 50% transparente */
  rgba(0, 163, 255, 0.4) 100%  /* 0.4 = 60% transparente */
);

/* Menos transparente (se ve menos la imagen) */
background: linear-gradient(
  135deg, 
  rgba(0, 102, 255, 0.9) 0%,   /* 0.9 = 10% transparente */
  rgba(0, 163, 255, 0.85) 100% /* 0.85 = 15% transparente */
);
```

---

### 2. Galería (6 espacios)
**Archivos**: `public/images/gallery-1.jpg` hasta `gallery-6.jpg`

**Dónde se usa**: Sección "Nuestra Operación"

**Cómo cambiarlas**:
1. Coloca tus 6 imágenes en `public/images/`
2. Abre `src/components/Gallery.astro`
3. Reemplaza el SVG con tu imagen:

**ANTES** (líneas 18-30):
```astro
<svg viewBox="0 0 400 300" fill="none">
  <!-- SVG placeholder -->
</svg>
```

**DESPUÉS**:
```astro
<img 
  src={`/images/gallery-${index + 1}.jpg`} 
  alt={item.title}
  style="width: 100%; height: 100%; object-fit: cover;"
/>
```

**Temas sugeridos**:
1. Flota de camiones
2. Carga pesada en transporte
3. Operaciones de almacén
4. Equipo de trabajo
5. Tecnología GPS/seguimiento
6. Rutas/carreteras

---

### 3. About Section (Sobre la Empresa)
**Archivo**: `public/images/about-image.jpg`

**Dónde se usa**: Sección "Sobre ShipLog"

**Cómo cambiarla**:
1. Coloca tu imagen en `public/images/about-image.jpg`
2. Abre `src/components/About.astro`
3. Busca la línea 38 y reemplaza el SVG:

**ANTES**:
```astro
<svg viewBox="0 0 600 700" fill="none">
  <!-- SVG illustration -->
</svg>
```

**DESPUÉS**:
```astro
<img 
  src="/images/about-image.jpg" 
  alt="ShipLog Operaciones"
  style="width: 100%; height: auto; border-radius: 24px; box-shadow: 0 30px 80px rgba(0,102,255,0.2);"
/>
```

---

### 4. Features Section
**Archivo**: `public/images/features-image.jpg`

**Dónde se usa**: Sección "Tecnología y Experiencia"

**Cómo cambiarla**:
1. Coloca tu imagen en `public/images/features-image.jpg`
2. Abre `src/components/Features.astro`
3. Busca la línea 68 y reemplaza el SVG:

**ANTES**:
```astro
<svg viewBox="0 0 600 700" fill="none">
  <!-- SVG illustration -->
</svg>
```

**DESPUÉS**:
```astro
<img 
  src="/images/features-image.jpg" 
  alt="Tecnología ShipLog"
  style="width: 100%; height: auto; border-radius: 24px;"
/>
```

---

## 🎨 Consejos de Diseño

### Colores que Combinan
El sitio usa azul (#0066FF), así que imágenes con estos tonos se ven mejor:
- Cielos azules
- Tonos fríos (azul, gris, blanco)
- Evita demasiado rojo o naranja

### Composición
- **Hero**: Imagen horizontal con espacio en el centro para texto
- **Galería**: Imágenes en formato 4:3 (horizontal)
- **About/Features**: Imágenes verticales o cuadradas

### Calidad
- Mínimo 1200px de ancho
- Formato JPG (80-90% calidad) o WebP
- Comprime antes de subir

---

## 🔧 Ajustes Rápidos

### Cambiar Opacidad del Hero
Archivo: `src/components/Hero.astro` línea 60
```css
/* Valores entre 0.0 (transparente) y 1.0 (opaco) */
rgba(0, 102, 255, 0.85)  /* Cambia 0.85 */
```

### Cambiar Tamaño de Imagen
```css
background-size: cover;  /* Cubre todo el espacio */
background-size: contain; /* Muestra imagen completa */
background-size: 100% auto; /* Ancho completo */
```

### Cambiar Posición de Imagen
```css
background-position: center;      /* Centrada */
background-position: top center;  /* Arriba */
background-position: bottom;      /* Abajo */
background-position: left;        /* Izquierda */
```

---

## 📁 Estructura de Carpetas

```
shiplog-web/
└── public/
    └── images/
        ├── logo.avif              ← Logo de la empresa
        ├── hero-background.jpg    ← Imagen principal
        ├── about-image.jpg        ← Sobre la empresa
        ├── features-image.jpg     ← Características
        ├── gallery-1.jpg          ← Galería 1
        ├── gallery-2.jpg          ← Galería 2
        ├── gallery-3.jpg          ← Galería 3
        ├── gallery-4.jpg          ← Galería 4
        ├── gallery-5.jpg          ← Galería 5
        └── gallery-6.jpg          ← Galería 6
```

---

## ✅ Checklist

- [ ] Logo colocado (AVIF, PNG o SVG)
- [ ] Hero background colocada
- [ ] Ajustada transparencia del overlay
- [ ] 6 imágenes de galería agregadas
- [ ] Imagen About section
- [ ] Imagen Features section
- [ ] Todas las imágenes optimizadas
- [ ] Probado en navegador

---

## 🆘 Problemas Comunes

**La imagen no se ve**
- Verifica que el archivo esté en `public/images/`
- Revisa que el nombre coincida exactamente
- Recarga la página con Ctrl+F5

**La imagen se ve pixelada**
- Usa una imagen más grande (mínimo 1200px)
- Verifica la calidad de compresión

**El texto no se lee bien**
- Aumenta la opacidad del overlay (valores más altos)
- Usa una imagen más oscura
- Agrega más blur al overlay

---

¿Necesitas ayuda? Revisa los archivos de componentes mencionados o consulta la documentación de Astro.
