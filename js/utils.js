/* ================================
   utils.js - FUNCIONES AUXILIARES AVANZADAS
   ================================
   
   Este archivo contiene funciones útiles reutilizables
   que puedes usar en diferentes partes del proyecto.
*/

/**
 * Formatear fecha a formato legible
 * Ejemplo: formatDate(new Date()) -> "16 de enero de 2026"
 */
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('es-ES', options);
}

/**
 * Truncar texto a una cantidad de caracteres
 * Útil para descripciones largas
 */
function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
}

/**
 * Capitalizar la primera letra de una palabra
 */
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Generar un ID único
 * Útil para crear identificadores únicos para elementos
 */
function generateUniqueId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Hacer peticiones HTTP (GET)
 * Ejemplo: fetchData('https://api.ejemplo.com/datos')
 */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

/**
 * Hacer peticiones HTTP (POST)
 * Ejemplo: postData('https://api.ejemplo.com/datos', {nombre: 'Juan'})
 */
async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al enviar datos:', error);
        return null;
    }
}

/**
 * Detectar si el navegador está en modo oscuro
 */
function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Copiar texto al portapapeles
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(() => {
        console.error('Error al copiar el texto');
    });
}

/**
 * Obtener parámetro de URL
 * Ejemplo: getUrlParam('id') si la URL es ?id=123
 */
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Debounce - Evita que una función se ejecute múltiples veces rápidamente
 * Útil para búsquedas en tiempo real
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle - Limita la ejecución de una función
 * Útil para eventos de scroll o redimensionamiento
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Obtener elemento de forma segura
 */
function getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Elemento no encontrado: ${selector}`);
        return null;
    }
    return element;
}

/**
 * Obtener múltiples elementos
 */
function getElements(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Agregar clase a un elemento
 */
function addClass(element, className) {
    element.classList.add(className);
}

/**
 * Remover clase de un elemento
 */
function removeClass(element, className) {
    element.classList.remove(className);
}

/**
 * Toggle clase de un elemento
 */
function toggleClass(element, className) {
    element.classList.toggle(className);
}

/**
 * Comprobar si un elemento tiene una clase
 */
function hasClass(element, className) {
    return element.classList.contains(className);
}

/**
 * Crear un elemento con clases
 */
function createElement(tag, classes = [], content = '') {
    const element = document.createElement(tag);
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (content) {
        element.textContent = content;
    }
    return element;
}

/**
 * Log personalizado para debugging
 */
function log(title, data) {
    console.log(`%c${title}`, 'color: #6366f1; font-weight: bold; font-size: 14px;', data);
}

/**
 * Advertencia personalizada para debugging
 */
function warn(title, data) {
    console.warn(`%c${title}`, 'color: #ec4899; font-weight: bold; font-size: 14px;', data);
}

/**
 * Error personalizado para debugging
 */
function error(title, data) {
    console.error(`%c${title}`, 'color: #ef4444; font-weight: bold; font-size: 14px;', data);
}
