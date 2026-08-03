import { HeroExperience } from "@/components/sections/HeroExperience";
import { Tensao } from "@/components/sections/Tensao";
import { Reframe } from "@/components/sections/Reframe";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { ParaQuemE } from "@/components/sections/ParaQuemE";
import { VisaoDeProduto } from "@/components/sections/VisaoDeProduto";
import { DemoReel } from "@/components/sections/DemoReel";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroExperience />
      <Tensao />
      <Reframe />
      <ComoFunciona />
      <Diferenciais />
      <ParaQuemE />
      <VisaoDeProduto />
      <DemoReel />
      <Cta />
      <Footer />
    </main>
  );
}
