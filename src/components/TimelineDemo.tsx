import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Introduced innovative machine learning solutions that empower businesses to leverage data-driven insights, enhancing decision-making processes and operational efficiency.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Enhanced user experience through real-time analytics
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Integrated advanced security protocols for user data protection
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Implemented machine learning algorithms for predictive analytics
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded our focus to developing sophisticated AI trading bots that leverage data analytics for optimized trading decisions, significantly improving client performance.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Launched new features that allow users to customize trading strategies, ensuring greater flexibility and adaptability in the ever-changing market landscape.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Launched a beta version of our trading bots
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Gathered valuable user feedback to enhance functionality
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Increased accuracy of trading predictions through AI integration
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Founded in 2022",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            We started our journey as a dedicated AI company, focusing on creating innovative solutions in various fields, including image processing and automation.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Developed cutting-edge AI image models that enhanced visual data interpretation
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Established a solid foundation for future innovations in AI technologies
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Collaborated with industry leaders to refine our AI offerings
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Initiated research projects to explore new AI applications
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Focused on sustainable AI practices for ethical technology development
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Received recognition for innovation in AI solutions
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

