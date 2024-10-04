import { FC } from "react";

interface HeadingProps {
  title: string
  subtitle?: string
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className="h-[9rem] w-full max-w-screen-xl mx-auto bg-neutral-950 flex flex-col items-left justify-center overflow-hidden rounded-md mt-20 mb-10 ">
      <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl md:text-6xl/none">
        {title}
      </h1>


    </div>
  );
};

export default Heading;
