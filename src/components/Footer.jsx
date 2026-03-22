import { Wand2, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#02040a] border-t border-slate-800 py-12 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        <div className="flex items-center space-x-3 mb-8">
          <Wand2 className="w-8 h-8 text-magicBlue" />
          <h2 className="font-magic text-3xl text-slate-200 tracking-wider">CodeCrafters</h2>
        </div>

        <div className="flex space-x-6 mb-8 text-slate-400">
          <a href="https://www.instagram.com/coding_club_scoe?igsh=M2Y4ZnAyNHB5NXhh" className="hover:text-magicBlue transition-colors hover:shadow-[0_0_10px_#00E5FF] rounded-full p-2"><Instagram size={24} /></a>
        </div>

        <p className="font-cursive text-2xl text-gold/80 mb-6 italic tracking-widest text-shadow">
          "Mischief Managed"
        </p>

        <p className="font-sans text-sm text-slate-500 font-light">
          &copy; {new Date().getFullYear()} CodeCrafters Hackathon. All spells reserved.
        </p>
      </div>
    </footer>
  );
}
