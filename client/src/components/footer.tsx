import { Link } from "wouter";
import { FaTwitch, FaYoutube, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-primary/20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-full">
                <span className="font-orbitron text-primary text-xl font-bold">GL</span>
              </div>
              <span className="font-orbitron text-xl text-primary">GenLK</span>
            </Link>
            <p className="text-foreground/70 text-sm">
              Professional gaming streamer delivering high-quality entertainment and immersive gameplay experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-rajdhani font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'schedule', 'gallery', 'contact'].map((section) => (
                <li key={section}>
                  <a 
                    href={`#${section}`}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
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
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-rajdhani font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Gaming Guides</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Merch Store</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Affiliate Links</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-rajdhani font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Disclaimer</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Copyright</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GenLK. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <FaTwitch />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <FaYoutube />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
