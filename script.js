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
            heroSubtitle1: '<strong>Consultor Full-Stack & Experto en Automatizaciones (Python + n8n)</strong>',
            heroSubtitle2: 'Transformo tareas manuales y cuellos de botella operativos en ecosistemas automatizados y rentables.',
            heroBtnProjects: 'Ver Soluciones B2B',
            heroBtnContact: 'Agendar Contacto',
            
            aboutTitle: 'Estrategia & Ejecución',
            aboutP1: 'Mi perfil se centra en la intersección exacta entre la <strong>estrategia de negocio y la ejecución técnica</strong>. Entiendo el "qué" necesita una empresa para optimizar sus procesos y sé exactamente "cómo" se construye a nivel de arquitectura y código.',
            aboutP2: 'Como estudiante de la Lic. en Sistemas (UBA) y Consultor Independiente, diseño ecosistemas digitales para automatizar flujos de trabajo, ahorrar cientos de horas-hombre y evitar que los requerimientos se pierdan en la traducción entre el cliente y el servidor.',
            aboutP3: '<strong>Mis Especialidades:</strong> Arquitectura Backend (Python), Orquestación con n8n, Dashboards a Medida (JS/Tailwind), Agentes IA y Web Scraping B2B.',
            
            skillsTitle: 'Stack Tecnológico & Habilidades',
            skillsLangTitle: 'Backend & Arquitectura',
            skillsFrontTitle: 'Automatización & IA',
            skillsUiTitle: 'Frontend & Dashboards',
            skillsDbToolsTitle: 'Infraestructura & Datos',
            
            projectsTitle: 'Casos de Éxito & Soluciones',
            
            project1Title: 'Agente de Ventas IA (WhatsApp)',
            project1Desc: 'Arquitectura y desarrollo de un Asistente Virtual Inteligente integrado a la API oficial de WhatsApp. El sistema pre-califica leads, procesa audios de voz de clientes, calcula costos dinámicamente y registra ventas en bases de datos en tiempo real, operando 24/7 sin intervención humana.',
            project1Highlight: '<strong>El Impacto:</strong> Eliminación de tiempos de espera en atención al cliente y automatización total del registro de pedidos.',
            
            project2Title: 'Motor de Web Scraping B2B (ETL)',
            project2Desc: 'Desarrollo de un pipeline de extracción de datos autónomo para generar leads altamente segmentados. El script navega directorios web complejos, maneja rotación de sesiones para evitar bloqueos y aplica ingeniería inversa para limpiar HTML desestructurado, exportando bases de datos listas para CRM.',
            project2Highlight: '<strong>El Impacto:</strong> Generación de miles de contactos comerciales verificados en horas, superando la calidad de los barridos tradicionales.',
            
            project3Title: 'Bot RPA Híbrido: Automatización Masiva',
            project3Desc: 'Diseño de un ecosistema de automatización robusto capaz de operar jornadas de 18 horas sin supervisión. El bot sincroniza acciones entre un navegador web y un emulador móvil simultáneamente, aplicando visión artificial para el reconocimiento de patrones y toma de decisiones en pantalla. Todo gestionado desde un panel de control web a medida para el cliente.',
            project3Highlight: '<strong>El Impacto:</strong> Reducción del 100% de la carga operativa manual en tareas críticas de validación de identidad.',
            
            contactTitle: '¿Optimizamos tu negocio?',
            contactP1: 'Estoy abierto a <strong>roles estratégicos (Analista Funcional, Arquitecto de Soluciones)</strong> y a colaboraciones B2B con empresas que necesiten automatizar sus operaciones.',
            contactP2: 'Dejame tu mensaje y evaluamos la viabilidad técnica de tu proyecto o vacante.',
            contactFormName: 'Nombre / Empresa',
            contactFormEmail: 'Email corporativo o personal',
            contactFormMessage: '¿En qué puedo ayudarte?',
            contactFormSubmit: 'Enviar Mensaje',
            footerRights: 'Todos los derechos reservados.'
        },
        en: {
            heroTitle: 'Hi! I\'m <span>Fabrizio</span>',
            heroSubtitle1: '<strong>Full-Stack Consultant & Automation Expert (Python + n8n)</strong>',
            heroSubtitle2: 'I transform manual tasks and operational bottlenecks into automated, profitable ecosystems.',
            heroBtnProjects: 'View B2B Solutions',
            heroBtnContact: 'Schedule Contact',
            
            aboutTitle: 'Strategy & Execution',
            aboutP1: 'My profile is centered at the exact intersection of <strong>business strategy and technical execution</strong>. I understand "what" a company needs to optimize its processes, and I know exactly "how" to build it at the architecture and code level.',
            aboutP2: 'As an Information Systems student (UBA) and Independent Consultant, I design digital ecosystems to automate workflows, save hundreds of man-hours, and prevent requirements from getting lost in translation between the client and the server.',
            aboutP3: '<strong>My Specialties:</strong> Backend Architecture (Python), n8n Orchestration, Custom Dashboards (JS/Tailwind), AI Agents, and B2B Web Scraping.',
            
            skillsTitle: 'Tech Stack & Skills',
            skillsLangTitle: 'Backend & Architecture',
            skillsFrontTitle: 'Automation & AI',
            skillsUiTitle: 'Frontend & Dashboards',
            skillsDbToolsTitle: 'Infrastructure & Data',
            
            projectsTitle: 'Success Cases & Solutions',
            
            project1Title: 'AI Sales Agent (WhatsApp)',
            project1Desc: 'Architecture and development of an Intelligent Virtual Assistant integrated with the official WhatsApp API. The system pre-qualifies leads, processes customer voice audios, dynamically calculates costs, and logs sales into databases in real-time, operating 24/7 without human intervention.',
            project1Highlight: '<strong>The Impact:</strong> Elimination of customer service wait times and full automation of order logging.',
            
            project2Title: 'B2B Web Scraping Engine (ETL)',
            project2Desc: 'Development of an autonomous data extraction pipeline to generate highly segmented leads. The script navigates complex web directories, handles session rotation to prevent bans, and applies reverse engineering to clean unstructured HTML, exporting CRM-ready databases.',
            project2Highlight: '<strong>The Impact:</strong> Generation of thousands of verified commercial contacts in hours, vastly outperforming traditional web sweeps.',
            
            project3Title: 'Hybrid RPA Bot: Massive Automation',
            project3Desc: 'Design of a robust automation ecosystem capable of operating for 18-hour shifts without supervision. The bot synchronizes actions between a web browser and a mobile emulator simultaneously, applying computer vision for pattern recognition and on-screen decision making. Everything is managed from a custom-built web control panel.',
            project3Highlight: '<strong>The Impact:</strong> 100% reduction of manual operational load in critical identity validation tasks.',
            
            contactTitle: 'Let\'s optimize your business?',
            contactP1: 'I am open to <strong>strategic roles (Functional Analyst, Solutions Architect)</strong> and B2B collaborations with companies needing to automate their operations.',
            contactP2: 'Leave me a message and let\'s evaluate the technical feasibility of your project or job opening.',
            contactFormName: 'Name / Company',
            contactFormEmail: 'Corporate or personal email',
            contactFormMessage: 'How can I help you?',
            contactFormSubmit: 'Send Message',
            footerRights: 'All rights reserved.'
        }
    };

    // =========================================
    // THEME LOGIC
    // =========================================
    function setTheme(themeName) {
        DOM.body.classList.remove('light-mode', 'dark-mode');
        DOM.body.classList.add(themeName);
        
        const isDark = themeName === 'dark-mode';
        DOM.themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        DOM.themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        localStorage.setItem('theme', themeName);
    }

    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(savedTheme);

    DOM.themeToggle.addEventListener('click', () => {
        const newTheme = DOM.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        setTheme(newTheme);
    });

    // =========================================
    // LANGUAGE LOGIC
    // =========================================
    function setLanguage(lang) {
        DOM.langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        DOM.translatableElements.forEach(element => {
            const key = element.dataset.key;
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                element.innerHTML = TRANSLATIONS[lang][key];
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

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
            
            submitBtn.innerText = 'Enviando... / Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(event.target);

            try {
                const response = await fetch(event.target.action, {
                    method: DOM.contactForm.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert("¡Mensaje enviado con éxito! / Message sent successfully!");
                    DOM.contactForm.reset();
                } else {
                    throw new Error('Formspree error');
                }
            } catch (error) {
                alert("Hubo un problema al enviar el mensaje. / There was a problem sending your message.");
                console.error('Submission error:', error);
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});