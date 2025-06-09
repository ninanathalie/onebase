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

import ThemeContextProvider from "@/context/theme-context";

function App() {
  return (
    <ThemeContextProvider>
      <div className="bg-gradient-to-bl from-indigo-200 via-teal-100/10 to-indigo-200 dark:from-cyan-950 dark:via-slate-950 dark:to-blue-950">
        <div className="flex flex-col min-h-screen bg-grid-small-slate-400/[0.2] dark:bg-grid-small-slate-950 relative">

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
    </ThemeContextProvider>
  );
}

export default App;