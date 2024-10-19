import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 pb-20">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Custom AI Agents",
    description:
      "Tailored AI solutions designed to meet your unique business needs and drive innovation.",
  },
  {
    title: "Process Automation",
    description:
      "Intelligent AI-powered systems to streamline your business processes and boost operational efficiency.",
  },
  {
    title: "Chatbot Development",
    description:
      "Advanced conversational AI agents to enhance customer service and user engagement across platforms.",
  },
  {
    title: "AI Consultation",
    description:
      "Expert guidance on integrating AI solutions to solve complex business challenges and drive growth.",
  },
  {
    title: "Data Analysis & Insights",
    description:
      "AI-driven data analysis tools to extract valuable insights and inform strategic decision-making.",
  },
  {
    title: "AI Integration Services",
    description:
      "Seamless integration of AI agents into your existing systems and workflows for maximum impact.",
  },
];