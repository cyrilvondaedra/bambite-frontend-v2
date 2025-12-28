// Figma-based Navbar V2 implementation for Food Menu page
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

type NavItemProps = {
  className?: string;
  navLabel?: string;
  no?: string;
  iconBack?: boolean;
  status?: "Default" | "Active";
  href?: string;
  onClick?: () => void;
};

function NavItem({
  className,
  navLabel = "About",
  no = "01",
  iconBack = false,
  status = "Default",
  href,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  const content = (
    <>
      <p className="font-['Space_Mono',monospace] leading-none not-italic relative shrink-0 text-[#b9c7d6] text-[12px] text-nowrap uppercase">
        {no}
      </p>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
        <p className="font-['Chillax_Variable',sans-serif] leading-[0.82] not-italic relative shrink-0 text-[#b9c7d6] text-[20px] text-nowrap font-semibold">
          {navLabel}
        </p>
        {(status === "Active" || isActive) && (
          <div className="absolute h-[6.902px] left-1/2 top-[19.55px] translate-x-[-50%] w-[73.373px]">
            <div className="absolute inset-0">
              <Image
                src="/navbar-assets/vector-215.svg"
                alt=""
                width={73}
                height={7}
                className="block max-w-none size-full"
                style={{ stroke: "rgba(72, 154, 220, 1)" }}
              />
            </div>
          </div>
        )}
      </div>
      {iconBack && (
        <div className="relative shrink-0 size-[20px]">
          <Image
            src="/navbar-assets/shopping-cart.svg"
            alt="Shopping Cart"
            width={20}
            height={20}
            className="block max-w-none size-full"
          />
        </div>
      )}
    </>
  );

  // If onClick is provided (for Cart), use button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${
          className ||
          "content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
        } cursor-pointer hover:opacity-80 transition-opacity`}
      >
        {content}
      </button>
    );
  }

  // If href is provided, use Link
  if (href) {
    return (
      <Link
        href={href}
        className={`${
          className ||
          "content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
        } cursor-pointer hover:opacity-80 transition-opacity`}
      >
        {content}
      </Link>
    );
  }

  // Default: just a div (for items without links)
  return (
    <div
      className={
        className ||
        "content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
      }
    >
      {content}
    </div>
  );
}

type GlobalNavV2Props = {
  className?: string;
  onBackground?: "OnDark" | "OnBackground3";
};

function GlobalNavV2({
  className,
  onBackground = "OnDark",
}: GlobalNavV2Props) {
  const { toggleCart } = useCart();
  // Left section element
  const leftSection = (
    <div className="basis-0 content-stretch flex grow h-[70.047px] items-center min-h-px min-w-px relative shrink-0">
      {/* Orange glow effect */}
      <div className="absolute flex h-[64.404px] items-center justify-center left-1/2 top-[14.82px] translate-x-[-50%] w-[482.443px]">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-[#ff8b32] blur-[17.36px] filter h-[64.404px] opacity-60 w-[482.443px]" />
        </div>
      </div>
      {/* Left decorative element */}
      <div className="h-[70.047px] relative shrink-0 w-[35.762px]">
        <Image
          src="/navbar-assets/vector-196.svg"
          alt=""
          width={36}
          height={70}
          className="block max-w-none size-full"
        />
      </div>
      {/* Left nav items container */}
      <div className="basis-0 bg-[#181e24] content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px px-[25px] py-[22px] relative shrink-0">
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
          <NavItem
            className="content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
            navLabel="About"
            no="C1"
            href="/"
          />
          <NavItem
            className="content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
            navLabel="Career"
            no="C2"
            href="/career"
          />
          <NavItem
            className="content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
            navLabel="Contact"
            no="C3"
            href="/contact"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_-1px_-3px_0.635px_0px_rgba(226,239,255,0.15)]" />
      </div>
      {/* Left end decorative element */}
      <div className="h-[70px] relative shrink-0 w-[19px]">
        <div className="absolute inset-[0_0_-0.29%_0]">
          <Image
            src="/navbar-assets/frame-265.svg"
            alt=""
            width={19}
            height={70}
            className="block max-w-none size-full"
          />
        </div>
      </div>
    </div>
  );

  // Right section element
  const rightSection = (
    <div className="basis-0 content-stretch flex grow h-[70.047px] items-center min-h-px min-w-px relative shrink-0">
      {/* Orange glow effect */}
      <div className="absolute flex h-[64.404px] items-center justify-center left-1/2 top-[14.82px] translate-x-[-50%] w-[482.443px]">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-[#ff8b32] blur-[17.36px] filter h-[64.404px] opacity-60 w-[482.443px]" />
        </div>
      </div>
      {/* Right start decorative element */}
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[70px] relative w-[19px]">
            <div className="absolute inset-[0_0_-0.29%_0]">
              <Image
                src="/navbar-assets/frame-266.svg"
                alt=""
                width={19}
                height={70}
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Right nav items container */}
      <div className="basis-0 bg-[#181e24] content-stretch flex flex-col grow h-full items-end justify-center min-h-px min-w-px px-[25px] py-[22px] relative shrink-0">
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
          <NavItem
            className="content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
            navLabel="Dishes"
            no="C4"
            href="/menu"
          />
          <NavItem
            className="content-stretch flex gap-[7px] items-start px-0 py-[7px] relative shrink-0"
            iconBack={true}
            navLabel="Cart"
            no="C5"
            onClick={toggleCart}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-3px_0.635px_0px_rgba(226,239,255,0.15)]" />
      </div>
      {/* Right end decorative element */}
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[70.047px] relative w-[35.762px]">
            <Image
              src="/navbar-assets/vector-197.svg"
              alt=""
              width={36}
              height={70}
              className="block max-w-none size-full"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={
        className ||
        "content-stretch flex gap-[44px] items-start relative size-full"
      }
    >
      {leftSection}
      {/* Center logo section */}
      <div className="content-stretch flex flex-col items-start pb-0 pt-[13px] px-0 relative shrink-0 w-[254.186px]">
        <Link
          href="/"
          className="flex items-center justify-center w-full h-full hover:opacity-80 transition-opacity"
        >
          <Image
            src="/bambite-logo-white.png"
            alt="Bambite Logo"
            width={254}
            height={58}
            className="object-contain"
            priority
          />
        </Link>
      </div>
      {rightSection}
    </div>
  );
}

export default function NavbarV2() {
  return (
    <nav className="w-full bg-[#181e24] flex items-center justify-center min-h-[82px] relative">
      <GlobalNavV2 className="w-full max-w-full" />
    </nav>
  );
}

