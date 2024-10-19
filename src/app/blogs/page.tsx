import BlogCard from "@/components/BlogCard";
import Heading from "@/components/Heading";
import { blogPosts } from "@/lib/data";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 mb-10">
      <Heading title=" Explore our knowledge Base" />
      <div className="flex justify-center mx-auto max-w-screen-xl items-center gap-4 flex-wrap">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
