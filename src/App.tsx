import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Hero from "./components/sections/hero";
import Features from "./components/sections/features";
import About from "./components/sections/about";
import Pricing from "./components/sections/pricing";
import Consultation from "./components/sections/consultation";
import Faq from "./components/sections/faq";
import Contact from "./components/sections/contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Consultation />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;