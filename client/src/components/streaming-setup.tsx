import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SetupItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface StreamingSetupProps {
  setupItems: SetupItem[];
}

export default function StreamingSetup({ setupItems }: StreamingSetupProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const setupData = setupItems.length > 0 ? setupItems : [
    {
      id: 1,
      title: "Gaming Rig",
      description: "Custom-built PC with RTX 3090, AMD Ryzen 9 5950X, 64GB RAM and liquid cooling",
      image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2",
      tags: ["4K Gaming", "Ray Tracing"]
    },
    {
      id: 2,
      title: "Audio Setup",
      description: "Shure SM7B Microphone with GoXLR Mixer and Beyerdynamic DT 990 Pro headphones",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e",
      tags: ["Studio Quality", "Noise Cancellation"]
    },
    {
      id: 3,
      title: "Video Equipment",
      description: "Sony Alpha A7 III with Elgato Cam Link 4K, Key Light, and Ring Light setup",
      image: "https://images.unsplash.com/photo-1603481546239-53436cba5c9e",
      tags: ["4K Capture", "60FPS"]
    }
  ];

  return (
    <section className="py-20 bg-card relative">
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
            <span className="gradient-text">Streaming Setup</span>
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-foreground/70">
            Professional grade equipment to deliver the highest quality streams and gameplay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {setupData.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-background rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5 border-t border-primary/20">
                  <h3 className="font-rajdhani text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                  <div className="flex space-x-2 flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
