import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "./blog-card";

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}