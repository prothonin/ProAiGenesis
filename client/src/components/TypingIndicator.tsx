import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-4 mb-8">
      <Avatar className="w-11 h-11 ring-2 ring-purple-500/30 shadow-lg shadow-purple-500/20">
        <AvatarFallback className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 text-white font-semibold">
          <Sparkles className="w-5 h-5" />
        </AvatarFallback>
      </Avatar>

      <div className="backdrop-blur-xl bg-gradient-to-br from-card/90 to-card/70 border border-purple-500/20 shadow-xl shadow-purple-500/10 px-7 py-5 rounded-3xl">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
