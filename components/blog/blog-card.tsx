"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  post: {
    slug: any;
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    image: string | null;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="relative h-[225px] overflow-hidden border-b border-slate-100">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-50 text-slate-400">
            <span>No image</span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[15px] text-slate-500">
            <CalendarDays className="h-5 w-5 text-emerald-500" />
            <span>{post.date}</span>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="h-12 w-12 rounded-full border border-slate-200 text-slate-400 transition-all group-hover:bg-blue-800 group-hover:text-white"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>

        <h3 className="mb-5 text-[27px] font-extrabold leading-[1.2] tracking-[-0.02em] text-slate-950 transition-colors group-hover:text-blue-800">
          {post.title}
        </h3>

        <p className="line-clamp-3 text-[16px] leading-7 text-slate-500">
          {post.description}
        </p>

        <div className="my-7 border-t border-slate-100" />

        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="rounded-lg border-slate-200 bg-slate-50 px-3 py-1 text-[13px] font-medium text-slate-600"
          >
            {post.category}
          </Badge>

          <span className="font-semibold text-blue-800 opacity-0 transition-all duration-300 group-hover:opacity-100">
            Read article
          </span>
        </div>
      </div>
    </Link>
  );
}