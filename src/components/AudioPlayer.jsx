import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We'll create a synthetic magical hum instead of a real audio file, 
    // or use a free sound if available. For the demonstration, we'll just toggle state.
    // In a real scenario, audioRef.current.play() would be used here.
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
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
        src="/harrypottersound.mpeg"
      />
    </div>
  );
}
