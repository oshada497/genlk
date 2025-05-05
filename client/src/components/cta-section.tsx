import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaTwitch, FaDiscord, FaYoutube } from "react-icons/fa";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function CtaSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // For static site, simulate subscription with a timeout
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to updates.",
        variant: "default",
      });
      
      form.reset();
      setIsSubmitting(false);
      
      // Log the email to console (for demonstration only)
      console.log("Subscription email:", data.email);
    }, 800);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-card/90"></div>
        <img 
          src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc"
          alt="Gaming background" 
          className="w-full h-full object-cover opacity-25 scale-105"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-rajdhani text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Join The Community</span>
          </h2>
          
          <p className="text-xl mb-10 text-foreground/80">
            Be part of an awesome gaming community. Get notified when I go live, participate in exclusive events, and connect with fellow gamers!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.a 
              href="#" 
              className="flex flex-col items-center p-6 bg-background rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaTwitch className="text-2xl text-primary" />
              </div>
              <h3 className="font-rajdhani text-xl font-medium">Twitch</h3>
              <p className="text-sm text-foreground/70 mt-2">Follow for live streams</p>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex flex-col items-center p-6 bg-background rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaDiscord className="text-2xl text-primary" />
              </div>
              <h3 className="font-rajdhani text-xl font-medium">Discord</h3>
              <p className="text-sm text-foreground/70 mt-2">Join our community server</p>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex flex-col items-center p-6 bg-background rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaYoutube className="text-2xl text-primary" />
              </div>
              <h3 className="font-rajdhani text-xl font-medium">YouTube</h3>
              <p className="text-sm text-foreground/70 mt-2">Subscribe for videos</p>
            </motion.a>
          </div>
          
          <motion.div 
            className="max-w-md mx-auto"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-background border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-rajdhani text-xl font-semibold mb-4">Never Miss a Stream</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Your email address"
                              className="w-full px-4 py-3 bg-card border border-primary/30 rounded-md focus:outline-none focus:border-primary"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit"
                      className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary/90 transition-colors duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe to Updates"}
                    </Button>
                  </form>
                </Form>
                <p className="text-xs text-foreground/60 mt-3">
                  I'll only send notifications about new streams and important updates. No spam.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
