import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-4 mb-6">
      <Avatar className="w-10 h-10 ring-2 ring-primary/20">
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
          <Sparkles className="w-5 h-5" />
        </AvatarFallback>
      </Avatar>

      <div className="backdrop-blur-md bg-card/80 border border-primary/20 shadow-md px-6 py-4 rounded-2xl">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
