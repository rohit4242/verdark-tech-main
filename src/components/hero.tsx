import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { FC } from "react";
import React from "react";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { HeroScrollDemo } from "./HeroScrollDemo";

import Heading from "@/components/Heading";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";
import MacbookScrollSection from "./MacbookScrollSection";
import { TimelineDemo } from "./TimelineDemo";

interface Hero {}

const Hero: FC<Hero> = ({}) => {
  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <div
            className="flex justify-center space-x-2 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <img
              alt="hugging face"
              className="object-cover object-center"
              height="60"
              src="/images/hf-logo.png"
              width="120"
            />
            <img
              alt="mii-llm discord"
              className="object-cover object-center"
              height="60"
              src="/images/discord-mark-blue.png"
              width="120"
            />
          </div>

          <h1
            className="animate-fade-up font-urban text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                Custom AI Agents
              </span>{" "}
              Designed to Drive Your Business Forward
            </Balancer>
          </h1>
          <p
            className="text-balance max-w-3xl leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Vedark Tech creates intelligent, custom AI agents designed to meet
            your unique business needs. Our solutions streamline processes,
            boost efficiency, and drive innovation, empowering your business to
            thrive in an ever-evolving digital world.
          </p>
        </div>
        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            <span> Pricing</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                // variant: "outline",
                size: "lg",
              }),
              "px-5"
            )}
          >
            <p>
              <span className="">Connet With Us</span>
            </p>
          </Link>
        </div>
      </section>
      <HeroScrollDemo />
      <section className="w-full py-12 md:py-24 lg:py-24 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:px-6 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="space-y-3 ">
            <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl md:text-6xl/none">
              About Vedark Tech
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Vedark Tech, we specialize in creating intelligent, custom AI
              agents tailored to meet the unique needs of businesses across
              various industries. Our innovative solutions are designed to
              streamline processes, boost efficiency, and drive innovation,
              empowering organizations to thrive in the rapidly evolving digital
              landscape.
            </p>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <img
            alt="Hero image"
            className="overflow-hidden rounded-xl object-cover object-center"
            height="310"
            src="/images/zefiro_small.png"
            width="500"
          />
        </div>
      </section>
      <Heading title="AI for Your Business" />
      <CardHoverEffectDemo />

      <section className="w-full pb-4 pt-20 bg-gray-800 md:pt-24 lg:pt-32 xl:pt-32">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:px-6 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div>
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/images/leaderboard.png"
                width="500"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Vedark AI Dashboard
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the power of our custom AI agents through our
                  interactive dashboard. Monitor performance, track efficiency
                  gains, and witness real-time business impact.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href={"/contact"}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-800 md:py-24 lg:py-24 xl:py-24">
  <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:px-6 lg:space-x-12 lg:px-12 xl:space-x-16">
    <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
      
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
            Our Commitment to Innovation
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At Vedark, our loyalty lies in delivering intelligent, custom AI solutions that empower businesses and drive innovation in the digital landscape.
          </p>
        </div>
      </div>

      <div>
        <img
          alt="Mascot Image"
          className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          src="/images/pinocchio-leaderboard.png"
          width="500"
        />
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Hero;
