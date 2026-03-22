import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const floatingCandles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100 - 50,
  y: Math.random() * 100 - 50,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 2,
}));

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/60 to-transparent" />
      </motion.div>

      {/* Floating Candles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingCandles.map((candle) => (
          <motion.div
            key={candle.id}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: candle.duration,
              repeat: Infinity,
              delay: candle.delay,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${50 + candle.x}%`,
              top: `${50 + candle.y}%`,
            }}
          >
            <div className="w-1.5 h-6 bg-yellow-100 rounded-sm shadow-[0_0_15px_#FFB700]" />
            <div className="w-2 h-3 bg-white rounded-full mx-auto -mt-2.5 blur-[1px] shadow-[0_-5px_20px_#00E5FF]" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto mt-20">
        <motion.h1
          className="font-magic text-[12vw] sm:text-[10vw] md:text-7xl lg:text-[7rem] xl:text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-gold to-yellow-700 text-glow tracking-wide md:tracking-wider mb-4 md:mb-6 leading-tight px-2 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          CodeCrafters 3.0
        </motion.h1>

        <motion.h2
          className="font-sans text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-slate-300 mb-10 md:mb-12 tracking-widest px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Where Magic Meets Code
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:px-10 md:py-4 border border-magicBlue bg-magicBlue/10 text-magicBlue font-magic text-lg md:text-2xl rounded shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:bg-magicBlue/20 transition-all backdrop-blur-sm relative overflow-hidden group"
          onClick={() => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <a href="https://unstop.com/o/vLlUujP?utm_medium=Share&utm_source=rahula5708&utm_campaign=Online_coding_challenge"><span className="relative z-10 text-glow">Enter the Hackathon</span></a>
          <div className="absolute inset-0 bg-magicBlue/30 w-0 group-hover:w-full transition-all duration-500 ease-out" />
        </motion.button>
      </div>

    </section>
  );
}
