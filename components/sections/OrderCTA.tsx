import Image from "next/image";
import { OpenFormButton } from "@/components/forms/OpenFormButton";

/** Figma "Order" (desktop 23:1195, mobile 24:4065). */
export function OrderCTA() {
  return (
    <section
      id="order"
      aria-labelledby="order-heading"
      className="relative isolate overflow-hidden text-cream"
    >
      <Image
        src="/images/order/matcha-swirl.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 animate-drift object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[rgb(46_48_33/0.27)]" />

      <div className="mx-auto flex min-h-[802px] max-w-[1440px] flex-col items-start px-[43px] pt-[63px] pb-16 lg:px-[195px] lg:pt-[122px]">
        <h2
          id="order-heading"
          data-reveal
          className="font-display text-5xl leading-[85px] font-bold lg:text-[50px]"
        >
          Order with Love,
          <br />
          For your Love!
        </h2>

        <p
          data-reveal
          className="mt-[45px] [--reveal-delay:150ms] max-w-[314px] text-base leading-[25px] lg:mt-[90px] lg:max-w-[497px] lg:text-2xl lg:leading-[35px]">
          From crisp croissants dipped in matcha to soft, floral macarons, these are the bakes our
          guests can’t stop ordering. Fresh from the oven, perfectly green, and made to pair with
          your favorite latte.
        </p>

        <div
          data-reveal
          className="mt-[37px] flex [--reveal-delay:300ms] flex-col items-start gap-[34px] lg:mt-[54px] lg:flex-row lg:gap-8">
          <OpenFormButton form="gift" icon="gift">
            Send a Gift Box
          </OpenFormButton>
          <OpenFormButton form="delivery" variant="blossom" icon="calendar">
            Schedule a Delivery
          </OpenFormButton>
        </div>
      </div>
    </section>
  );
}
