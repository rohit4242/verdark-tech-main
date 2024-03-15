import { FC } from "react";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";

interface BlogProps {
  Content: any;
}

const Blog: FC<BlogProps> = ({ Content }) => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative text-white">
        <div key={`content-${Content.id}`} className="mb-10">
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            {Content.badge}
          </h2>

          <p className="text-xl mb-4">{Content.title}</p>

          <div className="text-sm  prose prose-sm dark:prose-invert">
            {Content?.image && (
              <Image
                src={Content.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {Content.content}
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default Blog;
