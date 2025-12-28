// Hi, I'm Bam Section component
"use client";

import Image from "next/image";
import Link from "next/link";

type HiImBamSectionProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  mascotImage?: string;
  backgroundImage?: string;
};

export default function HiImBamSection({
  title = "Hi, I'm Bam",
  description = "Arcu pretium morbi nisi felis gravida aenean feugiat. Luctus nec laoreet egestas vulputate. Fringilla varius aliquam dolor sed molestie.",
  ctaText = "INTERESTED? MORE OF ME",
  ctaLink = "/about",
  mascotImage = "/home-assets/hero/mascot-3d.png",
  backgroundImage = "/home-assets/hero/forest-bg.png",
}: HiImBamSectionProps) {
  return (
    <div className="relative w-full min-h-[816px] overflow-clip">
      {/* Background image */}
      <div className="absolute h-[815.525px] left-0 top-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <Image
            src={backgroundImage}
            alt="Forest background"
            fill
            sizes="100vw"
            className="absolute max-w-none object-cover size-full"
          />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-16 px-4 sm:px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Mascot */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[789.168px] w-full">
                <Image
                  src={mascotImage}
                  alt="Bam mascot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right side - Text and CTA */}
            <div className="order-1 lg:order-2">
              <h2 className="font-['Chillax_Variable',sans-serif] leading-[0.82] not-italic text-[60px] sm:text-[80px] md:text-[90px] lg:text-[100px] text-center lg:text-left text-white mb-6 sm:mb-8">
                {title}
              </h2>

              {/* Decorative text */}
              <div className="font-['Scribo_Pro',sans-serif] leading-[0.82] not-italic text-[#ffa953] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[29.142px] text-center lg:text-left mb-6">
                <p className="mb-0">You're about to</p>
                <p>discover more</p>
              </div>

              <p className="font-['DM_Sans',sans-serif] font-medium leading-[1.2] opacity-80 text-[12px] sm:text-[13px] md:text-[14px] text-center lg:text-left text-white mb-8 sm:mb-10 w-full max-w-[320.835px] mx-auto lg:mx-0">
                {description}
              </p>

              {/* CTA Button */}
              <div className="flex items-center justify-center lg:justify-start">
                <Link
                  href={ctaLink}
                  className="flex h-[50px] sm:h-[56px] md:h-[62px] items-center relative w-full max-w-[321px] group"
                >
                  <div className="h-full relative w-full">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="flex-none h-full rotate-180 -scale-y-100 w-full">
                        <div className="relative size-full">
                          <div className="absolute inset-[-1.69%_-0.33%]">
                            <Image
                              src="/footer-assets/rectangle-126.svg"
                              alt=""
                              fill
                              sizes="321px"
                              className="block max-w-none size-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Texture overlays */}
                    <div className="absolute contents inset-[0_-0.08%_0_0]">
                      <div className="absolute inset-[0_-0.08%_0_0.57%] mix-blend-overlay opacity-30">
                        <Image
                          src="/product-assets/metal-overlay.png"
                          alt=""
                          fill
                          sizes="321px"
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        />
                      </div>
                      <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
                        <div className="flex-none h-full -scale-y-100 w-[321.253px]">
                          <div className="opacity-[0.34] relative size-full">
                            <Image
                              src="/product-assets/grunge-overlay.png"
                              alt=""
                              fill
                              sizes="321px"
                              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
                        <div className="flex-none h-full rotate-180 -scale-y-100 w-[321.253px]">
                          <div
                            className="opacity-30 size-full"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(128, 128, 128, 0.6) 0%, rgb(128, 128, 128) 19.684%, rgba(128, 128, 128, 0.3) 70.46%, rgb(128, 128, 128) 100%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Button Content */}
                    <div className="absolute flex items-center justify-center left-[calc(50%-43.7px)] top-[calc(50%-6.92px)] z-10">
                      <div className="flex-none rotate-180">
                        <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13.484px] text-nowrap text-white uppercase group-hover:opacity-90 transition-opacity">
                          {ctaText}
                        </p>
                      </div>
                    </div>

                    {/* Decorative icon */}
                    <div className="absolute flex h-[21.353px] items-center justify-center left-[25.15px] top-[20.14px] w-[19.142px] z-10">
                      <div className="flex-none rotate-180">
                        <div className="h-[21.353px] relative w-[19.142px]">
                          <Image
                            src="/footer-assets/group-177.svg"
                            alt=""
                            width={19}
                            height={21}
                            className="block max-w-none size-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

