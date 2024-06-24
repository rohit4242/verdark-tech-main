import Heading from "@/components/Heading";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="mb-20 ">
      <section className="bg-slate-950">
        <div className="py-2 lg:py-2 mb-8 lg:mb-2 px-4 mx-auto max-w-screen-md">
          <div className="mx-auto max-w-4xl text-center mt-14">
            <h1 className=" text-lg font-semibold leading-7 text-gradient">
              Contact Us
            </h1>
            <p className="mt-2 text-4xl tracking-tight font-extrabold  text-white">
            Raju Kumar Singh
            </p>
            <div className="w-[22rem] md:w-[40rem] mx-auto h-2 mt-4 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
            Share Your Questions or Feedback
            </p>
          </div>

          <form action="#" className="space-y-8 mt-10">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm 0 border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium  text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 rounded-full"
            >
              Send message
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default page;
