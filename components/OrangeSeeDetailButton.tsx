// Orange "See Detail" Button Component
// Extracted from Figma node 609-7767
"use client";

import Image from "next/image";
import Link from "next/link";
import { designTokens } from "@/constants/designTokens";

type OrangeSeeDetailButtonProps = {
  href?: string;
  text?: string;
  size?: "small" | "default" | "large";
  className?: string;
  onClick?: () => void;
};

export default function OrangeSeeDetailButton({
  href,
  text = "See Detail",
  size = "default",
  className = "",
  onClick,
}: OrangeSeeDetailButtonProps) {
  // Responsive sizes
  const sizeMap = {
    small: "80px",
    default: "107px",
    large: "120px",
  };

  const textSizeMap = {
    small: "10px",
    default: "13px",
    large: "15px",
  };

  const widthMap = {
    small: "70px",
    default: "79px",
    large: "90px",
  };

  const buttonSize = sizeMap[size];
  const textSize = textSizeMap[size];
  const textWidth = widthMap[size];

  // Check if className includes w-full h-full to use parent dimensions
  const useParentSize =
    className.includes("w-full") && className.includes("h-full");

  const content = (
    <div
      className={`relative ${className}`}
      style={
        useParentSize
          ? { width: "100%", height: "100%" }
          : { width: buttonSize, height: buttonSize }
      }
    >
      {/* Orange plate background */}
      <div className="absolute left-0 size-full top-0">
        <div className="absolute inset-0">
          <Image
            src="/home-assets/hero/orange-plate-bg.webp"
            alt=""
            fill
            sizes={`${buttonSize}`}
            className="object-cover"
          />
        </div>

        {/* Texture overlays */}
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <p
          className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic opacity-90 text-center text-white uppercase group-hover:opacity-100 transition-opacity"
          style={{
            fontSize: textSize,
            width: textWidth,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`relative inline-block group cursor-pointer ${className}`}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`relative inline-block group cursor-pointer ${className}`}
      >
        {content}
      </Link>
    );
  }

  return <div className={`relative inline-block ${className}`}>{content}</div>;
}
