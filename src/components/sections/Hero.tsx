import React from 'react';
import { ChevronRight, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              Streamline Your Business with <span className="text-blue-600">1Base CRM</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg animate-fade-in animation-delay-200">
              Professional CRM setup services to help you manage relationships, increase productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <a 
                href="#consultation" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Book a Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-center"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in animation-delay-600">
            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white mr-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">CRM Dashboard</h3>
                  <p className="text-sm text-gray-500">Real-time metrics</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-blue-50 rounded-lg animate-pulse"></div>
                  <div className="h-24 bg-green-50 rounded-lg animate-pulse"></div>
                </div>
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-100 via-teal-50 to-purple-50 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;