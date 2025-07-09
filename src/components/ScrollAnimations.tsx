import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation delays for children
          const children = entry.target.querySelectorAll('.gt-fade-in, .gt-slide-up');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.gt-parallax');
      
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(htmlElement.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Floating animations
    const addFloatingAnimation = () => {
      const floatingElements = document.querySelectorAll('.gt-floating');
      floatingElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.animationDelay = `${index * 0.5}s`;
        htmlElement.classList.add('animate-pulse');
      });
    };

    // Mouse follow effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseFollowers = document.querySelectorAll('.gt-mouse-follow');
      mouseFollowers.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const rect = htmlElement.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        htmlElement.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });
    };

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.gt-fade-in, .gt-slide-up');
    animatedElements.forEach((el) => observer.observe(el));

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize effects
    addFloatingAnimation();

    // Trigger initial animations for elements already in view
    const checkInitialView = () => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    };
    
    setTimeout(checkInitialView, 100);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default ScrollAnimations;