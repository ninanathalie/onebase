import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from "@/assets/1b-logo-light.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 z-40">
      <div className="container mx-auto px-6 pt-12 lg:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="1base-logo" />
            </div>
            <p className="mb-4 text-slate-400">Professional CRM setup services to help businesses streamline operations and grow customer relationships.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#consultation" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wider text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  CRM Implementation
                </a>
              </li>
              <li>
                <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Data Migration
                </a>
              </li>
              <li>
                <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Custom Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Team Training
                </a>
              </li>
              <li>
                <a href="#" className="text-light tracking-wide text-slate-400 hover:text-white transition-colors duration-300">
                  Ongoing Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-wider text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-slate-400">Subscribe to our newsletter for the latest updates and CRM tips.</p>
            <form className="mb-4">
              <div className="flex">
                <input type="email" placeholder="Your email address" className="bg-slate-800 text-slate-200 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-primary-500" />
                <button type="submit" className="bg-primary-500 hover:bg-primary-500 text-white p-2 rounded-r-lg transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-sm text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} 1Base. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;