import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-10 backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent border-purple-500/30 hover-elevate group">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <div className="text-6xl font-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-3" data-testid="text-stat-apps">
                    50+
                  </div>
                  <div className="text-lg font-semibold text-foreground">AI-Powered Apps</div>
                  <div className="text-sm text-muted-foreground mt-1">Transforming industries</div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-10 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent border-blue-500/30 hover-elevate group">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3" data-testid="text-stat-community">
                    10K+
                  </div>
                  <div className="text-lg font-semibold text-foreground">Active Community</div>
                  <div className="text-sm text-muted-foreground mt-1">Growing every day</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
