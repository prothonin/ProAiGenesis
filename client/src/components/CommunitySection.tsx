import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiInstagram, SiYoutube, SiTelegram } from "react-icons/si";

const communities = [
  {
    icon: SiInstagram,
    name: "Instagram",
    handle: "@Prothonai",
    description: "Follow us for updates and behind-the-scenes content",
    link: "https://instagram.com/prothonai",
  },
  {
    icon: SiYoutube,
    name: "YouTube",
    handle: "Prothon",
    description: "Subscribe for tutorials, demos, and tech insights",
    link: "https://youtube.com/@prothonai?si=Bl3Y8XZb6FxRl5aw",
  },
  {
    icon: SiTelegram,
    name: "Telegram",
    handle: "Support Channel",
    description: "Get help from developers and join discussions",
    link: "https://t.me/Prothonai",
  },
];

export default function CommunitySection() {
  return (
    <section className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect With Us</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated, get support, and be part of our growing community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col backdrop-blur-lg bg-card/50 border-primary/20 hover-elevate hover:border-primary/40 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <community.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{community.name}</h3>
                    <p className="text-sm text-muted-foreground">{community.handle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {community.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                  data-testid={`button-join-${community.name.toLowerCase()}`}
                >
                  <a href={community.link} target="_blank" rel="noopener noreferrer">
                    Follow / Join
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 p-6 rounded-2xl bg-primary/5 border border-primary/10"
        >
          <p className="text-muted-foreground">
            💬 Need developer support? Join our{" "}
            <a
              href="https://t.me/Prothonai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-testid="link-telegram-support"
            >
              Telegram channel
            </a>{" "}
            for direct help from our team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
