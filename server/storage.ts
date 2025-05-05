import { db } from "@db";
import { 
  streamer, 
  setupItem, 
  schedule, 
  galleryItem, 
  stream, 
  subscriber, 
  contact,
  insertContactSchema,
  insertSubscriberSchema
} from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Streamer
  getStreamerInfo: async () => {
    const streamerInfo = await db.query.streamer.findFirst();
    return streamerInfo;
  },

  // Setup Items
  getSetupItems: async () => {
    return await db.query.setupItem.findMany();
  },

  // Schedule
  getSchedule: async () => {
    return await db.query.schedule.findMany({
      orderBy: (schedule, { asc }) => [asc(schedule.id)]
    });
  },

  // Gallery
  getGalleryItems: async () => {
    return await db.query.galleryItem.findMany();
  },

  // Stream
  getLatestStream: async () => {
    return await db.query.stream.findFirst({
      orderBy: (stream, { desc }) => [desc(stream.date)]
    });
  },

  // Subscribers
  addSubscriber: async (email: string) => {
    try {
      const validatedData = insertSubscriberSchema.parse({ email });
      
      // Check if subscriber already exists
      const existingSubscriber = await db.query.subscriber.findFirst({
        where: eq(subscriber.email, email)
      });
      
      if (existingSubscriber) {
        return { success: false, message: "Email already subscribed" };
      }
      
      const [newSubscriber] = await db.insert(subscriber)
        .values(validatedData)
        .returning();
        
      return { success: true, subscriber: newSubscriber };
    } catch (error) {
      console.error("Error adding subscriber:", error);
      throw error;
    }
  },

  // Contact
  submitContactForm: async (contactData: { name: string, email: string, subject: string, message: string }) => {
    try {
      const validatedData = insertContactSchema.parse(contactData);
      
      const [newContact] = await db.insert(contact)
        .values(validatedData)
        .returning();
        
      return { success: true, contact: newContact };
    } catch (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
  }
};
