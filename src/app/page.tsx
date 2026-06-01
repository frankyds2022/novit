import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { AIApplied } from "@/components/sections/AIApplied";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { ContactSection } from "@/components/sections/ContactSection";
import { Clients } from "@/components/sections/Clients";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-zinc-950 transition-colors duration-300">
      <Hero />
      <Services />
      <Stats />
      <AIApplied />
      <CaseStudy />
      <ContactSection />
      <Clients />
    </div>
  );
}
