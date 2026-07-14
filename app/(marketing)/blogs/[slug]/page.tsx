import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";


import { BlogHeader } from "./blog-header";
import { BlogBanner } from "./blog-banner";
import { BlogContent } from "./blog-content";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      {/* @ts-ignore */}
      <BlogHeader post={post} />

      {/* @ts-ignore */}
      <BlogBanner image={post.banner} />

      {/* @ts-ignore */}
      <BlogContent content={post.content} />
    </>
  );
}