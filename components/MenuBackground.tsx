// Multi-layer background component matching Figma design

import Image from "next/image";
import { ReactNode } from "react";

type MenuBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

export default function MenuBackground({
  children,
  className = "",
}: MenuBackgroundProps) {
  return (
    <div className={`relative w-full min-h-screen bg-white ${className}`}>
      {/* Base gradient background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(206, 216, 219) 0%, rgb(173, 189, 190) 100%), linear-gradient(90deg, rgb(245, 245, 245) 0%, rgb(245, 245, 245) 100%)",
        }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-10 w-full h-full">{children}</div>
      )}
    </div>
  );
}
