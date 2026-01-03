// Script para smooth scroll que mejora la experiencia de navegación en la página.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        
        // Solo procesar si el link no es solo "#"
        if (href !== '#') {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // Si es solo "#", ir al inicio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});