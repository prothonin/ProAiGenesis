import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithProAi } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint for ProAi
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const response = await chatWithProAi(message);
      
      res.json({ response });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to get response from ProAi" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
