import { motion } from "framer-motion";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaBusinessTime, 
  FaTwitch, 
  FaYoutube, 
  FaTwitter, 
  FaInstagram, 
  FaDiscord
} from "react-icons/fa";

export default function ContactSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-background circuit-bg">
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
            <span className="gradient-text">Get In Touch</span>
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-foreground/70">
            Have a business inquiry or collaboration idea? Reach out through any of these channels!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-rajdhani text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-foreground/70">business@gamerflux.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaMapMarkerAlt className="text-primary" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium mb-1">Location</h4>
                        <p className="text-foreground/70">Los Angeles, California, USA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaBusinessTime className="text-primary" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium mb-1">Business Hours</h4>
                        <p className="text-foreground/70">Monday - Friday: 10AM - 6PM EST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h4 className="font-rajdhani font-semibold mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                        <FaTwitch className="text-primary" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                        <FaYoutube className="text-primary" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                        <FaTwitter className="text-primary" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                        <FaInstagram className="text-primary" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                        <FaDiscord className="text-primary" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
