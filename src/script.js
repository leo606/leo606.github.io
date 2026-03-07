import "./styles.css";
import translations from "./translations.json";

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

  async function fetchDevToPosts() {
    const blogContainer = document.getElementById("blog-container");
    if (!blogContainer) return;

    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=leo606",
      );
      const posts = await response.json();

      if (posts.length === 0) {
        const blogSection = document.getElementById("blog");
        blogSection && blogSection.remove();
      }

      blogContainer.innerHTML = "";

      posts.forEach((post) => {
        const postDate = new Date(post.published_at).toLocaleDateString(
          undefined,
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          },
        );

        const postElement = document.createElement("div");
        postElement.className =
          "bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-sky-500 transition-colors duration-300";

        postElement.innerHTML = `
            <h3 class="font-bold text-xl text-white mb-1">${post.title}</h3>
            <p class="text-gray-500 text-sm mb-3">Published on ${postDate}</p>
            <p class="text-gray-400 mb-4">${post.description}</p>
            <a href="${post.url}" target="_blank" class="text-sky-400 font-medium hover:underline">Read More →</a>
        `;
        blogContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error("Error fetching Dev.to posts:", error);
      blogContainer.innerHTML =
        '<p class="text-gray-400">Failed to load articles.</p>';
    }
  }

  fetchDevToPosts();

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
