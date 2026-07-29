# 📱 Portafolio Personal - Guía Educativa

¡Bienvenido! Este es un proyecto completo de un **Portafolio Personal** diseñado para que aprendas cómo se estructura una página web profesional.

## 🏗️ Arquitectura del Proyecto

```
portafolio/
├── index.html          # Estructura HTML (esqueleto de la página)
├── css/
│   └── styles.css      # Estilos CSS (diseño y colores)
├── js/
│   ├── main.js         # Punto de entrada (inicialización)
│   ├── app.js          # Lógica principal (interactividad)
│   └── utils.js        # Funciones auxiliares reutilizables
└── README.md           # Este archivo
```

## 📝 Explicación de Cada Archivo

### 1️⃣ **index.html** - Estructura HTML

Este archivo define la estructura de tu página usando **etiquetas HTML semánticas**.

**Partes principales:**
- `<head>`: Metadatos, título, y enlaces a estilos
- `<nav>`: Navegación con enlaces internos
- `<section>`: Diferentes secciones (Inicio, Sobre mí, Proyectos, etc.)
- `<form>`: Formulario de contacto
- `<footer>`: Pie de página

**Conceptos clave:**
```html
<!-- Enlaces internos: El # te lleva a un ID en la página -->
<a href="#proyectos">Proyectos</a>

<!-- ID único para cada sección -->
<section id="proyectos">...</section>

<!-- Font Awesome para iconos -->
<i class="fab fa-github"></i>
```

### 2️⃣ **css/styles.css** - Estilos y Diseño

Este archivo controla cómo se ve tu página: colores, tamaños, animaciones, etc.

**Variables CSS (reutilizables):**
```css
:root {
    --primary-color: #6366f1;      /* Azul principal */
    --secondary-color: #ec4899;    /* Rosa secundario */
    --dark-color: #1f2937;         /* Gris oscuro */
}
/* Usarlas: color: var(--primary-color); */
```

**Conceptos importantes:**
- **Grid y Flexbox**: Para alinear elementos
- **Media Queries**: Para diseño responsivo (móvil, tablet, desktop)
- **Animaciones**: Efectos suaves (`@keyframes`)
- **Gradientes**: Fondos con transiciones de colores

**Ejemplo - Diseño Responsivo:**
```css
/* Desktop */
.projects-grid {
    grid-template-columns: repeat(3, 1fr);
}

/* Tablet/Móvil */
@media (max-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
```

### 3️⃣ **js/main.js** - Punto de Entrada

Este es el **archivo principal** que se ejecuta primero. Aquí inicializamos todo.

**Qué hace:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Se ejecuta cuando la página está completamente cargada
    initializeMobileMenu();           // Activar menú móvil
    initializeSmoothScroll();         // Scroll suave
    initializeFormValidation();       // Validar formulario
});
```

### 4️⃣ **js/app.js** - Lógica Principal

Aquí están las funciones que manejan la **interactividad**.

**Función 1: Menú Móvil**
```javascript
function initializeMobileMenu() {
    // El hamburger (☰) se abre/cierra al hacer clic
    // El menú se cierra automáticamente al seleccionar un enlace
}
```

**Función 2: Scroll Suave**
```javascript
function initializeSmoothScroll() {
    // Cuando haces clic en "Proyectos", la página desplaza 
    // suavemente hasta esa sección en lugar de saltar
}
```

**Función 3: Validación de Formulario**
```javascript
function initializeFormValidation() {
    // Verifica que el formulario sea válido antes de enviar:
    // ✓ El nombre no esté vacío
    // ✓ El email sea válido
    // ✓ El mensaje tenga contenido
}
```

### 5️⃣ **js/utils.js** - Funciones Auxiliares

Son funciones pequeñas y **reutilizables** que puedes usar en diferentes partes.

**Ejemplos:**
```javascript
// Formatear fecha
formatDate(new Date()) // "16 de enero de 2026"

// Truncar texto
truncateText("Hola mundo", 5) // "Hola..."

// Validar email
isValidEmail("test@ejemplo.com") // true

// Copiar al portapapeles
copyToClipboard("Texto")

// Peticiones HTTP
const data = await fetchData('https://api.ejemplo.com/datos')
```

---

## 🎨 Colores Utilizados

| Color | Código | Uso |
|-------|--------|-----|
| Azul Primario | `#6366f1` | Botones, títulos, acentos |
| Rosa Secundario | `#ec4899` | Gradientes, decoración |
| Gris Oscuro | `#1f2937` | Textos principales |
| Gris Claro | `#f3f4f6` | Fondos suaves |

---

## 📱 Diseño Responsivo

La página se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop** (> 1200px): 3 columnas
- **Tablet** (768px - 1200px): 2 columnas
- **Móvil** (< 768px): 1 columna

```css
@media (max-width: 768px) {
    /* Cambios para pantallas pequeñas */
}
```

---

## 🚀 Cómo Ejecutar

1. Abre el archivo `index.html` en tu navegador
2. ¡La página estará lista para usar!

## ✨ Características Implementadas

✅ Navegación funcional con scroll suave  
✅ Menú móvil interactivo  
✅ Validación de formulario  
✅ Diseño completamente responsivo  
✅ Animaciones suaves  
✅ Almacenamiento local (localStorage)  
✅ Código bien comentado y organizado  

---

## 📚 Conceptos Clave a Aprender

### HTML
- Estructura semántica (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Formularios con validación
- Atributos `id` y `class`

### CSS
- Grid y Flexbox
- Media Queries
- Animaciones `@keyframes`
- Gradientes
- Variables CSS

### JavaScript
- Event Listeners
- DOM Manipulation
- Validación de formularios
- localStorage API
- Async/Await (para peticiones)

---

## 🛠️ Cómo Expandir Este Proyecto

### Agregar Nueva Sección
1. Crea un `<section>` en `index.html`
2. Dale un `id` único
3. Agrega estilos en `styles.css`
4. Crea una función en `app.js` si necesita interactividad
5. Agrega el enlace en la navegación

### Conectar a un Backend
```javascript
// Enviar datos a un servidor
await postData('https://tu-api.com/contacto', {
    nombre,
    email,
    mensaje
});
```

### Agregar más Proyectos
Copia el `.project-card` en HTML y actualiza los datos:
```html
<div class="project-card">
    <h3>Tu Nuevo Proyecto</h3>
    <p>Descripción...</p>
</div>
```

---

## 🎯 Puntos de Mejora Futuros

- Conectar formulario a servicio de email
- Agregar más animaciones
- Integrar con redes sociales
- Agregar blog de artículos
- Implementar tema oscuro
- Añadir más interactividad con animaciones avanzadas

---

## 💡 Tips de Aprendizaje

1. **Abre las Developer Tools** (F12 o Ctrl+Shift+I)
   - Inspecciona los elementos
   - Mira la consola para los logs

2. **Modifica los estilos CSS**
   - Cambia colores y tamaños
   - Observa los cambios en tiempo real

3. **Agrega `console.log()` en JavaScript**
   - Verifica que tus funciones se ejecuten
   - Mira los datos que procesas

4. **Experimenta**
   - Cambia valores
   - Agregar nuevas funciones
   - ¡No tengas miedo de romper cosas!

---

**¡A Programar! 🚀**

¿Preguntas? Revisa el código comentado en cada archivo.
