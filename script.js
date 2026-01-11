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

// --- Lógica del Menú de Hamburguesa ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainHeader = document.querySelector('.main-header');
const navLinks = document.querySelectorAll('.nav-links a');

// Abrir/cerrar menú con el botón
hamburgerBtn.addEventListener('click', () => {
    mainHeader.classList.toggle('nav-open');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainHeader.classList.contains('nav-open')) {
            mainHeader.classList.remove('nav-open');
        }
    });
});

// --- Lógica para el Año Dinámico en el Footer ---
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});