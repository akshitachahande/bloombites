import { Branches } from "@/components/sections/Branches";
import { FeaturedBakes } from "@/components/sections/FeaturedBakes";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedBakes />
      <Branches />
    </main>
  );
}
