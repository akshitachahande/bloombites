import Image from "next/image";
import { Blossom } from "@/components/ui/Blossom";
import { Button } from "@/components/ui/Button";

/** Figma "Hero section" (desktop 2025:475, mobile 24:187). */
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream">
      {/* Mobile blossoms, positioned from the 430px Figma frame */}
      <div aria-hidden className="lg:hidden">
        <Blossom width={69} height={74.4} rotate={90.31} top={12.5} left={21} />
        <Blossom width={123} height={132.5} rotate={90.31} top={92} right={18.5} delay={1.5} />
        <Blossom width={69.5} height={74.9} rotate={3.86} top={269.5} right={15.7} delay={3} />
        <Blossom width={52.6} height={56.7} rotate={3.86} top={404} right={63} delay={4.5} />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center px-[30px] pt-12 pb-[90px] lg:grid-cols-[minmax(0,1fr)_minmax(0,524px)] lg:gap-12 lg:px-[130px] lg:pt-[139px] lg:pb-[140px]">
        <div className="relative z-10">
          <h1 className="relative font-display text-5xl leading-[85px] font-bold text-olive lg:pl-[23px] lg:text-[80px]">
            <span className="hidden lg:block" aria-hidden>
              <Blossom width={106} height={114} rotate={51.68} top={-115} left={8.6} />
              <Blossom width={72.9} height={78.5} rotate={3.86} top={-22.6} left={489.6} delay={2} />
            </span>
            <span className="relative block animate-rise">A Quiet Bloom</span>
            <span className="relative block animate-rise [animation-delay:150ms]">
              in Every Sip
            </span>
          </h1>

          <p className="mt-4 max-w-[306px] animate-rise [animation-delay:300ms] text-xs leading-[25px] lg:mt-[51px] lg:max-w-[523px] lg:px-[13px] lg:text-xl lg:leading-[35px]">
            We whisk fine matcha with floral touches to create cups that feel like a gentle pause
            in your day—warm, delicate, and quietly uplifting, from first sip to last.
          </p>

          <div className="mt-[30px] flex animate-rise flex-col items-start gap-[30px] [animation-delay:450ms] lg:mt-[51px] lg:flex-row lg:gap-[63px]">
            <Button href="/#featured">Order Online</Button>
            <Button href="/#branches" variant="blossom" icon="arrow-right">
              Visit Bloom Bites
            </Button>
          </div>
        </div>

        <div className="relative hidden aspect-[524/623] w-full lg:block">
          <Image
            src="/images/hero/matcha-latte.jpg"
            alt="Matcha latte with pink blossom latte art on a marble board"
            fill
            loading="eager"
            sizes="524px"
            className="animate-arch rounded-t-[300px] object-cover [animation-delay:200ms]"
          />
          <div aria-hidden>
            <Blossom width={72.9} height={78.5} rotate={3.86} top={556.4} left={-52.4} delay={1} />
            <Blossom width={72.9} height={78.5} rotate={3.86} top={8.4} left={364.6} delay={2.5} />
            <Blossom width={83.5} height={89.9} rotate={3.86} top={196.7} left={481.9} delay={4} />
            <Blossom width={69.1} height={74.4} rotate={3.86} top={291.2} left={501.4} delay={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
