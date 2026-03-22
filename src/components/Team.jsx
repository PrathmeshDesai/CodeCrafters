import { motion } from 'framer-motion';

const team = [
  {
    name: "Albus Dumbledore",
    role: "Headmaster (Lead Organizer)",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=200&h=200", 
    quote: "Nitwit! Blubber! Oddment! Tweak!"
  },
  {
    name: "Minerva McGonagall",
    role: "Transfiguration (Tech Lead)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Have a biscuit, Potter."
  },
  {
    name: "Severus Snape",
    role: "Potions Master (Design Head)",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "I can teach you how to bottle fame."
  },
  {
    name: "Rubeus Hagrid",
    role: "Care of Magical Creatures (Marketing)",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Yer a coder, Harry."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#02040a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-magic text-4xl md:text-5xl text-magicBlue mb-4 border-glow inline-block px-8 py-2 border-b-2 border-magicBlue/30">
            The Esteemed Faculty
          </h2>
          <p className="font-sans text-slate-400 max-w-2xl mx-auto">
            Meet the professors organizing this grand tournament. They will guide you, challenge you, and judge your creations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, type: "spring" }}
              className="relative w-full h-80 group cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl shadow-magicBlue/10 rounded-xl">
                
                {/* Front */}
                <div className="absolute inset-0 w-full h-full border border-slate-700 rounded-xl overflow-hidden [backface-visibility:hidden] glass-panel flex flex-col items-center justify-center p-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gold shadow-[0_0_15px_#FFB700]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-magic text-xl text-slate-200 text-center">{member.name}</h3>
                  <div className="w-8 h-px bg-gold/50 my-2" />
                  <p className="text-sm text-magicBlue font-sans text-center">{member.role}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 w-full h-full border border-gold rounded-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0b0f19] flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#0b0f19_100%)] shadow-[inset_0_0_50px_rgba(255,183,0,0.1)]">
                  <h3 className="font-magic text-xl text-gold mb-4 text-center border-b border-gold/30 pb-2 w-full">{member.name}</h3>
                  <p className="font-cursive text-slate-300 italic text-center text-lg leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
