import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import featuredWebinars from "@/data/music_webinars.json";
import Link from "next/link";

function UpcomingWebinars() {
  return (
    <div className="bg-gray-900 p-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.webinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>

        <div className="mt-20 text-center">
          <Link href={"/webinars"}>
            <span className="relative rounded-full border border-slate-600 bg-slate-700 px-8 py-2 text-sm text-white transition duration-200 hover:shadow-2xl hover:shadow-white/[0.1]">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-2xl" />
              <span className="relative z-20">View All Webinars</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;