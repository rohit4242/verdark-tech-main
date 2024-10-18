import { TimelineDemo } from "@/components/TimelineDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import MacbookScrollSection from "@/components/MacbookScrollSection";
import Hero from "@/components/hero";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto bg-neutral-950">
      <Hero />
      <MacbookScrollSection />

      <TimelineDemo />
      <InfiniteMovingCardsDemo />

      <BackgroundBeamsWithCollisionDemo />
    </main>
  );
}
