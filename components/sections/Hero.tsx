import { Button } from "@/components/ui/Button";

/** Figma "Hero section" (desktop 2025:475, mobile 24:187). */
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-center px-[30px] pt-12 pb-[90px] lg:grid-cols-[minmax(0,1fr)_minmax(0,524px)] lg:gap-12 lg:px-[130px] lg:pt-[62px] lg:pb-[100px]">
        <div className="relative z-10">
          <h1 className="font-display text-5xl leading-[85px] font-bold text-olive lg:px-[13px] lg:text-[80px]">
            A Quiet Bloom
            <br />
            in Every Sip
          </h1>

          <p className="mt-4 max-w-[306px] text-xs leading-[25px] lg:mt-[51px] lg:max-w-[523px] lg:px-[13px] lg:text-xl lg:leading-[35px]">
            We whisk fine matcha with floral touches to create cups that feel like a gentle pause
            in your day—warm, delicate, and quietly uplifting, from first sip to last.
          </p>

          <div className="mt-[30px] flex flex-col items-start gap-[30px] lg:mt-[51px] lg:flex-row lg:gap-[63px]">
            <Button href="/#featured">Order Online</Button>
            <Button href="/#branches" variant="blossom" icon="arrow-right">
              Visit Bloom Bites
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
