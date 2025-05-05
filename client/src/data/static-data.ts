/**
 * Static data file for the streamer portfolio website
 * This replaces API calls for the static site version
 */

// Streamer profile data
export const streamerData = {
  id: 1,
  name: "GenLK",
  tagline: "Level Up Your Gaming Experience",
  description: "Join me on epic gaming adventures across multiple platforms. Engaging gameplay, expert commentary, and an awesome community await!",
  isLive: true,
  profileImage: "https://images.pexels.com/photos/1038277/pexels-photo-1038277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  bio: "Professional gamer with 8+ years of competitive experience. Specializing in FPS and MOBA games with a passion for building an inclusive gaming community.",
  expertise: "Competitive gaming, Strategy development, Engaging commentary, Community building",
  achievements: "Regional Apex Legends Champion 2023, Top 500 Overwatch player, 250K+ subscribers milestone",
  community: "Our community focuses on positive gameplay, skill improvement, and building meaningful connections through gaming.",
  streamQuality: "1080p/60fps streams with professional audio setup and dynamic overlays for an immersive viewing experience.",
  aboutImage: "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

// Schedule data
export const scheduleData = [
  {
    id: 1,
    day: "Monday",
    time: "7PM - 10PM EST",
    title: "Fortnite Mondays",
    description: "Starting the week with Victory Royales",
    icon: "shield",
    isSpecial: false,
    isOffDay: false
  },
  {
    id: 2,
    day: "Tuesday",
    time: "7PM - 10PM EST",
    title: "Apex Legends",
    description: "High-ranked gameplay with subscribers",
    icon: "crosshair",
    isSpecial: false,
    isOffDay: false
  },
  {
    id: 3,
    day: "Wednesday",
    time: "7PM - 11PM EST",
    title: "Warzone Wednesdays",
    description: "Custom lobbies with viewers",
    icon: "users",
    isSpecial: true,
    specialType: "featured",
    isOffDay: false
  },
  {
    id: 4,
    day: "Thursday",
    time: "OFF DAY",
    title: "Rest Day",
    description: "Recharging for more epic content",
    icon: "power-off",
    isSpecial: false,
    isOffDay: true
  },
  {
    id: 5,
    day: "Friday",
    time: "6PM - 12AM EST",
    title: "Friday Night Gaming",
    description: "Extended stream with variety games",
    icon: "gamepad",
    isSpecial: true,
    specialType: "extended",
    isOffDay: false
  },
  {
    id: 6,
    day: "Saturday",
    time: "3PM - 8PM EST",
    title: "Community Day",
    description: "Playing with subscribers all day",
    icon: "heart",
    isSpecial: true,
    specialType: "community",
    isOffDay: false
  },
  {
    id: 7,
    day: "Sunday",
    time: "5PM - 9PM EST",
    title: "Chill Sunday Gaming",
    description: "Relaxed gameplay to end the week",
    icon: "coffee",
    isSpecial: false,
    isOffDay: false
  }
];

// Setup items data
export const setupItemsData = [
  {
    id: 1,
    title: "Gaming Rig",
    description: "Custom-built PC with RTX 4080, AMD Ryzen 9 7950X, 64GB RAM, and 2TB SSD storage for maximum gaming performance.",
    image: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["PC", "Gaming", "Hardware"]
  },
  {
    id: 2,
    title: "Streaming Setup",
    description: "Dual PC streaming setup with dedicated streaming PC, Elgato Capture Card, and Stream Deck for seamless production quality.",
    image: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Streaming", "Hardware", "Elgato"]
  },
  {
    id: 3,
    title: "Audio Equipment",
    description: "Shure SM7B microphone with GoXLR mixer and Beyerdynamic DT 990 Pro headphones for crystal clear audio.",
    image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Audio", "Microphone", "Headphones"]
  },
  {
    id: 4,
    title: "Gaming Monitor",
    description: "Triple monitor setup with 32\" Samsung Odyssey G7 (240Hz) main display and dual 27\" secondary monitors.",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Monitor", "Samsung", "Display"]
  }
];

// Gallery items data
export const galleryItemsData = [
  {
    id: 1,
    title: "Cyberpunk 2077 Gameplay",
    subtitle: "Night City Adventures",
    image: "https://images.pexels.com/photos/7919345/pexels-photo-7919345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badgeType: "SCREENSHOT",
    badgeText: "primary"
  },
  {
    id: 2,
    title: "Fortnite Tournament Win",
    subtitle: "Victory Royale Moment",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badgeType: "HIGHLIGHT",
    badgeText: "secondary"
  },
  {
    id: 3,
    title: "Minecraft Build Showcase",
    subtitle: "Custom Fantasy Castle",
    image: "https://images.pexels.com/photos/7915525/pexels-photo-7915525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badgeType: "COMMUNITY",
    badgeText: "primary"
  },
  {
    id: 4,
    title: "League of Legends Pentakill",
    subtitle: "Championship Finals",
    image: "https://images.pexels.com/photos/2507025/pexels-photo-2507025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badgeType: "TOURNAMENT",
    badgeText: "secondary"
  },
  {
    id: 5,
    title: "Rocket League Aerial Goal",
    subtitle: "Competitive Match Winning Shot",
    image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badgeType: "CLIP",
    badgeText: "primary"
  },
  {
    id: 6,
    title: "Among Us Crew Victory",
    subtitle: "Stream Highlights with Viewers",
    image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badgeType: "COMMUNITY",
    badgeText: "secondary"
  }
];

// Stream data
export const streamData = {
  id: 1,
  title: "Apex Legends Season 19 Ranked Gameplay",
  // Not using Twitch embed for static site to avoid CSP issues
  embedUrl: null,
  isLive: true,
  startTime: "2025-05-04T19:00:00.000Z",
  scheduledEndTime: "2025-05-04T22:00:00.000Z"
};