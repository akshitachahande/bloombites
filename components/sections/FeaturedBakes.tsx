import { ViewAllButton } from "@/components/search/ViewAllButton";
import { Blossom } from "@/components/ui/Blossom";
import { FeaturedProducts } from "./FeaturedProducts";

/** Figma "Featured Items" (desktop 19:940, mobile 24:3904). */
export function FeaturedBakes() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="relative overflow-hidden border-y-4 border-olive bg-white"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-[26px] pt-[76px] pb-12 lg:flex-row-reverse lg:items-center lg:justify-between lg:px-[130px] lg:py-[50px]">
        {/* Copy column, with the oversized blossom drifting behind it */}
        <div className="relative lg:h-[676px] lg:w-[497px] lg:shrink-0">
          <Blossom
            width={649.6}
            height={700}
            rotate={52.1}
            top={103}
            left={152}
            className="animate-none! opacity-70 lg:top-[140px] lg:left-[164px]"
          />

          <div className="relative lg:pt-[29px]">
            <p className="flex h-11 items-center text-xl leading-[35px]">Featured Matcha Bakes</p>
            <h2
              id="featured-heading"
              className="max-w-[377px] font-display text-[40px] leading-[85px] font-bold text-olive lg:mt-[26px] lg:max-w-none lg:text-[70px]"
            >
              Little Bites, Big Matcha Moments
            </h2>
            <p className="mt-4 max-w-[315px] text-xs leading-[25px] lg:mt-10 lg:max-w-[497px] lg:text-xl lg:leading-[35px]">
              From crisp croissants dipped in matcha to soft, floral macarons, these are the bakes
              our guests can’t stop ordering. Fresh from the oven, perfectly green, and made to pair
              with your favorite latte.
            </p>
            <ViewAllButton className="mt-[30px] text-2xl lg:mt-10" />
          </div>
        </div>

        <FeaturedProducts />
      </div>
    </section>
  );
}
