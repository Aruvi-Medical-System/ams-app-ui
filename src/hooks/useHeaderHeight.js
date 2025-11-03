import { useState, useEffect } from 'react';

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector('.header');
      if (header) {
        const height = header.offsetHeight;
        setHeaderHeight(height);
        
        // Apply the height to marquee
        const marquee = document.querySelector('.welcome-marquee');
        if (marquee) {
          marquee.style.marginTop = `${height}px`;
        }
      }
    };

    // Calculate initially
    calculateHeaderHeight();

    // Recalculate on resize
    window.addEventListener('resize', calculateHeaderHeight);
    
    // Recalculate when scrolled (for sticky header changes)
    window.addEventListener('scroll', calculateHeaderHeight);

    return () => {
      window.removeEventListener('resize', calculateHeaderHeight);
      window.removeEventListener('scroll', calculateHeaderHeight);
    };
  }, []);

  return headerHeight;
};