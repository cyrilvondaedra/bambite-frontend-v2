// Hero Info Panel component
"use client";

import Image from "next/image";
import Link from "next/link";
import SocketScrew from "./SocketScrew";

type HeroInfoPanelProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  decorativeText?: string;
};

export default function HeroInfoPanel({
  title,
  description,
  ctaText,
  ctaLink = "/menu",
  decorativeText = "all of them",
}: HeroInfoPanelProps) {
  return (
    <div className="absolute h-[185px] left-[calc(62.5%+17.75px)] top-[475px] w-[444px] hidden lg:block">
      {/* Blue plate background */}
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-[185px] rotate-180 -scale-y-100 w-[444px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.87%_-0.36%]">
              <Image
                src="/footer-assets/rectangle-122.svg"
                alt=""
                fill
                sizes="444px"
                className="block max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Texture overlays */}
      <div className="absolute contents inset-0">
        <div className="absolute contents inset-[0_-0.08%_0_0]">
          <div className="absolute inset-[0_-0.08%_0_0.57%] mix-blend-overlay opacity-30">
            <Image
              src="/product-assets/metal-overlay.png"
              alt=""
              fill
              sizes="444px"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            />
          </div>
          <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
            <div className="flex-none h-[185px] -scale-y-100 w-[444.349px]">
              <div className="opacity-[0.34] relative size-full">
                <Image
                  src="/product-assets/grunge-overlay.png"
                  alt=""
                  fill
                  sizes="444px"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
            <div className="flex-none h-[185px] rotate-180 -scale-y-100 w-[444.349px]">
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
      </div>

      {/* Socket Screws */}
      <div className="absolute bottom-[17.24px] right-[0.39px] size-[15.399px]">
        <SocketScrew direction="right" color="blue" size="small" />
      </div>
      <div className="absolute right-[0.39px] size-[15.399px] top-[18.9px]">
        <SocketScrew direction="right" color="blue" size="small" />
      </div>

      {/* Decorative break line */}
      <div className="absolute h-[8.424px] left-[45px] top-[154px] w-[31.96px]">
        <Image
          src="/product-assets/break-line.svg"
          alt=""
          width={32}
          height={8}
          className="block max-w-none"
        />
      </div>

      {/* Decorative rotated text */}
      <div className="absolute flex h-[52.118px] items-center justify-center left-[295.4px] top-[92.5px] translate-x-[-50%] w-[102.954px]">
        <div className="flex-none rotate-[341deg]">
          <p className="font-['Scribo_Pro',sans-serif] leading-[0.82] not-italic relative text-[#ffa953] text-[20px] sm:text-[22px] md:text-[24px] text-center text-nowrap uppercase">
            {decorativeText}
          </p>
        </div>
      </div>

    </div>
  );
}

