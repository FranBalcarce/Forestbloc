// Captura todos los clics en enlaces
document.addEventListener('click', function(event) {
    // Verifica que el enlace sea interno y tenga la clase "no-html-extension"
    if (event.target.tagName === 'A' && event.target.hostname === window.location.hostname && !event.target.classList.contains('no-html-extension')) {
        // Previene el comportamiento predeterminado de navegación
        event.preventDefault();
        
        // Obtiene la ruta del enlace
        var path = event.target.pathname;

        // Cambia la URL sin recargar la página
        history.pushState(null, null, path);
        
        // Puedes cargar el contenido de la página aquí según la nueva ruta
        // Por ejemplo, usando AJAX para cargar contenido dinámicamente
        // y actualizar solo la sección necesaria de la página.
    }
});

// Esto permite manejar el evento "popstate" para que el botón de retroceso funcione correctamente
window.addEventListener('popstate', function(event) {
    // Aquí puedes manejar la lógica para cargar el contenido según la nueva URL
    // Por ejemplo, cargar el contenido con AJAX y actualizar la sección de la página.
});
