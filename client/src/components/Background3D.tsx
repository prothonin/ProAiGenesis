import { motion } from "framer-motion";

export default function Background3D({ variant = "hero" }: { variant?: "hero" | "chat" }) {
  const shapes = Array.from({ length: variant === "hero" ? 10 : 6 });
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0) 70%)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0) 70%)',
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.7,
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            opacity: [null, Math.random() * 0.7],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {shapes.map((_, i) => {
        const size = 120 + Math.random() * 250;
        const shapeType = i % 4;
        const colorClass = i % 3 === 0 
          ? 'from-purple-500/20 to-purple-600/5'
          : i % 3 === 1
          ? 'from-blue-500/20 to-blue-600/5'
          : 'from-cyan-500/20 to-cyan-600/5';
        
        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
            }}
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: 360,
              scale: [1, 1.15, 1],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shapeType === 0 && (
              <div className={`w-full h-full border-2 rounded-full backdrop-blur-sm bg-gradient-to-br ${colorClass}`} 
                style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)' }} />
            )}
            {shapeType === 1 && (
              <div className={`w-full h-full border-2 rotate-45 backdrop-blur-sm bg-gradient-to-br ${colorClass}`}
                style={{ borderRadius: '20%', boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }} />
            )}
            {shapeType === 2 && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="url(#gradient)"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-500/30"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            {shapeType === 3 && (
              <div className={`w-full h-full border-2 rounded-3xl backdrop-blur-sm bg-gradient-to-br ${colorClass}`}
                style={{ transform: 'rotate(12deg)', boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }} />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
