// src/config/products.js - UPDATED WITH YOUR PRODUCTS

// Product categories
export const productCategories = [
  {
    id: 'home-care',
    name: 'Home Care Products',
    icon: '🏠',
    description: 'Essential medical devices for home healthcare'
  },
  {
    id: 'ecg-cables', 
    name: 'ECG Cables',
    icon: '📊',
    description: 'High-quality ECG cables for various monitor brands'
  },
  {
    id: 'temperature-probes',
    name: 'Temperature Probes',
    icon: '🌡️',
    description: 'Precision temperature probes for medical monitors'
  },
  {
    id: 'spo2-sensors',
    name: 'SpO2 Sensors',
    icon: '❤️',
    description: 'Clip-type SpO2 sensors for accurate oxygen monitoring'
  },
  {
    id: 'nibp-cuffs',
    name: 'NIBP Cuffs',
    icon: '💪',
    description: 'Single & double side NIBP cuffs for blood pressure monitoring'
  },
  {
    id: 'nibp-hoses',
    name: 'NIBP Hoses',
    icon: '🔄',
    description: 'Durable NIBP hoses for various monitor brands'
  }
];

// Complete product catalog
export const allProducts = [
  // Home Care Products
  {
    id: 'bp-machine',
    name: 'BLOOD PRESSURE MACHINE',
    category: 'home-care',
    price: 2500,
    description: 'Digital blood pressure monitor for home use',
    features: ['Digital Display', 'Memory Function', 'One-touch Operation'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'glucometer',
    name: 'GULCOMETER WITH 25 STRIPS',
    category: 'home-care',
    price: 1200,
    description: 'Blood glucose monitoring system with strips',
    features: ['25 Test Strips', 'Fast Results', 'Compact Design'],
    brands: ['Accu-Chek', 'OneTouch', 'Contour'],
    inStock: true,
    isFeatured: true
  },
  {
    id: 'pulse-oximeter',
    name: 'PULSE OXIMETER',
    category: 'home-care',
    price: 1800,
    description: 'Finger-tip pulse oximeter for oxygen monitoring',
    features: ['OLED Display', 'Portable', 'Battery Operated'],
    brands: ['Choicemmed', 'Santamedical', 'Facelake'],
    inStock: true
  },
  {
    id: 'thermometer',
    name: 'THERMOMETER',
    category: 'home-care',
    price: 800,
    description: 'Digital thermometer for accurate temperature reading',
    features: ['Fast Reading', 'Fever Alert', 'Water Resistant'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    inStock: true
  },
  {
    id: 'hot-air-bag',
    name: 'HOT AIR BAG',
    category: 'home-care',
    price: 1500,
    description: 'Hot air bag for therapeutic heat treatment',
    features: ['Adjustable Temperature', 'Auto Shut-off', 'Soft Cover'],
    brands: ['Romsons', 'Hospi Equip'],
    inStock: true
  },
  {
    id: 'nebuliser',
    name: 'NEBULISER',
    category: 'home-care',
    price: 2200,
    description: 'Portable nebulizer for respiratory treatment',
    features: ['Portable', 'Quiet Operation', 'Complete Kit'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    inStock: true,
    isFeatured: true
  },

  // ECG Cables
  {
    id: 'ecg-philips',
    name: 'ECG CABLE - PHILIPS',
    category: 'ecg-cables',
    price: 3500,
    description: 'Original Philips ECG patient cable',
    features: ['10-lead', 'Original Philips', 'High Quality'],
    brands: ['Philips'],
    inStock: true
  },
  {
    id: 'ecg-mindray',
    name: 'ECG CABLE - MINDRAY',
    category: 'ecg-cables',
    price: 3200,
    description: 'Mindray compatible ECG patient cable',
    features: ['10-lead', 'Mindray Compatible', 'Durable'],
    brands: ['Mindray'],
    inStock: true
  },
  {
    id: 'ecg-nikkon',
    name: 'ECG CABLE - NIKKON KODHAN',
    category: 'ecg-cables',
    price: 2800,
    description: 'Nikkon Kodhan ECG patient cable',
    features: ['10-lead', 'Nikkon Compatible', 'Cost Effective'],
    brands: ['Nikkon Kodhan'],
    inStock: true
  },
  {
    id: 'ecg-bpl',
    name: 'ECG CABLE - BPL',
    category: 'ecg-cables',
    price: 3000,
    description: 'BPL compatible ECG patient cable',
    features: ['10-lead', 'BPL Compatible', 'Reliable'],
    brands: ['BPL'],
    inStock: true
  },
  {
    id: 'ecg-schiller',
    name: 'ECG CABLE - SCHILLER',
    category: 'ecg-cables',
    price: 3800,
    description: 'Schiller compatible ECG patient cable',
    features: ['10-lead', 'Schiller Compatible', 'Premium Quality'],
    brands: ['Schiller'],
    inStock: true
  },

  // Temperature Probes
  {
    id: 'temp-philips',
    name: 'TEMPERATURE PROBE - PHILIPS',
    category: 'temperature-probes',
    price: 4200,
    description: 'Philips temperature probe for patient monitors',
    features: ['Fast Response', 'Accurate', 'Philips Original'],
    brands: ['Philips'],
    inStock: true
  },
  {
    id: 'temp-mindray',
    name: 'TEMPERATURE PROBE - MINDRAY',
    category: 'temperature-probes',
    price: 3800,
    description: 'Mindray temperature probe',
    features: ['Fast Response', 'Mindray Compatible', 'Reliable'],
    brands: ['Mindray'],
    inStock: true
  },
  {
    id: 'temp-schiller',
    name: 'TEMPERATURE PROBE - SCHILLER',
    category: 'temperature-probes',
    price: 4500,
    description: 'Schiller temperature probe',
    features: ['Fast Response', 'Schiller Compatible', 'High Accuracy'],
    brands: ['Schiller'],
    inStock: true
  },

  // SpO2 Sensors
  {
    id: 'spo2-philips',
    name: 'SPO2 SENSOR - PHILIPS',
    category: 'spo2-sensors',
    price: 2800,
    description: 'Philips clip-type SpO2 sensor',
    features: ['Clip-type', 'Philips Original', 'Comfortable'],
    brands: ['Philips'],
    inStock: true
  },
  {
    id: 'spo2-mindray',
    name: 'SPO2 SENSOR - MINDRAY',
    category: 'spo2-sensors',
    price: 2500,
    description: 'Mindray clip-type SpO2 sensor',
    features: ['Clip-type', 'Mindray Compatible', 'Accurate'],
    brands: ['Mindray'],
    inStock: true
  },
  {
    id: 'spo2-nikkon',
    name: 'SPO2 SENSOR - NIKKON KODHAN',
    category: 'spo2-sensors',
    price: 2200,
    description: 'Nikkon Kodhan clip-type SpO2 sensor',
    features: ['Clip-type', 'Nikkon Compatible', 'Cost Effective'],
    brands: ['Nikkon Kodhan'],
    inStock: true
  },
  {
    id: 'spo2-schiller',
    name: 'SPO2 SENSOR - SCHILLER',
    category: 'spo2-sensors',
    price: 3000,
    description: 'Schiller clip-type SpO2 sensor',
    features: ['Clip-type', 'Schiller Compatible', 'Premium Quality'],
    brands: ['Schiller'],
    inStock: true
  },

  // NIBP Cuffs
  {
    id: 'nibp-single-philips',
    name: 'NIBP CUFF SINGLE - PHILIPS',
    category: 'nibp-cuffs',
    price: 1800,
    description: 'Philips single side NIBP cuff',
    features: ['Single Side', 'Philips Original', 'Various Sizes'],
    brands: ['Philips'],
    inStock: true
  },
  {
    id: 'nibp-double-philips',
    name: 'NIBP CUFF DOUBLE - PHILIPS',
    category: 'nibp-cuffs',
    price: 2200,
    description: 'Philips double side NIBP cuff',
    features: ['Double Side', 'Philips Original', 'Comfortable'],
    brands: ['Philips'],
    inStock: true
  },
  {
    id: 'nibp-single-mindray',
    name: 'NIBP CUFF SINGLE - MINDRAY',
    category: 'nibp-cuffs',
    price: 1600,
    description: 'Mindray single side NIBP cuff',
    features: ['Single Side', 'Mindray Compatible', 'Durable'],
    brands: ['Mindray'],
    inStock: true
  },
  {
    id: 'nibp-double-mindray',
    name: 'NIBP CUFF DOUBLE - MINDRAY',
    category: 'nibp-cuffs',
    price: 2000,
    description: 'Mindray double side NIBP cuff',
    features: ['Double Side', 'Mindray Compatible', 'Reliable'],
    brands: ['Mindray'],
    inStock: true
  },

  // NIBP Hoses
  {
    id: 'hose-philips',
    name: 'NIBP HOSE - PHILIPS',
    category: 'nibp-hoses',
    price: 1200,
    description: 'Philips NIBP hose',
    features: ['Philips Original', 'Flexible', 'Durable'],
    brands: ['Philips'],
    inStock: true
  },
  {
    id: 'hose-mindray',
    name: 'NIBP HOSE - MINDRAY',
    category: 'nibp-hoses',
    price: 1000,
    description: 'Mindray NIBP hose',
    features: ['Mindray Compatible', 'Flexible', 'Cost Effective'],
    brands: ['Mindray'],
    inStock: true
  },
  {
    id: 'hose-nikkon',
    name: 'NIBP HOSE - NIKKON KODHAN',
    category: 'nibp-hoses',
    price: 900,
    description: 'Nikkon Kodhan NIBP hose',
    features: ['Nikkon Compatible', 'Flexible', 'Reliable'],
    brands: ['Nikkon Kodhan'],
    inStock: true
  },
  {
    id: 'hose-schiller',
    name: 'NIBP HOSE - SCHILLER',
    category: 'nibp-hoses',
    price: 1500,
    description: 'Schiller NIBP hose',
    features: ['Schiller Compatible', 'Premium Quality', 'Durable'],
    brands: ['Schiller'],
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