import React from "react";
import Container from "../ui/container";
import SectionTitle from "../ui/section-title";
import { CheckCircle, Database } from "lucide-react";

const About = () => {
  return (
    <Container id="about">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <div className="relative">
            <div className="aspect-video bg-blue-600 rounded-2xl flex items-center justify-center text-white">
              <Database className="w-24 h-24" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl border border-gray-100">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">A</div>
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">B</div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">C</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Happy Clients</p>
                  <p className="text-xs text-gray-500">Join 200+ businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <SectionTitle 
            title="About 1Base" 
            centered={false}
          />
          
          <p className="text-gray-600 mb-6">
            1Base is a specialized CRM setup service founded by industry experts with over 15 years of experience in customer relationship management systems. Our mission is to help businesses of all sizes implement and optimize CRM solutions that drive growth and improve customer satisfaction.
          </p>
          
          <p className="text-gray-600 mb-8">
            We believe that a properly configured CRM is not just a tool, but a competitive advantage. Our team works closely with you to understand your unique business needs and customize your CRM accordingly.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Expert Implementation</h4>
                <p className="text-gray-600">Our team of certified professionals ensures smooth CRM implementation.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Tailored Solutions</h4>
                <p className="text-gray-600">We customize your CRM to match your specific business workflows and goals.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-gray-900">Ongoing Support</h4>
                <p className="text-gray-600">We provide continuous assistance to help you maximize your CRM investment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;