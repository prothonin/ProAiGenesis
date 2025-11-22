import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

export default function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className={`flex gap-4 mb-8 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      data-testid={`message-${role}`}
    >
      <Avatar className={`w-11 h-11 ${!isUser && "ring-2 ring-purple-500/30 shadow-lg shadow-purple-500/20"}`}>
        <AvatarFallback className={isUser 
          ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold" 
          : "bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 text-white font-semibold"}>
          {isUser ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
        </AvatarFallback>
      </Avatar>

      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-2xl`}>
        <div
          className={`px-7 py-5 rounded-3xl ${
            isUser
              ? "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 text-white shadow-xl shadow-blue-500/20"
              : "backdrop-blur-xl bg-gradient-to-br from-card/90 to-card/70 border border-purple-500/20 shadow-xl shadow-purple-500/10"
          }`}
        >
          <p className={`text-base leading-relaxed whitespace-pre-wrap ${!isUser && 'font-medium'}`}>
            {content}
          </p>
        </div>
        {timestamp && (
          <p className="text-xs text-muted-foreground mt-2 px-3 font-medium">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </motion.div>
  );
}
