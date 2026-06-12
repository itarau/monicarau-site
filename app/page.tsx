import { Nav } from "@/components/sections/nav";
import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero";
import { Stats } from "@/components/sections/stats";
import { Challenges } from "@/components/sections/challenges";
import { Services } from "@/components/sections/services";
import { Formats } from "@/components/sections/formats";
import { ForWhom } from "@/components/sections/for-whom";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <GlowyWavesHero />
        <Stats />
        <Challenges />
        <Services />
        <Formats />
        <ForWhom />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
