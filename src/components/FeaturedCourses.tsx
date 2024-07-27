"use client";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
};

function FeaturedCourses() {
  const featuredCourses: Course[] = courseData.courses.filter(
    (course) => course.isFeatured,
  );

  return (
    <div className="bg-gray-900 py-12">
      <div>
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mx-8 mt-10">
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex h-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900">
                <Image
                  src={course.image}
                  alt={course.title}
                  height="400"
                  width="400"
                  className="overflow-hidden bg-cover"
                />
                <div className="flex flex-grow flex-col items-center p-4 text-center sm:p-6">
                  <p className="mb-2 mt-4 text-lg text-black dark:text-neutral-200 sm:text-xl">
                    {course.title}
                  </p>
                  <p className="flex-grow text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="rounded-md bg-[#0070f3] px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]">
                      Learn more
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <span className="relative rounded-full border border-slate-600 bg-slate-700 px-8 py-2 text-sm text-white transition duration-200 hover:shadow-2xl hover:shadow-white/[0.1]">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-teal-500 to-transparent shadow-2xl" />
            <span className="relative z-20">View All Courses</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;