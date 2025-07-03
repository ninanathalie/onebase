import { Route, Routes } from "react-router-dom";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomePage from "@/pages/home";
import PricingPage from "@/pages/pricing-details";

import ThemeContextProvider from "@/context/theme-context";
import ScrollToHash from "@/components/ui/scroll-to-hash";

function App() {
  return (
    <ThemeContextProvider>
      <div className="bg-gradient-to-bl from-indigo-200 via-teal-100/10 to-indigo-200 dark:from-cyan-950 dark:via-slate-950 dark:to-blue-950">
        <div className="flex flex-col min-h-screen bg-grid-small-slate-400/[0.2] dark:bg-grid-small-slate-950 relative">
          <Header />
          <main className="flex-grow relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />

          <ScrollToHash />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
