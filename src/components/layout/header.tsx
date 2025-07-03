import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "@/components/ui/nav-link";
import Button from "@/components/ui/button";

import LogoDark from "@/assets/1b-logo-dark.svg";
import LogoLight from "@/assets/1b-logo-light.svg";

import { useTheme } from "@/context/theme-context";
import { navLinks } from "@/data/nav-data";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent px-4 py-5">
      <div
        className={`container mx-auto transition-all duration-300 ${
          isScrolled
            ? "max-w-5xl bg-slate-50 border-2 border-slate-100 dark:bg-slate-700/95 dark:border-slate-600 py-3 px-6 rounded-full"
            : "px-4 md:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={theme === "light" ? LogoDark : LogoLight}
              alt="1base-logo"
              className={`transition-all duration-300 ease-in-out ${
                isScrolled ? "w-[145px] h-[30px]" : "w-[151px] h-[36px]"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
            <Button href="#consultation" variant="primary">
              Book a Consultation
            </Button>
            <button
              onClick={toggleTheme}
              className="pr-2 inline-flex items-center hover:text-secondary-color mr-4 md:mr-0 md:ml-10"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-700 dark:text-slate-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white dark:bg-slate-700/95 ${
          isMenuOpen ? "max-h-screen py-4 shadow-md" : "max-h-0 py-0"
        } mt-2 rounded-xl overflow-hidden transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.slice(0, -1).map(({ label, href }) => (
              <NavLink
                key={href}
                href={href}
                mobile
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Button href="#consultation" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
