import { db } from "./index";
import * as schema from "@shared/schema";
import { faker } from '@faker-js/faker';

async function seed() {
  try {
    console.log("Seeding database...");

    // Seed streamer data
    const existingStreamer = await db.query.streamer.findFirst();
    
    if (!existingStreamer) {
      console.log("Seeding streamer data...");
      await db.insert(schema.streamer).values({
        name: "GamerFlux",
        tagline: "Level Up Your Gaming Experience",
        description: "Join me on epic gaming adventures across multiple platforms. Engaging gameplay, expert commentary, and an awesome community await!",
        bio: "Hey there! I'm a passionate gamer and streamer with over 5 years of experience entertaining audiences across multiple platforms. My journey began with casual streams for friends and has evolved into a full-time dedication to creating engaging content.",
        expertise: "FPS, RPG, Strategy, Racing",
        achievements: "Tournament Winner, 100K Followers",
        community: "10K+ Discord Members",
        streamQuality: "4K/60fps, Pro Audio Setup",
        isLive: true,
        profileImage: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e",
        aboutImage: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
        email: "business@gamerflux.com",
        location: "Los Angeles, California, USA",
        businessHours: "Monday - Friday: 10AM - 6PM EST"
      });
    }

    // Seed setup items
    const existingSetupItems = await db.query.setupItem.findMany();
    
    if (existingSetupItems.length === 0) {
      console.log("Seeding setup items...");
      await db.insert(schema.setupItem).values([
        {
          title: "Gaming Rig",
          description: "Custom-built PC with RTX 3090, AMD Ryzen 9 5950X, 64GB RAM and liquid cooling",
          image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2",
          tags: ["4K Gaming", "Ray Tracing"]
        },
        {
          title: "Audio Setup",
          description: "Shure SM7B Microphone with GoXLR Mixer and Beyerdynamic DT 990 Pro headphones",
          image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e",
          tags: ["Studio Quality", "Noise Cancellation"]
        },
        {
          title: "Video Equipment",
          description: "Sony Alpha A7 III with Elgato Cam Link 4K, Key Light, and Ring Light setup",
          image: "https://images.unsplash.com/photo-1603481546239-53436cba5c9e",
          tags: ["4K Capture", "60FPS"]
        }
      ]);
    }

    // Seed schedule
    const existingSchedule = await db.query.schedule.findMany();
    
    if (existingSchedule.length === 0) {
      console.log("Seeding schedule...");
      await db.insert(schema.schedule).values([
        {
          day: "Monday",
          time: "7PM - 10PM EST",
          title: "FPS Monday",
          description: "Call of Duty, Valorant, Apex Legends",
          icon: "crosshairs"
        },
        {
          day: "Tuesday",
          time: "8PM - 11PM EST",
          title: "RPG Night",
          description: "Skyrim, Witcher 3, Elden Ring",
          icon: "dragon"
        },
        {
          day: "Wednesday",
          time: "OFF DAY",
          title: "Rest Day",
          description: "Content creation & planning",
          icon: "power-off",
          isOffDay: true
        },
        {
          day: "Thursday",
          time: "6PM - 9PM EST",
          title: "Community Games",
          description: "Play with viewers & subscribers",
          icon: "users",
          isSpecial: true,
          specialType: "SUBSCRIBER ONLY"
        },
        {
          day: "Friday",
          time: "8PM - 1AM EST",
          title: "Horror Night",
          description: "Resident Evil, Dead by Daylight",
          icon: "ghost"
        },
        {
          day: "Saturday",
          time: "3PM - 8PM EST",
          title: "Tournament Day",
          description: "Weekly competitions & challenges",
          icon: "trophy",
          isSpecial: true,
          specialType: "SPECIAL EVENT"
        },
        {
          day: "Sunday",
          time: "4PM - 7PM EST",
          title: "Indie Spotlight",
          description: "Discovering new indie games",
          icon: "star"
        }
      ]);
    }

    // Seed gallery items
    const existingGallery = await db.query.galleryItem.findMany();
    
    if (existingGallery.length === 0) {
      console.log("Seeding gallery items...");
      await db.insert(schema.galleryItem).values([
        {
          title: "Cyberpunk 2077 Gameplay",
          subtitle: "Night City Adventures",
          image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f",
          badgeType: "SCREENSHOT",
          badgeText: "primary"
        },
        {
          title: "Fortnite Tournament Win",
          subtitle: "Victory Royale Moment",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
          badgeType: "HIGHLIGHT",
          badgeText: "secondary"
        },
        {
          title: "Minecraft Build Showcase",
          subtitle: "Custom Fantasy Castle",
          image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
          badgeType: "COMMUNITY",
          badgeText: "primary"
        },
        {
          title: "League of Legends Pentakill",
          subtitle: "Championship Finals",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
          badgeType: "TOURNAMENT",
          badgeText: "secondary"
        },
        {
          title: "Rocket League Aerial Goal",
          subtitle: "Competitive Match Winning Shot",
          image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
          badgeType: "CLIP",
          badgeText: "primary"
        },
        {
          title: "Among Us Crew Victory",
          subtitle: "Stream Highlights with Viewers",
          image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8",
          badgeType: "COMMUNITY",
          badgeText: "secondary"
        }
      ]);
    }

    // Seed latest stream
    const existingStream = await db.query.stream.findFirst();
    
    if (!existingStream) {
      console.log("Seeding latest stream...");
      await db.insert(schema.stream).values({
        title: "Epic Boss Battle in Elden Ring",
        description: "Watch me take on the hardest boss in Elden Ring!",
        date: new Date(),
        thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
      });
    }

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error while seeding the database:", error);
  }
}

seed();
