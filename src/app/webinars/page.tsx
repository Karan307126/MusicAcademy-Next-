import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import featuredWebinars from "@/data/music_webinars.json";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="mb-8 text-center font-sans text-lg font-bold text-white md:text-7xl">
        All Webinars ({featuredWebinars.webinars.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {featuredWebinars.webinars.map((webinar) => (
          <CardContainer key={webinar.id} className="inter-var m-4">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {webinar.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                {webinar.description}
              </CardItem>
              <CardItem translateZ="100" className="mt-4 w-full">
                <Image
                  src={webinar.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt={webinar.title}
                />
              </CardItem>
              <div className="mt-20 flex items-center justify-center">
                <Link href={`/webinars/${webinar.slug}`}>
                  <CardItem
                    translateZ={20}
                    className="rounded-md bg-[#0070f3] px-8 py-2 font-light text-white shadow-[0_4px_14px_0_rgb(0,118,255,39%)] transition duration-200 ease-linear hover:bg-[rgba(0,118,255,0.9)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]"
                  >
                    Learn more
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;