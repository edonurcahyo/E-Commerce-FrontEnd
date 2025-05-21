
export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  description: string;
  category: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    location: string;
  };
  rating: number;
  reviewCount: number;
  stock: number;
  sold: number;
  isPopular?: boolean;
  isFeatured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { id: '1', name: 'Cement & Concrete', icon: '🧱' },
  // { id: '2', name: 'Lumber & Wood', icon: '🪵' },
  // { id: '3', name: 'Electrical', icon: '⚡' },
  // { id: '4', name: 'Plumbing', icon: '🚿' },
  { id: '5', name: 'Doors & Windows', icon: '🚪' },
  { id: '6', name: 'Paint', icon: '🎨' },
  { id: '7', name: 'Flooring', icon: '⬜' },
  // { id: '8', name: 'Tools', icon: '🔨' },
  // { id: '9', name: 'Hardware', icon: '⚙️' },
  { id: '10', name: 'Roofing', icon: '🏠' }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Portland Cement 40kg',
    price: 75000,
    originalPrice: 85000,
    discount: 12,
    image: '/cement 40kg 1.png',
    images: ['/cement 40kg 1.png', '/cement 40kg 2.png', '/cement 40kg 3.png'],
    description: 'High-quality portland cement for all your construction needs. Perfect for concrete mixing, masonry work, and general construction applications. Manufactured with premium materials for superior strength and durability.',
    category: '1',
    seller: {
      id: 's1',
      name: 'Building World',
      rating: 4.8,
      location: 'Jakarta'
    },
    rating: 4.7,
    reviewCount: 245,
    stock: 500,
    sold: 1250,
    isPopular: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Metal Roof Tile 0.35mm',
    price: 120000,
    image: '/roof 1.png',
    images: ['/roof 1.png', '/roof 2.png', '/roof 3.png'],
    description: 'Durable and lightweight metal roof tile with anti-corrosion coating. Provides an elegant appearance with excellent weather resistance. Suitable for residential and commercial buildings.',
    category: '9',
    seller: {
      id: 's2',
      name: 'Steel Solutions',
      rating: 4.6,
      location: 'Surabaya'
    },
    rating: 4.8,
    reviewCount: 187,
    stock: 300,
    sold: 780,
    isPopular: true
  },
  {
    id: '3',
    name: 'Exterior Weather-Resistant Paint 20L',
    price: 850000,
    originalPrice: 950000,
    discount: 10,
    image: '/paint waterproof 1.png',
    images: ['/paint waterproof 1.png', '/paint waterproof 2.png', '/paint waterproof 3.png'],
    description: 'Premium quality exterior paint with weather-resistant properties. Provides excellent protection against harsh weather conditions while maintaining vibrant color for years.',
    category: '6',
    seller: {
      id: 's3',
      name: 'Color Masters',
      rating: 4.9,
      location: 'Bandung'
    },
    rating: 4.9,
    reviewCount: 315,
    stock: 120,
    sold: 580,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Ceramic Floor Tiles 60x60cm',
    price: 125000,
    image: '/ceramic 1.png',
    images: ['/ceramic 1.png', '/ceramic 2.png', '/ceramic 3.png'],
    description: 'Elegant ceramic floor tiles suitable for living rooms, kitchens, and bathrooms. Easy to clean and maintain with slip-resistant surface.',
    category: '7',
    seller: {
      id: 's4',
      name: 'Tile Excellence',
      rating: 4.7,
      location: 'Semarang'
    },
    rating: 4.6,
    reviewCount: 230,
    stock: 1000,
    sold: 2500,
    isPopular: true
  },
  {
    id: '5',
    name: 'Red Clay Brick',
    price: 1245,
    originalPrice: 1500,
    discount: 17,
    image: '/brick 1.png',
    images: ['/brick 1.png', '/brick 2.png', '/brick 3.png'],
    description: 'Traditional red clay brick for wall construction. Strong and reliable, suitable for both exterior and interior walls.',
    category: '4',
    seller: {
      id: 's5',
      name: 'Brick & Co',
      rating: 4.5,
      location: 'Medan'
    },
    rating: 4.5,
    reviewCount: 178,
    stock: 450,
    sold: 820,
    isFeatured: true
  },
  {
    id: '6',
    name: 'Cordless Power Drill Kit 20V',
    price: 1250000,
    image: '/drill 1.png',
    images: ['/drill 1.png', '/drill 2.png', '/drill 3.png'],
    description: 'Professional cordless drill kit with 18V battery, charger, and multiple drill bits. Perfect for home improvement and construction projects.',
    category: '8',
    seller: {
      id: 's6',
      name: 'Tool Experts',
      rating: 4.9,
      location: 'Jakarta'
    },
    rating: 4.8,
    reviewCount: 298,
    stock: 75,
    sold: 420,
    isPopular: true
  },
  {
    id: '7',
    name: 'Solid Wood Entry Door 36"x80"',
    price: 3500000,
    originalPrice: 4000000,
    discount: 12,
    image: '/pintu 1.png',
    images: ['/pintu 1.png', '/pintu 2.png', '/pintu 3.png'],
    description: 'Elegant solid wood entry door with premium hardware. Provides excellent security and insulation while enhancing your home\'s curb appeal.',
    category: '5',
    seller: {
      id: 's7',
      name: 'Door Craftsmen',
      rating: 4.9,
      location: 'Bali'
    },
    rating: 4.9,
    reviewCount: 124,
    stock: 15,
    sold: 68,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Steel Claw Hammer 16oz - Anti-Slip Handle',
    price: 25000,
    image: '/palu 1.png',
    images: ['/palu 1.png', '/palu 2.png', '/palu 3.png'],
    description: 'Durable 16oz steel claw hammer designed for construction and carpentry work. Features an anti-slip rubber handle for better grip and comfort. Suitable for driving nails and removing them with ease.',
    category: '2',
    seller: {
      id: 's8',
      name: 'ToolMaster Indonesia',
      rating: 4.6,
      location: 'Palembang'
    },
    rating: 4.7,
    reviewCount: 215,
    stock: 800,
    sold: 1560,
    isPopular: true
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getPopularProducts = (): Product[] => {
  return products.filter((product) => product.isPopular);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.isFeatured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery) ||
      product.seller.name.toLowerCase().includes(lowerCaseQuery)
  );
};
