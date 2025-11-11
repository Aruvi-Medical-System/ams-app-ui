// src/config/products.js - UPDATED WITH CONFIGURABLE IMAGE PATHS

// Image configuration - Update these paths when you add images
export const productImages = {
  // Home Care Products
  'bp-machine': `${import.meta.env.BASE_URL}/src/assets/products/bp-machine.jpg`,
  'glucometer': `${import.meta.env.BASE_URL}/src/assets/products/glucometer.jpg`, 
  'pulse-oximeter': `${import.meta.env.BASE_URL}/src/assets/products/pulse-oximeter.jpg`,
  'thermometer': `${import.meta.env.BASE_URL}/src/assets/products/thermometer.jpg`,
  'hot-air-bag': `${import.meta.env.BASE_URL}/src/assets/products/hot-air-bag.jpg`, // You'll need to add this
  'nebuliser': `${import.meta.env.BASE_URL}/src/assets/products/nebuliser.jpg`, // You'll need to add this
  
  // ECG Cables
  'ecg-philips': `${import.meta.env.BASE_URL}/src/assets/products/ecg-philips.jpg`,
  'ecg-mindray': `${import.meta.env.BASE_URL}/src/assets/products/ecg-mindray.jpg`,
  'ecg-nikkon': `${import.meta.env.BASE_URL}/src/assets/products/ecg-nikkon.jpg`,
  'ecg-bpl': `${import.meta.env.BASE_URL}/src/assets/products/ecg-bpl.jpg`,
  'ecg-schiller': `${import.meta.env.BASE_URL}/src/assets/products/ecg-schiller.jpg`,
  
  // Temperature Probes
  'temp-philips': `${import.meta.env.BASE_URL}/src/assets/products/temp-philips.jpg`,
  'temp-mindray': `${import.meta.env.BASE_URL}/src/assets/products/temp-mindray.jpg`,
  'temp-schiller': `${import.meta.env.BASE_URL}/src/assets/products/temp-schiller.jpg`,
  
  // SpO2 Sensors
  'spo2-philips': `${import.meta.env.BASE_URL}/src/assets/products/spo2-philips.jpg`,
  'spo2-mindray': `${import.meta.env.BASE_URL}/src/assets/products/spo2-mindray.jpg`,
  'spo2-nikkon': `${import.meta.env.BASE_URL}/src/assets/products/spo2-nikkon.jpg`,
  'spo2-schiller': `${import.meta.env.BASE_URL}/src/assets/products/spo2-schiller.jpg`,
  
  // NIBP Cuffs
  'nibp-single-philips': `${import.meta.env.BASE_URL}/src/assets/products/nibp-single-philips.jpg`,
  'nibp-double-philips': `${import.meta.env.BASE_URL}/src/assets/products/nibp-double-philips.jpg`,
  'nibp-single-mindray': `${import.meta.env.BASE_URL}/src/assets/products/nibp-single-mindray.jpg`,
  'nibp-double-mindray': `${import.meta.env.BASE_URL}/src/assets/products/nibp-double-mindray.jpg`,
  
  // NIBP Hoses
  'hose-philips': `${import.meta.env.BASE_URL}/src/assets/products/hose-philips.jpg`,
  'hose-mindray': `${import.meta.env.BASE_URL}/src/assets/products/hose-mindray.jpg`,
  'hose-nikkon': `${import.meta.env.BASE_URL}/src/assets/products/hose-nikkon.jpg`,
  'hose-schiller': `${import.meta.env.BASE_URL}/src/assets/products/hose-schiller.jpg`
};

// Product categories
export const productCategories = [
  {
    id: 'home-care',
    name: 'Home Care Products',
    icon: '🏠',
    description: 'Essential medical devices for home healthcare',
    image: `${import.meta.env.BASE_URL}/src/assets/products/home_care_products.jpg`
  },
  {
    id: 'ecg-cables', 
    name: 'ECG Cables',
    icon: '📊',
    description: 'High-quality ECG cables for various monitor brands',
    image: `${import.meta.env.BASE_URL}/src/assets/products/ecg_cables.jpg`
  },
  {
    id: 'temperature-probes',
    name: 'Temperature Probes',
    icon: '🌡️',
    description: 'Precision temperature probes for medical monitors',
    image: `${import.meta.env.BASE_URL}/src/assets/products/temperature_probes.jpg`
  },
  {
    id: 'spo2-sensors',
    name: 'SpO2 Sensors',
    icon: '❤️',
    description: 'Clip-type SpO2 sensors for accurate oxygen monitoring',
    image: `${import.meta.env.BASE_URL}/src/assets/products/spo2sensor.jpg`
  },
  {
    id: 'nibp-cuffs',
    name: 'NIBP Cuffs',
    icon: '💪',
    description: 'Single & double side NIBP cuffs for blood pressure monitoring',
    image: `${import.meta.env.BASE_URL}/src/assets/products/cuff.jpg`
  },
  {
    id: 'nibp-hoses',
    name: 'NIBP Hoses',
    icon: '🔄',
    description: 'Durable NIBP hoses for various monitor brands',
    image: `${import.meta.env.BASE_URL}/src/assets/products/hose.jpg`
  }
];

// Helper function to get image path
const getProductImage = (productId) => {
  return productImages[productId] || '/src/assets/products/placeholder.jpg'; // Fallback image
};

// Complete product catalog
export const allProducts = [
  // Home Care Products
  {
    id: 'bp-machine',
    name: 'BLOOD PRESSURE MACHINE',
    category: 'home-care',
    price: 'Contact for Price',
    description: 'Digital blood pressure monitor for home use',
    features: ['Digital Display', 'Memory Function', 'One-touch Operation'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    image: getProductImage('bp-machine'),
    inStock: true,
    isFeatured: true
  },
  {
    id: 'glucometer',
    name: 'GULCOMETER WITH 25 STRIPS',
    category: 'home-care',
    price: 'Contact for Price',
    description: 'Blood glucose monitoring system with strips',
    features: ['25 Test Strips', 'Fast Results', 'Compact Design'],
    brands: ['Accu-Chek', 'OneTouch', 'Contour'],
    image: getProductImage('glucometer'),
    inStock: true,
    isFeatured: true
  },
  {
    id: 'pulse-oximeter',
    name: 'PULSE OXIMETER',
    category: 'home-care',
    price: 'Contact for Price',
    description: 'Finger-tip pulse oximeter for oxygen monitoring',
    features: ['OLED Display', 'Portable', 'Battery Operated'],
    brands: ['Choicemmed', 'Santamedical', 'Facelake'],
    image: getProductImage('pulse-oximeter'),
    inStock: true
  },
  {
    id: 'thermometer',
    name: 'THERMOMETER',
    category: 'home-care',
    price: 'Contact for Price',
    description: 'Digital thermometer for accurate temperature reading',
    features: ['Fast Reading', 'Fever Alert', 'Water Resistant'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    image: getProductImage('thermometer'),
    inStock: true
  },
  {
    id: 'hot-air-bag',
    name: 'HOT AIR BAG',
    category: 'home-care',
    price: 'Contact for Price',
    description: 'Hot air bag for therapeutic heat treatment',
    features: ['Adjustable Temperature', 'Auto Shut-off', 'Soft Cover'],
    brands: ['Romsons', 'Hospi Equip'],
    image: getProductImage('hot-air-bag'),
    inStock: true
  },
  {
    id: 'nebuliser',
    name: 'NEBULISER',
    category: 'home-care',
    price: 'Contact for Price',
    description: 'Portable nebulizer for respiratory treatment',
    features: ['Portable', 'Quiet Operation', 'Complete Kit'],
    brands: ['Omron', 'Dr. Morepen', 'BPL'],
    image: getProductImage('nebuliser'),
    inStock: true,
    isFeatured: true
  },

  // ECG Cables
  {
    id: 'ecg-philips',
    name: 'ECG CABLE - PHILIPS',
    category: 'ecg-cables',
    price: 'Contact for Price',
    description: 'Original Philips ECG patient cable',
    features: ['10-lead', 'Original Philips', 'High Quality'],
    brands: ['Philips'],
    image: getProductImage('ecg-philips'),
    inStock: true
  },
  {
    id: 'ecg-mindray',
    name: 'ECG CABLE - MINDRAY',
    category: 'ecg-cables',
    price: 'Contact for Price',
    description: 'Mindray compatible ECG patient cable',
    features: ['10-lead', 'Mindray Compatible', 'Durable'],
    brands: ['Mindray'],
    image: getProductImage('ecg-mindray'),
    inStock: true
  },
  {
    id: 'ecg-nikkon',
    name: 'ECG CABLE - NIKKON KODHAN',
    category: 'ecg-cables',
    price: 'Contact for Price',
    description: 'Nikkon Kodhan ECG patient cable',
    features: ['10-lead', 'Nikkon Compatible', 'Cost Effective'],
    brands: ['Nikkon Kodhan'],
    image: getProductImage('ecg-nikkon'),
    inStock: true
  },
  {
    id: 'ecg-bpl',
    name: 'ECG CABLE - BPL',
    category: 'ecg-cables',
    price: 'Contact for Price',
    description: 'BPL compatible ECG patient cable',
    features: ['10-lead', 'BPL Compatible', 'Reliable'],
    brands: ['BPL'],
    image: getProductImage('ecg-bpl'),
    inStock: true
  },
  {
    id: 'ecg-schiller',
    name: 'ECG CABLE - SCHILLER',
    category: 'ecg-cables',
    price: 'Contact for Price',
    description: 'Schiller compatible ECG patient cable',
    features: ['10-lead', 'Schiller Compatible', 'Premium Quality'],
    brands: ['Schiller'],
    image: getProductImage('ecg-schiller'),
    inStock: true
  },

  // Temperature Probes
  {
    id: 'temp-philips',
    name: 'TEMPERATURE PROBE - PHILIPS',
    category: 'temperature-probes',
    price: 'Contact for Price',
    description: 'Philips temperature probe for patient monitors',
    features: ['Fast Response', 'Accurate', 'Philips Original'],
    brands: ['Philips'],
    image: getProductImage('temp-philips'),
    inStock: true
  },
  {
    id: 'temp-mindray',
    name: 'TEMPERATURE PROBE - MINDRAY',
    category: 'temperature-probes',
    price: 'Contact for Price',
    description: 'Mindray temperature probe',
    features: ['Fast Response', 'Mindray Compatible', 'Reliable'],
    brands: ['Mindray'],
    image: getProductImage('temp-mindray'),
    inStock: true
  },
  {
    id: 'temp-schiller',
    name: 'TEMPERATURE PROBE - SCHILLER',
    category: 'temperature-probes',
    price: 'Contact for Price',
    description: 'Schiller temperature probe',
    features: ['Fast Response', 'Schiller Compatible', 'High Accuracy'],
    brands: ['Schiller'],
    image: getProductImage('temp-schiller'),
    inStock: true
  },

  // SpO2 Sensors
  {
    id: 'spo2-philips',
    name: 'SPO2 SENSOR - PHILIPS',
    category: 'spo2-sensors',
    price: 'Contact for Price',
    description: 'Philips clip-type SpO2 sensor',
    features: ['Clip-type', 'Philips Original', 'Comfortable'],
    brands: ['Philips'],
    image: getProductImage('spo2-philips'),
    inStock: true
  },
  {
    id: 'spo2-mindray',
    name: 'SPO2 SENSOR - MINDRAY',
    category: 'spo2-sensors',
    price: 'Contact for Price',
    description: 'Mindray clip-type SpO2 sensor',
    features: ['Clip-type', 'Mindray Compatible', 'Accurate'],
    brands: ['Mindray'],
    image: getProductImage('spo2-mindray'),
    inStock: true
  },
  {
    id: 'spo2-nikkon',
    name: 'SPO2 SENSOR - NIKKON KODHAN',
    category: 'spo2-sensors',
    price: 'Contact for Price',
    description: 'Nikkon Kodhan clip-type SpO2 sensor',
    features: ['Clip-type', 'Nikkon Compatible', 'Cost Effective'],
    brands: ['Nikkon Kodhan'],
    image: getProductImage('spo2-nikkon'),
    inStock: true
  },
  {
    id: 'spo2-schiller',
    name: 'SPO2 SENSOR - SCHILLER',
    category: 'spo2-sensors',
    price: 'Contact for Price',
    description: 'Schiller clip-type SpO2 sensor',
    features: ['Clip-type', 'Schiller Compatible', 'Premium Quality'],
    brands: ['Schiller'],
    image: getProductImage('spo2-schiller'),
    inStock: true
  },

  // NIBP Cuffs
  {
    id: 'nibp-single-philips',
    name: 'NIBP CUFF SINGLE - PHILIPS',
    category: 'nibp-cuffs',
    price: 'Contact for Price',
    description: 'Philips single side NIBP cuff',
    features: ['Single Side', 'Philips Original', 'Various Sizes'],
    brands: ['Philips'],
    image: getProductImage('nibp-single-philips'),
    inStock: true
  },
  {
    id: 'nibp-double-philips',
    name: 'NIBP CUFF DOUBLE - PHILIPS',
    category: 'nibp-cuffs',
    price: 'Contact for Price',
    description: 'Philips double side NIBP cuff',
    features: ['Double Side', 'Philips Original', 'Comfortable'],
    brands: ['Philips'],
    image: getProductImage('nibp-double-philips'),
    inStock: true
  },
  {
    id: 'nibp-single-mindray',
    name: 'NIBP CUFF SINGLE - MINDRAY',
    category: 'nibp-cuffs',
    price: 'Contact for Price',
    description: 'Mindray single side NIBP cuff',
    features: ['Single Side', 'Mindray Compatible', 'Durable'],
    brands: ['Mindray'],
    image: getProductImage('nibp-single-mindray'),
    inStock: true
  },
  {
    id: 'nibp-double-mindray',
    name: 'NIBP CUFF DOUBLE - MINDRAY',
    category: 'nibp-cuffs',
    price: 'Contact for Price',
    description: 'Mindray double side NIBP cuff',
    features: ['Double Side', 'Mindray Compatible', 'Reliable'],
    brands: ['Mindray'],
    image: getProductImage('nibp-double-mindray'),
    inStock: true
  },

  // NIBP Hoses
  {
    id: 'hose-philips',
    name: 'NIBP HOSE - PHILIPS',
    category: 'nibp-hoses',
    price: 'Contact for Price',
    description: 'Philips NIBP hose',
    features: ['Philips Original', 'Flexible', 'Durable'],
    brands: ['Philips'],
    image: getProductImage('hose-philips'),
    inStock: true
  },
  {
    id: 'hose-mindray',
    name: 'NIBP HOSE - MINDRAY',
    category: 'nibp-hoses',
    price: 'Contact for Price',
    description: 'Mindray NIBP hose',
    features: ['Mindray Compatible', 'Flexible', 'Cost Effective'],
    brands: ['Mindray'],
    image: getProductImage('hose-mindray'),
    inStock: true
  },
  {
    id: 'hose-nikkon',
    name: 'NIBP HOSE - NIKKON KODHAN',
    category: 'nibp-hoses',
    price: 'Contact for Price',
    description: 'Nikkon Kodhan NIBP hose',
    features: ['Nikkon Compatible', 'Flexible', 'Reliable'],
    brands: ['Nikkon Kodhan'],
    image: getProductImage('hose-nikkon'),
    inStock: true
  },
  {
    id: 'hose-schiller',
    name: 'NIBP HOSE - SCHILLER',
    category: 'nibp-hoses',
    price: 'Contact for Price',
    description: 'Schiller NIBP hose',
    features: ['Schiller Compatible', 'Premium Quality', 'Durable'],
    brands: ['Schiller'],
    image: getProductImage('hose-schiller'),
    inStock: true
  }
];

// Featured products (subset of all products)
export const featuredProducts = allProducts.filter(product => product.isFeatured);

export default {
  categories: productCategories,
  featured: featuredProducts,
  all: allProducts,
  images: productImages // Export images config for easy management
};