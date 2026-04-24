import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3");
    audio.loop = true;
    audio.volume = 0.3; // mild volume
    audioRef.current = audio;

    // Optional: try to auto-play if browser allows
    // audio.play().catch(() => {
    //   // Autoplay was prevented
    // });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-background/50 backdrop-blur-md p-2 rounded-full border shadow-sm"
    >
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-10 w-10 rounded-full hover:bg-primary/20 transition-colors duration-300"
        onClick={togglePlay}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-primary" />
        ) : (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
      {isPlaying && (
        <div className="flex gap-1 px-2 items-center h-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-primary rounded-full"
              animate={{ height: ["4px", "16px", "4px"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
