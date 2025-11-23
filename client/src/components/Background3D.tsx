import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Background3D({ variant = "hero" }: { variant?: "hero" | "chat" }) {
  const particleCount = variant === "hero" ? 25 : 12;
  const shapeCount = variant === "hero" ? 8 : 4;
  
  // Generate stable random data that won't cause positioning issues
  const particleData = useMemo(
    () => Array.from({ length: particleCount }, (_, i) => ({
      left: (i * 7 + Math.random() * 15) % 100,
      top: (i * 11 + Math.random() * 20) % 100,
      opacity: 0.4 + Math.random() * 0.3,
      scale: 0.6 + Math.random() * 0.4,
      duration: 12 + Math.random() * 8,
      color: i % 3,
    })),
    [particleCount]
  );

  const shapeData = useMemo(
    () => Array.from({ length: shapeCount }, (_, i) => ({
      left: (i * 13 + Math.random() * 20) % 90,
      top: (i * 17 + Math.random() * 25) % 90,
      size: 100 + Math.random() * 150,
      duration: 18 + Math.random() * 12,
      type: i % 4,
      color: i % 3,
    })),
    [shapeCount]
  );

  const getParticleGradient = (colorIndex: number) => {
    const gradients = [
      'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(168, 85, 247, 0) 70%)',
      'radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(59, 130, 246, 0) 70%)',
      'radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, rgba(6, 182, 212, 0) 70%)',
    ];
    return gradients[colorIndex];
  };

  const getColorClass = (colorIndex: number) => {
    const colors = [
      'from-purple-500/20 to-purple-600/5',
      'from-blue-500/20 to-blue-600/5',
      'from-cyan-500/20 to-cyan-600/5',
    ];
    return colors[colorIndex];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particles */}
      {particleData.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: getParticleGradient(particle.color),
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          initial={{
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Shapes */}
      {shapeData.map((shape, i) => {
        const colorClass = getColorClass(shape.color);

        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              width: shape.size,
              height: shape.size,
            }}
            initial={{ rotate: 0, scale: 1, opacity: 0.8 }}
            animate={{
              rotate: 360,
              scale: [1, 1.15, 1],
              y: [0, -30, 0],
              opacity: [0.8, 0.5, 0.8],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shape.type === 0 && (
              <div 
                className={`w-full h-full border-2 border-purple-500/30 rounded-full backdrop-blur-sm bg-gradient-to-br ${colorClass}`}
                style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)' }} 
              />
            )}
            {shape.type === 1 && (
              <div 
                className={`w-full h-full border-2 border-blue-500/30 rotate-45 backdrop-blur-sm bg-gradient-to-br ${colorClass}`}
                style={{ borderRadius: '20%', boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }} 
              />
            )}
            {shape.type === 2 && (
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="url(#gradient-${i})"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-500/40"
                />
                <defs>
                  <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.25)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            {shape.type === 3 && (
              <div 
                className={`w-full h-full border-2 border-cyan-500/30 rounded-3xl backdrop-blur-sm bg-gradient-to-br ${colorClass}`}
                style={{ transform: 'rotate(12deg)', boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)' }} 
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
              }
