// Home Background component for hero section
"use client";

import Image from "next/image";
import { ReactNode } from "react";

type HomeBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

export default function HomeBackground({
  children,
  className = "",
}: HomeBackgroundProps) {
  return (
    <div className={`relative w-full min-h-[853px] overflow-hidden ${className}`}>
      {/* Base background image */}
      <div className="absolute h-[853.168px] left-0 top-0 w-full">
        <Image
          src="/home-assets/hero/wide-angle-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Food dish image overlay */}
      <div className="absolute h-[744.724px] left-[127.73px] top-[22.17px] w-[940.273px] hidden lg:block">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/home-assets/hero/food-dish.png"
            alt="Food dish"
            fill
            sizes="940px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Dark gradient overlay at top */}
      <div className="absolute bg-gradient-to-t from-[rgba(102,102,102,0)] h-[160px] left-0 mix-blend-multiply to-[rgba(0,0,0,0.42)] top-0 w-full" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

