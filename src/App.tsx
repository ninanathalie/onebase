import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import About from "@/components/sections/about";
import Pricing from "@/components/sections/pricing";
import Consultation from "@/components/sections/consultation";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import ScrollingTextDivider from "@/components/sections/text-divider";

function App() {
  return (
    <div className="bg-gradient-to-bl from-indigo-200 via-teal-100/10 to-indigo-200">
      <div className="flex flex-col min-h-screen bg-grid-small-slate-400/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <Header />
        <main className="flex-grow relative">
          <Hero />
          <Features />
          <ScrollingTextDivider />
          <About />
          <Pricing />
          <Consultation />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;