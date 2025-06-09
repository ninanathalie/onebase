import Marquee from "@/components/animations/marquee";

const ScrollingTextDivider = () => {
  return (
    <div className="relative -mx-4 flex flex-col w-full overflow-hidden py-16 lg:py-20 2xl:py-24 mb-4 dark:text-slate-200">
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        <div className="flex gap-4">
          <TextFilled>Simplify Your Process</TextFilled>
          <TextStroke>Boost Your Efficiency</TextStroke>
        </div>
      </Marquee>

      <Marquee pauseOnHover className="[--duration:25s]">
        <div className="flex gap-4">
          <TextStroke>Your Success Starts With</TextStroke>
          <TextFilled>1Base</TextFilled>
        </div>
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:35s]">
        <div className="flex gap-4">
          <TextFilled>Boost Your Efficiency</TextFilled>
          <TextStroke>Simplify Your Process</TextStroke>
        </div>
      </Marquee>
    </div>
  );
};

export function TextStroke({ children }: { children: string }) {
  return (
    <span className={`font-krona uppercase tracking-tight text-center text-6xl lg:text-8xl mb-4 stroke-current`} style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1.5px" }}>
      {children}
    </span>
  );
}

export const TextFilled = ({ children }: { children: string }) => {
  return <span className="font-krona uppercase tracking-tight text-center text-6xl lg:text-8xl font-semibold mb-4">{children}</span>;
}

export default ScrollingTextDivider;