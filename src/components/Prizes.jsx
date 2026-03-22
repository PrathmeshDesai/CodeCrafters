import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import React, { useRef } from 'react';

const Card3D = ({ title, amount, icon: Icon, delay, gradientClasses, borderClasses, textClasses, shadowColor }) => {
  const boundingRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: 1200 }}
      className="relative w-full max-w-sm mx-auto z-10"
    >
      <motion.div
        ref={boundingRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`w-full relative rounded-2xl p-8 border border-slate-700 bg-slate-900/80 backdrop-blur-xl shadow-2xl transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-b ${gradientClasses} before:opacity-10 before:blur-xl hover:${borderClasses} cursor-pointer group`}
      >
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="flex flex-col items-center justify-center text-center">
          
          {/* Floating Icon Container */}
          <div 
            style={{ transform: "translateZ(70px)" }} 
            className={`w-20 h-20 rounded-full bg-slate-800 border-2 ${borderClasses} flex items-center justify-center mb-6 shadow-[0_0_30px_${shadowColor}] transition-all duration-300 group-hover:scale-110`}
          >
            <Icon className={`w-10 h-10 ${textClasses}`} />
          </div>
          
          <h3 style={{ transform: "translateZ(30px)" }} className="text-2xl font-magic text-slate-200 mb-2">{title}</h3>
          
          <div style={{ transform: "translateZ(40px)" }} className="mt-4 py-4 px-6 rounded-lg bg-black/40 border border-white/5 w-full">
            <p className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientClasses}`}>
              ₹{amount}
            </p>
          </div>
          
          <p style={{ transform: "translateZ(20px)" }} className="mt-4 text-slate-400 font-sans text-sm">
            + Exclusive Swags & Goodies
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Prizes() {
  const prizes = [
    {
      title: "1st Runner Up",
      amount: "10,000",
      icon: Medal,
      delay: 0.4,
      gradientClasses: "from-slate-300 to-slate-500",
      borderClasses: "border-slate-300/50",
      textClasses: "text-slate-300",
      shadowColor: "rgba(203,213,225,0.2)"
    },
    {
      title: "Champions",
      amount: "18,000",
      icon: Trophy,
      delay: 0.2,
      gradientClasses: "from-yellow-400 to-yellow-600",
      borderClasses: "border-yellow-400/50",
      textClasses: "text-yellow-400",
      shadowColor: "rgba(250,204,21,0.3)"
    },
    {
      title: "2nd Runner Up",
      amount: "7,000",
      icon: Award,
      delay: 0.6,
      gradientClasses: "from-amber-700 to-amber-900",
      borderClasses: "border-amber-700/50",
      textClasses: "text-amber-600",
      shadowColor: "rgba(217,119,6,0.2)"
    }
  ];

  return (
    <section id="prizes" className="py-24 relative z-10 bg-darkBg overflow-hidden">
      {/* Background magical glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-magicBlue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="font-magic text-4xl md:text-5xl text-gold mb-4 border-glow inline-block px-8 py-2 border-b-2 border-t-2 border-gold/30">
            Hackathon Bounties
          </h2>
          <p className="text-slate-400 font-sans mt-6 max-w-2xl mx-auto text-lg hover:text-slate-300 transition-colors">
            Fame and glory await the victors, along with these dazzling treasures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-stretch lg:pt-10">
          <div className="order-2 md:order-1 flex items-center">
            <Card3D {...prizes[0]} />
          </div>
          <div className="order-1 md:order-2 md:-translate-y-12">
            <Card3D {...prizes[1]} />
          </div>
          <div className="order-3 md:order-3 flex items-center">
            <Card3D {...prizes[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
