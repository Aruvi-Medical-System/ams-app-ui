// // App settings and configuration
// export const appSettings = {
//   // API Configuration (will be used when backend is ready)
//   api: {
//     baseURL: process.env.NODE_ENV === 'production' 
//       ? 'https://your-backend-url.herokuapp.com/api' 
//       : 'http://localhost:5000/api',
//     timeout: 10000
//   },

//   // UI/UX Settings
//   ui: {
//     theme: {
//       primaryColor: '#1a365d',
//       secondaryColor: '#2d3748', 
//       accentColor: '#3182ce',
//       medicalGreen: '#38a169',
//       lightBg: '#f7fafc'
//     },
//     animations: {
//       enable: true,
//       duration: 300
//     }
//   },

//   // Features Flags
//   features: {
//     auth: false, // Will enable when backend is ready
//     search: true,
//     quotes: true,
//     liveChat: false // Can integrate with free services like Tawk.to later
//   },

//   // Free Services Configuration
//   freeServices: {
//     email: {
//       // Can use free tier of EmailJS or similar
//       service: 'emailjs',
//       templateId: 'your_template_id'
//     },
//     analytics: {
//       // Google Analytics or similar
//       enabled: true,
//       trackingId: 'your_tracking_id'
//     }
//   }
// };

// export default appSettings;

// App settings and configuration
export const appSettings = {
  // Global Theme Colors (You can update these later with your logo colors)
  theme: {
    // primary: '#1a365d',       // Dark Blue
    primary: '#ef1c22',
    secondary: '#94c23c',     // Medium Blue  
    accent: '#3182ce',        // Light Blue
    medical: '#38a169',       // Medical Green
    light: '#f7fafc',         // Light Background
    white: '#ffffff',
    text: {
      dark: '#2d3748',
      light: '#718096'
    }
  },

  // Animation Settings
  animations: {
    smoothScroll: true,
    fadeIn: true,
    stagger: true,
    duration: {
      fast: '0.3s',
      normal: '0.5s', 
      slow: '0.8s'
    }
  },

  // Features
  features: {
    whatsapp: true,
    imageGallery: true,
    productSearch: true,
    reviewsCarousel: true
  },

  // WhatsApp Configuration
  whatsapp: {
    number: '7550087406', // Replace with your number
    message: 'Hello! I need information about medical equipment.'
  }
};

export default appSettings;