import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <CommunitySection />
    </div>
  );
}
