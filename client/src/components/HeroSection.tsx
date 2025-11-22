import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Background3D from "./Background3D";
import heroImage from "@assets/stock_images/futuristic_ai_techno_3dd0e2ef.jpg";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      <Background3D variant="hero" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm md:text-base font-medium tracking-wider uppercase mb-4"
        >
          High Intelligence Technology
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          Prothon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
        >
          Building the future with artificial intelligence. We create cutting-edge
          applications that transform possibilities into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-xl"
            data-testid="button-explore-apps"
          >
            Explore Our Apps
          </Button>
          <Button
            size="lg"
            onClick={() => setLocation("/chat")}
            className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:scale-105 transition-transform"
            data-testid="button-try-proai"
          >
            Try ProAi
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
