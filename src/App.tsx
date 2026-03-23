import { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";

const GOOGLE_ANALYTICS_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
const ENV = import.meta.env.VITE_ENV;

if (ENV === "production" && GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
}

function logPageView() {
  if (ENV === "production") {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

const navLinks = [
  { label: "Recipes", href: "#recipes" },
  { label: "Benefits", href: "#benefits" },
  { label: "Shop", href: "#shop" },
  { label: "Story", href: "#story" },
];

const categories = [
  {
    title: "Flavored Makhana",
    subtitle: "Bold seasoning blends for evening cravings and gifting trays.",
  },
  {
    title: "Traditional Recipes",
    subtitle: "Slow, rooted comfort inspired by home kitchens and festive tables.",
  },
  {
    title: "Diet Snacks",
    subtitle: "Light, crisp options designed for mindful everyday snacking.",
  },
];

const recipes = [
  {
    title: "Masala Roast Bowl",
    description: "Chilli, curry leaf, and toasted makhana for a quick chai-time crunch.",
    accent: "10 min recipe",
    artClass: "recipe-art-bowl",
  },
  {
    title: "Makhana Kheer",
    description: "A creamy dessert with cardamom, saffron, and delicate nutty texture.",
    accent: "Festive favorite",
    artClass: "recipe-art-kheer",
  },
  {
    title: "Trail Mix Chaat",
    description: "Fox nuts, seeds, herbs, and citrus for an energizing afternoon bite.",
    accent: "Protein rich",
    artClass: "recipe-art-mix",
  },
];

const benefits = [
  {
    title: "Low Calories",
    copy: "Light enough for everyday snacking without the greasy crash.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.7]">
        <path d="M12 4c3.5 0 7 2.6 7 6.5S15.5 20 12 20s-7-5.7-7-9.5S8.5 4 12 4Z" />
        <path d="M9.5 11.5c.8 1.1 1.5 1.6 2.5 1.6 1.2 0 2.2-.7 3-2.1" />
      </svg>
    ),
  },
  {
    title: "High Protein",
    copy: "A satisfying pantry staple that supports balanced energy through the day.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.7]">
        <path d="M7 7h4v10H7zM13 7h4v10h-4z" />
        <path d="M5 10h2m10 0h2M5 14h2m10 0h2" />
      </svg>
    ),
  },
  {
    title: "Antioxidants",
    copy: "Naturally nourishing, with ancient wellness appeal in every roasted bite.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.7]">
        <path d="M12 3v18M5.5 7.5c2.2.1 4-.8 6.5-3.5 2.5 2.7 4.3 3.6 6.5 3.5-1.3 4.7-3.6 7.5-6.5 9.6-2.9-2.1-5.2-4.9-6.5-9.6Z" />
      </svg>
    ),
  },
  {
    title: "Heart Friendly",
    copy: "A gentle, crunchy alternative to fried snacks for cleaner indulgence.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.7]">
        <path d="M12 20s-6.5-4.2-8.5-8.2C1.8 8.3 4.2 5 7.6 5c2 0 3.4 1 4.4 2.4C13 6 14.4 5 16.4 5c3.4 0 5.8 3.3 4.1 6.8C18.5 15.8 12 20 12 20Z" />
      </svg>
    ),
  },
];

const products = [
  {
    name: "Roasted Salt & Pepper",
    flavor: "Classic everyday crunch",
    price: "Rs. 249",
    background: "from-[#fff3cf] via-[#ffdf95] to-[#f0bf5b]",
  },
  {
    name: "Saffron Spice Mix",
    flavor: "Warm festive seasoning",
    price: "Rs. 299",
    background: "from-[#ffe1d2] via-[#f6ba88] to-[#d8884d]",
  },
  {
    name: "Mint Pudina Crisp",
    flavor: "Fresh, herb-forward roast",
    price: "Rs. 279",
    background: "from-[#e9f7dc] via-[#b7d990] to-[#7ba159]",
  },
  {
    name: "Jaggery Caramel Pop",
    flavor: "Sweet-meets-toasty treat",
    price: "Rs. 329",
    background: "from-[#f8e2cc] via-[#dba56c] to-[#ac6f3e]",
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
      "Their roasted makhana made healthy gifting finally feel elegant. The textures, packaging, and seasoning are all thoughtfully done.",
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
  "Sourced from ponds across Bihar, where makhana has been cultivated for generations.",
  "Roasted in small batches to keep the bite airy, crisp, and naturally satisfying.",
  "Built as a modern Indian pantry brand that balances wellness, nostalgia, and design.",
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
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#b68552]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[#38261a] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#7c6757] sm:text-lg">{description}</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <div className="site-shell grain-overlay">
      <Helmet>
        <title>Makhana Mingle | Premium Healthy Makhana Snacks</title>
        <meta
          name="description"
          content="Discover premium makhana snacks, nourishing recipes, health benefits, and a modern Indian pantry story with Makhana Mingle."
        />
        <meta property="og:title" content="Makhana Mingle" />
        <meta
          property="og:description"
          content="Snack Smart with Makhana. Explore recipes, shop premium fox nut snacks, and discover the story behind Bihar's beloved superfood."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <header className="sticky top-0 z-50 border-b border-white/50 bg-[#fff8ef]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Makhana Mingle
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#6d5848] md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-[#38261a]">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#shop"
            className="rounded-full border border-[#e9d7bf] bg-white/80 px-4 py-2 text-sm font-medium text-[#4f3a2b] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Shop Now
          </a>
        </div>
      </header>

      <main id="top">
        <section className="fade-in-section relative px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-24">
          <div className="glow-blob left-[6%] top-20 h-44 w-44 bg-[#ffd978]" />
          <div className="glow-blob right-[8%] top-24 h-52 w-52 bg-[#f2d4b4]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#efddc2] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#8e6c48] soft-ring">
                Premium Indian Snacking
              </div>
              <h1 className="font-display max-w-xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#38261a] sm:text-6xl lg:text-7xl">
                Snack Smart with Makhana
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5a4a] sm:text-xl">
                Healthy. Crunchy. Delicious. Thoughtfully roasted fox nuts with a warm pantry
                story, playful recipes, and everyday wellness built in.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#recipes"
                  className="rounded-full bg-[#3f2b1f] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2f1f15]"
                >
                  Explore Recipes
                </a>
                <a
                  href="#shop"
                  className="rounded-full border border-[#e3cfb0] bg-[#ffd978] px-6 py-3.5 text-center text-sm font-semibold text-[#4b341f] transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Shop Now
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["100%", "wholegrain roasted"],
                  ["12g", "protein-led pairings"],
                  ["Bihar", "heritage sourcing"],
                ].map(([value, label]) => (
                  <div key={label} className="section-card rounded-[1.5rem] px-5 py-4">
                    <p className="font-display text-2xl font-semibold text-[#38261a]">{value}</p>
                    <p className="mt-1 text-sm text-[#7c6757]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="hero-bowl" />
              <div className="section-card floating-card absolute -bottom-6 left-3 rounded-[1.5rem] px-4 py-4 sm:left-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[#9c7956]">Fresh Roast</p>
                <p className="mt-2 font-display text-lg font-semibold text-[#38261a]">
                  Butter yellow crunch with a clean ingredient list
                </p>
              </div>
              <div className="soft-ring absolute -right-2 top-6 rounded-[1.5rem] bg-white/90 px-4 py-3 text-sm text-[#6d5848]">
                <p className="font-semibold text-[#38261a]">Best for mindful snacking</p>
                <p className="mt-1">Low oil, high crunch, no heaviness</p>
              </div>
            </div>
          </div>
        </section>

        <section className="fade-in-section px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#fbf1da] px-5 py-12 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Categories"
              title="Crafted for different cravings and daily rituals"
              description="From post-work munching to festive dessert moments, each category keeps the look clean, premium, and easy to expand into a full content-plus-commerce brand."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {categories.map((category, index) => (
                <article
                  key={category.title}
                  className="section-card group rounded-[1.75rem] p-5 transition duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`recipe-art ${
                      index === 0
                        ? "bg-gradient-to-br from-[#fff5db] to-[#f5dcc0]"
                        : index === 1
                          ? "bg-gradient-to-br from-[#fff9ec] to-[#ead7b6]"
                          : "bg-gradient-to-br from-[#f7f0df] to-[#dfe9c9]"
                    }`}
                  >
                    <div
                      className={
                        index === 0
                          ? "recipe-art-bowl"
                          : index === 1
                            ? "recipe-art-kheer"
                            : "recipe-art-mix"
                      }
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#38261a]">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#7c6757]">{category.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="recipes" className="fade-in-section px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Recipes"
              title="Simple makhana recipes people actually want to save"
              description="Designed to support a content hub later, these recipe cards balance editorial warmth with a visual system that still feels premium on mobile."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <article
                  key={recipe.title}
                  className="section-card group rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(103,70,40,0.14)]"
                >
                  <div className="recipe-art">
                    <div className={recipe.artClass} />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold text-[#38261a]">
                      {recipe.title}
                    </h3>
                    <span className="rounded-full bg-[#fff2c8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8e6c48]">
                      {recipe.accent}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#7c6757]">{recipe.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="fade-in-section lotus-pattern px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Health Benefits"
                title="The superfood side of makhana, without making the brand feel clinical"
                description="This section keeps the information light, visual, and conversion-friendly so it can sit comfortably between recipes, storytelling, and product discovery."
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="section-card rounded-[1.75rem] p-6">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-[#38261a]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#7c6757]">{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="shop" className="fade-in-section px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Product Showcase"
                title="A clean product grid ready for e-commerce expansion"
                description="Each card is lightweight today, but structured to scale into pricing, ratings, inventory tags, and add-to-cart flows later."
              />
              <a
                href="#newsletter"
                className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8e6c48]"
              >
                Build your pantry
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => (
                <article key={product.name} className="section-card rounded-[2rem] p-5">
                  <div className={`product-pack bg-gradient-to-b ${product.background}`}>
                    <span aria-hidden="true" />
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a07a56]">
                      {product.flavor}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#38261a]">
                      {product.name}
                    </h3>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-lg font-semibold text-[#38261a]">{product.price}</p>
                      <button className="rounded-full bg-[#3f2b1f] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2f1f15]">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="fade-in-section px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
            <article className="section-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <SectionHeading
                eyebrow="Brand Story"
                title="From the ponds of Bihar to a softer, smarter snack ritual"
                description="Makhana Mingle begins where this ingredient has always belonged: in the pond belts of Bihar, where cultivation is patient, seasonal, and deeply local. We wanted to honor that origin while presenting makhana as a modern pantry icon people can feel proud to serve, gift, and snack on every day."
              />
              <div className="grid gap-4">
                {storyPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-[#ead8c3] bg-white/70 px-5 py-4 text-sm leading-7 text-[#6f5a4a]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
            <article className="story-map section-card relative rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#a07a56]">
                Bihar origin
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-[#ead8c3] bg-white/78 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-[#38261a]">Darbhanga</h3>
                    <p className="mt-2 text-sm leading-7 text-[#7c6757]">
                      One of the regions closely associated with India’s makhana cultivation
                      heritage.
                    </p>
                  </div>
                  <div className="rounded-full bg-[#ffd978] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5b401f]">
                    Source map
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-[#6f5a4a]">
                  <div className="rounded-[1.25rem] bg-[#fff5dd] p-4">
                    <p className="font-semibold text-[#38261a]">Harvesting</p>
                    <p className="mt-2 leading-7">Pond-grown seeds collected, dried, popped, and cleaned.</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-[#fff5dd] p-4">
                    <p className="font-semibold text-[#38261a]">Roasting</p>
                    <p className="mt-2 leading-7">Small-batch finishing for a fresher, more premium texture.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="fade-in-section px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="Warm reviews from people who want healthy snacks to still feel joyful"
              description="The social proof is styled to feel editorial and premium, not loud or overdesigned."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="section-card rounded-[2rem] p-6">
                  <div className="mb-5 flex gap-1 text-[#d7a844]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={`${testimonial.name}-${index}`}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-8 text-[#5f4a3b]">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-[#ebdcc9] pt-5">
                    <p className="font-display text-lg font-semibold text-[#38261a]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-[#8b7462]">{testimonial.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="fade-in-section px-4 py-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-4xl rounded-[2.25rem] bg-[#ffd978] px-6 py-10 text-center shadow-[0_30px_70px_rgba(205,156,61,0.24)] sm:px-10 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7f5c26]">
              Newsletter Signup
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-[#38261a] sm:text-4xl">
              Join the Mingle
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5d4528] sm:text-base">
              Get new recipes, wellness notes, and first access to small-batch flavors before they
              disappear.
            </p>
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-[1.5rem] bg-white/70 p-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full border border-[#ead8c3] bg-white px-5 py-3 outline-none transition placeholder:text-[#9b8773] focus:border-[#b68552]"
              />
              <button className="rounded-full bg-[#6c4a2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#523621]">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#efe0cc] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-[#38261a]">Makhana Mingle</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#7c6757]">
              A modern Indian food brand shaping healthier snacking through makhana, recipes, and
              slow-crafted pantry experiences.
            </p>
            <div className="mt-5 flex gap-3 text-sm text-[#6d5848]">
              <a href="/">Instagram</a>
              <a href="/">Pinterest</a>
              <a href="/">LinkedIn</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a07a56]">Shop</p>
            <div className="mt-4 grid gap-3 text-sm text-[#6f5a4a]">
              <a href="#shop">All Snacks</a>
              <a href="#shop">Gift Boxes</a>
              <a href="#shop">Best Sellers</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a07a56]">
              Content
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[#6f5a4a]">
              <a href="#recipes">Recipes</a>
              <a href="#benefits">Health Benefits</a>
              <a href="#story">Brand Story</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a07a56]">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[#6f5a4a]">
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

export default App;
