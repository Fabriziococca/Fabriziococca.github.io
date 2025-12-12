// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elementos del DOM ---
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const langButtons = document.querySelectorAll('.btn-lang');
    
    // --- Traducciones ---
    const translations = {
        es: {
            // Hero
            heroTitle: '¡Hola! Soy <span>Fabrizio</span>',
            heroSubtitle1: 'Estudiante de <strong>Lic. en Sistemas (UBA)</strong> con perfil técnico-funcional.',
            heroSubtitle2: 'Busco conectar la estrategia de negocio con soluciones tecnológicas eficientes.',
            
            heroBtnProjects: 'Ver mis Proyectos',
            heroBtnContact: 'Contactarme',

            // About
            aboutTitle: 'Sobre Mí',
            aboutP1: 'Como estudiante avanzado de la <strong>Licenciatura en Sistemas en la UBA</strong>, combino la visión sistémica de las organizaciones con la capacidad de ejecución técnica.',
            aboutP2: 'Busco un rol donde pueda aplicar mi capacidad de análisis para optimizar procesos, asegurando que el software entregado aporte valor real al usuario final. Entiendo el lenguaje del negocio y la lógica de la programación, facilitando la comunicación en los proyectos.',
            aboutP3: '<strong>Áreas de interés:</strong> Análisis Funcional, Arquitectura de Software, Automatización de Procesos, Cloud Computing (SaaS) y Metodologías Ágiles.',
            
            // Skills
            skillsTitle: 'Herramientas y Tecnologías',
            skillsLangTitle: 'Backend & Cloud',
            skillsFrontTitle: 'Frontend & Diseño',
            skillsDbToolsTitle: 'Análisis & Gestión',

            // Projects
            projectsTitle: 'Proyectos Destacados',
            
            // Proyecto Bot
            project1Title: 'Sistema SaaS de Gamificación y Analytics',
            project1Desc: 'Desarrollo y despliegue de una solución automatizada para maximizar el crecimiento de comunidades digitales. El sistema intercepta eventos en tiempo real, procesa métricas de participación y gestiona un ranking persistente en la base de datos para incentivar la actividad de los usuarios.',
            project1Highlight: '<strong>Highlights:</strong> Arquitectura serverless con uptime 24/7, base de datos relacional (PostgreSQL) y lógica multitenant (soporte para múltiples servidores aislados).',
            
            projectBtnLive: '🚀 Ver Demo',
            projectBtnCode: '💻 Ver Repositorio',

            // Contact
            contactTitle: '¿Hablemos?',
            contactP1: 'En búsqueda activa de nuevas oportunidades profesionales como <strong>Analista Funcional o Desarrollador</strong>.',
            contactP2: 'Listo para aportar visión analítica, documentación técnica y soluciones de software concretas al equipo.',
            
            contactFormName: 'Nombre',
            contactFormEmail: 'Tu Email',
            contactFormMessage: 'Mensaje',
            contactFormSubmit: 'Enviar Mensaje',

            // Footer
            footerRights: 'Todos los derechos reservados.'
        },
        en: {
            // Hero
            heroTitle: 'Hi! I\'m <span>Fabrizio</span>',
            heroSubtitle1: 'I\'m an <strong>Information Systems student (UBA)</strong> with a technical-functional profile.',
            heroSubtitle2: 'I seek to connect business strategy with efficient technological solutions.',
            heroBtnProjects: 'View My Projects',
            heroBtnContact: 'Contact Me',

            // About
            aboutTitle: 'About Me',
            aboutP1: 'As an advanced student of <strong>Information Systems at UBA</strong>, I combine a systemic view of organizations with technical execution skills.',
            aboutP2: 'I look for roles where I can apply my analytical skills to optimize processes, ensuring software delivers real value to the end user. I understand business language and programming logic, facilitating communication in projects.',
            aboutP3: '<strong>Interests:</strong> Functional Analysis, Software Architecture, Process Automation, Cloud Computing (SaaS), and Agile Methodologies.',

            // Skills
            skillsTitle: 'Tools & Technologies',
            skillsLangTitle: 'Backend & Cloud',
            skillsFrontTitle: 'Frontend & Design',
            skillsDbToolsTitle: 'Analysis & Management',

            // Projects
            projectsTitle: 'Featured Projects',
            project1Title: 'Gamification & Analytics SaaS System',
            project1Desc: 'Development and deployment of an automated solution to maximize digital community growth. The system intercepts real-time events, processes engagement metrics, and manages a persistent cloud leaderboard to incentivize user activity.',
            project1Highlight: '<strong>Highlights:</strong> Serverless architecture with 24/7 uptime, relational database (PostgreSQL), and multitenant logic (support for isolated multiple servers).',
            
            projectBtnLive: '🚀 View Demo',
            projectBtnCode: '💻 View Repository',

            // Contact
            contactTitle: 'Let\'s Talk?',
            contactP1: 'Actively looking for professional opportunities as a <strong>Functional Analyst or Developer</strong>.',
            contactP2: 'Ready to contribute analytical vision, technical documentation, and concrete software solutions to the team.',
            contactFormName: 'Name',
            contactFormEmail: 'Your Email',
            contactFormMessage: 'Message',
            contactFormSubmit: 'Send Message',

            // Footer
            footerRights: 'All rights reserved.'
        }
    };

    // --- Lógica del Modo Oscuro/Claro ---
    
    // 1. Cargar preferencia de tema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateThemeToggleIcon(currentTheme);
    } else {
        localStorage.setItem('theme', 'dark-mode');
        updateThemeToggleIcon('dark-mode');
    }

    // 2. Event Listener para el botón de tema
    themeToggle.addEventListener('click', () => {
        let newTheme;
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            newTheme = 'light-mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            newTheme = 'dark-mode';
        }
        localStorage.setItem('theme', newTheme);
        updateThemeToggleIcon(newTheme);
    });

    // 3. Función para actualizar el icono
    function updateThemeToggleIcon(theme) {
        if (theme === 'dark-mode') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // --- Lógica del Selector de Idioma ---

    // 1. Cargar preferencia de idioma
    const currentLang = localStorage.getItem('lang') || 'es'; // 'es' por defecto
    setLanguage(currentLang);

    // 2. Event Listener para los botones de idioma
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('lang', lang);
        });
    });

    // 3. Función para cambiar el idioma
    function setLanguage(lang) {
        // Actualiza la clase 'active' de los botones
        langButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Actualiza el contenido de los elementos con data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        // Actualiza el atributo 'lang' de la etiqueta <html>
        document.documentElement.lang = lang; 
    }
});
// --- MANEJO DEL FORMULARIO (AJAX) ---
// Esto evita que te lleve a la página de "Gracias" de Formspree
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // 1. Frena el envío tradicional
        
        const statusButton = contactForm.querySelector('button[type="submit"]');
        const originalText = statusButton.innerText;

        // 2. Cambia el texto del botón para dar feedback
        statusButton.innerText = 'Enviando...';
        statusButton.disabled = true;

        const data = new FormData(event.target);

        try {
            // 3. Envía los datos a Formspree usando Fetch (en segundo plano)
            const response = await fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // 4. Si salió bien:
            if (response.ok) {
                alert("¡Mensaje enviado con éxito! Gracias por contactarme.");
                contactForm.reset(); // Limpia el formulario
            } else {
                // Si hubo error en Formspree
                alert("Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.");
            }
        } catch (error) {
            // Si hubo error de red
            alert("Error de conexión. Verifica tu internet.");
        } finally {
            // 5. Restaura el botón a la normalidad
            statusButton.innerText = originalText;
            statusButton.disabled = false;
        }
    });
}