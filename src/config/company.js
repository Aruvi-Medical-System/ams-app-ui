// All company information - easily customizable
export const companyConfig = {
  // Basic Company Info
  name:"Aruvi Medical Systems",
  legalName: "Aruvi Medical Systems Pvt. Ltd.",
  tagline: "Your Trusted Partner in Healthcare Solutions",
  logo: {
    text: "logo.png", // or use image path: "/logo.png"
    type: "image" // or "text"
  },
  
  // Contact Information
  contact: {
    phone: {
      primary: "+91 63855 86669"
    },
    email: {
      primary: "aruvimedicalsystem76@gmail.com",
    },
    address: {
      headOffice: "F2,sdbc Udhayam apartment,Jaswant’s nagar phase II, 2 nd street,Mogappair West,Chennai-600037",
    }
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/aruvimedicalsystems",
    twitter: "https://twitter.com/aruvimedicalsystems",
    linkedin: "https://linkedin.com/company/aruvimedicalsystems",
    instagram: "https://instagram.com/aruvimedicalsystems"
  },

  // Business Hours
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  },

  // Company Stats (easily updatable)
  stats: {
    yearsExperience: "15+",
    countriesServed: "50+",
    healthcarePartners: "500+",
    productsAvailable: "1000+"
  },

  // Certifications & Accreditations
  certifications: [
    {
      name: "ISO 13485:2016",
      description: "Medical Devices Quality Management"
    },
    {
      name: "ISO 9001:2015", 
      description: "Quality Management Systems"
    },
    {
      name: "CE Marking",
      description: "European Conformity"
    },
    {
      name: "FDA Registered",
      description: "US Food and Drug Administration"
    }
  ],

  // Partner Hospitals (configurable)
  partnerHospitals: [
    { name: "Metropolitan General Hospital", logo: "🏥" },
    { name: "Unity Healthcare System", logo: "⚕️" },
    { name: "City Medical Center", logo: "🏨" },
    { name: "Regional Clinic Network", logo: "🩺" },
    { name: "National Health Partners", logo: "🌐" },
    { name: "Prime Care Alliance", logo: "⭐" }
  ],

  // Features Highlight
  features: [
    {
      icon: "🏥",
      title: "Hospital Grade Equipment",
      description: "Medical-grade equipment meeting international standards"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and reliable shipping across the country"
    },
    {
      icon: "🔧", 
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Best prices for bulk orders and long-term partnerships"
    }
  ],
  visionMission: {
    vision: {
      title: "Our Vision",
      description: "To be the most trusted Tamil Nadu distributor of precision surgical instruments, empowering healthcare professionals with reliable tools that ensure excellence in every procedure"
    },
    mission: {
      title: "Our Mission", 
      description: "Our mission is to be a trusted partner to healthcare institutions by offering timely distribution of cutting-edge medical equipment, backed by exceptional customer service, technical expertise, and ongoing support."
    },
    values: [
      {
        icon: "🎯",
        title: "Excellence",
        description: "Commitment to highest quality standards in everything we do"
      },
      {
        icon: "🤝",
        title: "Integrity",
        description: "Building trust through transparency and ethical practices"
      },
      {
        icon: "💡", 
        title: "Innovation",
        description: "Continuously evolving to meet healthcare's changing needs"
      },
      {
        icon: "❤️",
        title: "Care",
        description: "Putting patient well-being at the heart of our operations"
      }
    ]
  }
};

export default companyConfig;