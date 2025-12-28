// Contact Background component
"use client";

import Image from "next/image";
import { ReactNode } from "react";

type ContactBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

export default function ContactBackground({
  children,
  className = "",
}: ContactBackgroundProps) {
  return (
    <div className={`relative w-full min-h-screen bg-white overflow-hidden ${className}`}>
      {/* Cyan Plate Background */}
      <div className="absolute h-[2085.547px] left-0 top-0 w-full">
        <div
          className="absolute h-full left-0 top-0 w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgb(206, 216, 219) 0%, rgb(173, 189, 190) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)",
          }}
        />

        {/* Texture Overlays */}
        <div className="absolute contents inset-0">
          <div className="absolute h-full left-[0.03%] mix-blend-soft-light opacity-80 right-[0.02%] top-0">
            <Image
              src="/product-assets/metal-overlay.png"
              alt=""
              fill
              sizes="100vw"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          <div className="absolute flex h-full items-center justify-center left-[-0.02%] mix-blend-soft-light right-[0.01%] top-0">
            <div className="flex-none h-full -scale-y-100 w-full">
              <div className="opacity-30 relative size-full">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/product-assets/grunge-overlay.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="absolute max-w-none object-cover size-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-full items-center justify-center left-[-0.02%] mix-blend-soft-light right-[0.01%] top-0">
            <div className="flex-none h-full rotate-180 -scale-y-100 w-full">
              <div
                className="opacity-80 size-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(128, 128, 128, 0.6) 0%, rgb(128, 128, 128) 19.684%, rgba(128, 128, 128, 0.3) 70.46%, rgb(128, 128, 128) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Character Image */}
      <div className="absolute h-[710.729px] left-[calc(56.25%-16.82px)] top-[227.94px] w-[805.518px] hidden lg:block">
        <Image
          src="/contact-assets/character-image.png"
          alt="Contact character"
          fill
          sizes="806px"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        />
      </div>

      {/* Decorative Vines */}
      <div className="absolute contents left-[calc(81.25%+37.61px)] top-[-78.19px] hidden lg:block">
        <div className="absolute h-[358.954px] left-[calc(81.25%+37.61px)] top-[-20.1px] w-[185.869px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/decorative-assets/vines-1.png"
              alt=""
              fill
              sizes="186px"
              className="absolute h-[106.96%] left-[-106.56%] max-w-none top-0 w-[206.56%]"
            />
          </div>
        </div>
        <div className="absolute flex h-[357.646px] items-center justify-center left-[calc(93.75%-36.55px)] top-[-78.19px] w-[194.693px]">
          <div className="flex-none rotate-[189.724deg] -scale-y-100">
            <div className="h-[338.963px] relative w-[139.447px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src="/decorative-assets/vines-2.png"
                  alt=""
                  fill
                  sizes="139px"
                  className="absolute h-full left-[-143.08%] max-w-none top-0 w-[243.08%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image 220 */}
      <div className="absolute h-[217.432px] left-[104.54px] shadow-[0px_8px_3px_0px_rgba(13,18,26,0.17)] top-[3.4px] w-[243.543px] hidden lg:block">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/decorative-assets/image-220.png"
            alt=""
            fill
            sizes="244px"
            className="absolute h-[140.98%] left-[-9.12%] max-w-none top-[-27.49%] w-[113.94%]"
          />
        </div>
      </div>

      {/* Vertical Separator Lines */}
      <div className="absolute flex h-[2.019px] items-center justify-center left-0 top-[117.35px] w-full hidden lg:block">
        <div className="flex-none rotate-90">
          <div className="h-full relative w-[2.019px]">
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

      <div className="absolute h-[800px] left-[calc(56.25%+69.36px)] top-[119.23px] w-[2.018px] hidden lg:block">
        <div className="absolute inset-[0_-99.12%_0_0]">
          <Image
            src="/career-assets/group-182.svg"
            alt=""
            fill
            sizes="2px"
            className="block max-w-none size-full"
          />
        </div>
      </div>

      {/* Decorative "C3" Text */}
      <p className="absolute font-['Post_No_Bills_Colombo',sans-serif] leading-[0.82] left-[calc(71.88%-111.94px)] not-italic text-[120px] sm:text-[150px] md:text-[170px] lg:text-[186.464px] text-[#8fa5ae] text-nowrap top-[173.45px] hidden lg:block">
        C3
      </p>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

