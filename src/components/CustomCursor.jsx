import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      const newTrail = { id: Date.now(), x: e.clientX, y: e.clientY };
      setTrails((prev) => [...prev, newTrail].slice(-20)); // Keep last 20
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute w-6 h-6 rounded-full border border-magicBlue mix-blend-screen transition-transform duration-75 ease-out"
        style={{ transform: `translate(${position.x - 12}px, ${position.y - 12}px)` }}
      />
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full bg-gold opacity-50 blur-sm"
          style={{
            transform: `translate(${trail.x - 4}px, ${trail.y - 4}px)`,
            opacity: index / trails.length
          }}
        />
      ))}
    </div>
  );
}
