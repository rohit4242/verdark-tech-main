import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Heading from "./Heading";

interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
  return (
    <>
      <Heading
        title="FAQ"
        subtitle="Navigating Your AI Solutions with Vedark"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full text-white max-w-screen-xl mx-auto mb-14 p-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Is there a minimum requirement to use Vedark's services?
          </AccordionTrigger>
          <AccordionContent>
            There are no strict minimum requirements to utilize Vedark's services. Our solutions are designed to cater to businesses of all sizes, from startups to large enterprises, enabling everyone to leverage AI technology.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can I customize the AI agents developed by Vedark?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Vedark offers fully customizable AI agents tailored to meet your specific business needs. You can work closely with our team to design features and functionalities that align with your goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do I need technical expertise to integrate Vedark's solutions?
          </AccordionTrigger>
          <AccordionContent>
            No technical expertise is required to integrate Vedark's solutions. Our user-friendly interface and dedicated support team are here to assist you throughout the process, making it seamless for businesses of all backgrounds.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};


export default FAQ;
