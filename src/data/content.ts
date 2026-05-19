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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXkjdqHOpM1H5nnuwSYeQMu07-OVo9KW9ynNFxKYzKJIwTVOl1TD3sZeo4UAhL7bxRwWxUV766qKk_JQG4W_Firyd_RtxGDh18QJHG_h_f2_WO5_TJ39uNh0dp63MMNufWoRG8SFytUa_xCwAhB2ar1dMaX1PqDQLZlpcrhMziS_PYDdvO-KVtrtv43p7lER9I9AEm5coYegvhitZi70TXB3dzyNolaSX96Qh-ZnnOVJoJLQIeuNPoHkoZcrg9Lr2jqc-V4ANwPtU",
  },
  {
    title: "Traditional Recipes",
    description: "Slow, rooted comfort inspired by home kitchens and festive desserts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASlCTt9wrc4Ah2P7X4y364Ib3gMTxjoIfjoi_hDZ5Lvuh4uMLm44R5mwvZrzXkOjhTlq1Yv1E0_AAgVvzbj3x8bTK416y5ysSnYLpGoBmxsv9yyMWPWjSmNm-ZVlHKekOnfRtHAkDffGFoPeeF1BymUdFlrdFeZoLxqK558s4WE9NqAXv82DziDo2ayMSEXtGAcS_567IYtrFV8LFvXKp4J0QI86Y2pTNiP0O24RXGgS5UwV-uyoiyHCKCeKlEeP-aKj5Ltp7qoV8",
  },
  {
    title: "Diet Snacks",
    description: "Light, crisp combinations designed for mindful daily snacking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNHZFDHenspOtcHjN-NuVTqRbLFNyjtXVlYL6SZsrDXxSG-hfgEYeXfReT_fC73pZrsuOHo4t0Nql0X50vp__WNlAuj_y2u_nE6plNHwD93h6SNrlYTI69cWm-WhpJ0izhbga3XNwWlqCarRpEkYaDXYslDCp0VfCpGBWrjXuiA22uUHwQEsLe0jrheiUdkj31WFo27nGNoZ8c4EVXAmsDfKVMiXEJ8VAmA13Xrn1V7UYPiGBeVRAEodvd5mOieRfyhSABHuE4KsY",
  },
];

export const products: Product[] = [
  {
    title: "Classic Himalayan Salt",
    note: "Roasted to golden perfection with sea salt",
    price: "₹249",
    badge: "BESTSELLER",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnq_Cyw9LsnaGxtqpa1zjj5mMi84eqV1mI0qmxa51KW_tdftAm19OBqX9yEbP7IFRWhu_-SYiKG1C4MzlkiDgscN1UYPqMLssXle-pldqhbZQSSCkuK_YcNs5FAPv5YUH6mJ-xV7bjBMLbYvWAQ9s7hTXdB77wUDAm4Wb4yBNvp9NOY0RxZyxYOxM2f1_oqTJtkQMaDidfk0yl2HFURIzyDT6wCH6BH1gvykSPJKm9BcJNxBQa97BYgvF1d_tZINMqwaE5Gk0CuD0",
  },
  {
    title: "Spicy Peri Peri",
    note: "Fiery blend of African birds eye chili",
    price: "₹279",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7rahe3ounbo6n40f3dvy-_lQf-fbLNE8hqbDMRsvRYLuuEzrbBVvyq2z6O3z4GPADkmrHzaqQ_B_MQ_dwgp2tuj0eQHRAxBzsdzuGh-sT7iHP_TJR80ANl7blts5FWSeuaGV60YWEExqfSStzQMC_WUZN1n5mciek6jHqvjk-HXeRtp3dILSfnx6LXsqpV3dHJ9rqBhV7soBkkF7hNcMK6X4QZYMKzO0I19BIUxDIP0DiiYwV9soYI4elt1IPQw5CiShNMIRVfCg",
  },
  {
    title: "Creamy Cheese",
    note: "Rich white cheddar with herbs",
    price: "₹299",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8elApYDXzjVS2fwFYwXygUuUQ_JBcTPN1TEpS3gmlrq_PZDywzbdpo8K57Vqmo_pFqQYda-Qoivj3mj-Zj7VhBduD1VOaverjkht0sWOFRhKfUzcSYBhD6qiWBgb9LK0FjnrlYn8F6QpBYiEfQEw7zD_aTvVaN2TCuTaFF_DimYaX8sABhS4sF09CQmjIVzRmblDHAUtiMqSqys_y-DVkXXXYop2cO9GmLCEtMH1q9eViTZjpjKwQHLyDHlYkzXrO8HXsltJnZTg",
  },
  {
    title: "Mint Pudina",
    note: "Refreshing mint and lemon twist",
    price: "₹259",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlr9c3j4_8UriKIyC1ku01rVs99S3XKMLsO0WtpghoFm97sL9WhYba9jeM_WyAhNWHRAo4B2KUjGk42CIh__4SEeaj3Q9SkvlQ3BvF3RPFjNIzFai8aqOZTocXEDneW9PFpr-ChC9cdpEwGzszfDUBd_BMRXkdi0Bav_-VQsPqPLu_OTPDlyC3d5cCdzrLiPit1v_6D04JWTeSlwi7rfSyfd-Rq9unFKW6sx81iDkmp1YxroI0IMlSfUZxxzgOeo713HoZfAdvUjk",
  },
  {
    title: "Tandoori Masala",
    note: "Smoky tandoori spice blend",
    price: "₹269",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Mn6ZFW4TX-hqT-ae6_vKFYrAXkyCk3M0WvtQv8ewwQgWbJ_hmDZ4SBbq8SbINkY148G9J5q0HFeONzItYJcaEAArhKRWldeJSxjkwhUM7tEQBTsHZVaHkKocDWGeQiKXL9U_vBkEPeQjjzB7rnuAxzhaOKYQZCTKTJrzNs6ImTSISpBLzdMnYolcPFdINIdZpLVOmd7KmgA3AGk0VKMvh75LY7CxiP2FuuA-CYwdAhWc8sFHhJPXCJ6CT4VOad-rGWt1uITrxxs",
  },
  {
    title: "Chaat Masala",
    note: "Tangy Indian street food spice",
    price: "₹259",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABUWyuR69mdTotVLxyUhBABrrlr3gSZr09U2TzZwU_GOBGsPQNpoOwjN24wE2J9796HYOSqYKapPl4VhKnW5FoAuuCkeuVPLSVDa99ekU3IE-rQEgChdWLKvvosK2X22MoijEJKnwbytJ1-RyXpkgPRQKkm1fNtDZgV4FWz2PHzkLK7ilafsboPkTHpTBFZnUG7bAlNge3lUPg3CbfvfOrYM9tqTksgjJRxPbmYSW6Cy-gVON24jv2fTS_6OJcCIT5CCv10hT4zuY",
  },
  {
    title: "Butter Chicken",
    note: "Rich creamy tomato and spice",
    price: "₹289",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTC6O2N3spjxuxYcD3Q9Tqb2VhjzsLQ0vupuwpZ5Fr3Rovdq5lCAfA7rZjCtwYhboEblDjRDNcm4MUWS96qT0fUN1flfZ8z2huAkE2hYSdioUcnzj30_eix55nuZhKcMrQ5GxoUO9eGXUS2N33HMDMhthuJVD5VZyof7gwwtxATX8Ti0MwBPlhcSxEgvzd4l7XqWIsiC799uYucX5h_XWGVxTiRA5tn3hN-OpLizW16JxPFw2_wbM0mjtXYp0e39t6c_NphLtYqLw",
  },
  {
    title: "Lemon Pepper",
    note: "Zesty citrus with cracked pepper",
    price: "₹249",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiwkllBTDWSE1hfp-u5ttCP7sEzXFrtj2j-ISSQkZmQ0J22rhTmbvIbsFScrsW7xR6t8_sHoi_Qoe0tcdtQk5odUjzlhI2mVUFXs9tpVRXxTbci31sOQf7H-BK2IvVqMLLqQLomRPQQ0JvhEh5k038YriFBeZtgbeKCpFXwsRLfd5wAocLYdNcCrMefxvas_JxxhwusFdFibEOoJt1Op_ZODzOSED4HSvPTHeN-HfHc6IQYXab32LOMJVDjsRLZs7fuVv-8PzQhsM",
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEUlV5Gqa-zVmvnOREHPlAarI1cQAKKrts588y6aCfzUtIrQoCV0JQwFYyj7uzcgVsifzEh5rSjcF6O8CM44LQ2fULZ3idu_QhgMTEz_q0JZfsq9TVLeMqQ3a94H8xUBGZo9E6zHqU5r_IRsIA673x01DTuTgcHERE6azfD-1hXQV-BexENgYu2E0FmivZYaj5nAdRVY47YMLoNFDSOP38P32jHu2zxUHkS6tVfA13kZlynYAPhgx2COGqh-NlKA7HIlbZ8QGdr7g",
    cookTime: "10 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Ghee", "Chilli powder", "Curry leaves", "Salt"],
  },
  {
    title: "Makhana Kheer",
    description: "A creamy dessert with cardamom, saffron, and nutty bite.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSty02VcbllQbkC8bV7Wbxcb9vzYNUMR9Z4LeeE21zZbiwEZDNdC0Xibllu0S3jEjouC_CX92sfZ7wfqO0M6GFsqPeb4PQJIEexOROYzq1_S1V-bGBzG-zj03yjfQUQhpKDgP17TXQ68jb_e4Mro5Ga5dHtHD9CVTM7tS_2uSwLYNcgGsn0YiYAtaty60ZDpsuHjnTUUuORwi7JfF3E30BPo_fPh6bbH58f80tv163f6ORcio_Gkvtowa9s8ntKui74Faj-ZnEO_Y",
    cookTime: "45 min",
    difficulty: "Medium",
    ingredients: ["Makhana", "Milk", "Sugar", "Cardamom", "Saffron", "Almonds"],
  },
  {
    title: "Trail Mix Chaat",
    description: "Fox nuts, seeds, herbs, and citrus for an energizing afternoon bite.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAanUFXZdwRFenhf0Wu3Gf4rldrOWxuvKC23IoDDNfRmiANUmwQn74w0WIaHck-Nanp77T-_IAmU1BIvp0ZNSZarloD98Ahd4nn7FC5OcqCUQY0k_tJ-V09lqOHGPSmHq2zxZFxXBycEixMr3_ggw0FiFuwDAoWRwy5tlpx_vYN0lBYOLyZusFBh_DbvdLZJhpzBt35CSpM6AY_xIT4fRcPkhdMYC2mEgPEbdADkwcgRuYybB0zgPbIk7UJrSoGjYhfAqLxg-yX6-Y",
    cookTime: "5 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Chickpeas", "Pomegranate", "Coriander", "Lemon"],
  },
  {
    title: "Makhana Poha",
    description: "Flattened rice meets fox nuts in a wholesome breakfast bowl.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzE9_kq7Gvp7NteaitGU22j60FThCJetX0jPhqUPo3VvhBgvLb-eiS0V_iADaLbKxw3IHPGEuWXcmNadF82Zt2JUx73VFFGRfqfLiu2zG0pUrhvtPAw0vntaXvd6TtJa7ejndgTJA4fhqL5xK7EO3EqZMTxaFyc3Q9c6pf41hp3mg-6iFj2QDPdtuzCalpsaydxnjHJr-1c20gNqERDcAH1YXgcTc8kP2wbaxQCznHDjwtnoWfdNrBp1YKZ__U4KHuZNuax2zH28",
    cookTime: "20 min",
    difficulty: "Medium",
    ingredients: ["Makhana", "Poha", "Onion", "Peanuts", "Curry leaves", "Mustard"],
  },
  {
    title: "Makhana Tikki",
    description: "Crispy patties made with mashed makhana and vegetables.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjkPe-vrWJQVvezp3uZf1OQ8ZHIR0XEQA7jr4liPRODrhYBpJETdVq-UddUSAmUFIHr6YMYWwVCWCZAVcRFOMFXBg3VkR23LhQQs2KHYICz40CbWzw6uvILGc0Xckjlu_uCeb0xZ0_PqOZ-A8xUuoFmWFiMDaHo5aYHbJwpfYaNdgyj0HkR65ZFwrH03C1bQkqXkZYxNvN97kAgrR1Metz3vAgpDbyTcxkwzUkL3Z84khdJOokAAB2ejO5r9jLXt_lhnhvoW8UmWQ",
    cookTime: "30 min",
    difficulty: "Medium",
    ingredients: ["Makhana", "Potato", "Green peas", "Ginger", "Green chilli"],
  },
  {
    title: "Makhana Ladoo",
    description: "Sweet energy balls with nuts and jaggery.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEUlV5Gqa-zVmvnOREHPlAarI1cQAKKrts588y6aCfzUtIrQoCV0JQwFYyj7uzcgVsifzEh5rSjcF6O8CM44LQ2fULZ3idu_QhgMTEz_q0JZfsq9TVLeMqQ3a94H8xUBGZo9E6zHqU5r_IRsIA673x01DTuTgcHERE6azfD-1hXQV-BexENgYu2E0FmivZYaj5nAdRVY47YMLoNFDSOP38P32jHu2zxUHkS6tVfA13kZlynYAPhgx2COGqh-NlKA7HIlbZ8QGdr7g",
    cookTime: "25 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Jaggery", "Ghee", "Almonds", "Cardamom"],
  },
  {
    title: "Crispy Makhana Chivda",
    description: "Light and crunchy poha-based snack with fox nuts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSty02VcbllQbkC8bV7Wbxcb9vzYNUMR9Z4LeeE21zZbiwEZDNdC0Xibllu0S3jEjouC_CX92sfZ7wfqO0M6GFsqPeb4PQJIEexOROYzq1_S1V-bGBzG-zj03yjfQUQhpKDgP17TXQ68jb_e4Mro5Ga5dHtHD9CVTM7tS_2uSwLYNcgGsn0YiYAtaty60ZDpsuHjnTUUuORwi7JfF3E30BPo_fPh6bbH58f80tv163f6ORcio_Gkvtowa9s8ntKui74Faj-ZnEO_Y",
    cookTime: "15 min",
    difficulty: "Easy",
    ingredients: ["Makhana", "Poha", "Peanuts", "Curry leaves", "Turmeric"],
  },
  {
    title: "Makhana Smoothie Bowl",
    description: "Creamy overnight soaked makhana with fruits and seeds.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzE9_kq7Gvp7NteaitGU22j60FThCJetX0jPhqUPo3VvhBgvLb-eiS0V_iADaLbKxw3IHPGEuWXcmNadF82Zt2JUx73VFFGRfqfLiu2zG0pUrhvtPAw0vntaXvd6TtJa7ejndgTJA4fhqL5xK7EO3EqZMTxaFyc3Q9c6pf41hp3mg-6iFj2QDPdtuzCalpsaydxnjHJr-1c20gNqERDcAH1YXgcTc8kP2wbaxQCznHDjwtnoWfdNrBp1YKZ__U4KHuZNuax2zH28",
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
    { id: "FptzrPb6hN0", title: "Makhana Snacks Recipe" },
    { id: "GnGE8J3yvV0", title: "Crispy Makhana Recipe" },
    { id: "kkgp99-PyY4", title: "Roasted Makhana Delight" },
    { id: "zjcq_zr1VkA", title: "Spicy Makhana Snack" },
    { id: "61QsFagn03w", title: "Makhana Magic Recipe" },
    { id: "ggYahgeS9p0", title: "Makhana Shorts" },
    { id: "wMiRaFvsrm0", title: "Quick Makhana Snack" },
    { id: "oDCTmWCETvs", title: "Makhana Crunch" },
  ],
  health: [
    { id: "shwSsrRTofM", title: "Makhana Health Benefits" },
    { id: "_yU3yEVjEP8", title: "Why Makhana is Superfood" },
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