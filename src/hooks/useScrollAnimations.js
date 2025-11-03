import { useEffect, useRef } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animation') || 'fadeInUp';
          const delay = entry.target.getAttribute('data-delay') || 0;
          const duration = entry.target.getAttribute('data-duration') || '800ms';
          
          // Set custom duration if specified
          if (duration) {
            entry.target.style.setProperty('--animation-duration', duration);
          }
          
          setTimeout(() => {
            entry.target.classList.add('animate-in', animationType);
            
            // Animate children with staggered delays
            const staggerItems = entry.target.querySelectorAll('.stagger-item');
            staggerItems.forEach((item, index) => {
              const itemDelay = index * 150;
              setTimeout(() => {
                item.classList.add('animate-in');
              }, parseInt(delay) + itemDelay);
            });

            // Special animations for specific elements
            if (entry.target.classList.contains('flip-card')) {
              setTimeout(() => {
                entry.target.classList.add('flipped');
              }, parseInt(delay) + 500);
            }

          }, parseInt(delay));
        }
      });
    }, observerOptions);

    // Observe all elements with animation attributes
    const animatedElements = document.querySelectorAll(
      '[data-animation], .animate-on-scroll, .stagger-children'
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