import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { RecipeFilter } from "@/components/recipe-filter";
import { VideoEmbed, VideoGrid } from "@/components/video-embed";
import {
  navLinks,
  categories,
  products,
  benefits,
  recipes,
  testimonials,
  youtubeVideos,
  footerSections,
} from "@/data/content";

export default function Home() {
  return (
    <div className="site-shell">
      <Navigation links={navLinks} />

      <main id="top">
        <Hero />

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

        <section id="recipes" className="section recipe-videos">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Video Recipes</span>
              <h2>Learn to Make Makhana</h2>
              <p>Step-by-step video recipes for perfect crispy makhana.</p>
            </div>
            <VideoGrid videos={youtubeVideos.recipes} columns={2} />
          </div>
        </section>

        <section className="section recipes">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Featured Recipes</span>
              <h2>Simple Makhana Recipes</h2>
              <p>Transform your snacks into gourmet meals.</p>
            </div>
            <RecipeFilter recipes={recipes} />
          </div>
        </section>

        <section className="section health-video">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Why Makhana?</span>
              <h2>Discover the Health Benefits</h2>
              <p>Learn why nutritionists call makhana a superfood.</p>
            </div>
            <div className="video-single">
              <VideoEmbed videoId={youtubeVideos.health[0].id} title={youtubeVideos.health[0].title} />
            </div>
          </div>
        </section>

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

        <section className="section story-video">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">The Journey</span>
              <h2>From Bihar Ponds to Your Plate</h2>
              <p>Discover how makhana goes from seed to snack.</p>
            </div>
            <div className="video-single">
              <VideoEmbed videoId={youtubeVideos.story[0].id} title={youtubeVideos.story[0].title} />
            </div>
          </div>
        </section>

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

      <footer className="footer" id="footer">
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
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4>{section.title}</h4>
              {section.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Makhana Mingle. Crafted for the Artisanal Pantry.</p>
        </div>
      </footer>
    </div>
  );
}