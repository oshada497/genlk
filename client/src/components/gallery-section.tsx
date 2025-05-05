import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaImages } from "react-icons/fa";
import { useGsapImageHoverEffect } from "@/hooks/use-gsap";

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badgeType: string;
  badgeText: string;
}

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export default function GallerySection({ galleryItems }: GallerySectionProps) {
  // Initialize GSAP hover effects for images
  useGsapImageHoverEffect();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const gallery = galleryItems.length > 0 ? galleryItems : [
    {
      id: 1,
      title: "Cyberpunk 2077 Gameplay",
      subtitle: "Night City Adventures",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f",
      badgeType: "SCREENSHOT",
      badgeText: "primary"
    },
    {
      id: 2,
      title: "Fortnite Tournament Win",
      subtitle: "Victory Royale Moment",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      badgeType: "HIGHLIGHT",
      badgeText: "secondary"
    },
    {
      id: 3,
      title: "Minecraft Build Showcase",
      subtitle: "Custom Fantasy Castle",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
      badgeType: "COMMUNITY",
      badgeText: "primary"
    },
    {
      id: 4,
      title: "League of Legends Pentakill",
      subtitle: "Championship Finals",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      badgeType: "TOURNAMENT",
      badgeText: "secondary"
    },
    {
      id: 5,
      title: "Rocket League Aerial Goal",
      subtitle: "Competitive Match Winning Shot",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
      badgeType: "CLIP",
      badgeText: "primary"
    },
    {
      id: 6,
      title: "Among Us Crew Victory",
      subtitle: "Stream Highlights with Viewers",
      image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8",
      badgeType: "COMMUNITY",
      badgeText: "secondary"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background circuit-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-rajdhani text-3xl md:text-4xl font-bold inline-block relative">
            <span className="gradient-text">Gaming Highlights</span>
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-foreground/70">
            Epic moments from recent streams and gaming adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gallery-grid">
          {gallery.map((item, index) => (
            <motion.div 
              key={item.id}
              className="relative group overflow-hidden rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-rajdhani text-lg font-medium text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground/80">{item.subtitle}</p>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`bg-${item.badgeText === 'primary' ? 'primary' : 'secondary'}/80 text-${item.badgeText === 'primary' ? 'primary' : 'secondary'}-foreground text-xs px-2 py-1 rounded`}>
                  {item.badgeType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            className="inline-flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary"
            variant="outline"
          >
            <FaImages className="mr-2" />
            <span>View Full Gallery</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
