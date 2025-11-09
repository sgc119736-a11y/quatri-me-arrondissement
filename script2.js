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

  document.getElementById("prevPageBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
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
    mapTitle: "📍 Carte du Site — L'Hôtel de ville",
    caption: "Cliquez sur une miniature pour la mettre en grand",
    next: "← Page Précédente",
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
    mapTitle: "📍 Site Map — 'L'Hôtel de ville' of Paris",
    caption: "Click a thumbnail to enlarge it",
    next: "← Previous Page",
  },
};

let currentLang = "fr";

const langBtn = document.getElementById("lang-toggle");
const nextBtn = document.getElementById("prevPageBtn");

const elements = {
  title: document.querySelector("header h1"),
  subtitle: document.querySelector("main .text-side h2"),
  paragraphContainer: document.querySelector("main .text-side"),
  mapTitle: document.querySelector("#map-frame h3"),
  caption: document.querySelector(".caption"),
};

function updateLanguage() {
  const langData = translations[currentLang];

  // update static text
  elements.title.textContent = langData.title;
  elements.subtitle.textContent = langData.subtitle;
  elements.mapTitle.textContent = langData.mapTitle;
  elements.caption.textContent = langData.caption;
  nextBtn.textContent = langData.next;

  const existingParagraphs = elements.paragraphContainer.querySelectorAll("p");
  existingParagraphs.forEach((p) => p.remove());

  langData.paragraph.forEach((pText) => {
    const p = document.createElement("p");
    p.textContent = pText;
    elements.paragraphContainer.appendChild(p);
  });
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  langBtn.textContent = currentLang === "fr" ? "EN" : "FR";
  updateLanguage();
});

updateLanguage();
