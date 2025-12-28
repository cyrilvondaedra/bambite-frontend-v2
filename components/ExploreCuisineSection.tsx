// Explore All New Cuisine Section component
"use client";

import Image from "next/image";
import Link from "next/link";

type ExploreCuisineSectionProps = {
  title?: string;
  image?: string;
  decorativeText?: string;
};

export default function ExploreCuisineSection({
  title = "Explore All New Cuisine",
  image = "/home-assets/hero/food-dish.png",
  decorativeText = "Everything new",
}: ExploreCuisineSectionProps) {
  return (
    <div className="relative w-full min-h-[508px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute h-[508.262px] left-0 top-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="absolute max-w-none object-cover size-full"
          />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
        </div>
      </div>

      {/* Decorative vector line */}
      <div className="absolute flex h-[19.417px] items-center justify-center left-1/2 top-0 translate-x-[-50%] w-[1480.904px] hidden lg:block">
        <div className="flex-none -scale-y-100">
          <div className="h-[19.417px] relative w-[1480.904px]">
            <Image
              src="/decorative-assets/vector-207.svg"
              alt=""
              fill
              sizes="1481px"
              className="block max-w-none size-full"
            />
          </div>
        </div>
      </div>

      {/* Vertical separator line */}
      <div className="absolute flex h-[2.019px] items-center justify-center left-0 top-0 w-[1539.902px] hidden lg:block">
        <div className="flex-none rotate-90">
          <div className="h-[1539.902px] relative w-[2.019px]">
            <div className="absolute inset-[0_-99.05%_0_0]">
              <Image
                src="/career-assets/group-180.svg"
                alt=""
                fill
                sizes="2px"
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-16 px-4 sm:px-6 lg:px-0 min-h-[508px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="font-['Chillax_Variable',sans-serif] leading-[0.95] not-italic text-[32px] sm:text-[44px] md:text-[52px] lg:text-[69.339px] text-white mb-8 sm:mb-12">
            {title}
          </h2>

          {/* Decorative icon */}
          <div className="absolute h-[108.284px] right-[37.75px] top-[2513.11px] w-[119.52px] hidden lg:block">
            <div className="absolute inset-[-0.98%_-0.93%_-0.98%_0]">
              <Image
                src="/footer-assets/group-184.svg"
                alt=""
                fill
                sizes="120px"
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

