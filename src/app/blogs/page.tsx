import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <h1>Blog</h1>
      <div className="flex justify-center items-center gap-4 flex-wrap">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      </div>
     
    </div>
  );
};

export default page;
