import { motion } from "framer-motion";
import { FaGamepad, FaTrophy, FaUsers, FaHeadset, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  streamerData?: {
    name: string;
    bio: string;
    expertise: string;
    achievements: string;
    community: string;
    streamQuality: string;
    aboutImage: string;
  };
}

export default function AboutSection({ streamerData }: AboutSectionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden circuit-bg">
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
            <span className="gradient-text">About The Streamer</span>
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-sm opacity-25"></div>
              <div className="relative">
                <img 
                  src={streamerData?.aboutImage || "https://images.unsplash.com/photo-1598550476439-6847785fcea6"}
                  alt="Gaming setup with green lighting" 
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card p-8 rounded-lg border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-rajdhani text-2xl font-semibold mb-4 text-primary">
                  Meet {streamerData?.name || "GamerFlux"}
                </h3>
                
                <p className="mb-4">
                  {streamerData?.bio || "Hey there! I'm a passionate gamer and streamer with over 5 years of experience entertaining audiences across multiple platforms. My journey began with casual streams for friends and has evolved into a full-time dedication to creating engaging content."}
                </p>
                
                <p className="mb-6">
                  I specialize in competitive FPS games, MMORPGs, and indie game discoveries. What sets my streams apart is the perfect balance of skill, entertainment, and community engagement.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-primary text-2xl mb-2"><FaGamepad /></div>
                    <h4 className="font-rajdhani font-medium mb-1">Game Expertise</h4>
                    <p className="text-sm text-foreground/70">
                      {streamerData?.expertise || "FPS, RPG, Strategy, Racing"}
                    </p>
                  </div>
                  
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-primary text-2xl mb-2"><FaTrophy /></div>
                    <h4 className="font-rajdhani font-medium mb-1">Achievements</h4>
                    <p className="text-sm text-foreground/70">
                      {streamerData?.achievements || "Tournament Winner, 100K Followers"}
                    </p>
                  </div>
                  
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-primary text-2xl mb-2"><FaUsers /></div>
                    <h4 className="font-rajdhani font-medium mb-1">Community</h4>
                    <p className="text-sm text-foreground/70">
                      {streamerData?.community || "10K+ Discord Members"}
                    </p>
                  </div>
                  
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-primary text-2xl mb-2"><FaHeadset /></div>
                    <h4 className="font-rajdhani font-medium mb-1">Stream Quality</h4>
                    <p className="text-sm text-foreground/70">
                      {streamerData?.streamQuality || "4K/60fps, Pro Audio Setup"}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    className="inline-flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary"
                    variant="outline"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        window.scrollTo({
                          top: contactSection.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <FaEnvelope className="mr-2" />
                    <span>Get in Touch</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
