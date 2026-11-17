// Todo el texto del sitio vive acá. Fuente de verdad: la HV actualizada.
export const translations = {
  es: {
    header: {
      welcome: "Bienvenido",
      subtitle: "al Portafolio de Camilo Marín",
      role: "Desarrollador Full Stack | Java Spring Boot · React · Desarrollo asistido por IA",
      cv: "Descargar CV",
      contact: "Contáctame",
    },
    intro: {
      lang: "ES",
      html: [
        "¡Hola! Soy desarrollador ",
        { b: "Full Stack" },
        " con experiencia sólida en backend con ",
        { b: "Java y Spring Boot" },
        ", y experiencia adicional con React, Django REST Framework y ASP.NET Core MVC. Diseño APIs REST e integro bases de datos relacionales y no relacionales (Oracle, MySQL, MongoDB) desplegadas en ",
        { b: "AWS" },
        ". Incorporo herramientas de IA en mi flujo de desarrollo diario para acelerar la escritura, depuración y refactorización de código, y he liderado técnicamente un equipo de desarrollo.",
      ],
    },
    about: {
      title: "Sobre mí",
      items: [
        "Más de 3 años de experiencia en desarrollo de software, desde marzo de 2023.",
        "Backend con Java, Spring Boot y MyBatis; también Django REST Framework y ASP.NET Core MVC (C#).",
        "Bases de datos relacionales y no relacionales: Oracle, MySQL y MongoDB.",
        "Cloud y DevOps: AWS (S3, RDS, Lambda, SQS, CloudWatch), Docker y Kubernetes.",
        "Liderazgo técnico: code reviews, definición de sprints y decisiones de arquitectura, incluida la selección de tecnologías.",
        "Uso diario de Claude Code, GitHub Copilot, ChatGPT y DeepSeek para acelerar escritura, depuración y refactorización.",
        "Enfoque en buenas prácticas, documentación técnica clara y entrega de soluciones escalables.",
        "Git, GitHub, Bitbucket, Jira y Swagger en equipos con metodologías ágiles.",
      ],
      frontendIntro: "En frontend trabajo con:",
      frontendMore: "¡y más en camino!",
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          role: "Desarrollador Full Stack Freelance",
          company: "Independiente",
          period: "Enero 2025 – Actualidad",
          place: "Medellín",
          bullets: [
            {
              lead: "ReservasApp",
              text: "Diseñé y desarrollé un sistema de gestión de reservas en ASP.NET Core MVC (C#). Redacté documentación técnica completa (README profesional y wiki de GitHub de 18 páginas) y remedié un incidente de seguridad crítico rotando credenciales expuestas y limpiando el historial de Git.",
            },
            {
              lead: "Hungaro's Debts Management",
              text: "Construí un sistema full-stack (React + Vite + Tailwind CSS / Django REST Framework sobre Oracle) para digitalizar el proceso de fiados de un restaurante, con 4 módulos CRUD (Deudas, Roles, Productos, Usuarios), filtros dinámicos con django-filter y un módulo de consulta de clientes.",
            },
            {
              lead: "IA",
              text: "Incorporé Claude Code, GitHub Copilot, ChatGPT y DeepSeek al flujo de trabajo diario, y realicé pruebas y talleres de exploración de integraciones de IA en proyectos académicos y freelance.",
            },
          ],
        },
        {
          role: "Analista Desarrollador / Líder Técnico",
          company: "Solutions For Direct Selling (S4DS)",
          period: "Marzo 2023 – Diciembre 2024",
          place: "Medellín",
          bullets: [
            {
              text: "Desarrollé y mantuve aplicaciones web y microservicios con Java y Spring Boot, implementando y consumiendo APIs REST desplegadas en AWS.",
            },
            {
              text: "Integré bases de datos Oracle y MySQL mediante MyBatis y participé en integraciones con plataformas CRM y CMS para clientes internacionales.",
            },
            {
              text: "Lideré técnicamente al equipo: validaciones de pares (code reviews), definición de sprints y decisiones de arquitectura técnica, incluida la selección de tecnologías.",
            },
          ],
        },
      ],
      educationTitle: "Educación",
      education: {
        school: "Politécnico Colombiano Jaime Isaza Cadavid",
        programs: [
          { name: "Técnico Profesional en Programación de Sistemas de Información", period: "2021 – 2023" },
          { name: "Tecnología en Sistematización de Datos", period: "2024 – Actualidad" },
        ],
      },
      languagesTitle: "Idiomas",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B1 · en formación hacia B2" },
      ],
      skillsTitle: "Competencias",
      skills: ["Resolución de problemas", "Trabajo en equipo", "Proactividad", "Comunicación asertiva"],
    },
    projects: {
      title: "Proyectos",
      repo: "Ver repositorio",
      items: {
        hungaro: {
          name: "Hungaro's Debts Management",
          desc: "Sistema full-stack para digitalizar el proceso de fiados de un restaurante: 4 módulos CRUD (Deudas, Roles, Productos, Usuarios), filtros dinámicos con django-filter y un módulo de consulta de clientes.",
        },
        reservas: {
          name: "ReservasApp",
          desc: "Sistema de gestión de reservas para zonas comunes y hotelería. Incluye documentación técnica completa (README profesional y wiki de 18 páginas) y la remediación de un incidente de seguridad crítico.",
        },
        portfolio: {
          name: "Portafolio personal",
          desc: "Sitio web bilingüe (español/inglés) con un carrusel interactivo para mostrar mi stack técnico, el mismo que estás viendo.",
        },
      },
    },
    tech: {
      title: "Mis tecnologías",
      hint: "Pasa el mouse sobre la tecnología central",
      hintTouch: "Toca la tecnología central",
      prev: "Anterior",
      next: "Siguiente",
      levels: { advanced: "Avanzado", intermediate: "Intermedio", basic: "Básico", daily: "Uso diario" },
    },
    footer: {
      cta: "¿Trabajamos juntos?",
      rights: "Todos los derechos reservados.",
    },
    toggleLabel: "Cambiar idioma",
  },
  en: {
    header: {
      welcome: "Welcome",
      subtitle: "to Camilo Marín's Portfolio",
      role: "Full Stack Developer | Java Spring Boot · React · AI-Assisted Development",
      cv: "Download CV",
      contact: "Contact me",
    },
    intro: {
      lang: "EN",
      html: [
        "Hi! I'm a ",
        { b: "Full Stack Developer" },
        " with solid backend experience in ",
        { b: "Java and Spring Boot" },
        ", plus additional experience with React, Django REST Framework and ASP.NET Core MVC. I design REST APIs and integrate relational and non-relational databases (Oracle, MySQL, MongoDB) deployed on ",
        { b: "AWS" },
        ". I use AI tools in my daily workflow to speed up writing, debugging and refactoring code, and I have technically led a development team.",
      ],
    },
    about: {
      title: "About me",
      items: [
        "+3 years of software development experience, since March 2023.",
        "Backend with Java, Spring Boot and MyBatis; also Django REST Framework and ASP.NET Core MVC (C#).",
        "Relational and non-relational databases: Oracle, MySQL and MongoDB.",
        "Cloud and DevOps: AWS (S3, RDS, Lambda, SQS, CloudWatch), Docker and Kubernetes.",
        "Technical leadership: code reviews, sprint planning and architecture decisions, including technology selection.",
        "Daily use of Claude Code, GitHub Copilot, ChatGPT and DeepSeek to speed up writing, debugging and refactoring.",
        "Focus on good practices, clear technical documentation and scalable solutions.",
        "Git, GitHub, Bitbucket, Jira and Swagger within agile teams.",
      ],
      frontendIntro: "On the frontend I work with:",
      frontendMore: "and more on the way!",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Freelance Full Stack Developer",
          company: "Self-employed",
          period: "January 2025 – Present",
          place: "Medellín",
          bullets: [
            {
              lead: "ReservasApp",
              text: "Designed and built a reservation management system in ASP.NET Core MVC (C#). Wrote complete technical documentation (a professional README and an 18-page GitHub wiki) and resolved a critical security incident by rotating exposed credentials and cleaning the Git history.",
            },
            {
              lead: "Hungaro's Debts Management",
              text: "Built a full-stack system (React + Vite + Tailwind CSS / Django REST Framework on Oracle) to digitize a restaurant's customer credit (tab) process, with 4 CRUD modules (Debts, Roles, Products, Users), dynamic filters with django-filter and a customer lookup module.",
            },
            {
              lead: "AI",
              text: "Adopted Claude Code, GitHub Copilot, ChatGPT and DeepSeek in my daily workflow, and ran tests and workshops exploring AI integrations in academic and freelance projects.",
            },
          ],
        },
        {
          role: "Developer Analyst / Technical Lead",
          company: "Solutions For Direct Selling (S4DS)",
          period: "March 2023 – December 2024",
          place: "Medellín",
          bullets: [
            {
              text: "Developed and maintained web applications and microservices with Java and Spring Boot, implementing and consuming REST APIs deployed on AWS.",
            },
            {
              text: "Integrated Oracle and MySQL databases through MyBatis and took part in CRM and CMS integrations for international clients.",
            },
            {
              text: "Technically led the team: peer code reviews, sprint planning and technical architecture decisions, including technology selection.",
            },
          ],
        },
      ],
      educationTitle: "Education",
      education: {
        school: "Politécnico Colombiano Jaime Isaza Cadavid",
        programs: [
          { name: "Professional Technician in Information Systems Programming", period: "2021 – 2023" },
          { name: "Technology in Data Systematization", period: "2024 – Present" },
        ],
      },
      languagesTitle: "Languages",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "B1 · working towards B2" },
      ],
      skillsTitle: "Soft skills",
      skills: ["Problem solving", "Teamwork", "Proactivity", "Assertive communication"],
    },
    projects: {
      title: "Projects",
      repo: "View repository",
      items: {
        hungaro: {
          name: "Hungaro's Debts Management",
          desc: "Full-stack system to digitize a restaurant's customer credit (tab) process: 4 CRUD modules (Debts, Roles, Products, Users), dynamic filters with django-filter and a customer lookup module.",
        },
        reservas: {
          name: "ReservasApp",
          desc: "Reservation management system for common areas and hospitality. Includes complete technical documentation (a professional README and an 18-page wiki) and the resolution of a critical security incident.",
        },
        portfolio: {
          name: "Personal portfolio",
          desc: "Bilingual (Spanish/English) website with an interactive carousel to showcase my tech stack, the one you're looking at right now.",
        },
      },
    },
    tech: {
      title: "My technologies",
      hint: "Hover the center technology",
      hintTouch: "Tap the center technology",
      prev: "Previous",
      next: "Next",
      levels: { advanced: "Advanced", intermediate: "Intermediate", basic: "Basic", daily: "Daily use" },
    },
    footer: {
      cta: "Let's work together?",
      rights: "All rights reserved.",
    },
    toggleLabel: "Change language",
  },
};

// Chips de frontend (según la HV)
export const frontendItems = ["React", "Vite", "JavaScript", "Tailwind CSS", "Bootstrap"];
