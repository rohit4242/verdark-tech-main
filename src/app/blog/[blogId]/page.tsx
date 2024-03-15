import Blog from "@/components/Blog";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { blogPosts } from "@/lib/data";
import { FC } from "react";

interface PageProps {
  params: { blogId: string };
}

const Page: FC<PageProps> = ({ params }) => {
  // Find the blog post with the matching id
  const blogPost = blogPosts.find(
    (post) => post.id === parseInt(params.blogId as string)
  );

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-800">Blog post not found</p>
      </div>
    );
  }

  return (
    <TracingBeam>
      <div className="container mx-auto px-4 py-8">
        <div className=" rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">
            {blogPost.title}
          </h2>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>
          <p className="text-slate-200 mb-4 h-screen">{blogPost.content}</p>

          <div className="flex items-center">
            <p className="text-slate-200 mr-4">Author: {blogPost.author}</p>
            <p className="text-slate-200">Date: {blogPost.date}</p>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default Page;
