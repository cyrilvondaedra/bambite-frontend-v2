// Hero Section component
"use client";

import Image from "next/image";
import Link from "next/link";
import HomeBackground from "./HomeBackground";
import HeroInfoPanel from "./HeroInfoPanel";

type HeroSectionProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
};

export default function HeroSection({
  title = "Made to melt your stress",
  description = "Arcu pretium morbi nisi felis gravida aenean feugiat. Luctus nec laoreet egestas vulputate. Fringilla varius aliquam dolor sed molestie.",
  ctaText = "SEE MENU",
  ctaLink = "/menu",
}: HeroSectionProps) {
  return (
    <HomeBackground>
      <div className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[853px]">
        {/* Title - positioned absolutely on desktop, relative on mobile */}
        <div className="relative lg:absolute z-10 px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12 md:pt-16 lg:pt-0 lg:left-[calc(62.5%+57.15px)] lg:top-[514.61px]">
          <p
            className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#ffffff] leading-[0.82] not-italic text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] to-[#c9d7e1] w-full max-w-[365.543px]"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            {title}
          </p>
        </div>

        {/* Orange "See Detail" Button - Mobile responsive */}
        <div className="relative lg:absolute z-10 px-4 sm:px-6 lg:px-0 pt-8 lg:pt-0 lg:left-[calc(62.5%+17.75px)] lg:top-[660px]">
          <Link
            href={ctaLink}
            className="relative inline-block size-[80px] sm:size-[95px] lg:size-[107px] group"
          >
            <div className="absolute left-0 size-full top-0">
              <div className="absolute flex inset-0 items-center justify-center">
                <div className="flex-none rotate-180 -scale-y-100 size-full">
                  <div className="relative size-full">
                    <div className="absolute inset-[-1.5%]">
                      <Image
                        src="/footer-assets/rectangle-121.svg"
                        alt=""
                        fill
                        sizes="107px"
                        className="block max-w-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Texture overlays */}
              <div className="absolute contents inset-[0_-0.08%_0_0]">
                <div className="absolute inset-[0_-0.08%_0_0.57%] mix-blend-overlay opacity-20">
                  <Image
                    src="/product-assets/metal-overlay.png"
                    alt=""
                    fill
                    sizes="107px"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <div className="absolute inset-[0_-0.08%_0_0] mix-blend-lighten opacity-[0.66]">
                  <Image
                    src="/product-assets/grunge-overlay.png"
                    alt=""
                    fill
                    sizes="107px"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
                  <div className="flex-none h-full rotate-180 -scale-y-100 w-full">
                    <div
                      className="opacity-70 size-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(128, 128, 128, 0.6) 0%, rgb(128, 128, 128) 19.684%, rgba(128, 128, 128, 0.3) 70.46%, rgb(128, 128, 128) 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="absolute font-['Space_Mono',sans-serif] font-bold leading-none left-1/2 not-italic opacity-90 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-center text-white top-[calc(50%-13px)] translate-x-[-50%] uppercase w-[70px] sm:w-[75px] lg:w-[79px] group-hover:opacity-100 transition-opacity z-10">
              See Detail
            </p>
          </Link>
        </div>

        {/* Hero Info Panel */}
        <HeroInfoPanel
          title={title}
          description={description}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />

        {/* Description Text Box - Mobile responsive */}
        <div className="relative lg:absolute z-10 px-4 sm:px-6 lg:px-0 pt-8 lg:pt-0 lg:left-[calc(68.75%+29.96px)] lg:top-[660px] lg:w-[400.169px]">
          <div className="relative h-auto min-h-[106.916px] lg:h-[106.916px] w-full max-w-[400.169px] mx-auto lg:mx-0">
            <div className="absolute bg-[#181e24] border-[#121212] border-[3px] border-solid h-full left-0 top-0 w-full" />
            <p className="absolute font-['DM_Sans',sans-serif] font-medium leading-[1.2] left-[29.58px] opacity-70 text-[12px] sm:text-[13px] md:text-[14px] text-white top-[27.96px] w-[calc(100%-59.16px)]">
              {description}
            </p>
          {/* Silver plate decorative element */}
          <div className="absolute h-[107px] right-0 top-0 w-[16px]">
            <div className="absolute flex inset-0 items-center justify-center">
              <div className="flex-none h-[107px] rotate-180 -scale-y-100 w-[16px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-1.5%_-10.03%]">
                    <Image
                      src="/footer-assets/rectangle-123.svg"
                      alt=""
                      fill
                      sizes="16px"
                      className="block max-w-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[0_-1.65%] mix-blend-overlay opacity-70">
              <Image
                src="/product-assets/metal-overlay.png"
                alt=""
                fill
                sizes="16px"
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              />
            </div>
          </div>
          </div>
        </div>

        {/* Decorative elements - screws and break line */}
        <div className="absolute h-[21.353px] left-[calc(93.75%+5.92px)] top-[504.92px] w-[19.142px] hidden lg:block">
          <Image
            src="/footer-assets/group-174.svg"
            alt=""
            width={19}
            height={21}
            className="block max-w-none size-full"
          />
        </div>
        <div className="absolute flex h-[21.353px] items-center justify-center left-[calc(93.75%+5.92px)] top-[598.38px] w-[19.142px] hidden lg:block">
          <div className="flex-none rotate-180 -scale-y-100">
            <div className="h-[21.353px] relative w-[19.142px]">
              <Image
                src="/footer-assets/group-175.svg"
                alt=""
                width={19}
                height={21}
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[2px] left-[calc(93.75%-13.9px)] top-[567.6px] w-[61.527px] hidden lg:block">
          <div className="absolute inset-[-100%_0_0_0]">
            <Image
              src="/product-assets/break-line.svg"
              alt=""
              fill
              sizes="62px"
              className="block max-w-none"
            />
          </div>
        </div>

        {/* Vertical decorative bar */}
        <div className="absolute bg-gradient-to-b border-[#121212] border-[3px] border-solid from-[#171e24] h-[184.804px] left-[calc(93.75%-16.65px)] to-[#1b2229] top-[475.2px] w-[64.276px] hidden lg:block" />
      </div>
    </HomeBackground>
  );
}

