// Product categories
export const productCategories = [
  {
    id: 'laparoscopic',
    name: 'Laparoscopic Instruments',
    icon: '🔪',
    description: 'Precision laparoscopic tools and equipment'
  },
  {
    id: 'surgical', 
    name: 'Surgical Instruments',
    icon: '🩺',
    description: 'Comprehensive range of surgical tools'
  },
  {
    id: 'disposable',
    name: 'Disposable Products',
    icon: '📦',
    description: 'Single-use medical devices and trocars'
  },
  {
    id: 'accessories',
    name: 'Accessories & Retractors', 
    icon: '🔧',
    description: 'Medical accessories and retraction systems'
  }
];

// Complete product catalog with image placeholders
export const allProducts = [
  // Laparoscopic Instruments
  {
    id: 1,
    name: 'GRASPER MARRY LAND',
    category: 'laparoscopic',
    variants: ['SMALL 5MM', 'MEDIUM 5MM', 'LARGE 5MM'],
    price: 450,
    description: 'Precision Maryland grasper for laparoscopic procedures',
    features: ['5mm diameter', 'Precision jaws', 'Comfort grip'],
    image: '/images/products/grasper-maryland.jpg',
    inStock: true,
    isFeatured: true
  },
  {
    id: 2,
    name: 'SCISSORS METABONISUM (CURVED)',
    category: 'laparoscopic', 
    price: 520,
    description: 'Curved metabonium scissors for precise cutting',
    features: ['5mm diameter', 'Curved design', 'Sharp blades'],
    image: '/images/products/scissors-metabonium.jpg',
    inStock: true,
    isFeatured: true
  },
  {
    id: 3,
    name: 'PLAIN GRASPER',
    category: 'laparoscopic',
    price: 380,
    description: 'Standard plain grasper for general use',
    features: ['5mm diameter', 'Smooth jaws', 'Reliable grip'],
    image: '/images/products/plain-grasper.jpg',
    inStock: true
  },
  {
    id: 4,
    name: 'UNIVERSAL OR MAXIGRIP GRASPER',
    category: 'laparoscopic',
    price: 480,
    description: 'Universal grasper with maxigrip technology',
    features: ['5mm diameter', 'Enhanced grip', 'Multi-purpose'],
    image: '/images/products/universal-grasper.jpg',
    inStock: true,
    isFeatured: true
  },
  {
    id: 5,
    name: 'BABCOCK GRASPER',
    category: 'laparoscopic',
    variants: ['LONG 5MM', 'SHORT 5MM'],
    price: 420,
    description: 'Babcock grasper for delicate tissue handling',
    features: ['5mm diameter', 'Atraumatic jaws', 'Precision control'],
    image: '/images/products/babcock-grasper.jpg',
    inStock: true
  },
  {
    id: 6,
    name: 'BOWEL GRASPER',
    category: 'laparoscopic',
    variants: ['SMALL 5MM', 'MEDIUM 5MM', 'LARGE 5MM'],
    price: 460,
    description: 'Specialized bowel grasper for gastrointestinal procedures',
    features: ['5mm diameter', 'Gentle grip', 'Various sizes'],
    image: '/images/products/bowel-grasper.jpg',
    inStock: true
  },
  {
    id: 7,
    name: '2X3 CLAW FORCEPS',
    category: 'laparoscopic',
    price: 390,
    description: '2x3 claw forceps for secure tissue holding',
    features: ['5mm diameter', 'Claw design', 'Secure grip'],
    image: '/images/products/claw-forceps.jpg',
    inStock: true
  },
  {
    id: 8, 
    name: '2X4 GRASPER',
    category: 'laparoscopic',
    price: 410,
    description: '2x4 grasper for enhanced holding capacity',
    features: ['5mm diameter', 'Enhanced jaws', 'Reliable performance'],
    image: '/images/products/2x4-grasper.jpg',
    inStock: true
  },
  {
    id: 9,
    name: 'ALLIGATOR GRASPER',
    category: 'laparoscopic',
    price: 490,
    description: 'Alligator grasper for difficult-to-reach areas',
    features: ['5mm diameter', 'Articulating jaws', 'Extended reach'],
    image: '/images/products/alligator-grasper.jpg',
    inStock: true,
    isFeatured: true
  },

  // Surgical Instruments
  {
    id: 10,
    name: 'CLIP APPLICATOR',
    category: 'surgical',
    variants: ['10MM 3-IN-1', 'SMALL JAW'],
    price: 1200,
    description: 'Advanced clip applicator for surgical procedures',
    features: ['Multiple clip sizes', 'Easy loading', 'Precision application'],
    image: '/images/products/clip-applicator.jpg',
    inStock: true,
    isFeatured: true
  },
  {
    id: 11,
    name: 'HEMOLOCK APPLICATOR',
    category: 'surgical',
    price: 950,
    description: 'Hemolock applicator for secure vessel closure',
    features: ['10mm diameter', 'Secure locking', 'Easy to use'],
    image: '/images/products/hemolock.jpg',
    inStock: true
  },

  // Disposable Products
  {
    id: 12,
    name: 'DISPOSABLE TROCAR',
    category: 'disposable', 
    variants: ['5MM', '10MM'],
    price: 85,
    description: 'Single-use disposable trocar for safety',
    features: ['Sterile packed', 'Safety shield', 'Sharp blade'],
    image: '/images/products/disposable-trocar.jpg',
    inStock: true,
    isFeatured: true
  },
  {
    id: 13,
    name: 'VERESS NEEDLE',
    category: 'disposable',
    variants: ['100MM', '120MM', '140MM'],
    price: 45,
    description: 'Veress needle for safe pneumoperitoneum',
    features: ['Safety spring', 'Sharp tip', 'Various lengths'],
    image: '/images/products/veress-needle.jpg',
    inStock: true
  },

  // Accessories
  {
    id: 14,
    name: 'PORT CLOSER',
    category: 'accessories',
    price: 320,
    description: 'Port closure device for trocar sites',
    features: ['Easy to use', 'Secure closure', 'Reusable'],
    image: '/images/products/port-closer.jpg',
    inStock: true
  },
  {
    id: 15,
    name: 'LIVER RETRACTOR',
    category: 'accessories',
    variants: ['5MM', '10MM'],
    price: 580,
    description: 'Snack-type liver retractor for surgical procedures',
    features: ['Adjustable', 'Secure hold', 'Various sizes'],
    image: '/images/products/liver-retractor.jpg',
    inStock: true
  }
];

// Featured products (subset of all products)
export const featuredProducts = allProducts.filter(product => product.isFeatured);

export default {
  categories: productCategories,
  featured: featuredProducts,
  all: allProducts
};