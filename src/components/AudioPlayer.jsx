import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.log("Autoplay blocked by browser. Waiting for user interaction.", e);
          setIsPlaying(false);
          
          // Setup a one-time interaction listener to start audio
          const enableAudio = () => {
            if (audioRef.current) {
              audioRef.current.play();
              setIsPlaying(true);
            }
            document.removeEventListener('click', enableAudio);
            document.removeEventListener('keydown', enableAudio);
          };
          
          document.addEventListener('click', enableAudio);
          document.addEventListener('keydown', enableAudio);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-3 rounded-full glass-panel text-gold hover:border-magicBlue transition-all duration-300 focus:outline-none"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Hidden audio element for the Harry Potter Theme Song */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        src="/harrypottersound.mpeg"
      />
    </div>
  );
}
