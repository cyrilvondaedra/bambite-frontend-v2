// Job Detail Background component
import Image from "next/image";
import { ReactNode } from "react";

type JobDetailBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

export default function JobDetailBackground({
  children,
  className = "",
}: JobDetailBackgroundProps) {
  return (
    <div
      className={`relative w-full min-h-screen bg-white overflow-hidden overflow-x-hidden ${className}`}
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/career-assets/career-bg.webp"
            alt="Job detail background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Orange blur effects */}
      <div className="absolute flex h-[462.018px] items-center justify-center left-[calc(100%-32.45px)] top-[396.09px] w-[129.171px] hidden lg:block">
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#ff8b32] blur-[49.36px] filter h-[129.171px] opacity-30 rounded-[999px] w-[462.018px]" />
        </div>
      </div>

      <div className="absolute flex h-[129.171px] items-center justify-center left-[8.51px] top-[869.92px] w-[675.135px] hidden lg:block">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-[#ff8b32] blur-[49.36px] filter h-[129.171px] opacity-30 rounded-[999px] w-[675.135px]" />
        </div>
      </div>

      {/* Vertical separator lines */}
      <div className="absolute flex h-[2.018px] items-center justify-center left-0 top-[171.71px] w-[100vh] max-w-[1776.572px] hidden lg:block overflow-hidden">
        <div className="flex-none rotate-[90deg]">
          <div className="h-[1776.572px] relative w-[2.018px]">
            <Image
              src="/career-assets/group-182.svg"
              alt=""
              fill
              sizes="2px"
              className="block max-w-none size-full"
            />
          </div>
        </div>
      </div>

      <div className="absolute h-[1776.572px] left-[calc(18.75%+70.21px)] top-[171.71px] w-[2.018px] hidden lg:block">
        <Image
          src="/career-assets/group-181.svg"
          alt=""
          fill
          sizes="2px"
          className="block max-w-none size-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
