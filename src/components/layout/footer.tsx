import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Logo from "@/assets/1b-logo-light.svg";
import { legalLinks, navLinks, services, socialLinks } from "@/data/nav-data";

export type SocialIconKey = "facebook" | "twitter" | "instagram" | "linkedin";

const iconMap: Record<SocialIconKey, JSX.Element> = {
  facebook: <Facebook className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 z-40">
      <div className="container mx-auto px-6 pt-12 lg:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + About + Social */}
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="1base-logo" />
            </div>
            <p className="mb-4 text-slate-400">
              Professional CRM setup services to help businesses streamline
              operations and grow customer relationships.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {iconMap[icon as keyof typeof iconMap]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {label === "Book a Consultation"
                      ? "Book Consultation"
                      : label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium tracking-wider text-white mb-4">
              Newsletter
            </h3>
            <p className="mb-4 text-slate-400">
              Subscribe to our newsletter for the latest updates and CRM tips.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-slate-800 text-slate-200 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-500 text-white p-2 rounded-r-lg transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-sm text-slate-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />

        {/* Legal + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 1Base. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-500 hover:text-slate-300 text-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
