import { FC } from "react";
import { BackgroundBeams } from "./ui/background-beams";

interface BackgroundBeamsSectionProps {}

const BackgroundBeamsSection: FC<BackgroundBeamsSectionProps> = ({}) => {
  return (
    <div className="h-[20rem] md:h-[30rem] xl:h-[40rem] w-full max-w-screen-xl mx-auto rounded-md bg-slate-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl text-gradient  bg-clip-text  text-center font-sans font-bold">
          Join Vedark Community
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Get the inside scoop on Vedark's exciting developments. Explore expert
          market insights, learn about new features, and discover how Vedark can
          help you navigate the ever-evolving crypto landscape.
        </p>
        <input
          type="email"
          id="email"
          className="shadow-sm border relative z-10 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div className="flex relative flex-col md:flex-row space-y-4 z-10 md:space-y-0 space-x-0 md:space-x-4">
        <button className="border text-sm font-medium relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 rounded-full">
          <a href="/contact">Join Vedark</a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default BackgroundBeamsSection;
