import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

interface LivestreamEmbedProps {
  stream?: {
    title: string;
    embedUrl?: string;
  };
}

export default function LivestreamEmbed({ stream }: LivestreamEmbedProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const streamTitle = stream?.title || "Epic Boss Battle in Elden Ring";

  return (
    <section className="py-20 bg-card">
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
            <span className="gradient-text">Latest Stream</span>
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h2>
        </motion.div>

        <motion.div 
          className="relative aspect-video bg-background rounded-lg overflow-hidden mx-auto max-w-5xl border border-primary/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stream?.embedUrl ? (
            <iframe 
              src={stream.embedUrl}
              title="Livestream video player"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-card">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FaPlay className="text-primary text-2xl" />
                </div>
                <h3 className="font-rajdhani text-xl font-medium text-foreground">Latest Stream: "{streamTitle}"</h3>
                <p className="text-foreground/70 mt-2">Click to watch the latest gameplay</p>
              </div>
              {/* Pseudo-play button overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                  <FaPlay className="text-primary text-2xl" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
