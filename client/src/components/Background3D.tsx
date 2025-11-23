import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Background3D({ variant = "hero" }: { variant?: "hero" | "chat" }) {
  // Reduce number of particles and shapes for better performance
  const particleCount = variant === "hero" ? 20 : 10; // Reduced from 40
  const shapeCount = variant === "hero" ? 5 : 3; // Reduced from 10/6
  
  // Memoize random values to prevent recalculation on every render
  const particleData = useMemo(
    () => Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.3 + Math.random() * 0.4,
      scale: 0.5 + Math.random() * 0.5,
      duration: 15 + Math.random() * 10,
      color: Math.floor(Math.random() * 3),
    })),
    [particleCount]
  );

  const shapeData = useMemo(
    () => Array.from({ length: shapeCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 120 + Math.random() * 180,
      duration: 20 + Math.random() * 10,
      type: Math.floor(Math.random() * 4),
      color: Math.floor(Math.random() * 3),
    })),
    [shapeCount]
  );

  const getParticleGradient = (colorIndex: number) => {
    const gradients = [
      'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0) 70%)',
      'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0) 70%)',
      'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, rgba(6, 182, 212, 0) 70%)',
    ];
    return gradients[colorIndex];
  };

  const getColorClass = (colorIndex: number) => {
    const colors = [
      'from-purple-500/15 to-purple-600/5',
      'from-blue-500/15 to-blue-600/5',
      'from-cyan-500/15 to-cyan-600/5',
    ];
    return colors[colorIndex];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Optimized Particles */}
      {particleData.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: getParticleGradient(particle.color),
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optimized Shapes */}
      {shapeData.map((shape, i) => {
        const colorClass = getColorClass(shape.color);

        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shape.type === 0 && (
              <div 
                className={`w-full h-full border border-purple-500/20 rounded-full bg-gradient-to-br ${colorClass}`}
                style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.15)' }} 
              />
            )}
            {shape.type === 1 && (
              <div 
                className={`w-full h-full border border-blue-500/20 rotate-45 bg-gradient-to-br ${colorClass}`}
                style={{ borderRadius: '20%', boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)' }} 
              />
            )}
            {shape.type === 2 && (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="url(#gradient)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-purple-500/20"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.15)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.08)" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            {shape.type === 3 && (
              <div 
                className={`w-full h-full border border-cyan-500/20 rounded-3xl bg-gradient-to-br ${colorClass}`}
                style={{ transform: 'rotate(12deg)', boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)' }} 
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
      }
