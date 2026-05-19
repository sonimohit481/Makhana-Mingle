const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Recipes", href: "#recipes" },
  { label: "Benefits", href: "#benefits" },
  { label: "Story", href: "#story" },
];

const categories = [
  {
    title: "Flavored Makhana",
    description: "Bold seasoning blends for evening cravings and modern pantry shelves.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=750&fit=crop",
  },
  {
    title: "Traditional Recipes",
    description: "Slow, rooted comfort inspired by home kitchens and festive desserts.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=750&fit=crop",
  },
  {
    title: "Diet Snacks",
    description: "Light, crisp combinations designed for mindful daily snacking.",
    image: "https://images.unsplash.com/photo-1608492683726-1280ac73f860?w=600&h=750&fit=crop",
  },
];

const products = [
  {
    title: "Classic Himalayan Salt",
    note: "Roasted to golden perfection with sea salt",
    price: "₹249",
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop",
  },
  {
    title: "Spicy Peri Peri",
    note: "Fiery blend of African birds eye chili",
    price: "₹279",
    image: "https://images.unsplash.com/photo-1603052879368-f2927f4c2e13?w=400&h=400&fit=crop",
  },
  {
    title: "Creamy Cheese",
    note: "Rich white cheddar with herbs",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1606284305952-d5af49a20404?w=400&h=400&fit=crop",
  },
  {
    title: "Mint Pudina",
    note: "Refreshing mint and lemon twist",
    price: "₹259",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop",
  },
];

const benefits = [
  {
    title: "High Protein",
    description: "Essential for muscle repair and sustained energy throughout the day.",
    icon: "💪",
  },
  {
    title: "Heart Friendly",
    description: "Low sodium and cholesterol for a healthy heart.",
    icon: "❤️",
  },
  {
    title: "Antioxidants",
    description: "Rich in minerals to fight oxidative stress naturally.",
    icon: "🌿",
  },
  {
    title: "Low Calories",
    description: "The perfect guilt-free snack for mindful eating.",
    icon: "⚖️",
  },
];

const recipes = [
  {
    title: "Masala Roast Makhana",
    description: "Chilli, curry leaf, and toasted makhana for a quick chai-time crunch.",
    image: "https://images.unsplash.com/photo-1606284305952-d5af49a20404?w=600&h=400&fit=crop",
  },
  {
    title: "Makhana Kheer",
    description: "A creamy dessert with cardamom, saffron, and nutty bite.",
    image: "https://images.unsplash.com/photo-1603052879368-f2927f4c2e13?w=600&h=400&fit=crop",
  },
  {
    title: "Trail Mix Chaat",
    description: "Fox nuts, seeds, herbs, and citrus for an energizing afternoon bite.",
    image: "https://images.unsplash.com/photo-1608492683726-1280ac73f860?w=600&h=400&fit=crop",
  },
];

const testimonials = [
  {
    quote: "The flavor feels premium but still rooted in home. It is the only snack my mom and my gym friends both steal.",
    name: "Ritika Sharma",
    role: "Mumbai, wellness consultant",
  },
  {
    quote: "Their roasted makhana made healthy gifting finally feel elegant. The textures and seasoning feel properly considered.",
    name: "Aman Verma",
    role: "Bengaluru, startup operator",
  },
  {
    quote: "I came for the snack, stayed for the recipes. The kheer recipe turned into a Diwali staple at our place.",
    name: "Neha Sinha",
    role: "Patna, food writer",
  },
];

const youtubeVideos = {
  recipes: [
    { id: "myqJYMPyJRI", title: "Air Fryer Roasted Makhana" },
    { id: "QLZlEHEmPrE", title: "Masala Makhana Recipe" },
  ],
  health: [
    { id: "P6j9Ku6rRgw", title: "Makhana Health Benefits" },
  ],
  story: [
    { id: "0A7eL3pZyHw", title: "Bihar's Makhana & The Wetlands" },
  ],
};

export default function Home() {
  return (
    <div className="site-shell">
      {/* Top Navigation */}
      <nav className="topnav">
        <div className="container nav-container">
          <a href="#top" className="brand">
            Makhana Mingle
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="cart-btn" aria-label="Cart">
              🛒
            </button>
            <a href="#shop" className="login-btn">
              Login
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero Section */}
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
                  src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=600&fit=crop" 
                  alt="Roasted Makhana" 
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

        {/* Categories Section */}
        <section className="section categories">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Categories</span>
              <h2>Crafted for Different Cravings</h2>
              <p>From post-work munching to festive dessert moments.</p>
            </div>
            <div className="card-grid three-col">
              {categories.map((cat) => (
                <article key={cat.title} className="category-card">
                  <div className="category-img">
                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="shop" className="section products">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Our Products</span>
              <h2>A Clean Product Grid</h2>
              <p>Each card ready for ratings, inventory, and gifting.</p>
            </div>
            <div className="card-grid four-col">
              {products.map((product) => (
                <article key={product.title} className="product-card">
                  <div className="product-img">
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <p className="product-note">{product.note}</p>
                    <h3>{product.title}</h3>
                    <div className="product-row">
                      <strong>{product.price}</strong>
                      <button className="add-btn">Add to cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section benefits">
          <div className="container split-section">
            <div className="benefits-text">
              <span className="eyebrow">Health Benefits</span>
              <h2>The Superfood Side of Makhana</h2>
              <p>These blocks keep the wellness messaging light, visual, and easy to trust.</p>
              <div className="card-grid two-col">
                {benefits.map((ben) => (
                  <article key={ben.title} className="benefit-card">
                    <span className="benefit-icon">{ben.icon}</span>
                    <h3>{ben.title}</h3>
                    <p>{ben.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="benefits-img">
              <img 
                src="https://images.unsplash.com/photo-1608492683726-1280ac73f860?w=500&h=600&fit=crop" 
                alt="Healthy bowl with makhana" 
              />
            </div>
          </div>
        </section>

        {/* Recipe Videos Section */}
        <section id="recipes" className="section recipe-videos">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Video Recipes</span>
              <h2>Learn to Make Makhana</h2>
              <p>Step-by-step video recipes for perfect crispy makhana.</p>
            </div>
            <div className="video-grid">
              {youtubeVideos.recipes.map((video) => (
                <div key={video.id} className="video-card">
                  <div className="video-wrapper">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3>{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipes Section */}
        <section className="section recipes">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Featured Recipes</span>
              <h2>Simple Makhana Recipes</h2>
              <p>Transform your snacks into gourmet meals.</p>
            </div>
            <div className="card-grid three-col">
              {recipes.map((recipe) => (
                <article key={recipe.title} className="recipe-card">
                  <div className="recipe-img">
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Health Video Section */}
        <section className="section health-video">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Why Makhana?</span>
              <h2>Discover the Health Benefits</h2>
              <p>Learn why nutritionists call makhana a superfood.</p>
            </div>
            <div className="video-single">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideos.health[0].id}`}
                    title="Makhana Health Benefits"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3>{youtubeVideos.health[0].title}</h3>
                <p>From weight management to heart health - the complete guide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="section story">
          <div className="container">
            <div className="story-content">
              <span className="eyebrow">Brand Story</span>
              <h2>From the Ponds of Bihar</h2>
              <p>
                Makhana Mingle begins where this ingredient has always belonged: in the pond belts of Bihar, 
                where cultivation is patient, seasonal, and deeply local. We wanted to honor that origin while 
                presenting makhana as a modern pantry icon people can feel proud to serve, gift, and snack on every day.
              </p>
              <div className="story-points">
                <div className="story-point">
                  <strong>Sourced from Bihar</strong>
                  <p>From ponds across Bihar, where makhana cultivation has deep generational roots.</p>
                </div>
                <div className="story-point">
                  <strong>Small Batch Roasted</strong>
                  <p>Roasted in smaller batches to keep the bite airy, crisp, and naturally satisfying.</p>
                </div>
                <div className="story-point">
                  <strong>Modern Indian Brand</strong>
                  <p>Built as a modern Indian pantry brand balancing wellness, nostalgia, and design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Video Section */}
        <section className="section story-video">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">The Journey</span>
              <h2>From Bihar Ponds to Your Plate</h2>
              <p>Discover how makhana goes from seed to snack.</p>
            </div>
            <div className="video-single">
              <div className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideos.story[0].id}`}
                    title="Bihar Makhana Production"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3>{youtubeVideos.story[0].title}</h3>
                <p>Over 85% of India&apos;s makhana comes from Bihar, especially from the Darbhanga region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section testimonials">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Testimonials</span>
              <h2>Warm Reviews from Happy Customers</h2>
              <p>People who want healthy snacks to still feel joyful.</p>
            </div>
            <div className="card-grid three-col">
              {testimonials.map((t) => (
                <article key={t.name} className="testimonial-card">
                  <div className="stars">★★★★★</div>
                  <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="section newsletter">
          <div className="container">
            <div className="newsletter-box">
              <h2>Join the Mingle</h2>
              <p>Get new recipes, wellness notes, and first access to small-batch flavors before they disappear.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
              <p className="newsletter-note">No spam, only pantry notes worth opening.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3>Makhana Mingle</h3>
            <p>A modern Indian food brand shaping healthier snacking through makhana, recipes, and slow-crafted pantry experiences.</p>
            <div className="social-links">
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">🔗</a>
            </div>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="#shop">All Snacks</a>
            <a href="#shop">Gift Boxes</a>
            <a href="#shop">Best Sellers</a>
          </div>
          <div>
            <h4>Content</h4>
            <a href="#recipes">Recipes</a>
            <a href="#benefits">Health Benefits</a>
            <a href="#story">Brand Story</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>hello@makhanamingle.com</p>
            <p>Gurgaon</p>
            <p>+91 94682 09127</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Makhana Mingle. Crafted for the Artisanal Pantry.</p>
        </div>
      </footer>
    </div>
  );
}