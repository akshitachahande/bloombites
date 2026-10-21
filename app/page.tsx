import { Branches } from "@/components/sections/Branches";
import { FeaturedBakes } from "@/components/sections/FeaturedBakes";
import { Hero } from "@/components/sections/Hero";
import { OrderCTA } from "@/components/sections/OrderCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedBakes />
      <Branches />
      <OrderCTA />
    </main>
  );
}
