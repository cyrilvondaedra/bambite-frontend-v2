// Product Details Background component
import Image from "next/image";
import { ReactNode } from "react";

type ProductDetailsBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

export default function ProductDetailsBackground({
  children,
  className = "",
}: ProductDetailsBackgroundProps) {
  return (
    <div className={`relative w-full min-h-screen bg-[#123659] ${className}`}>
      {/* Base black texture background */}
      <div className="absolute inset-0 w-full h-full min-h-screen">
        <Image
          src="/product-details-assets/black-texture-bg-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Orange blur effects */}
      <div className="absolute flex h-[796.567px] items-center justify-center left-[calc(100%+222.57px)] top-[212.92px] w-[95.768px] hidden lg:block">
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#ff8b32] blur-[85.358px] filter h-[95.768px] w-[796.567px] opacity-60" />
        </div>
      </div>

      <div className="absolute flex h-[462.018px] items-center justify-center left-[calc(100%-32.2px)] top-[395.83px] w-[129.171px] hidden lg:block">
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#ff8b32] blur-[49.36px] filter h-[129.171px] opacity-30 rounded-[999px] w-[462.018px]" />
        </div>
      </div>

      <div className="absolute flex h-[129.171px] items-center justify-center left-[8.76px] top-[1060.31px] w-[675.135px] hidden lg:block">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-[#ff8b32] blur-[49.36px] filter h-[129.171px] opacity-30 rounded-[999px] w-[675.135px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
