import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Pricing from './components/sections/Pricing';
import Consultation from './components/sections/Consultation';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';

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