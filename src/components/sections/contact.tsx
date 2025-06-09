import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Container id="contact" className="mb-12 lg:mb-24">
      <SectionTitle centered subtitle="Get in Touch" title="Let us know how we can help" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-500-100 rounded-lg p-3 text-primary-500 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email Us</p>
                      <p className="font-medium text-slate-900 dark:text-slate-200">connect@1base.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-500-100 rounded-lg p-3 text-primary-500 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Call Us</p>
                      <p className="font-medium text-slate-900 dark:text-slate-200">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-500-100 rounded-lg p-3 text-primary-500 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Visit Us</p>
                      <p className="font-medium text-slate-900 dark:text-slate-200">
                        Axiom Telecom HQ, Axiom Town
                        <br />
                        Dubai Silicon Oasis,
                        <br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-500-100 rounded-lg p-3 text-primary-500 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Business Hours</p>
                      <p className="font-medium text-slate-900 dark:text-slate-200">
                        Monday - Friday: 9am - 5pm
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-white/5 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-6">Send Us a Message</h3>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Your Name</label>
                      <input type="text" className="block w-full px-3 py-2 border border-slate-300 dark:bg-slate-800 dark:border-slate-600 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="John Doe" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email Address</label>
                      <input type="email" className="block w-full px-3 py-2 border border-slate-300 dark:bg-slate-800 dark:border-slate-600 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Subject</label>
                    <input type="text" className="block w-full px-3 py-2 border border-slate-300 dark:bg-slate-800 dark:border-slate-600 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="How can we help you?" />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Message</label>
                    <textarea rows={6} className="block w-full px-3 py-2 border border-slate-300 dark:bg-slate-800 dark:border-slate-600 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Type your message here..."></textarea>
                  </div>

                  <div className="flex items-center mb-6">
                    <input id="privacy" type="checkbox" className="h-4 w-4 text-primary-500 rounded border-slate-300 dark:bg-slate-800 dark:border-slate-600 focus:ring-primary-500" />
                    <label htmlFor="privacy" className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                      I agree to the{" "}
                      <a href="#" className="text-primary-500 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to be contacted regarding my inquiry.
                    </label>
                  </div>

                  <button type="submit" className="bg-primary-500 hover:bg-primary-500 text-white px-6 py-3 rounded-lg transition-colors duration-300 w-full md:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;