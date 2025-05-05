import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function IntroAnimation() {
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Always clear the session storage to show intro animation again
    sessionStorage.removeItem('hasSeenIntro');
    
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setShow(false);
      return;
    }
    
    // Exit if refs aren't available
    if (!introRef.current || !textRef.current || !glowRef.current) return;

    // Create GSAP timeline
    const tl = gsap.timeline();

    // Make sure text is completely invisible at the start
    tl.set(textRef.current, {
      opacity: 0,
      scale: 0.5,
      visibility: "hidden" // Hide completely before animation starts
    });
    
    // Add initial delay
    tl.delay(1);
    
    // Animate glow element before text appears
    tl.fromTo(glowRef.current, 
      { 
        opacity: 0, 
        scale: 0.2 
      },
      { 
        opacity: 0.7, 
        scale: 1.5,
        duration: 1.5, // Slower glow animation
        ease: "power2.out" 
      }
    );

    // Animate intro text: fade in and scale up with a neon flicker effect
    tl.to(textRef.current, {
      opacity: 1,
      scale: 1, 
      visibility: "visible", // Make it visible as part of the animation
      duration: 2, // Slower text animation
      ease: "elastic.out(1, 0.5)"
    })
    
    // Add a subtle flicker effect
    .to(textRef.current, {
      opacity: 0.85,
      duration: 0.1, // Slower flicker
      repeat: 5, // More flickers
      yoyo: true,
      ease: "none"
    }, "-=0.8");

    // Longer display time before fade out
    tl.to([introRef.current, glowRef.current, textRef.current], {
      opacity: 0,
      duration: 1.5, // Slower fade out
      delay: 3, // Much longer delay before fading out
      ease: "power2.inOut",
      onComplete: () => {
        // Remove the intro div from display after animation completes
        if (introRef.current) {
          introRef.current.style.display = 'none';
          // Store in session storage that we've shown the intro
          sessionStorage.setItem('hasSeenIntro', 'true');
        }
      }
    });

    // Cleanup function to ensure timeline is killed when component unmounts
    return () => {
      tl.kill();
    };
  }, []);

  // Don't render if we've already shown intro
  if (!show) return null;
  
  return (
    <div 
      ref={introRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Background glow element */}
      <div 
        ref={glowRef}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, rgba(57, 255, 20, 0.1) 60%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Main text */}
      <h1 
        ref={textRef}
        style={{
          position: 'relative',
          fontFamily: 'Orbitron, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 4rem)', // Responsive font size
          color: '#39FF14', // Bright green neon color
          textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
          textAlign: 'center',
          padding: '0 20px', // Add padding on smaller screens
          maxWidth: '100%',  // Ensure text doesn't overflow container
          wordBreak: 'break-word', // Allow word breaking for very small screens
          letterSpacing: '1px', // Improved readability
          zIndex: 1, // Keep text above the glow
          opacity: 0, // Start with 0 opacity
          visibility: 'hidden' // Start hidden
        }}
      >
        Welcome to GenLK
      </h1>
    </div>
  );
}