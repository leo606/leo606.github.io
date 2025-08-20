const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_contact: "Contact",
    hero_title:
      "Back-End Engineer specializing in scalable <span class='text-sky-400'>Node.js</span> applications.",
    hero_subtitle:
      "I design and build robust, efficient, and scalable back-end systems, APIs, and database architectures. Let's build something amazing together.",
    hero_button_work: "View My Work",
    hero_button_contact: "Get In Touch",
    about_title: "About Me",
    about_me_p1:
      "Hello! I'm a software engineer with a passion for back-end development. My journey into code started with a fascination for how complex systems work behind the scenes. I thrive on solving complex problems, optimizing performance, and building the digital infrastructure that powers modern web applications.",
    about_me_p2:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.",
    competencies_title: "Core Competencies",
    projects_title: "Featured Projects",
    blog_title: "Recent Articles",
    contact_title: "Get In Touch",
    contact_subtitle:
      "I'm currently available for freelance work and open to new opportunities. Feel free to reach out!",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_button: "Send Message",
  },
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_blog: "Blog",
    nav_contact: "Contato",
    hero_title:
      "Engenheiro Back-End especializado em aplicações <span class='text-sky-400'>Node.js</span> escaláveis.",
    hero_subtitle:
      "Eu projeto e construo sistemas de back-end, APIs e arquiteturas de banco de dados robustas, eficientes e escaláveis. Vamos construir algo incrível juntos.",
    hero_button_work: "Veja Meu Trabalho",
    hero_button_contact: "Entre em Contato",
    about_title: "Sobre Mim",
    about_me_p1:
      "Olá! Sou um engenheiro de software apaixonado por desenvolvimento back-end. Minha jornada na programação começou com um fascínio por como sistemas complexos funcionam nos bastidores. Eu prospero na resolução de problemas complexos, otimização de desempenho e na construção da infraestrutura digital que alimenta as aplicações web modernas.",
    about_me_p2:
      "Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos de código aberto ou desfrutando de uma boa xícara de café.",
    competencies_title: "Principais Competências",
    projects_title: "Projetos em Destaque",
    blog_title: "Artigos Recentes",
    contact_title: "Entre em Contato",
    contact_subtitle:
      "Estou atualmente disponível para trabalhos freelance e aberto a novas oportunidades. Sinta-se à vontade para entrar em contato!",
    form_name: "Nome",
    form_email: "E-mail",
    form_message: "Mensagem",
    form_button: "Enviar Mensagem",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }

      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.remove("nav-link-active");
          if (link.getAttribute("href") === `#${targetId}`) {
            link.classList.add("nav-link-active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const projectsData = [
    {
      title: "Music bucket",
      description: "",
      tags: ["Node.js", "React.js"],
      link: "https://github.com/leo606/MusicBucket",
    },
  ];

  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = "";

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className =
      "bg-gray-800 rounded-lg p-6 flex flex-col justify-between border border-gray-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1";

    const tagsHTML = project.tags
      .map(
        (tag) =>
          `<span class="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`,
      )
      .join("");

    projectCard.innerHTML = `
        <div>
            <h3 class="font-bold text-xl text-white mb-2">${project.title}</h3>
            <p class="text-gray-400 mb-4">${project.description}</p>
        </div>
        <div>
            <div class="flex flex-wrap gap-2 mb-4">
                ${tagsHTML}
            </div>
            <a href="${project.link}" target="_blank" class="text-sky-400 font-medium hover:underline">View Case Study →</a>
        </div>
    `;
    projectsContainer.appendChild(projectCard);
  });

  function applyTranslations(lang) {
    const langData = translations[lang];
    if (!langData) return;

    document.querySelectorAll("[data-i18n-key]").forEach((element) => {
      const key = element.getAttribute("data-i18n-key");
      if (langData[key]) {
        element.innerHTML = langData[key];
      }
    });
  }

  async function setLanguage(lang) {
    applyTranslations(lang);
    localStorage.setItem("preferredLanguage", lang);

    document.querySelectorAll(".lang-switcher").forEach((switcher) => {
      if (switcher.getAttribute("data-lang") === lang) {
        switcher.classList.remove("text-gray-400");
        switcher.classList.add("text-white", "font-bold");
      } else {
        switcher.classList.add("text-gray-400");
        switcher.classList.remove("text-white", "font-bold");
      }
    });
  }

  document.querySelectorAll(".lang-switcher").forEach((switcher) => {
    switcher.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = switcher.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const navigatorLanguage = navigator.language.slice(0, 2);
  const preferredLanguage =
    localStorage.getItem("preferredLanguage") || navigatorLanguage || "en";
  setLanguage(preferredLanguage);
});
