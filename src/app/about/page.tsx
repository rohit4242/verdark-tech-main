import { FC } from "react";
import Heading from "@/components/Heading";
import { TimelineDemo } from "@/components/TimelineDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="bg-neutral-950 text-white max-w-screen-xl mx-auto ">
        <div className="mx-auto max-w-4xl text-center mt-16">
          <Heading title="Driving Innovation with AI" />
        </div>
        <div className="sm:flex items-center max-w-screen-xl">
          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-300 uppercase">
                Intelligent & Custom Solutions
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent">
                  Empowering
                </span>{" "}
                Business Growth
              </h2>
              <p className="text-slate-300">
                Vedark is a pioneering platform for custom AI solutions designed
                to enhance your business operations in an ever-evolving digital
                landscape. Our team of skilled AI developers and industry
                experts is committed to creating intelligent tools that empower
                organizations to achieve their unique goals. With Vedark's
                tailored AI agents and automation features, businesses can
                streamline processes, boost efficiency, and foster innovation,
                all while confidently navigating the challenges of the digital
                age.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <Heading title="Results that Speak Volumes" />
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-black p-8">
              <dt className="text-sm font-semibold leading-6 text-slate-100">
                Active Clients
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent">
                120,456
              </dd>
            </div>
            <div className="flex flex-col bg-black p-8">
              <dt className="text-sm font-semibold leading-6 text-slate-100">
                AI Solutions Deployed
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent">
                789,234
              </dd>
            </div>
            <div className="flex flex-col bg-black p-8">
              <dt className="text-sm font-semibold leading-6 text-slate-100">
                Estimated Revenue Growth
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent">
                $3.2B
              </dd>
            </div>
            <div className="flex flex-col bg-black p-8">
              <dt className="text-sm font-semibold leading-6 text-slate-100">
                Customer Satisfaction
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-transparent">
                95%
              </dd>
            </div>
          </dl>
        </div>
        <TimelineDemo />
        <InfiniteMovingCardsDemo />
      </div>
      <BackgroundBeamsWithCollisionDemo />
    </>
  );
};

export default page;
