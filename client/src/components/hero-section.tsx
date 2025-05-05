import { motion } from "framer-motion";
import { FaTwitch, FaArrowRight, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useGsapHeroAnimation, useGsapSectionAnimation } from "@/hooks/use-gsap";

interface HeroSectionProps {
  streamerData?: {
    name: string;
    tagline: string;
    description: string;
    isLive: boolean;
    profileImage: string;
  };
}

export default function HeroSection({ streamerData }: HeroSectionProps) {
  // Initialize GSAP animations
  const { titleRef, subtitleRef } = useGsapHeroAnimation();
  useGsapSectionAnimation();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background"></div>
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e" 
          alt="Gaming setup with green lighting" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center lg:text-left lg:flex items-center justify-between">
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {streamerData?.isLive && (
            <div className="inline-block py-1 px-3 rounded bg-primary/10 border border-primary/30 mb-4">
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse mr-2"></span>
                <span className="text-primary text-sm font-medium">LIVE STREAMING NOW</span>
              </span>
            </div>
          )}
          
          <h1 ref={titleRef} className="font-rajdhani text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Level Up Your</span>
            <span className="gradient-text">Gaming Experience</span>
          </h1>
          
          <p ref={subtitleRef} className="text-lg mb-8 max-w-xl text-foreground/80">
            {streamerData?.description || "Join me on epic gaming adventures across multiple platforms. Engaging gameplay, expert commentary, and an awesome community await!"}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <Button
              className="bg-primary text-primary-foreground px-8 py-6 rounded-md font-semibold group"
              size="lg"
              variant="default"
            >
              <FaTwitch className="mr-2" />
              <span>Watch Live</span>
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-md font-semibold"
              variant="outline"
              size="lg"
              onClick={() => {
                const scheduleSection = document.getElementById('schedule');
                if (scheduleSection) {
                  window.scrollTo({
                    top: scheduleSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <FaCalendarAlt className="mr-2" />
              <span>View Schedule</span>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-5/12 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-64 h-48 md:w-80 md:h-60 mx-auto relative animate-float-image">
            <div className="absolute inset-0 bg-primary/20 rounded-xl animate-pulse blur-xl"></div>
            <div className="relative w-full h-full overflow-hidden border-4 border-primary/50 bg-card rounded-xl shadow-lg shadow-primary/20">
              <img 
                src={streamerData?.profileImage || "https://images.pexels.com/photos/1038277/pexels-photo-1038277.jpeg"}
                alt="Gaming streamer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          {streamerData?.isLive && (
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-primary shadow-lg shadow-primary/20 text-xs px-4 py-2 rounded-lg text-primary animate-float flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              STREAMING NOW
            </div>
          )}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center" onClick={(e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            window.scrollTo({
              top: aboutSection.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }}>
          <span className="text-sm mb-2">Scroll Down</span>
          <FaChevronDown />
        </a>
      </motion.div>
    </section>
  );
}
