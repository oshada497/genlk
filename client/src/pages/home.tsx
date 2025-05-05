import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import StreamingSetup from "@/components/streaming-setup";
import ScheduleSection from "@/components/schedule-section";
import LivestreamEmbed from "@/components/livestream-embed";
import GallerySection from "@/components/gallery-section";
import CtaSection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
// Import static data instead of using API calls
import { 
  streamerData, 
  setupItemsData, 
  scheduleData, 
  galleryItemsData,
  streamData
} from "@/data/static-data";

export default function Home() {
  // Using static data directly instead of API calls
  const streamer = {
    ...streamerData,
    latestStream: streamData
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection streamerData={streamer} />
        <AboutSection streamerData={streamer} />
        <StreamingSetup setupItems={setupItemsData} />
        <ScheduleSection scheduleData={scheduleData} />
        <LivestreamEmbed stream={streamData} />
        <GallerySection galleryItems={galleryItemsData} />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
