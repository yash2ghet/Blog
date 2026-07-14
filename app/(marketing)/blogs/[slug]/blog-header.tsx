"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BlogHeader() {
  return (
    <section className="border-b border-slate-100 bg-[#f7f9fc]">
      <div className="mx-auto flex max-w-7xl items-center gap-16 px-8 py-20">

        <div className="flex-1">

          <Link
            href="/dashboard"
            className="mb-8 inline-flex items-center gap-2 text-[15px] font-semibold text-slate-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <h1 className="mt-6 text-[65px] font-extrabold leading-[0.95] tracking-[-0.05em] text-slate-950">
            Is your current
            <br />
            software standing in
            <br />
            the way of
            <br />
            productivity?
          </h1>

          <p className="mt-8 max-w-xl text-[18px] leading-7 text-slate-600">
            Your software may not be "broken," but it could be quietly slowing
            down your business. From outdated tools to security risks and
            workflow bottlenecks, here are the key signs it is time to
            modernize.
          </p>

          <Badge className="mt-8 rounded-full bg-blue-50 px-5 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-blue-700 hover:bg-blue-50">
            Software Development
          </Badge>

          <div className="mt-8 flex items-center gap-8 border-t border-slate-200 pt-6">

            <div className="flex items-center gap-2 text-[15px] text-slate-600">
              <CalendarDays className="h-5 w-5 text-blue-600" />
              December 2, 2025
            </div>

            <div className="flex items-center gap-2 text-[15px] text-slate-600">
              <User className="h-5 w-5 text-blue-600" />
              Cogtix
            </div>

          </div>

        </div>

        <div className="w-[650px]">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,.08)]">
                <div className="relative h-[390px] w-full">
                <Image
                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*cgt-kfksehv8fzdS_hvjTw.png"
                    alt="Software Productivity"
                    fill
                    priority
                    className="object-cover"
                />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}