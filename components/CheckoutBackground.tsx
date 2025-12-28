// Checkout Background component
"use client";

import { ReactNode } from "react";

type CheckoutBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

export default function CheckoutBackground({
  children,
  className = "",
}: CheckoutBackgroundProps) {
  return (
    <div className={`relative w-full min-h-screen bg-[#d1e3ea] ${className}`}>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

