import type {
  NavLink,
  Category,
  Product,
  Benefit,
  Recipe,
  Testimonial,
  YouTubeVideos,
  TimelineEvent,
  FooterSection,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Shop", href: "#shop" },
  { label: "Recipes", href: "#recipes" },
  { label: "Benefits", href: "#benefits" },
  { label: "Story", href: "#story" },
];

export const categories: Category[] = [
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

export const products: Product[] = [
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
  {
    title: "Tandoori Masala",
    note: "Smoky tandoori spice blend",
    price: "₹269",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop",
  },
  {
    title: "Chaat Masala",
    note: "Tangy Indian street food spice",
    price: "₹259",
    image: "https://images.unsplash.com/photo-1603052879368-f2927f4c2e13?w=400&h=400&fit=crop",
  },
  {
    title: "Butter Chicken",
    note: "Rich creamy tomato and spice",
    price: "₹289",
    image: "https://images.unsplash.com/photo-1606284305952-d5af49a20404?w=400&h=400&fit=crop",
  },
  {
    title: "Lemon Pepper",
    note: "Zesty citrus with cracked pepper",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop",
  },
];

export const benefits: Benefit[] = [
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
  {
    title: "Gluten Free",
    description: "Naturally gluten-free, safe for celiac and gluten-sensitive diets.",
    icon: "🌾",
  },
  {
    title: "Rich in Fiber",
    description: "Supports digestion and keeps you feeling full longer.",
    icon: "🥬",
  },
];

export const recipes: Recipe[] = [
  {
    title: "Masala Roast Makhana",
    description: "Chilli, curry leaf, and toasted makhana for a quick chai-time crunch.",
    image: "https://images.unsplash.com/photo-1606284305952-d5af49a20404?w=600&h=400&fit=crop",
    cookTime: "10 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Ghee", "Chilli powder", "Curry leaves", "Salt"],
  },
  {
    title: "Makhana Kheer",
    description: "A creamy dessert with cardamom, saffron, and nutty bite.",
    image: "https://images.unsplash.com/photo-1603052879368-f2927f4c2e13?w=600&h=400&fit=crop",
    cookTime: "45 min",
    difficulty: "Medium",
    ingredients: ["Makhana", "Milk", "Sugar", "Cardamom", "Saffron", "Almonds"],
  },
  {
    title: "Trail Mix Chaat",
    description: "Fox nuts, seeds, herbs, and citrus for an energizing afternoon bite.",
    image: "https://images.unsplash.com/photo-1608492683726-1280ac73f860?w=600&h=400&fit=crop",
    cookTime: "5 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Chickpeas", "Pomegranate", "Coriander", "Lemon"],
  },
  {
    title: "Makhana Poha",
    description: "Flattened rice meets fox nuts in a wholesome breakfast bowl.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop",
    cookTime: "20 min",
    difficulty: "Medium",
    ingredients: ["Makhana", "Poha", "Onion", "Peanuts", "Curry leaves", "Mustard"],
  },
  {
    title: "Makhana Tikki",
    description: "Crispy patties made with mashed makhana and vegetables.",
    image: "https://images.unsplash.com/photo-1603052879368-f2927f4c2e13?w=600&h=400&fit=crop",
    cookTime: "30 min",
    difficulty: "Medium",
    ingredients: ["Makhana", "Potato", "Green peas", "Ginger", "Green chilli"],
  },
  {
    title: "Makhana Ladoo",
    description: "Sweet energy balls with nuts and jaggery.",
    image: "https://images.unsplash.com/photo-1606284305952-d5af49a20404?w=600&h=400&fit=crop",
    cookTime: "25 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Jaggery", "Ghee", "Almonds", "Cardamom"],
  },
  {
    title: "Crispy Makhana Chivda",
    description: "Light and crunchy poha-based snack with fox nuts.",
    image: "https://images.unsplash.com/photo-1608492683726-1280ac73f860?w=600&h=400&fit=crop",
    cookTime: "15 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Poha", "Peanuts", "Curry leaves", "Turmeric"],
  },
  {
    title: "Makhana Smoothie Bowl",
    description: "Creamy overnight soaked makhana with fruits and seeds.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=400&fit=crop",
    cookTime: "10 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Banana", "Almond milk", "Chia seeds", "Honey"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The flavor feels premium but still rooted in home. It is the only snack my mom and my gym friends both steal.",
    name: "Ritika Sharma",
    role: "Mumbai, wellness consultant",
    rating: 5,
  },
  {
    quote: "Their roasted makhana made healthy gifting finally feel elegant. The textures and seasoning feel properly considered.",
    name: "Aman Verma",
    role: "Bengaluru, startup operator",
    rating: 5,
  },
  {
    quote: "I came for the snack, stayed for the recipes. The kheer recipe turned into a Diwali staple at our place.",
    name: "Neha Sinha",
    role: "Patna, food writer",
    rating: 5,
  },
  {
    quote: "Finally, a healthy snack that actually tastes good. My kids don't even know it's good for them!",
    name: "Priya Menon",
    role: "Delhi, mother of two",
    rating: 5,
  },
  {
    quote: "The peri peri flavor is addictive. I've converted my entire office to Makhana Mingle fans.",
    name: "Rohan Khanna",
    role: "Gurgaon, marketing professional",
    rating: 4,
  },
  {
    quote: "As someone with gluten sensitivity, finding tasty snacks is hard. Makhana Mingle is my go-to now.",
    name: "Anjali Gupta",
    role: "Pune, nutrition coach",
    rating: 5,
  },
];

export const youtubeVideos: YouTubeVideos = {
  recipes: [
    { id: "myqJYMPyJRI", title: "Air Fryer Roasted Makhana" },
    { id: "QLZlEHEmPrE", title: "Masala Makhana Recipe" },
    { id: "xKJ7cYDq8mA", title: "Makhana Kheer Full Recipe" },
    { id: "8h3XKzXjYqE", title: "Crispy Makhana Chivda" },
  ],
  health: [
    { id: "P6j9Ku6rRgw", title: "Makhana Health Benefits" },
    { id: "K9hHj7sL2wM", title: "Why Makhana is a Superfood" },
  ],
  story: [
    { id: "0A7eL3pZyHw", title: "Bihar's Makhana & The Wetlands" },
    { id: "bK8jA3mN1pQ", title: "From Pond to Plate" },
  ],
};

export const timeline: TimelineEvent[] = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started with a small batch of hand-roasted makhana in Patna, Bihar.",
  },
  {
    year: "2019",
    title: "First Product Launch",
    description: "Introduced our signature Classic Himalayan Salt flavor.",
  },
  {
    year: "2020",
    title: "Going Digital",
    description: "Launched online store and reached customers across India.",
  },
  {
    year: "2022",
    title: "Recipe Collection",
    description: "Published our first collection of traditional makhana recipes.",
  },
  {
    year: "2024",
    title: "National Recognition",
    description: "Featured in top food magazines and wellness blogs.",
  },
  {
    year: "2025",
    title: "New Flavors",
    description: "Launched 8 new flavors including Butter Chicken and Chaat Masala.",
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "All Snacks", href: "#shop" },
      { label: "Gift Boxes", href: "#shop" },
      { label: "Best Sellers", href: "#shop" },
      { label: "New Arrivals", href: "#shop" },
    ],
  },
  {
    title: "Content",
    links: [
      { label: "Recipes", href: "#recipes" },
      { label: "Health Benefits", href: "#benefits" },
      { label: "Brand Story", href: "#story" },
      { label: "Videos", href: "#recipes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#story" },
      { label: "Contact", href: "#footer" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];