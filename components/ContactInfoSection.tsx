// Contact Info Section component
"use client";

import Image from "next/image";

type SocialButtonProps = {
  className?: string;
};

function SocialButton({ className }: SocialButtonProps) {
  return (
    <div className={`bg-gradient-to-b border border-[#193551] border-solid content-stretch flex from-[#074980] h-[58px] items-center relative to-[#172743] ${className}`}>
      <div className="absolute contents inset-[-0.5px_-0.5px_calc(0%-0.5px)_-0.5px]">
        <div className="absolute inset-[0_0_0_0.57%] mix-blend-overlay opacity-30">
          <Image
            src="/product-assets/metal-overlay.png"
            alt=""
            fill
            sizes="60px"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          />
        </div>
        <div className="absolute flex inset-0 items-center justify-center mix-blend-lighten">
          <div className="flex-none h-[58px] -scale-y-100 w-[60px]">
            <div className="opacity-[0.34] relative size-full">
              <Image
                src="/product-assets/grunge-overlay.png"
                alt=""
                fill
                sizes="60px"
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-0 items-center justify-center mix-blend-soft-light">
          <div className="flex-none h-[58px] rotate-180 -scale-y-100 w-[60px]">
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
      <div className="content-stretch flex gap-[24px] h-[58px] items-center px-[12px] py-0 relative shrink-0 z-10">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="content-stretch flex items-center p-[6px] relative rounded-[8px]">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <Image
                  src="/product-assets/shopping-cart-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[-0.5px] pointer-events-none shadow-[inset_3.77px_3.77px_1.153px_0px_rgba(226,239,255,0.12)]" />
    </div>
  );
}

export default function ContactInfoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      {/* Mail */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[13px] text-[#1e6cad] uppercase w-full">
          Mail
        </p>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <p
            className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-[0.89] not-italic relative shrink-0 text-[28px] sm:text-[30px] md:text-[32px] to-[#315273] w-full"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            BamBite@Totals-Inc.com
          </p>
          <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(21,32,43,0.55)] w-full">
            We'll respond shortly during office hours.
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[13px] text-[#1e6cad] uppercase w-full">
          Phone
        </p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p
            className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-[0.89] not-italic relative shrink-0 text-[28px] sm:text-[30px] md:text-[32px] to-[#315273] w-full"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            +65 987 654 341
          </p>
        </div>
      </div>

      {/* Locations */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[13px] text-[#1e6cad] uppercase w-full">
          Locations
        </p>
        <div className="content-stretch flex flex-col sm:flex-row gap-[32px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full sm:w-[242px]">
            <p
              className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-[0.89] not-italic relative shrink-0 text-[28px] sm:text-[30px] md:text-[32px] to-[#315273] w-full"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Patuwan
            </p>
            <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[#273b4f] w-full">
              173-175 Rongmueng Soi 4, Patumwan, Bangkok, Thailand
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full sm:w-[243px]">
            <p
              className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-[0.89] not-italic relative shrink-0 text-[28px] sm:text-[30px] md:text-[32px] to-[#315273] w-full"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Udonsuk
            </p>
            <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[#273b4f] w-full">
              173-175 Rongmueng Soi 4, Patumwan, Bangkok, Thailand
            </p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[13px] text-[#1e6cad] uppercase w-full">
          Socials
        </p>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <SocialButton className="w-[58px]" />
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <SocialButton className="w-[58px]" />
            </div>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <SocialButton className="w-[58px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

