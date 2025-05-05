import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FaBars } from "react-icons/fa";
import { FaTwitch, FaYoutube, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { useMobile } from "@/hooks/use-mobile";
import { useGsapHeroAnimation } from "@/hooks/use-gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useMobile();
  const { headerRef } = useGsapHeroAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed w-full bg-background/90 backdrop-blur-sm border-b border-primary/20 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-full">
            <span className="font-orbitron text-primary text-xl font-bold">GL</span>
          </div>
          <span className="font-orbitron text-xl text-primary">GenLK</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          <FaBars className="text-2xl" />
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex space-x-8">
          {['home', 'about', 'schedule', 'gallery', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`nav-link transition-colors duration-300 relative ${activeSection === section ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section);
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Twitch">
            <FaTwitch className="text-xl" />
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="YouTube">
            <FaYoutube className="text-xl" />
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Twitter">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Discord">
            <FaDiscord className="text-xl" />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-card border-t border-primary/20 py-4`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          {['home', 'about', 'schedule', 'gallery', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`${activeSection === section ? 'text-primary' : 'text-foreground hover:text-primary'} transition-colors duration-300 py-2`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section);
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                  closeMenu();
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Twitch">
              <FaTwitch />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300" aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
