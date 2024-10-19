import { TimelineDemo } from "@/components/TimelineDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import MacbookScrollSection from "@/components/MacbookScrollSection";
import Hero from "@/components/hero";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";

export default function Home() {
  return (
    <main className="min-h-screen  bg-neutral-950">
      <Hero />

      <TimelineDemo />
      <MacbookScrollSection />
      <InfiniteMovingCardsDemo />

      <BackgroundBeamsWithCollisionDemo />
    </main>
  );
}
