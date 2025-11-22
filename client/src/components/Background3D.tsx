import { motion } from "framer-motion";

export default function Background3D({ variant = "hero" }: { variant?: "hero" | "chat" }) {
  const shapes = Array.from({ length: variant === "hero" ? 8 : 5 });
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            opacity: [null, Math.random() * 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {shapes.map((_, i) => {
        const size = 100 + Math.random() * 200;
        const shapeType = i % 3;
        
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
              scale: [1, 1.1, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shapeType === 0 && (
              <div className="w-full h-full border-2 border-primary/10 rounded-full backdrop-blur-sm" />
            )}
            {shapeType === 1 && (
              <div className="w-full h-full border-2 border-purple-500/10 rotate-45 backdrop-blur-sm" />
            )}
            {shapeType === 2 && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-500/10"
                />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
