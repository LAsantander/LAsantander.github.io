/* ================================
   app.js - LÓGICA PRINCIPAL E INTERACTIVIDAD
   ================================ */

/**
 * Inicializa el menú de navegación móvil (Hamburguesa)
 */
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace normal que no sea desplegable
        const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Inicializar interacción de menús desplegables
    initializeDropdownMenu();
}

/**
 * Inicializa la funcionalidad táctil/click para menús desplegables
 */
function initializeDropdownMenu() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const nestedDropdowns = document.querySelectorAll('.nested-dropdown > a');

    // Manejar menú desplegable principal
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // Manejar submenús anidados
    nestedDropdowns.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const nestedParent = this.parentElement;
                if (nestedParent.querySelector('.nested-menu')) {
                    e.preventDefault();
                    nestedParent.classList.toggle('active');
                }
            }
        });
    });
}

/**
 * Inicializa el desplazamiento suave (Smooth Scroll)
 */
function initializeSmoothScroll() {
    const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    internalLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Inicializa la validación del formulario de contacto
 */
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre')?.value;
            const email = document.getElementById('email')?.value;
            const asunto = document.getElementById('asunto')?.value;
            const mensaje = document.getElementById('mensaje')?.value;

            if (!nombre || !email || !asunto || !mensaje) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            // Simulación de envío exitoso
            alert(`¡Gracias ${nombre}! Tu mensaje sobre "${asunto}" ha sido enviado correctamente.`);
            contactForm.reset();
        });
    }
}
