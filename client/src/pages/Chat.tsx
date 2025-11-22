import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import Background3D from "@/components/Background3D";
import ChatMessage from "@/components/ChatMessage";
import TypingIndicator from "@/components/TypingIndicator";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response from ProAi. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-500/5 to-blue-500/5 relative overflow-hidden">
      <Background3D variant="chat" />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-20 backdrop-blur-2xl bg-background/90 border-b border-purple-500/20 shadow-lg"
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation("/")}
            className="hover-elevate"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ProAi</h1>
              <p className="text-xs text-muted-foreground font-semibold">Advanced AI by Prothon</p>
            </div>
          </div>
          
          <div className="w-12" />
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-10 max-w-4xl relative z-10">
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <motion.div 
              className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/40"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-14 h-14 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black mb-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Welcome to ProAi
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm ProAi, your advanced AI assistant built by Prothon. I can help you with app development, 
              generate images, solve complex problems, and much more. How can I assist you today?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Build a web application",
                "Generate an image",
                "Explain a concept",
                "Help with coding"
              ].map((suggestion, i) => (
                <motion.div
                  key={suggestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Button
                    variant="outline"
                    className="w-full hover-elevate border-2 font-semibold"
                    onClick={() => setInput(suggestion)}
                    data-testid={`button-suggestion-${suggestion.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {suggestion}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="pb-40">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
              />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-20 backdrop-blur-2xl bg-background/90 border-t border-purple-500/20 shadow-2xl">
        <div className="container mx-auto px-6 py-6 max-w-4xl">
          <div className="flex gap-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask ProAi anything..."
              className="resize-none min-h-[68px] max-h-[200px] text-base font-medium border-2 focus:border-purple-500/50"
              data-testid="input-chat-message"
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="h-[68px] w-[68px] rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 hover:from-purple-700 hover:via-purple-600 hover:to-blue-700 text-white shadow-2xl shadow-purple-500/40 hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              data-testid="button-send-message"
            >
              <Send className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
