import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function StatsSection() {
  return (
    <section className="relative py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 backdrop-blur-lg bg-card/50 border-primary/20 hover-elevate">
              <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-apps">
                50+
              </div>
              <div className="text-muted-foreground">AI-Powered Apps</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 backdrop-blur-lg bg-card/50 border-primary/20 hover-elevate">
              <div className="text-5xl font-bold text-primary mb-2" data-testid="text-stat-community">
                10K+
              </div>
              <div className="text-muted-foreground">Active Community</div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
