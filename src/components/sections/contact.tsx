import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Container id="contact" className="bg-gray-50">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="We're here to answer your questions and provide the support you need"
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-3 text-blue-600 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email Us</p>
                      <p className="font-medium text-gray-900">connect@1base.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-3 text-blue-600 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Call Us</p>
                      <p className="font-medium text-gray-900">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-3 text-blue-600 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Visit Us</p>
                      <p className="font-medium text-gray-900">
                        123 Business Avenue<br />
                        Suite 200<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-3 text-blue-600 mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                      <p className="font-medium text-gray-900">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input 
                        type="text"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      rows={6}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input 
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to be contacted regarding my inquiry.
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 w-full md:w-auto"
                  >
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