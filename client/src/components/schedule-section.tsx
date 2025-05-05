import { motion } from "framer-motion";
import { 
  FaCrosshairs, FaDragon, FaPowerOff, FaUsers, 
  FaGhost, FaTrophy, FaStar 
} from "react-icons/fa";

interface ScheduleDay {
  day: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  isSpecial?: boolean;
  specialType?: string;
  isOffDay?: boolean;
}

interface ScheduleSectionProps {
  scheduleData: ScheduleDay[];
}

export default function ScheduleSection({ scheduleData }: ScheduleSectionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'crosshairs': return <FaCrosshairs className="text-primary" />;
      case 'dragon': return <FaDragon className="text-primary" />;
      case 'power-off': return <FaPowerOff className="text-foreground/30" />;
      case 'users': return <FaUsers className="text-primary" />;
      case 'ghost': return <FaGhost className="text-primary" />;
      case 'trophy': return <FaTrophy className="text-primary" />;
      case 'star': return <FaStar className="text-primary" />;
      default: return <FaStar className="text-primary" />;
    }
  };

  const schedule = scheduleData.length > 0 ? scheduleData : [
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
  ];

  return (
    <section id="schedule" className="py-20 bg-background relative circuit-bg">
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
            <span className="gradient-text">Streaming Schedule</span>
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-foreground/70">
            Catch me live on these days and times across Twitch, YouTube, and Facebook Gaming
          </p>
        </motion.div>

        <motion.div 
          className="bg-card rounded-xl border border-primary/20 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {schedule.map((day, index) => (
              <div 
                key={index} 
                className="p-5 relative group hover:bg-primary/5 transition-all duration-300"
              >
                {day.isSpecial && (
                  <div className="absolute top-0 right-0 m-2">
                    <span className={`text-xs ${day.specialType === 'SPECIAL EVENT' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'} px-2 py-1 rounded-sm`}>
                      {day.specialType}
                    </span>
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <h3 className="font-rajdhani text-xl font-semibold mb-1">{day.day}</h3>
                  <p className={`text-sm ${day.isOffDay ? 'text-foreground/70' : 'text-primary'}`}>{day.time}</p>
                  <div className="mt-4 text-center">
                    <div className={`w-12 h-12 ${day.isOffDay ? 'bg-background/50' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-2`}>
                      {getIcon(day.icon)}
                    </div>
                    <h4 className={`font-medium ${day.isOffDay ? 'text-foreground/50' : 'text-foreground'}`}>
                      {day.title}
                    </h4>
                    <p className={`text-xs ${day.isOffDay ? 'text-foreground/50' : 'text-foreground/70'} mt-1`}>
                      {day.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#" className="inline-flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-6 py-3 rounded-md transition-all duration-300">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span>Add to Calendar</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
