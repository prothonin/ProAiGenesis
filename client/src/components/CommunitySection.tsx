import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiInstagram, SiYoutube, SiTelegram } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

const communities = [
  {
    icon: SiInstagram,
    name: "Instagram",
    handle: "@Prothonai",
    description: "Follow us for updates and behind-the-scenes content",
    link: "https://instagram.com/prothonai",
    gradient: "from-pink-500 to-purple-500",
    bgGradient: "from-pink-500/10 to-purple-500/5",
    borderColor: "border-pink-500/30",
  },
  {
    icon: SiYoutube,
    name: "YouTube",
    handle: "Prothon",
    description: "Subscribe for tutorials, demos, and tech insights",
    link: "https://youtube.com/@prothonai?si=Bl3Y8XZb6FxRl5aw",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/10 to-rose-500/5",
    borderColor: "border-red-500/30",
  },
  {
    icon: SiTelegram,
    name: "Telegram",
    handle: "Support Channel",
    description: "Get help from developers and join discussions",
    link: "https://t.me/Prothonai",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    borderColor: "border-blue-500/30",
  },
];

export default function CommunitySection() {
  return (
    <section className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Stay updated, get support, and be part of our growing community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 h-full flex flex-col backdrop-blur-xl bg-gradient-to-br ${community.bgGradient} to-transparent border ${community.borderColor} hover-elevate hover:border-opacity-60 transition-all group`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${community.gradient} flex items-center justify-center shadow-lg`}>
                    <community.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{community.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{community.handle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {community.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full group/btn border-2"
                  asChild
                  data-testid={`button-join-${community.name.toLowerCase()}`}
                >
                  <a href={community.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <span className="font-semibold">Follow / Join</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
          transition={{ delay: 0.5 }}
          className="text-center mt-20 p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/20"
        >
          <p className="text-lg font-medium">
            💬 Need developer support? Join our{" "}
            <a
              href="https://t.me/Prothonai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-bold"
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
