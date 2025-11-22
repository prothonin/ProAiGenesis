import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Background3D from "./Background3D";
import heroImage from "@assets/stock_images/futuristic_ai_techno_3dd0e2ef.jpg";
import { Sparkles } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      <Background3D variant="hero" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-primary text-sm md:text-base font-semibold tracking-wide uppercase">
            High Intelligence Technology
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight"
          style={{
            textShadow: '0 0 60px rgba(124, 58, 237, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)',
          }}
        >
          Prothon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Building the future with artificial intelligence. We create cutting-edge
          applications that transform possibilities into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button
            size="lg"
            className="px-10 py-7 text-lg font-semibold rounded-full bg-white text-purple-900 hover:bg-white/90 shadow-2xl hover:scale-105 transition-all"
            data-testid="button-explore-apps"
          >
            Explore Our Apps
          </Button>
          <Button
            size="lg"
            onClick={() => setLocation("/chat")}
            className="group px-10 py-7 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all relative overflow-hidden"
            data-testid="button-try-proai"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Try ProAi
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
