import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Base user table (already defined)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Streamer info
export const streamer = pgTable("streamer", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  bio: text("bio").notNull(),
  expertise: text("expertise").notNull(),
  achievements: text("achievements").notNull(),
  community: text("community").notNull(),
  streamQuality: text("stream_quality").notNull(),
  isLive: boolean("is_live").default(false),
  profileImage: text("profile_image").notNull(),
  aboutImage: text("about_image").notNull(),
  email: text("email").notNull(),
  location: text("location").notNull(),
  businessHours: text("business_hours").notNull()
});

export const insertStreamerSchema = createInsertSchema(streamer);
export type InsertStreamer = z.infer<typeof insertStreamerSchema>;
export type Streamer = typeof streamer.$inferSelect;

// Setup items
export const setupItem = pgTable("setup_item", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  tags: jsonb("tags").notNull().$type<string[]>()
});

export const insertSetupItemSchema = createInsertSchema(setupItem);
export type InsertSetupItem = z.infer<typeof insertSetupItemSchema>;
export type SetupItem = typeof setupItem.$inferSelect;

// Schedule
export const schedule = pgTable("schedule", {
  id: serial("id").primaryKey(),
  day: text("day").notNull(),
  time: text("time").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  isOffDay: boolean("is_off_day").default(false),
  isSpecial: boolean("is_special").default(false),
  specialType: text("special_type")
});

export const insertScheduleSchema = createInsertSchema(schedule);
export type InsertSchedule = z.infer<typeof insertScheduleSchema>;
export type Schedule = typeof schedule.$inferSelect;

// Gallery items
export const galleryItem = pgTable("gallery_item", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  image: text("image").notNull(),
  badgeType: text("badge_type").notNull(),
  badgeText: text("badge_text").notNull()
});

export const insertGalleryItemSchema = createInsertSchema(galleryItem);
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
export type GalleryItem = typeof galleryItem.$inferSelect;

// Streams
export const stream = pgTable("stream", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  embedUrl: text("embed_url")
});

export const insertStreamSchema = createInsertSchema(stream);
export type InsertStream = z.infer<typeof insertStreamSchema>;
export type Stream = typeof stream.$inferSelect;

// Subscribers
export const subscriber = pgTable("subscriber", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertSubscriberSchema = createInsertSchema(subscriber);
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscriber.$inferSelect;

// Contact messages
export const contact = pgTable("contact", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertContactSchema = createInsertSchema(contact);
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contact.$inferSelect;

// For now, we'll skip relations since we don't have proper foreign keys set up
// We'll add this back later when we properly set up the schema with foreign keys
