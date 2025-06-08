import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionStyle, Transition } from "motion/react";

import Button from "@/components/ui/button";
import { Particles } from "@/components/animations/particles";

import HeroGraphOne from "@/assets/1b-hero-graph-1.svg";
import HeroGraphTwo from "@/assets/1b-hero-graph-2.svg";
import HeroGraphThree from "@/assets/1b-hero-graph-3.svg";
import HeroGraphFour from "@/assets/1b-hero-graph-4.svg";
import HeroGraphFive from "@/assets/1b-hero-graph-5.svg";
import HeroGraphSix from "@/assets/1b-hero-graph-6.svg";

const Hero = () => {
  const [color, setColor] = useState("#FF8000");

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <Particles className="absolute inset-0 z-10" quantity={100} ease={80} color={color} refresh />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="px-4 py-10 lg:py-20 z-20">
          <h1 className="relative z-10 mx-auto max-w-2xl lg:max-w-6xl text-center font-semibold text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
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
                className="mr-2 inline-block bg-gradient-to-t from-sky-900 via-slate-900 to-slate-950 bg-clip-text text-transparent"
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
            className="relative before:content-[''] before:absolute before:inset-0
            before:bg-[linear-gradient(to_bottom,#ffae5d,#ffae5d,transparent_40%)]
            before:blur-[180px]
            before:animate-image-glow"
          >
            <div className="relative mt-14 lg:mt-20 rounded-2xl lg:rounded-3xl bg-slate-900 p-2 lg:p-4 shadow-md">
              <HeroImg />
              <HeroBeam duration={4} size={800} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HeroImg = () => {
  const motionOne = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const motionTwo = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: 5,
      scale: 1.07,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div initial="initial" whileHover="animate" className="flex flex-1 justify-center w-full h-full rounded-md lg:rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-50 dark:from-indigo-100/10 dark:to-cyan-50/5 overflow-hidden">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <motion.div variants={motionOne} className="lg:mt-4 lg:mx-3 md:mt-2 md:mx-2 mt-1 mx-1">
            <img
              src={HeroGraphOne}
              alt="avatar"
              height={480}
              width={368}
              style={{
                width: "auto",
                height: "auto",
                boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
              }}
              className="rounded-md lg:rounded-xl feat-img-01"
            />
          </motion.div>

          <motion.div variants={motionTwo} className="lg:mt-4 lg:mr-3 md:mt-2 md:mr-2 mt-1 mr-1">
            <img
              src={HeroGraphTwo}
              alt="avatar"
              height={259}
              width={368}
              style={{
                width: "auto",
                height: "auto",
                boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
              }}
              className="rounded-md lg:rounded-xl feat-img-02"
            />
          </motion.div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <motion.div variants={motionTwo} className="lg:mt-4 lg:mx-3 md:mt-2 md:mx-2 mt-1 mx-1">
              <img
                src={HeroGraphThree}
                alt="avatar"
                height={259}
                width={368}
                style={{
                  width: "auto",
                  height: "auto",
                  boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="rounded-md lg:rounded-xl feat-img-02"
              />
            </motion.div>

            <motion.div variants={motionOne} className="lg:mt-5 lg:mx-3 md:mt-3 md:mx-2 mt-1 mx-1">
              <img
                src={HeroGraphFour}
                alt="avatar"
                height={259}
                width={368}
                style={{
                  width: "auto",
                  height: "auto",
                  boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
                }}
                className="rounded-md lg:rounded-xl feat-img-02"
              />
            </motion.div>
          </div>

          <motion.div variants={motionOne} className="lg:mt-4 md:mt-2 mt-1 lg:mr-3 md:mr-2 mr-1">
            <img
              src={HeroGraphFive}
              alt="avatar"
              height={259}
              width={368}
              style={{
                width: "auto",
                height: "auto",
                boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
              }}
              className="rounded-md lg:rounded-xl feat-img-02"
            />
          </motion.div>
        </div>
      </div>

      <motion.div variants={motionOne} className="hidden lg:block -mt-4">
        <img
          src={HeroGraphSix}
          alt="avatar"
          height={259}
          width={368}
          style={{
            width: "auto",
            height: "auto",
            boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="feat-img-02"
        />
      </motion.div>
    </motion.div>
  );
};

interface HeroBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
}

const HeroBeam = ({ className, size = 50, delay = 0, duration = 6, colorFrom = "#ffaa40", colorTo = "#9c40ff", transition, style, reverse = false, initialOffset = 0 }: HeroBeamProps) => {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={cn("absolute aspect-square", "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent", className)}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse ? [`${100 - initialOffset}%`, `${-initialOffset}%`] : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};

export default Hero;