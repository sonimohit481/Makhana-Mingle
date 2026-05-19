export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="pill-label">Premium Indian Snacking</span>
          <h1>
            Snack Smart <br />
            with <span className="highlight">Makhana</span>
          </h1>
          <p className="hero-text">
            Healthy. Crunchy. Delicious. Thoughtfully roasted fox nuts with a warm pantry story, playful recipes, and everyday wellness built in.
          </p>
          <div className="hero-buttons">
            <a href="#shop" className="btn btn-primary">
              Shop Now
            </a>
            <a href="#recipes" className="btn btn-secondary">
              Explore Recipes
            </a>
          </div>
          <p className="hero-sub">Patna-born inspiration, crafted for modern Indian shelves.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-box">
            <img 
              src="/hero-bowl.svg" 
              alt="Roasted Makhana bowl" 
            />
          </div>
          <div className="hero-badge">
            <span className="badge-icon">🌿</span>
            <div>
              <strong>100% Organic</strong>
              <span>Naturally Sourced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}