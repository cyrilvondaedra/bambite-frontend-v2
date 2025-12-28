// My Home to Yours Section component
"use client";

import Image from "next/image";
import WindowFrame from "./WindowFrame";

type MyHomeToYoursSectionProps = {
  title?: string;
  subtitle?: string;
  sceneImage?: string;
};

export default function MyHomeToYoursSection({
  title = "My Home to Yours",
  subtitle = "You're about to discover more",
  sceneImage = "/home-assets/window-frame-assets/forest-scene.png",
}: MyHomeToYoursSectionProps) {
  return (
    <div className="relative w-full min-h-[854px] overflow-hidden bg-[#123659]">
      {/* Blue plate background */}
      <div className="absolute bottom-0 h-[838px] left-0 overflow-clip w-full hidden lg:block">
        <div className="absolute h-[838px] left-0 top-0 w-[2056px]">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none h-[838px] rotate-180 -scale-y-100 w-[2056px]">
              <div className="relative size-full">
                <div className="absolute inset-[-0.19%_-0.08%]">
                  <Image
                    src="/home-assets/window-frame-assets/blue-plate-bg.svg"
                    alt=""
                    fill
                    sizes="2056px"
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
                sizes="2056px"
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
              <div className="flex-none h-[838px] -scale-y-100 w-[2057.617px]">
                <div className="opacity-[0.34] relative size-full">
                  <Image
                    src="/product-assets/grunge-overlay.png"
                    alt=""
                    fill
                    sizes="2056px"
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
              <div className="flex-none h-[838px] rotate-180 -scale-y-100 w-[2057.617px]">
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

          {/* Window Frame - Desktop only */}
          <div className="absolute contents left-[633.46px] top-1/2 translate-y-[-50%] hidden lg:block">
            <WindowFrame sceneImage={sceneImage} />
          </div>

          {/* Decorative image on left */}
          <div className="absolute h-[476.508px] left-[470.1px] top-0 w-[287.212px] hidden lg:block">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src="/home-assets/window-frame-assets/image-221.png"
                alt=""
                fill
                sizes="287px"
                className="absolute h-[122.7%] left-[-10.55%] max-w-none top-[-16.58%] w-[112.64%]"
              />
            </div>
          </div>

          {/* Decorative group on left */}
          <div className="absolute h-[426.48px] left-[-212.1px] top-[194.18px] w-[691.227px] hidden lg:block">
            <div className="absolute inset-[-0.53%_0_-0.53%_-0.33%]">
              <Image
                src="/footer-assets/group-140.svg"
                alt=""
                fill
                sizes="691px"
                className="block max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-16 px-4 sm:px-6 lg:px-0 min-h-[854px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Title */}
          <p
            className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#f9f9f9] leading-[0.82] not-italic text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] text-center to-[#a6b5c0] w-full max-w-[316.736px] mx-auto mb-8"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            {title}
          </p>

          {/* Subtitle */}
          <div className="flex h-[101.539px] items-center justify-center w-[178.245px] mx-auto mb-8">
            <div className="flex-none rotate-[340.939deg]">
              <div className="font-['Scribo_Pro',sans-serif] leading-[0.82] not-italic relative text-[#ffa953] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[29.142px] text-center text-nowrap uppercase">
                <p className="mb-0">{subtitle.split(" ").slice(0, 3).join(" ")}</p>
                <p>{subtitle.split(" ").slice(3).join(" ")}</p>
              </div>
            </div>
          </div>

          {/* Decorative "D3" text */}
          <p className="absolute font-['Post_No_Bills_Colombo',sans-serif] leading-[0.82] not-italic right-[-202px] text-[#b9c7d6] text-[180px] sm:text-[220px] md:text-[240px] lg:text-[258.329px] text-nowrap top-[313.12px] translate-x-[100%] hidden lg:block">
            D3
          </p>
        </div>
      </div>
    </div>
  );
}

