export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  title: string;
  description: string;
  image: string;
}

export interface Product {
  title: string;
  note: string;
  price: string;
  badge?: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Recipe {
  title: string;
  description: string;
  image: string;
  cookTime?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  ingredients?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
}

export interface YouTubeVideos {
  recipes: YouTubeVideo[];
  health: YouTubeVideo[];
  story: YouTubeVideo[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}