import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio('/bgm.mp3'));

  const initializeAudio = useCallback(async () => {
    audio.loop = true;
    audio.volume = 0.1; // Set volume to 10%
    try {
      await audio.play();
    } catch (error) {
      console.log('Autoplay prevented:', error);
      setIsMuted(true);
    }
  }, [audio]);

  useEffect(() => {
    initializeAudio();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, initializeAudio]);

  const toggleMute = () => {
    if (isMuted) {
      audio.play();
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/80 backdrop-blur-sm"
        onClick={toggleMute}
      >
        {!isMuted ? <FaVolumeUp className="h-4 w-4" /> : <FaVolumeMute className="h-4 w-4" />}
      </Button>
    </div>
  );
}