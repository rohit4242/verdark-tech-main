"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Heading from "./Heading";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md max-w-screen-xl mx-auto  flex flex-col antialiased bg-neutral-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Heading title="Testimonials" />

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Vedark's AI solutions have transformed our customer service experience, allowing us to engage with clients like never before.",
    name: "Emily Johnson",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    quote:
      "The custom chatbot developed by Vedark has streamlined our operations and significantly improved our efficiency.",
    name: "Michael Smith",
    title: "Operations Manager, Retail Solutions",
  },
  {
    quote:
      "Thanks to Vedark's AI consultation, we were able to harness data insights that drove our business strategy forward.",
    name: "Sarah Lee",
    title: "Director of Strategy, Future Enterprises",
  },
  {
    quote:
      "Our partnership with Vedark has empowered our team to embrace innovation and improve our service delivery.",
    name: "David Brown",
    title: "CTO, Digital Services Co.",
  },
  {
    quote:
      "The integration of Vedark's AI agents has made a remarkable difference in our workflow and customer interactions.",
    name: "Laura Wilson",
    title: "Product Manager, Smart Tech Corp.",
  },
];
