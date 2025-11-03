import { useEffect, useRef } from 'react';

export const useAdvancedAnimations = () => {
  useEffect(() => {
    // Advanced scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add different animation classes based on data attributes
          const animationType = entry.target.getAttribute('data-animation') || 'fadeIn';
          const delay = entry.target.getAttribute('data-delay') || 0;
          
          setTimeout(() => {
            entry.target.classList.add('animate-in', animationType);
            
            // Animate children with staggered delays
            const staggerItems = entry.target.querySelectorAll('.stagger-item');
            staggerItems.forEach((item, index) => {
              const itemDelay = index * 100;
              setTimeout(() => {
                item.classList.add('animate-in');
              }, parseInt(delay) + itemDelay);
            });
          }, parseInt(delay));
        }
      });
    }, observerOptions);

    // Observe all elements with animation attributes
    const animatedElements = document.querySelectorAll(
      '[data-animation], .animate-on-scroll'
    );
    
    animatedElements.forEach(el => observer.observe(el));

    return () => animatedElements.forEach(el => observer.unobserve(el));
  }, []);
};

// Parallax effect hook
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        elementRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

// Text reveal animation hook
export const useTextReveal = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-revealed');
        }
      });
    }, { threshold: 0.5 });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return textRef;
};