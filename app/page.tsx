import { Branches } from "@/components/sections/Branches";
import { FeaturedBakes } from "@/components/sections/FeaturedBakes";
import { Hero } from "@/components/sections/Hero";
import { OrderCTA } from "@/components/sections/OrderCTA";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
      <FeaturedBakes />
      <Branches />
      <OrderCTA />
    </main>
  );
}
