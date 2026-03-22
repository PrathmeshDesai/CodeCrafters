import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-darkBg flex items-center justify-center px-4 overflow-hidden">
      
      {/* Scroll Background Wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="parchment-bg relative max-w-4xl w-full p-12 md:p-20 rounded shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        style={{
          borderTop: '10px solid #8b5a2b',
          borderBottom: '10px solid #8b5a2b',
        }}
      >
        {/* Scroll Rolled Edges (Simulated) */}
        <div className="absolute top-[-15px] left-[-20px] right-[-20px] h-8 bg-gradient-to-r from-[#6b4220] via-[#8b5a2b] to-[#6b4220] rounded-full shadow-lg" />
        <div className="absolute bottom-[-15px] left-[-20px] right-[-20px] h-8 bg-gradient-to-r from-[#6b4220] via-[#8b5a2b] to-[#6b4220] rounded-full shadow-lg" />
        
        <div className="text-center">
          <h2 className="font-magic text-4xl md:text-5xl text-[#5c1616] mb-8 font-bold border-b border-[#8b5a2b]/30 pb-4 inline-block">
            The Great Summons
          </h2>
          
          <div className="font-cursive text-xl md:text-2xl text-[#3b2f2f] leading-loose space-y-6 text-left drop-shadow-sm">
            <p>
              Hark, brave sorcerers of the digital realm! The <strong className="font-bold">CodeCrafters 3.0</strong> trial is upon us. For twenty-four perilous hours, the gates of innovation shall stand ajar.
            </p>
            <p>
              Gather your covens and forge alliances. Whether you conjure spells in the arcane languages of Python, or weave grand illusions through the Web, your mettle shall be tested against riddles that plague both the magical and muggle worlds alike.
            </p>
            <p>
              Bring forth your wands (keyboards), for this is where legends are coded and mischief is brilliantly managed!
            </p>
          </div>
          
          <div className="mt-12 text-[#8b5a2b] opacity-80 italic font-cursive text-xl">
            ~ The Headmaster of CodeCrafters ~
          </div>
        </div>
      </motion.div>
    </section>
  );
}
