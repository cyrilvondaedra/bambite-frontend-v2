// Window Frame component for "My Home to Yours" section
"use client";

import Image from "next/image";

type WindowFrameProps = {
  sceneImage?: string;
  label?: string;
  className?: string;
};

export default function WindowFrame({
  sceneImage = "/home-assets/window-frame-assets/forest-scene.png",
  label = "BAm's spaceship 320",
  className = "",
}: WindowFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Ring */}
      <div className="absolute h-[534.047px] left-[633.46px] top-[150.9px] w-[994.565px] hidden lg:block">
        <div className="absolute inset-[-0.36%_-0.19%_-0.45%_-0.19%]">
          <Image
            src="/home-assets/window-frame-assets/outter-ring.svg"
            alt=""
            fill
            sizes="995px"
            className="block max-w-none"
          />
        </div>
      </div>

      {/* Window Frame Border */}
      <div className="absolute h-[485.975px] left-[657.5px] top-[174.94px] w-[946.492px] hidden lg:block">
        <div className="absolute inset-[-0.2%_-0.1%]">
          <Image
            src="/home-assets/window-frame-assets/window-frame.svg"
            alt=""
            fill
            sizes="946px"
            className="block max-w-none"
          />
        </div>
      </div>

      {/* Scene Image */}
      <div className="absolute h-[474.881px] left-[666.7px] top-[180.25px] w-[928.535px] hidden lg:block">
        <Image
          src={sceneImage}
          alt="Forest scene"
          fill
          sizes="929px"
          className="block max-w-none object-cover"
        />
      </div>

      {/* Glow Light Effect */}
      <div className="absolute h-[536.196px] left-[638.27px] opacity-30 top-[150.9px] w-[994.563px] hidden lg:block">
        <div className="absolute inset-[-31.56%_-17.01%]">
          <Image
            src="/home-assets/window-frame-assets/glow-light.png"
            alt=""
            fill
            sizes="995px"
            className="block max-w-none object-cover"
          />
        </div>
      </div>

      {/* Label */}
      <p className="absolute bg-clip-text bg-gradient-to-b font-['Space_Mono',sans-serif] from-[#ffffff] leading-none left-[calc(50%-320.72px)] not-italic opacity-70 text-[11px] sm:text-[12px] md:text-[13px] to-[#999999] top-[calc(50%+161px)] uppercase w-[83.455px] hidden lg:block"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        {label}
      </p>

      {/* Vertical separator lines */}
      <div className="absolute h-[151.752px] left-[964.45px] top-[0.57px] w-[3.019px] hidden lg:block">
        <div className="absolute inset-[0_-99.37%_0_0]">
          <Image
            src="/career-assets/group-188.svg"
            alt=""
            fill
            sizes="3px"
            className="block max-w-none size-full"
          />
        </div>
      </div>
      <div className="absolute h-[151.752px] left-[1331.45px] top-[0.57px] w-[3.019px] hidden lg:block">
        <div className="absolute inset-[0_-99.37%_0_0]">
          <Image
            src="/career-assets/group-188.svg"
            alt=""
            fill
            sizes="3px"
            className="block max-w-none size-full"
          />
        </div>
      </div>
      <div className="absolute h-[153.489px] left-[962.94px] top-[684.51px] w-[3.019px] hidden lg:block">
        <div className="absolute inset-[0_-99.37%_0_0]">
          <Image
            src="/career-assets/group-187.svg"
            alt=""
            fill
            sizes="3px"
            className="block max-w-none size-full"
          />
        </div>
      </div>
      <div className="absolute h-[153.489px] left-[1331.45px] top-[684.51px] w-[3.019px] hidden lg:block">
        <div className="absolute inset-[0_-99.37%_0_0]">
          <Image
            src="/career-assets/group-187.svg"
            alt=""
            fill
            sizes="3px"
            className="block max-w-none size-full"
          />
        </div>
      </div>
    </div>
  );
}

