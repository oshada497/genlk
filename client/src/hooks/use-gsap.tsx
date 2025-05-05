
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapHeroAnimation() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }

    // Hero title animation
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }

    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      });
    }
  }, []);

  return { titleRef, subtitleRef, headerRef };
}

export function useGsapSectionAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      gsap.from(section.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}

export function useGsapButtonHoverEffect() {
  useEffect(() => {
    const buttons = document.querySelectorAll('button, .button-like');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);
}

export function useGsapImageHoverEffect() {
  useEffect(() => {
    const images = document.querySelectorAll('.gallery-grid img');
    
    images.forEach(img => {
      img.addEventListener('mouseenter', () => {
        gsap.to(img, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      img.addEventListener('mouseleave', () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);
}
