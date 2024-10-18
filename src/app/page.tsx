import { TimelineDemo } from "@/components/TimelineDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import MacbookScrollSection from "@/components/MacbookScrollSection";
import Hero from "@/components/hero";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 items-center justify-between">
      <Hero />
      <TimelineDemo />
      <MacbookScrollSection />
      <BackgroundBeamsWithCollisionDemo />
    </main>
  );
}
