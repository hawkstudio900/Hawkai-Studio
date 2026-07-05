// Load JSON data and populate the site
document.addEventListener("DOMContentLoaded", () => {
  loadArticles();
  loadGames();
});

async function loadArticles() {
  try {
    const res = await fetch("articles.json");
    const articles = await res.json();

    // LATEST ARTICLES CAROUSEL (e.g. first 5)
    const carousel = document.getElementById("article-carousel");
    const latest = articles.slice(0, 5); // adjust how many you want

    latest.forEach(article => {
      const item = document.createElement("div");
      item.className = "carousel-item";

      item.innerHTML = `
        <img src="${article.thumbnail}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="meta">${article.date} · ${article.category}</div>
      `;

      carousel.appendChild(item);
    });

    // FULL ARTICLES LIST
    const list = document.getElementById("articles-list");

    articles.forEach(article => {
      const item = document.createElement("div");
      item.className = "article-item";

      item.innerHTML = `
        <h3>${article.title}</h3>
        <div class="meta">${article.date} · ${article.category}</div>
        <p>${article.excerpt}</p>
      `;

      list.appendChild(item);
    });

    // HERE YOU CAN ADD MORE BEHAVIOR, LIKE CLICK TO OPEN FULL ARTICLE PAGE
    // e.g. item.addEventListener("click", () => { window.location.href = article.url; });
  } catch (err) {
    console.error("Error loading articles.json", err);
  }
}

async function loadGames() {
  try {
    const res = await fetch("games.json");
    const games = await res.json();

    const grid = document.getElementById("games-grid");

    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";

      card.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <div class="tags">${game.genre} · ${game.status}</div>
      `;

      grid.appendChild(card);

      // HERE YOU CAN ADD CLICK HANDLERS TO GO TO GAME PAGE
      // card.addEventListener("click", () => { window.location.href = game.url; });
    });
  } catch (err) {
    console.error("Error loading games.json", err);
  }
}
