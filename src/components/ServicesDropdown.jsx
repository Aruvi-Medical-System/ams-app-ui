// First, let's create the Services dropdown component
import React from 'react';
import './ServicesDropdown.css';

const ServicesDropdown = () => {
  const services = [
    {
      category: "Operation Theater Equipment",
      items: ["OT Table", "OT Light"]
    },
    {
      category: "Diagnostic Equipment", 
      items: ["ECG Machine", "Multi Para Monitor", "Lab Microscopes"]
    },
    {
      category: "Patient Care Equipment",
      items: ["Baby Warmer", "Boyle's Apparatus", "Oxygen Pipe Line"]
    },
    {
      category: "Sterilization & Maintenance",
      items: ["Auto Clave", "Fogger Machine", "Hospital Curtain Screen Work"]
    },
    {
      category: "Other Equipment",
      items: ["Defibrillator", "Diathermy Machine"]
    }
  ];

  const handleServiceClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="services-dropdown">
      <button className="services-trigger">
        Services ▼
      </button>
      <div className="services-menu">
        {services.map((category, index) => (
          <div key={index} className="services-category">
            <h4>{category.category}</h4>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href="#services" onClick={handleServiceClick}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;