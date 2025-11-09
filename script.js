document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.style.opacity = 0;

      setTimeout(() => {
        const temp = mainImage.getAttribute("src");
        mainImage.setAttribute("src", thumb.getAttribute("src"));
        thumb.setAttribute("src", temp);

        mainImage.style.opacity = 1;
      }, 300);
    });
  });

  const nextBtn = document.getElementById("nextPageBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.location.href = "index2.html";
    });
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      applyTranslations(currentLang);

      langBtn.textContent = currentLang === "fr" ? "EN" : "FR";
    });
  }
});

const translations = {
  fr: {
    title: "Bienvenue au Musée du Français",
    subtitle: "Une cathédrale faite d'histoire",
    paragraph: [
      "f paragraph 1",
      "f paragraph 2",
      "f paragraph 3",
      "f paragraph 4",
    ],
    mapTitle: "📍 Carte du Site — Cathédrale Notre-Dame de Paris",
    caption: "Cliquez sur une miniature pour la mettre en grand",
    next: "Page Suivante →",
  },
  en: {
    title: "Welcome to the French Museum",
    subtitle: "A cathedral built from history",
    paragraph: [
      "e paragraph 1",
      "e paragraph 2",
      "e paragraph 3",
      "e paragraph 4",
    ],
    mapTitle: "📍 Site Map — Notre-Dame Cathedral of Paris",
    caption: "Click a thumbnail to enlarge it",
    next: "Next Page →",
  },
};

const elements = {
  title: document.querySelector("header h1"),
  mapTitle: document.querySelector("#map-frame h3"),
  caption: document.querySelector(".caption"),
};

// default language
let currentLang = "fr";

function applyTranslations(lang) {
  const t = translations[lang];

  if (elements.title) elements.title.textContent = t.title;

  // Clear and rebuild text-side content (subtitle + multiple <p>)
  const textSide = document.querySelector("main .text-side");
  if (textSide) {
    textSide.innerHTML = "";

    const subtitle = document.createElement("h2");
    subtitle.textContent = t.subtitle;
    textSide.appendChild(subtitle);

    t.paragraph.forEach((p) => {
      const para = document.createElement("p");
      para.textContent = p;
      textSide.appendChild(para);
    });
  }

  if (elements.mapTitle) elements.mapTitle.textContent = t.mapTitle;
  if (elements.caption) elements.caption.textContent = t.caption;

  const nextBtn = document.getElementById("nextPageBtn");
  if (nextBtn) nextBtn.textContent = t.next;
}

applyTranslations(currentLang);

const initialLangBtn = document.getElementById("lang-toggle");
if (initialLangBtn)
  initialLangBtn.textContent = currentLang === "fr" ? "EN" : "FR";
