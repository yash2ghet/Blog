import { BlogGrid } from "@/components/blog/blog-grid";

export default function BlogPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Our Insights</h1>
      <BlogGrid />
    </div>
  );
}