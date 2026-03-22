import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Set hackathon date to exactly 3 days, 22 hours, 50 mins, 22 secs from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 22);
    targetDate.setMinutes(targetDate.getMinutes() + 50);
    targetDate.setSeconds(targetDate.getSeconds() + 22);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-darkBg relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Mystical Orb Background Glow */}
      <div className="absolute w-96 h-96 bg-magicBlue/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      <h2 className="font-magic text-3xl md:text-5xl text-slate-200 mb-12 relative z-10 text-center tracking-widest drop-shadow-lg">
        The Sands of Time
      </h2>

      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        {Object.entries(timeLeft).map(([key, value]) => (
          <motion.div
            key={key}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-magicBlue glass-panel flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(0,229,255,0.2)]"
          >
            {/* Inner rotating ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border border-dashed border-gold/50 rounded-full"
            />
            
            <span className="font-magic text-3xl md:text-5xl text-gold text-glow">{value.toString().padStart(2, '0')}</span>
            <span className="font-sans text-xs md:text-sm uppercase text-magicBlue mt-1 tracking-wider">{key}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
