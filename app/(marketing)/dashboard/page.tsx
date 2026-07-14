import { BlogGrid } from "@/components/blog/blog-grid";
import { ChevronDown } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="bg-white">

      <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center">

        <h1 className="mb-8 text-[72px] font-extrabold leading-none tracking-tight text-slate-950">
          Insights &
          <br />
          <span className="text-blue-600">Knowledge.</span>
        </h1>

        <p className="mb-16 max-w-[570px] text-[20px] leading-10 text-slate-600">
          Discover expert insights on software development, cloud technologies,
          digital transformation, and industry best practices to accelerate
          your digital journey.
        </p>

        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
          <ChevronDown className="h-6 w-6 text-slate-600" />
        </button>
      </div>
      
      <div className="bg-white py-24">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-8">

          <div>
            <p className="font-bold text-lg uppercase tracking-[0.2em] text-blue-700">
              Latest Insights
            </p>

            <h2 className="mt-4 max-w-3xl text-[42px] font-extrabold leading-tight text-slate-950">
              News, guides, and product thinking
            </h2>
          </div>

          <p className="max-w-md text-lg leading-10 text-slate-500">
            A clean feed of articles with full compact summaries.
          </p>

        </div>
      </div>

      <div className="pb-24">
        <div className="mx-auto max-w-7xl px-8">
          <BlogGrid />
        </div>
      </div>

    </main>
  );
}