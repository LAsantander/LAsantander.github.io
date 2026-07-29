/* ================================
   main.js - PUNTO DE ENTRADA
   ================================
   
   Este es el archivo principal que se ejecuta primero.
   Aquí importamos y inicializamos todas las funciones.
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página cargada correctamente');
    
    // Inicializar funcionalidades
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeFormValidation();
});
