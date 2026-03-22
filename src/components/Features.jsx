import { motion } from 'framer-motion';
import { Code2, Users, Cpu, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "24-Hour Hackathon",
    desc: "A gripping time-bound challenge. Push your limits and construct magical solutions before the clock strikes zero.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    desc: "Form alliances. Combine different magical aptitudes to build projects stronger than the sum of their parts.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Real-world Problems",
    desc: "Slay modern dragons. Solve real-world challenges that plague muggles and wizards alike.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation & Creativity",
    desc: "Brew your wildest ideas. Creativity is the true magic that outlasts any spell.",
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10 bg-darkBg overflow-hidden">
      
      {/* Background magical elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magicBlue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-magic text-4xl md:text-5xl text-gold mb-4 border-glow inline-block px-8 py-2 border-b-2 border-t-2 border-gold/30">
            The Charms of CodeCrafters
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-xl relative group overflow-hidden border border-slate-700 hover:border-magicBlue/50 transition-colors"
            >
              {/* Spell Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magicBlue/0 via-magicBlue/0 to-magicBlue/0 group-hover:from-magicBlue/10 group-hover:to-transparent transition-all duration-500" />
              
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-gold/30 flex items-center justify-center text-magicBlue mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_#00E5FF] transition-all duration-300 relative z-10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-magic text-slate-200 mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-400 font-sans font-light leading-relaxed relative z-10">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
