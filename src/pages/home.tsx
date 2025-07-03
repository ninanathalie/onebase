import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import About from "@/components/sections/about";
import Pricing from "@/components/sections/pricing";
import Consultation from "@/components/sections/consultation";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import ScrollingTextDivider from "@/components/sections/text-divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ScrollingTextDivider />
      <About />
      <Pricing />
      <Consultation />
      <Faq />
      <Contact />
    </>
  );
}
