import { motion } from 'framer-motion';
import { Brain, Globe, Link, Bot } from 'lucide-react';

const tracks = [
  {
    name: "Artificial Intelligence",
    house: "Gryffindor",
    color: "#740001",
    accent: "#D3A625",
    icon: <Brain className="w-12 h-12" />,
    desc: "AI & Intelligent Systems."
  },
  {
    name: "EdTech",
    house: "Ravenclaw",
    color: "#0E1A40",
    accent: "#946B2D",
    icon: <Globe className="w-12 h-12" />,
    desc: "Smart Edtech Solutions."
  },
  {
    name: "FinTech",
    house: "Slytherin",
    color: "#1A472A",
    accent: "#5D5D5D",
    icon: <Link className="w-12 h-12" />,
    desc: "Smart Finance Solutions."
  },
  {
    name: "Automation",
    house: "Hufflepuff",
    color: "#FFDB00",
    accent: "#000000",
    icon: <Bot className="w-12 h-12" />,
    desc: "Smart Automation Solutions."
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-darkBg relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-magic text-4xl md:text-5xl text-gold mb-4 border-glow inline-block px-8 py-2">
            The Noble Houses (Domains)
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto">
            Which banner will you fly? Choose your domain of expertise and battle for ultimate glory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative z-10 group h-full flex flex-col mt-8 md:mt-0"
              style={{
                filter: `drop-shadow(0 15px 20px ${track.color}60)`
              }}
            >
              {/* Wooden rod at the top */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-[#3E2723] rounded-sm shadow-md z-20 border-b border-[#2D1A11] border-t border-[#4E342E]" />
              
              {/* Hanging Strings (visible mostly on desktop) */}
              <div className="absolute -top-6 left-1/4 w-0.5 h-6 bg-[#3E2723]/60 hidden md:block" />
              <div className="absolute -top-6 right-1/4 w-0.5 h-6 bg-[#3E2723]/60 hidden md:block" />

              <div
                className="relative overflow-hidden flex flex-col items-center p-8 pt-12 pb-16 z-10 w-full h-full min-h-[350px] transition-transform duration-500 group-hover:scale-[1.03] origin-top"
                style={{
                  backgroundColor: track.color,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 88%, 0 100%)',
                }}
              >
                {/* Banner Top Gold Trim */}
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ backgroundColor: track.accent }}
                />
              {/* House internal glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${track.accent} 0%, transparent 70%)` }}
              />

              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-inner"
                style={{ backgroundColor: track.accent, color: track.accent === '#000000' ? track.color : '#fff' }}
              >
                {track.icon}
              </div>

              <h3 
                className="font-magic text-2xl mb-2 text-center drop-shadow-md pb-2 border-b-2"
                style={{ color: track.accent, borderColor: track.accent }}
              >
                {track.name}
              </h3>
              
              <p 
                className="text-center text-sm font-sans mt-4 leading-relaxed tracking-wider w-full relative z-10"
                style={{ color: track.color === '#FFDB00' ? '#333' : '#e2e8f0' }}
              >
                {track.desc}
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
