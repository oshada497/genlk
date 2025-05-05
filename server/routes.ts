import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z, ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes Prefix
  const apiPrefix = "/api";

  // Get streamer info
  app.get(`${apiPrefix}/streamer`, async (_req, res) => {
    try {
      const streamerInfo = await storage.getStreamerInfo();
      res.json(streamerInfo || {});
    } catch (error) {
      console.error("Error fetching streamer info:", error);
      res.status(500).json({ message: "Failed to fetch streamer information" });
    }
  });

  // Get setup items
  app.get(`${apiPrefix}/setup-items`, async (_req, res) => {
    try {
      const setupItems = await storage.getSetupItems();
      res.json(setupItems || []);
    } catch (error) {
      console.error("Error fetching setup items:", error);
      res.status(500).json({ message: "Failed to fetch setup items" });
    }
  });

  // Get schedule
  app.get(`${apiPrefix}/schedule`, async (_req, res) => {
    try {
      const schedule = await storage.getSchedule();
      res.json(schedule || []);
    } catch (error) {
      console.error("Error fetching schedule:", error);
      res.status(500).json({ message: "Failed to fetch schedule" });
    }
  });

  // Get gallery items
  app.get(`${apiPrefix}/gallery`, async (_req, res) => {
    try {
      const galleryItems = await storage.getGalleryItems();
      res.json(galleryItems || []);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      res.status(500).json({ message: "Failed to fetch gallery items" });
    }
  });

  // Get latest stream
  app.get(`${apiPrefix}/latest-stream`, async (_req, res) => {
    try {
      const latestStream = await storage.getLatestStream();
      res.json(latestStream || {});
    } catch (error) {
      console.error("Error fetching latest stream:", error);
      res.status(500).json({ message: "Failed to fetch latest stream" });
    }
  });

  // Subscribe to newsletter
  app.post(`${apiPrefix}/subscribe`, async (req, res) => {
    try {
      const emailSchema = z.object({
        email: z.string().email("Please provide a valid email address"),
      });
      
      const { email } = emailSchema.parse(req.body);
      const result = await storage.addSubscriber(email);
      
      if (result.success) {
        res.status(201).json({ message: "Successfully subscribed to updates" });
      } else {
        res.status(400).json({ message: result.message });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid email address" });
      } else {
        console.error("Error subscribing:", error);
        res.status(500).json({ message: "Failed to subscribe" });
      }
    }
  });

  // Submit contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Please provide a valid email address"),
        subject: z.string().min(1, "Subject is required"),
        message: z.string().min(10, "Message must be at least 10 characters"),
      });
      
      const contactData = contactSchema.parse(req.body);
      const result = await storage.submitContactForm(contactData);
      
      if (result.success) {
        res.status(201).json({ message: "Message sent successfully" });
      } else {
        res.status(400).json({ message: "Failed to send message" });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
