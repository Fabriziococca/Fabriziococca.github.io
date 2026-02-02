document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // CONFIGURATION & DATA
    // =========================================
    const DOM = {
        body: document.body,
        themeToggle: document.getElementById('theme-toggle'),
        langButtons: document.querySelectorAll('.btn-lang'),
        contactForm: document.getElementById('contact-form'),
        translatableElements: document.querySelectorAll('[data-key]')
    };

    const TRANSLATIONS = {
        es: {
            heroTitle: '¡Hola! Soy <span>Fabrizio</span>',
            heroSubtitle1: '<strong>Full Stack Developer & Data Specialist</strong> con perfil técnico-funcional.',
            heroSubtitle2: 'Busco conectar la estrategia de negocio con soluciones tecnológicas eficientes.',
            heroBtnProjects: 'Ver mis Proyectos',
            heroBtnContact: 'Contactarme',
            aboutTitle: 'Sobre Mí',
            aboutP1: 'Como estudiante avanzado de la <strong>Licenciatura en Sistemas en la UBA</strong>, combino la visión sistémica de las organizaciones con la capacidad de ejecución técnica.',
            aboutP2: 'Busco un rol donde pueda aplicar mi capacidad de análisis para optimizar procesos, asegurando que el software entregado aporte valor real al usuario final. Entiendo el lenguaje del negocio y la lógica de la programación, facilitando la comunicación en los proyectos.',
            aboutP3: '<strong>Áreas de interés:</strong> Análisis Funcional, Arquitectura de Software, Automatización de Procesos, Cloud Computing (SaaS) y Metodologías Ágiles.',
            skillsTitle: 'Herramientas y Tecnologías',
            skillsLangTitle: 'Backend & Cloud',
            skillsFrontTitle: 'Frontend & Diseño',
            skillsDbToolsTitle: 'Análisis & Gestión',
            projectsTitle: 'Proyectos Destacados',
            project1Title: 'Sistema SaaS de Gamificación y Analytics',
            project1Desc: 'Desarrollo y despliegue de una solución automatizada para maximizar el crecimiento de comunidades digitales. El sistema intercepta eventos en tiempo real, procesa métricas de participación y gestiona un ranking persistente en la base de datos para incentivar la actividad de los usuarios.',
            project1Highlight: '<strong>Highlights:</strong> Arquitectura serverless con uptime 24/7, base de datos relacional (PostgreSQL) y lógica multitenant (soporte para múltiples servidores aislados).',
            projectBtnLive: '🚀 Ver Demo',
            projectBtnCode: '💻 Ver Repositorio',
            contactTitle: '¿Hablemos?',
            contactP1: 'En búsqueda activa de nuevas oportunidades profesionales como <strong>Analista Funcional o Desarrollador</strong>.',
            contactP2: 'Listo para aportar visión analítica, documentación técnica y soluciones de software concretas al equipo.',
            contactFormName: 'Nombre',
            contactFormEmail: 'Tu Email',
            contactFormMessage: 'Mensaje',
            contactFormSubmit: 'Enviar Mensaje',
            footerRights: 'Todos los derechos reservados.'
        },
        en: {
            heroTitle: 'Hi! I\'m <span>Fabrizio</span>',
            heroSubtitle1: 'I\'m an <strong>Information Systems student (UBA)</strong> with a technical-functional profile.',
            heroSubtitle2: 'I seek to connect business strategy with efficient technological solutions.',
            heroBtnProjects: 'View My Projects',
            heroBtnContact: 'Contact Me',
            aboutTitle: 'About Me',
            aboutP1: 'As an advanced student of <strong>Information Systems at UBA</strong>, I combine a systemic view of organizations with technical execution skills.',
            aboutP2: 'I look for roles where I can apply my analytical skills to optimize processes, ensuring software delivers real value to the end user. I understand business language and programming logic, facilitating communication in projects.',
            aboutP3: '<strong>Interests:</strong> Functional Analysis, Software Architecture, Process Automation, Cloud Computing (SaaS), and Agile Methodologies.',
            skillsTitle: 'Tools & Technologies',
            skillsLangTitle: 'Backend & Cloud',
            skillsFrontTitle: 'Frontend & Design',
            skillsDbToolsTitle: 'Analysis & Management',
            projectsTitle: 'Featured Projects',
            project1Title: 'Gamification & Analytics SaaS System',
            project1Desc: 'Development and deployment of an automated solution to maximize digital community growth. The system intercepts real-time events, processes engagement metrics, and manages a persistent cloud leaderboard to incentivize user activity.',
            project1Highlight: '<strong>Highlights:</strong> Serverless architecture with 24/7 uptime, relational database (PostgreSQL), and multitenant logic (support for isolated multiple servers).',
            projectBtnLive: '🚀 View Demo',
            projectBtnCode: '💻 View Repository',
            contactTitle: 'Let\'s Talk?',
            contactP1: 'Actively looking for professional opportunities as a <strong>Functional Analyst or Developer</strong>.',
            contactP2: 'Ready to contribute analytical vision, technical documentation, and concrete software solutions to the team.',
            contactFormName: 'Name',
            contactFormEmail: 'Your Email',
            contactFormMessage: 'Message',
            contactFormSubmit: 'Send Message',
            footerRights: 'All rights reserved.'
        }
    };

    // =========================================
    // THEME LOGIC
    // =========================================
    function setTheme(themeName) {
        // 1. Update Class
        DOM.body.classList.remove('light-mode', 'dark-mode');
        DOM.body.classList.add(themeName);
        
        // 2. Update Icon
        const isDark = themeName === 'dark-mode';
        DOM.themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        DOM.themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

        // 3. Persist
        localStorage.setItem('theme', themeName);
    }

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(savedTheme);

    // Toggle Handler
    DOM.themeToggle.addEventListener('click', () => {
        const newTheme = DOM.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        setTheme(newTheme);
    });

    // =========================================
    // LANGUAGE LOGIC
    // =========================================
    function setLanguage(lang) {
        // 1. Update UI Buttons
        DOM.langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // 2. Update Content
        DOM.translatableElements.forEach(element => {
            const key = element.dataset.key;
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                element.innerHTML = TRANSLATIONS[lang][key];
            }
        });

        // 3. Persist
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    // Initialize Language
    const savedLang = localStorage.getItem('lang') || 'es';
    setLanguage(savedLang);

    DOM.langButtons.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // =========================================
    // CONTACT FORM (AJAX)
    // =========================================
    if (DOM.contactForm) {
        DOM.contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            // UI Feedback: Loading state
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            const formData = new FormData(event.target);

            try {
                const response = await fetch(event.target.action, {
                    method: DOM.contactForm.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert("¡Mensaje enviado con éxito! Gracias por contactarme.");
                    DOM.contactForm.reset();
                } else {
                    throw new Error('Formspree error');
                }
            } catch (error) {
                alert("Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.");
                console.error('Submission error:', error);
            } finally {
                // Restore button state
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});