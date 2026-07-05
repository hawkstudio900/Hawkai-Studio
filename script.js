* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #0b0f14;
  color: #f5f5f5;
}

a { color: inherit; text-decoration: none; }

/* HEADER */
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
}

/* HERO */
.hero {
  position: relative;
  height: 70vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  animation: fade 1s ease-in-out;
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hero-overlay {
  position: absolute;
  bottom: 20%;
  left: 10%;
  max-width: 500px;
}

/* SECTIONS */
section { padding: 3rem 2.5rem; }
section h2 { margin-bottom: 1.5rem; }

/* CAROUSEL */
.carousel {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
}

.carousel-item {
  min-width: 280px;
  background: #0f1820;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
}

.carousel-item img {
  width: 100%;
  border-radius: 0.8rem;
}

/* GAMES GRID */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
} 

.game-card {
  background: #071821;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
}

.game-card img {
  width: 100%;
  border-radius: 0.8rem;
}

/* ARTICLES LIST */
.article-item {
  background: #0f1820;
  border-radius: 0.8rem;
  padding: 1rem;
  cursor: pointer;
}

/* DETAIL PAGE */
.detail-page {
  padding: 3rem;
  max-width: 800px;
  margin: auto;
}

.back-btn {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: #f4a259;
  color: #020b10;
  border-radius: 8px;
}
