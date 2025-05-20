
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  details: {
    benefits: string[];
    ingredients: string[];
    usage: string;
    size?: string;
  };
  slug: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Lion's Mane Extract",
    description: "Organic dual-extracted Lion's Mane tincture for cognitive support.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Tinctures",
    featured: true,
    details: {
      benefits: [
        "Supports cognitive function and memory",
        "Promotes nerve and brain health",
        "Enhances mental clarity and focus",
        "May support the nervous system"
      ],
      ingredients: [
        "Organic Lion's Mane fruiting bodies",
        "Organic alcohol (extraction medium)",
        "Purified water"
      ],
      usage: "Take 1ml (approximately 30 drops) under the tongue twice daily.",
      size: "2 fl oz (60ml)"
    },
    slug: "lions-mane-extract"
  },
  {
    id: "p2",
    name: "Mushroom Coffee Blend",
    description: "A balanced morning brew infused with medicinal mushroom extracts.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Beverages",
    featured: true,
    details: {
      benefits: [
        "Smooth, sustained energy without jitters",
        "Enhanced focus and productivity",
        "Immune system support",
        "Reduced acidity compared to regular coffee"
      ],
      ingredients: [
        "Organic Arabica coffee",
        "Organic Lion's Mane extract",
        "Organic Chaga extract",
        "Organic Cordyceps extract"
      ],
      usage: "Brew like regular coffee. Use 1-2 teaspoons per cup.",
      size: "8 oz (227g)"
    },
    slug: "mushroom-coffee-blend"
  },
  {
    id: "p3",
    name: "Reishi Calm Capsules",
    description: "Powerful Reishi mushroom extract for relaxation and immune support.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Supplements",
    details: {
      benefits: [
        "Supports balanced immune response",
        "Promotes relaxation and sleep quality",
        "Adaptogenic support for stress management",
        "Antioxidant properties"
      ],
      ingredients: [
        "Organic Reishi (Ganoderma lucidum) fruiting body extract",
        "Organic mycelium biomass",
        "Vegetable cellulose capsule"
      ],
      usage: "Take 2 capsules daily, preferably in the evening.",
      size: "60 capsules"
    },
    slug: "reishi-calm-capsules"
  },
  {
    id: "p4",
    name: "5 Mushroom Defense Complex",
    description: "Comprehensive blend of immune-supporting mushroom extracts.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    category: "Supplements",
    featured: true,
    details: {
      benefits: [
        "Daily immune system support",
        "Adaptogenic stress management",
        "Cellular health and protection",
        "Overall vitality and wellness"
      ],
      ingredients: [
        "Organic Turkey Tail extract",
        "Organic Reishi extract",
        "Organic Chaga extract",
        "Organic Maitake extract",
        "Organic Shiitake extract",
        "Vegetable cellulose capsule"
      ],
      usage: "Take 2 capsules daily with food.",
      size: "90 capsules"
    },
    slug: "five-mushroom-defense-complex"
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};
