import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { FC } from "react";
import React from "react";

interface Hero { }

const Hero: FC<Hero> = ({ }) => {
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
            Vedark Tech creates intelligent, custom AI agents designed to meet your unique business needs. Our solutions streamline processes, 
            boost efficiency, and drive innovation, empowering your business to thrive in an ever-evolving digital world.
          </p>
        </div>
        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
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
      <section className="w-full py-12 md:py-24 lg:py-24 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:px-6 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="space-y-3 ">
            <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl md:text-6xl/none">
              Maestrale
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Is a 7 billion{" "}
              <Link
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://huggingface.co/mii-llm/maestrale-chat-v0.4-beta"
                target="_blank"
              >
                open source
              </Link>{" "}
              model fine tuned for producing good Italian both semantically and
              syntatically. Maestrale is able to integrate with tools via json
              and API calls and has reasoning capabilities.{" "}
              <Link
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://huggingface.co/spaces/FinancialSupport/open_ita_llm_leaderboard"
                target="_blank"
              >
                It is one of the best Italian
              </Link>{" "}
              open source models and all anonymized conversations will be
              published as{" "}
              <Link
                className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
                href="https://huggingface.co/mii-llm"
                target="_blank"
              >
                open source datasets
              </Link>
              .
            </p>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/agents/maestrale"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Chat with Maestrale
              </Link>
              <Link
                href="/api"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Maestrale API
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
      <section className="w-full py-12 bg-gray-800 md:py-24 lg:py-24 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:px-6 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Link
              href="https://huggingface.co/spaces/FinancialSupport/open_ita_llm_leaderboard"
              target="_blank"
            >
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/images/leaderboard.png"
                width="500"
              />
            </Link>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Italian LLMs leaderboard
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The ranking of the open source Italian LLMs on reproducible
                  evaluation benchmarks as mmlu_it, arc_c_it, hellaswag_it and
                  others.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://huggingface.co/spaces/FinancialSupport/open_ita_llm_leaderboard"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to the leaderboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  py-12 bg-gray-800 md:py-24 lg:py-24 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:flex-row md:space-y-0 md:px-6 lg:space-x-12 lg:px-12 xl:space-x-16">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Link
              href=""
              target="_blank"
            >
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/images/pinocchio-leaderboard.png"
                width="500"
              />
            </Link>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Pinocchio ITA leaderboard
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Specialized benchmarks on specific topics as logic, math, law,
                  foreign language and culture for Italian finetuned LLMs
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="https://huggingface.co/spaces/mii-llm/pinocchio-ita-leaderboard"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" })
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to the leaderboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
