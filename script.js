document.addEventListener("DOMContentLoaded", () => {
  startHeroSlideshow();
  loadArticles();
  loadGames();
});

/* ---------------- HERO SLIDESHOW ---------------- */

const heroImages = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];

let heroIndex = 0;

function startHeroSlideshow() {
  const heroImg = document.getElementById("hero-image");

  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImg.src = heroImages[heroIndex];
  }, 8000); // 8 seconds
}

/* ---------------- LOAD ARTICLES ---------------- */

async function loadArticles() {
  const res = await fetch("articles.json");
  const articles = await res.json();

  // newest first
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  const carousel = document.getElementById("article-carousel");
  const list = document.getElementById("articles-list");

  articles.slice(0, 5).forEach(article => {
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.innerHTML = `
      <img src="${article.thumbnail}">
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
    `;
    item.onclick = () => openArticlePage(article);
    carousel.appendChild(item);
  });

  articles.forEach(article => {
    const item = document.createElement("div");
    item.className = "article-item";
    item.innerHTML = `
      <h3>${article.title}</h3>
      <div class="meta">${article.date} · ${article.category}</div>
      <p>${article.excerpt}</p>
    `;
    item.onclick = () => openArticlePage(article);
    list.appendChild(item);
  });
}

/* ---------------- LOAD GAMES ---------------- */

async function loadGames() {
  const res = await fetch("games.json");
  const games = await res.json();

  // newest first
  games.sort((a, b) => b.id - a.id);

  const grid = document.getElementById("games-grid");

  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.thumbnail}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
    `;
    card.onclick = () => openGamePage(game);
    grid.appendChild(card);
  });
}

/* ---------------- DETAIL PAGES ---------------- */

function openArticlePage(article) {
  document.body.innerHTML = `
    <div class="detail-page">
      <a class="back-btn" onclick="location.reload()">Back</a>
      <h1>${article.title}</h1>
      <p><strong>${article.date}</strong> · ${article.category}</p>
      <img src="${article.thumbnail}" style="width:100%;border-radius:1rem;margin:1rem 0;">
      <p>${article.content}</p>
    </div>
  `;
}

function openGamePage(game) {
  document.body.innerHTML = `
    <div class="detail-page">
      <a class="back-btn" onclick="location.reload()">Back</a>
      <h1>${game.title}</h1>
      <img src="${game.thumbnail}" style="width:100%;border-radius:1rem;margin:1rem 0;">
      <p>${game.description}</p>
      <h3>Features</h3>
      <p>${game.features}</p>
    </div>
  `;
}
