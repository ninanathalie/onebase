import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import AboutImg from "@/assets/1b-about.svg";

const About = () => {
  return (
    <Container id="about" className="mb-16">
      <div className="flex flex-col gap-8 lg:gap-14 xl:gap-24 lg:flex-row items-center">
        <div className="w-full lg:w-5/12 mb-10 flex justify-center lg:justify-end">
          <img src={AboutImg} alt="" />
        </div>

        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <SectionTitle responsive subtitle="About 1Base" title="Simplify. Optimize. Accelerate." />

          <p className="mb-2">
            At 1Base, we craft powerful software solutions designed specifically for your business to simplify complexity, drive productivity, and ignite growth. Starting with tailored Zoho implementations and extending to comprehensive software solutions, we ensure your digital
            infrastructure aligns seamlessly with your ambitions.
          </p>

          <p className="mb-8">
            From streamlined processes to supercharged sales pipelines, our expert team focuses on what truly matters, your business results. We don't just provide solutions; we partner with you every step of the way, delivering clarity, efficiency, and measurable growth.
          </p>

          <div className="space-y-4 w-full  flex flex-col items-center lg:items-start">
            <div className="flex items-start">
              <CheckCircle className="hidden lg:inline h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1.5" />
              <div>
                <h4 className="font-medium text-lg text-slate-900 dark:text-slate-300">Expert Implementation</h4>
                <p>Our team of certified professionals ensures smooth CRM implementation.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="hidden lg:inline h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1.5" />
              <div>
                <h4 className="font-medium text-lg text-slate-900 dark:text-slate-300">Tailored Solutions</h4>
                <p>We customize your CRM to match your specific business workflows and goals.</p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="hidden lg:inline h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1.5" />
              <div>
                <h4 className="font-medium text-lg text-slate-900 dark:text-slate-300">Ongoing Support</h4>
                <p>We provide continuous assistance to help you maximize your CRM investment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;