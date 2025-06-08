import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import HeroBanner from "@/assets/1b-hero.svg"

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="px-4 py-10 lg:py-20">
          <h1 className="relative z-10 mx-auto max-w-2xl lg:max-w-6xl text-center font-semibold text-slate-900 text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
            {"Streamline Your Business with 1Base CRM".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg text-slate-500"
          >
            Professional CRM setup services to help you manage relationships, increase productivity, and drive growth.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 lg:mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#features" variant="primary">
              Explore Features
            </Button>
            <Button href="#consultation" variant="outline">
              Book a Consultation
            </Button>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="relative z-10 mt-14 lg:mt-20 rounded-3xl border bg-slate-900 p-2 lg:p-4 shadow-md"
          >
            <div className="w-full overflow-hidden rounded-xl border border-white">
              <img src={HeroBanner} alt="Landing page preview" className="h-auto w-full object-cover" height={736} width={1200} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;