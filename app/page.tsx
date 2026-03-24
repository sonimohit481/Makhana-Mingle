const navLinks = [
  { label: "Recipes", href: "#recipes" },
  { label: "Benefits", href: "#benefits" },
  { label: "Shop", href: "#shop" },
  { label: "Story", href: "#story" },
];

const categories = [
  {
    title: "Flavored Makhana",
    description: "Bold seasoning blends for evening cravings, gifting trays, and modern pantry shelves.",
    artClass: "art-roast",
  },
  {
    title: "Traditional Recipes",
    description: "Slow, rooted comfort inspired by home kitchens, festive desserts, and Bihar memory.",
    artClass: "art-kheer",
  },
  {
    title: "Diet Snacks",
    description: "Light, crisp combinations designed for mindful daily snacking and easy pairings.",
    artClass: "art-mix",
  },
];

const recipes = [
  {
    title: "Masala Roast Bowl",
    accent: "10 min recipe",
    description: "Chilli, curry leaf, and toasted makhana for a quick chai-time crunch with proper depth.",
    artClass: "art-roast",
  },
  {
    title: "Makhana Kheer",
    accent: "Festive favorite",
    description: "A creamy dessert with cardamom, saffron, and a delicate nutty bite that still feels familiar.",
    artClass: "art-kheer",
  },
  {
    title: "Trail Mix Chaat",
    accent: "Protein rich",
    description: "Fox nuts, seeds, herbs, and citrus for an energizing afternoon bite with sharper texture.",
    artClass: "art-mix",
  },
];

const benefits = [
  {
    title: "Low Calories",
    description: "Light enough for everyday snacking without the greasy after-feel.",
    icon: "○",
  },
  {
    title: "High Protein",
    description: "A pantry staple that supports balanced energy throughout the day.",
    icon: "▥",
  },
  {
    title: "Antioxidants",
    description: "Naturally nourishing, with ancient wellness appeal in every roasted bite.",
    icon: "✦",
  },
  {
    title: "Heart Friendly",
    description: "A cleaner, crunchy alternative to fried snacks for easy indulgence.",
    icon: "♥",
  },
];

const products = [
  {
    title: "Roasted Salt & Pepper",
    note: "Classic everyday crunch",
    price: "Rs. 249",
    packClass: "pack-gold",
  },
  {
    title: "Saffron Spice Mix",
    note: "Warm festive seasoning",
    price: "Rs. 299",
    packClass: "pack-saffron",
  },
  {
    title: "Mint Pudina Crisp",
    note: "Fresh herb-forward roast",
    price: "Rs. 279",
    packClass: "pack-green",
  },
  {
    title: "Jaggery Caramel Pop",
    note: "Sweet meets toasty",
    price: "Rs. 329",
    packClass: "pack-caramel",
  },
];

const testimonials = [
  {
    quote:
      "The flavor feels premium but still rooted in home. It is the only snack my mom and my gym friends both steal.",
    name: "Ritika Sharma",
    detail: "Mumbai, wellness consultant",
  },
  {
    quote:
      "Their roasted makhana made healthy gifting finally feel elegant. The textures and seasoning feel properly considered.",
    name: "Aman Verma",
    detail: "Bengaluru, startup operator",
  },
  {
    quote:
      "I came for the snack, stayed for the recipes. The kheer recipe turned into a Diwali staple at our place.",
    name: "Neha Sinha",
    detail: "Patna, food writer",
  },
];

const storyPoints = [
  "Sourced from ponds across Bihar, where makhana cultivation has deep generational roots.",
  "Roasted in smaller batches to keep the bite airy, crisp, and naturally satisfying.",
  "Built as a modern Indian pantry brand balancing wellness, nostalgia, and design.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell grain-overlay">
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand-lockup">
            <Image src="/logo-mark.svg" alt="Makhana Mingle logo" width={44} height={44} />
            <span className="brand-wordmark">Makhana Mingle</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#shop" className="nav-cta">
            Shop Now
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-glow glow-left" />
          <div className="hero-glow glow-right" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="pill-label">Premium Indian Snacking</p>
              <h1>Snack Smart with Makhana</h1>
              <p className="hero-text">
                Healthy. Crunchy. Delicious. Thoughtfully roasted fox nuts with a warm pantry
                story, playful recipes, and everyday wellness built in.
              </p>
              <div className="hero-actions">
                <a href="#recipes" className="button button-dark">
                  Explore Recipes
                </a>
                <a href="#shop" className="button button-gold">
                  Shop Now
                </a>
              </div>
              <p className="hero-subline">
                Patna-born inspiration, crafted for modern Indian shelves.
              </p>
              <div className="hero-stats">
                <article className="glass-card stat-card">
                  <strong>100%</strong>
                  <span>wholegrain roasted</span>
                </article>
                <article className="glass-card stat-card">
                  <strong>12g</strong>
                  <span>protein-led pairings</span>
                </article>
                <article className="glass-card stat-card">
                  <strong>Bihar</strong>
                  <span>heritage sourcing</span>
                </article>
              </div>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-bowl-card">
                <Image
                  src="/hero-bowl.svg"
                  alt="Illustration of a premium bowl of roasted makhana"
                  fill
                  className="hero-image"
                  priority
                />
              </div>
              <div className="glass-card hero-note hero-note-left">
                <p className="note-title">Fresh Roast</p>
                <p>Butter yellow crunch with a clean ingredient list.</p>
              </div>
              <div className="glass-card hero-note hero-note-right">
                <p className="note-title">Mindful Snack</p>
                <p>Low oil, high crunch, no heaviness.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container sand-panel">
            <SectionHeading
              eyebrow="Categories"
              title="Crafted for different cravings and daily rituals"
              description="From post-work munching to festive dessert moments, each category keeps the brand ready for both content and commerce."
            />
            <div className="card-grid three-up">
              {categories.map((category) => (
                <article key={category.title} className="glass-card feature-card">
                  <div className={`art-panel ${category.artClass}`} />
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="recipes" className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Featured Recipes"
              title="Simple makhana recipes people actually want to save"
              description="The editorial layer stays soft and premium, which gives the website room to grow into a full recipe hub later."
            />
            <div className="card-grid three-up">
              {recipes.map((recipe) => (
                <article key={recipe.title} className="glass-card recipe-card">
                  <div className={`art-panel ${recipe.artClass}`} />
                  <div className="recipe-meta">
                    <h3>{recipe.title}</h3>
                    <span>{recipe.accent}</span>
                  </div>
                  <p>{recipe.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="section lotus-band">
          <div className="container split-layout">
            <SectionHeading
              eyebrow="Health Benefits"
              title="The superfood side of makhana, without making the brand feel clinical"
              description="These blocks keep the wellness messaging light, visual, and easy to trust, while still feeling on-brand."
            />
            <div className="card-grid two-up">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="glass-card benefit-card">
                  <div className="benefit-icon" aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="section">
          <div className="container">
            <div className="heading-row">
              <SectionHeading
                eyebrow="Product Showcase"
                title="A clean product grid ready for e-commerce expansion"
                description="Each card is lightweight today, but structured to grow into ratings, inventory, subscriptions, and gifting later."
              />
              <a href="#newsletter" className="simple-link">
                Build your pantry
              </a>
            </div>
            <div className="card-grid four-up">
              {products.map((product) => (
                <article key={product.title} className="glass-card product-card">
                  <div className={`product-pack ${product.packClass}`}>
                    <div className="product-pack-bowl" />
                  </div>
                  <p className="product-note">{product.note}</p>
                  <h3>{product.title}</h3>
                  <div className="product-row">
                    <strong>{product.price}</strong>
                    <button type="button" className="button button-dark button-small">
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="container story-grid">
            <article className="glass-card story-card">
              <SectionHeading
                eyebrow="Brand Story"
                title="From the ponds of Bihar to a softer, smarter snack ritual"
                description="Makhana Mingle begins where this ingredient has always belonged: in the pond belts of Bihar, where cultivation is patient, seasonal, and deeply local. We wanted to honor that origin while presenting makhana as a modern pantry icon people can feel proud to serve, gift, and snack on every day."
              />
              <div className="story-list">
                {storyPoints.map((point) => (
                  <div key={point} className="story-point">
                    {point}
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-card map-card">
              <p className="section-eyebrow">Bihar Origin</p>
              <div className="map-panel">
                <div className="map-top">
                  <div>
                    <h3>Darbhanga</h3>
                    <p>
                      One of the regions closely associated with India&apos;s makhana cultivation
                      heritage.
                    </p>
                  </div>
                  <span className="map-chip">Source map</span>
                </div>
                <div className="map-mini-grid">
                  <div>
                    <strong>Harvesting</strong>
                    <p>Pond-grown seeds collected, dried, popped, and cleaned.</p>
                  </div>
                  <div>
                    <strong>Roasting</strong>
                    <p>Small-batch finishing for a fresher, more premium texture.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Testimonials"
              title="Warm reviews from people who want healthy snacks to still feel joyful"
              description="The social proof is styled to feel editorial and premium, not loud or overdesigned."
            />
            <div className="card-grid three-up">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="glass-card testimonial-card">
                  <p className="stars">★★★★★</p>
                  <p className="testimonial-quote">“{testimonial.quote}”</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="section">
          <div className="container">
            <div className="newsletter-card">
              <p className="section-eyebrow">Newsletter Signup</p>
              <h2>Join the Mingle</h2>
              <p>
                Get new recipes, wellness notes, and first access to small-batch flavors before
                they disappear.
              </p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="button button-dark">
                  Subscribe
                </button>
              </form>
              <p className="newsletter-caption">No spam, only pantry notes worth opening.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-lockup footer-lockup">
              <Image src="/logo-mark.svg" alt="Makhana Mingle logo" width={44} height={44} />
              <p className="brand-wordmark footer-brand">Makhana Mingle</p>
            </div>
            <p className="footer-copy">
              A modern Indian food brand shaping healthier snacking through makhana, recipes, and
              slow-crafted pantry experiences.
            </p>
            <div className="footer-links">
              <a href="#newsletter">Instagram</a>
              <a href="#recipes">Pinterest</a>
              <a href="#story">LinkedIn</a>
            </div>
          </div>
          <div>
            <p className="footer-heading">Shop</p>
            <div className="footer-stack">
              <a href="#shop">All Snacks</a>
              <a href="#shop">Gift Boxes</a>
              <a href="#shop">Best Sellers</a>
            </div>
          </div>
          <div>
            <p className="footer-heading">Content</p>
            <div className="footer-stack">
              <a href="#recipes">Recipes</a>
              <a href="#benefits">Health Benefits</a>
              <a href="#story">Brand Story</a>
            </div>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <div className="footer-stack">
              <a href="mailto:hello@makhanamingle.com">hello@makhanamingle.com</a>
              <p>Patna and Bengaluru</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import Image from "next/image";
