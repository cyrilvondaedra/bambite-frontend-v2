// Footer component based on Figma design
import Image from "next/image";

// Import assets - these will be downloaded from Figma
const imgMetal1Overlay = "/footer-assets/metal-1-overlay.png";
const imgGrungeOverlay = "/footer-assets/grunge-overlay.png";
const imgRectangle121 = "/footer-assets/rectangle-121.svg";
const imgRectangle122 = "/footer-assets/rectangle-122.svg";
const imgRectangle123 = "/footer-assets/rectangle-123.svg";
const imgRectangle124 = "/footer-assets/rectangle-124.svg";
const imgRectangle125 = "/footer-assets/rectangle-125.svg";
const imgRectangle126 = "/footer-assets/rectangle-126.svg";
const imgGroup135 = "/footer-assets/group-135.svg";
const imgGroup132 = "/footer-assets/group-132.svg";
const imgGroup142 = "/footer-assets/group-142.svg";
const imgGroup136 = "/footer-assets/group-136.svg";
const imgGroup124 = "/footer-assets/group-124.svg";
const imgGroup133 = "/footer-assets/group-133.svg";
const imgGroup134 = "/footer-assets/group-134.svg";
const imgBAm = "/footer-assets/bam.svg";
const imgVector70 = "/footer-assets/vector-70.svg";
const imgGroup37 = "/footer-assets/group-37.svg";
const imgGroup24 = "/footer-assets/group-24.svg";
const imgGroup44 = "/footer-assets/group-44.svg";
const imgVector184 = "/footer-assets/vector-184.svg";
const imgVector185 = "/footer-assets/vector-185.svg";
const imgFrame108 = "/footer-assets/frame-108.svg";
const imgFrame109 = "/footer-assets/frame-109.svg";
const imgEllipse28 = "/footer-assets/ellipse-28.svg";
const imgFrame118 = "/footer-assets/frame-118.svg";
const imgFrame120 = "/footer-assets/frame-120.svg";
const imgPlate = "/footer-assets/plate.svg";
const imgBigSpread = "/footer-assets/big-spread.svg";
const imgTransitionLight = "/footer-assets/transition-light.svg";
const imgBrightess = "/footer-assets/brightess.svg";
const imgSubtract = "/footer-assets/subtract.svg";
const imgVines1 = "/footer-assets/vines-1.png";
const imgImage220 = "/footer-assets/image-220.png";

type SocketScrewProps = {
  className?: string;
  direction?: "left" | "right";
};

function SocketScrew({ className, direction = "left" }: SocketScrewProps) {
  if (direction === "right") {
    return (
      <div className={className}>
        <div className="absolute contents inset-0">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none scale-y-[-100%] size-[35.105px]">
              <div className="bg-[#111518] relative rounded-bl-[999px] rounded-tl-[999px] shadow-[-1px_1px_1px_0px_rgba(226,239,255,0.15)] size-full">
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_3px_0px_rgba(0,0,0,0.35),inset_0px_4px_3px_0px_rgba(20,23,28,0.25)]" />
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[18.92%_18.93%_18.93%_18.91%] items-center justify-center">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[21.82px]">
              <div className="relative size-full">
                <div className="absolute inset-[-9.17%_-22.91%_-36.66%_-22.91%]">
                  <Image
                    src="/footer-assets/screw-icon.svg"
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className}>
      <div className="absolute contents inset-0">
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[35.105px]">
            <div className="bg-[#111518] relative rounded-bl-[999px] rounded-tl-[999px] shadow-[1px_1px_1px_0px_rgba(226,239,255,0.15)] size-full">
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_3px_0px_rgba(0,0,0,0.35),inset_0px_4px_3px_0px_rgba(20,23,28,0.25)]" />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[18.92%_18.93%_18.93%_18.91%] items-center justify-center">
          <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[21.82px]">
            <div className="relative size-full">
              <div className="absolute inset-[-9.17%_-22.91%_-36.66%_-22.91%]">
                <Image
                  src="/footer-assets/screw-icon.svg"
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[821px] overflow-hidden bg-[#202730]">
      {/* Main container - Responsive */}
      <div className="relative bg-[#202730] min-h-[821px] overflow-clip w-full max-w-[2084px] mx-auto">
        {/* Blue plate - Left - Hidden on mobile */}
        <div className="hidden lg:block absolute h-[277px] left-[-176px] top-[-87px] w-[321px]">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none h-[277px] rotate-[180deg] scale-y-[-100%] w-[321px]">
              <div className="relative size-full">
                <div className="absolute inset-[-0.9%_-0.78%]">
                  <Image
                    src={imgRectangle121}
                    alt=""
                    fill
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
                src={imgMetal1Overlay}
                alt=""
                fill
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
              <div className="flex-none h-[277px] scale-y-[-100%] w-[321.253px]">
                <div className="opacity-[0.34] relative size-full">
                  <Image
                    src={imgGrungeOverlay}
                    alt=""
                    fill
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
              <div className="flex-none h-[277px] rotate-[180deg] scale-y-[-100%] w-[321.253px]">
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
          {/* Socket screws */}
          <div className="absolute bottom-[67.04px] left-[2.45px] size-[24px]">
            <SocketScrew className="absolute inset-0" direction="left" />
          </div>
          <div className="absolute left-[2.45px] size-[24px] top-[51.27px]">
            <SocketScrew className="absolute inset-0" direction="left" />
          </div>
          <div className="absolute right-0 size-[24px] top-[51.27px]">
            <SocketScrew className="absolute inset-0" direction="right" />
          </div>
        </div>

        {/* Dark blue plate - Left center - Hidden on mobile */}
        <div className="hidden lg:block absolute h-[940px] left-[64px] top-[190px] w-[388px]">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none h-[940px] rotate-[180deg] scale-y-[-100%] w-[388px]">
              <div className="relative size-full">
                <div className="absolute inset-[-0.16%_-0.39%]">
                  <Image
                    src={imgRectangle122}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Texture overlays */}
          <div className="absolute contents inset-0">
            <div className="absolute inset-[0_0_0_0.57%] mix-blend-overlay opacity-30">
              <Image
                src={imgMetal1Overlay}
                alt=""
                fill
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute inset-0 mix-blend-lighten opacity-[0.19]">
              <Image
                src={imgGrungeOverlay}
                alt=""
                fill
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute flex inset-0 items-center justify-center mix-blend-soft-light">
              <div className="flex-none h-[940px] rotate-[180deg] scale-y-[-100%] w-[388px]">
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
          {/* Socket screws */}
          <div className="absolute bottom-[67.27px] left-[2.45px] size-[24px]">
            <SocketScrew className="absolute inset-0" direction="left" />
          </div>
          <SocketScrew className="absolute bottom-[56.17px] right-[-0.34px] size-[35.105px]" direction="right" />
          <div className="absolute right-0 size-[24px] top-[55.84px]">
            <SocketScrew className="absolute inset-0" direction="right" />
          </div>
        </div>

        {/* Decorative image group - Hidden on mobile */}
        <div className="hidden lg:block absolute h-[341.355px] left-[12.57px] top-[266.99px] w-[553.259px]">
          <div className="absolute inset-[-0.65%_0_-0.65%_-0.4%]">
            <Image
              src={imgGroup135}
              alt=""
              fill
              className="block max-w-none size-full"
            />
          </div>
        </div>

        {/* Main content plate - Center - Responsive */}
        <div className="absolute h-auto min-h-[940px] left-0 lg:left-[451.77px] top-[-7.43px] w-full lg:w-[1190px] px-4 lg:px-0">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none h-[940px] rotate-[180deg] scale-y-[-100%] w-[1190px]">
              <div className="relative size-full">
                <div className="absolute inset-[-0.27%_-0.21%]">
                  <Image
                    src={imgRectangle123}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Texture overlays */}
          <div className="absolute contents inset-0">
            <div className="absolute inset-[0_0_0_0.57%] mix-blend-overlay opacity-30">
              <Image
                src={imgMetal1Overlay}
                alt=""
                fill
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute inset-0 mix-blend-lighten opacity-[0.19]">
              <Image
                src={imgGrungeOverlay}
                alt=""
                fill
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute flex inset-0 items-center justify-center mix-blend-soft-light">
              <div className="flex-none h-[940px] rotate-[180deg] scale-y-[-100%] w-[1190px]">
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
          {/* Socket screws */}
          <div className="absolute bottom-[67.27px] left-[2.45px] size-[24px]">
            <SocketScrew className="absolute inset-0" direction="left" />
          </div>
          <SocketScrew className="absolute bottom-[56.17px] right-[-0.34px] size-[35.105px]" direction="right" />
          <div className="absolute left-[2.45px] size-[24px] top-[55.84px]">
            <SocketScrew className="absolute inset-0" direction="left" />
          </div>
          <div className="absolute right-0 size-[24px] top-[55.84px]">
            <SocketScrew className="absolute inset-0" direction="right" />
          </div>

          {/* Footer content - Responsive layout */}
          <div className="relative pt-[496.84px] pb-8 lg:pt-[496.84px] lg:pb-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:absolute lg:left-[559.23px] lg:top-[496.84px]">
              <div className="lg:mr-[181px]">
                <p className="font-['DM_Sans',sans-serif] font-bold leading-[1.18] text-[14px] text-[#75b2eb] uppercase mb-4">
                  Links
                </p>
                <div className="flex flex-col gap-[14px] text-white">
                  <p className="font-['Stick_No_Bills',sans-serif] leading-[1.2] text-[20px]">Products</p>
                  <p className="font-['Stick_No_Bills',sans-serif] leading-[1.2] text-[20px]">About</p>
                  <p className="font-['Stick_No_Bills',sans-serif] leading-[1.2] text-[20px]">Blog</p>
                  <p className="font-['Stick_No_Bills',sans-serif] leading-[1.2] text-[20px]">Contact</p>
                </div>
              </div>

              <div className="lg:mr-[182px]">
                <p className="font-['DM_Sans',sans-serif] font-bold leading-[1.18] text-[14px] text-[#75b2eb] uppercase mb-4">
                  Shop at
                </p>
                <div className="flex flex-col gap-[14px] text-white">
                  <p className="font-['Stick_No_Bills',sans-serif] leading-[1.2] text-[20px]">Lazada</p>
                  <p className="font-['Stick_No_Bills',sans-serif] leading-[1.2] text-[20px]">Shopee</p>
                  <p className="font-['DM_Sans',sans-serif] leading-[1.18] text-[15px]">Privacy Policy</p>
                  <p className="font-['DM_Sans',sans-serif] leading-[1.18] text-[15px]">Terms and conditions</p>
                </div>
              </div>

              <div>
                <p className="font-['DM_Sans',sans-serif] font-bold leading-[1.18] text-[14px] text-[#75b2eb] uppercase mb-4">
                  Contact
                </p>
                <div className="flex flex-col gap-[12px] text-white font-['DM_Sans',sans-serif] leading-[1.18] text-[15px]">
                  <p>Address</p>
                  <p>+65 987 654 341</p>
                  <p>Facebook</p>
                  <p>TikTok</p>
                  <p>Instagram</p>
                </div>
              </div>
            </div>

            <p className="mt-8 lg:mt-0 lg:absolute font-['DM_Sans',sans-serif] leading-[1.18] lg:left-[554.66px] opacity-50 text-[11px] text-white lg:top-[752.4px] lg:w-[214.212px]">
              2025 Bambite. All rights reserved.
            </p>
          </div>

          {/* Decorative vectors */}
          <div className="absolute h-[126.492px] right-[34.77px] top-[638.91px] w-[219.087px]">
            <div className="absolute inset-[2.66%_-1.42%_-2.46%_9.63%]">
              <Image
                src={imgVector184}
                alt=""
                fill
                className="block max-w-none size-full"
              />
            </div>
          </div>
          <div className="absolute flex h-[126.492px] items-center justify-center right-[61.47px] top-[94.49px] w-[219.087px]">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[126.492px] relative w-[219.087px]">
                <div className="absolute inset-[2.66%_-1.42%_-2.46%_9.63%]">
                  <Image
                    src={imgVector185}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements - Left side - Hidden on mobile */}
        <div className="hidden lg:block absolute content-stretch flex gap-[6.938px] items-center left-[153.45px] top-[852.52px]">
          <div className="flex items-center justify-center relative shrink-0 size-[10.648px]">
            <div className="flex-none rotate-[45deg]">
              <div className="bg-[#223a6e] size-[7.529px]" />
            </div>
          </div>
          <div className="h-[11.555px] relative shrink-0 w-[37.029px]">
            <div className="absolute inset-[-8.01%_0]">
              <Image
                src={imgFrame108}
                alt=""
                fill
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>

        {/* Decorative pattern - Hidden on mobile */}
        <div className="hidden lg:block absolute content-stretch flex flex-col gap-[3.04px] items-center left-[74.46px] top-[829.22px] w-[52.041px]">
          {/* Pattern rows - simplified for now */}
          <div className="content-stretch flex gap-[3.42px] items-center relative shrink-0 w-full">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="relative shrink-0 size-[4.503px]">
                <div className="absolute inset-[-16.88%_-16.88%_-25.31%_-16.88%]">
                  <Image
                    src={imgEllipse28}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="h-[4.503px] relative shrink-0 w-[44.118px]">
            <div className="absolute inset-[-16.88%_-1.72%_-25.31%_-1.72%]">
              <Image
                src={imgFrame118}
                alt=""
                fill
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>

        {/* Additional decorative elements - Hidden on mobile */}
        <div className="hidden lg:block absolute contents left-[427.33px] top-[841.27px]">
          <div className="absolute bg-[#111518] left-[427.33px] rounded-bl-[633.997px] rounded-tl-[633.997px] shadow-[-0.635px_0.635px_0.635px_0px_rgba(226,239,255,0.15)] size-[24.492px] top-[841.27px]">
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1.269px_1.904px_0px_rgba(0,0,0,0.35),inset_0px_2.539px_1.904px_0px_rgba(20,23,28,0.25)]" />
          </div>
          <div className="absolute left-[431.97px] size-[15.223px] top-[845.9px]">
            <div className="absolute inset-[-8.34%_-20.84%_-33.35%_-20.85%]">
              <Image
                src={imgGroup132}
                alt=""
                fill
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>

        {/* Vertical border - Hidden on mobile */}
        <div className="hidden lg:block absolute bg-gradient-to-b border-[#111518] border-[3.173px] border-solid from-[#171e24] h-[774.766px] left-[-91.25px] to-[#1b2229] top-[190.17px] w-[154.902px]">
          <div className="absolute inset-[-1.587px] pointer-events-none shadow-[inset_6.346px_6.346px_1.269px_0px_rgba(226,239,255,0.08)]" />
        </div>

        {/* Decorative group - Hidden on mobile */}
        <div className="hidden lg:block absolute flex h-[419.866px] items-center justify-center left-[-253.11px] top-[-274.12px] w-[355.599px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-[355.599px] relative w-[419.866px]">
              <div className="absolute inset-[-0.66%_-0.56%]">
                <Image
                  src={imgGroup142}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Orange blur effects - Hidden on mobile */}
        <div className="hidden lg:block absolute flex h-[415.622px] items-center justify-center left-[-219.6px] top-[19px] w-[71.185px]">
          <div className="flex-none rotate-[270deg]">
            <div className="bg-[#ff8b32] blur-[85.358px] filter h-[71.185px] opacity-60 w-[415.622px]" />
          </div>
        </div>

        {/* Additional border - Hidden on mobile */}
        <div className="hidden lg:block absolute bg-gradient-to-b border-[#111518] border-[3.173px] border-solid from-[#171e24] h-[222.037px] left-[189px] to-[#1b2229] top-[-31.79px] w-[262.092px]">
          <div className="absolute inset-[-1.587px] pointer-events-none shadow-[inset_6.346px_6.346px_1.269px_0px_rgba(226,239,255,0.15)]" />
        </div>

        {/* Level 2 plate group - Left side decorative - Hidden on mobile */}
        <div className="hidden lg:block absolute contents left-[-57px] top-[380.67px]">
          {/* Light effects */}
          <div className="absolute contents left-[-39.51px] top-[472.62px]">
            <div className="absolute h-[532.368px] left-[-39.51px] opacity-80 top-[472.62px] w-[361.833px]">
              <div className="absolute inset-[-37.89%_-55.74%]">
                <Image
                  src={imgBigSpread}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            <div className="absolute h-[532.368px] left-[-39.51px] opacity-80 top-[472.62px] w-[361.833px]">
              <div className="absolute inset-[-12.58%_-18.51%]">
                <Image
                  src={imgTransitionLight}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            <div className="absolute h-[532.368px] left-[-39.51px] opacity-80 top-[472.62px] w-[361.833px]">
              <div className="absolute inset-[-3.2%_-4.71%]">
                <Image
                  src={imgBrightess}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>

          {/* Plate */}
          <div className="absolute contents left-[-56.96px] top-[424.11px]">
            <div className="absolute h-[568.912px] left-[-56.96px] top-[424.11px] w-[401.473px]">
              <div className="absolute inset-[-0.33%_-1.18%_-1.33%_-1.18%]">
                <Image
                  src={imgPlate}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            {/* Logo and text */}
            <div className="absolute content-stretch flex flex-col gap-[14.072px] items-start left-[-2.18px] top-[708.56px] w-[180.922px]">
              <div className="h-[56.295px] relative shrink-0 w-[79px]">
                <div className="absolute inset-[-0.17%_-0.12%]">
                  <Image
                    src={imgGroup124}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
              <p className="font-['DM_Sans',sans-serif] font-medium leading-[1.2] opacity-25 relative shrink-0 text-[10.369px] text-white uppercase w-full">
                In this strange, beautiful world, the ones who remained weren't humans — but little creatures of curiosity, born from leftover circuits, imagination, and a spark of life. And among them was Bam. Bam isn't just playful and mischievous - he is incredibly smart, wildly creative, and endlessly curious. A little foodie genius with boundless energy, a carefree attitude, and a heart full of joy.
              </p>
            </div>
            {/* Decorative icons */}
            <div className="absolute h-[28.549px] left-[294.2px] top-[943.79px] w-[30.462px]">
              <div className="absolute inset-[-9.17%_-12.89%_-18.33%_-12.88%]">
                <Image
                  src={imgGroup133}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            <div className="absolute h-[28.549px] left-[294.2px] top-[444.3px] w-[30.462px]">
              <div className="absolute inset-[-9.17%_-12.89%_-18.33%_-12.88%]">
                <Image
                  src={imgGroup134}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Silver plate - Hidden on mobile */}
        <div className="hidden lg:block absolute h-[491px] left-[145px] top-[-301px] w-[44px]">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none h-[491px] rotate-[180deg] scale-y-[-100%] w-[44px]">
              <div className="relative size-full">
                <div className="absolute inset-[-0.38%_-4.22%]">
                  <Image
                    src={imgRectangle124}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[0_-1.65%] mix-blend-overlay opacity-70">
            <Image
              src={imgMetal1Overlay}
              alt=""
              fill
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            />
          </div>
        </div>

        {/* Orange blur effects - Hidden on mobile */}
        <div className="hidden lg:block absolute bg-[#ff8b32] blur-[85.358px] filter h-[141.464px] left-[-91.25px] opacity-60 top-[-140.46px] w-[299.308px]" />
        <div className="hidden lg:block absolute bg-[#ff8b32] blur-[85.358px] filter h-[131.47px] left-[1327.66px] opacity-60 top-[812.32px] w-[796.567px]" />

        {/* Right side decorative plates - Hidden on mobile */}
        <div className="hidden lg:block absolute contents left-[1642px] top-[-221.23px]">
          {/* Blue plate */}
          <div className="absolute h-[277px] left-[1642px] top-[682px] w-[443px]">
            <div className="absolute flex inset-0 items-center justify-center">
              <div className="flex-none h-[277px] rotate-[180deg] scale-y-[-100%] w-[443px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-0.54%_-0.34%]">
                    <Image
                      src={imgRectangle125}
                      alt=""
                      fill
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
                  src={imgMetal1Overlay}
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
              <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
                <div className="flex-none h-[277px] scale-y-[-100%] w-[443.349px]">
                  <div className="opacity-[0.34] relative size-full">
                    <Image
                      src={imgGrungeOverlay}
                      alt=""
                      fill
                      className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
                <div className="flex-none h-[277px] rotate-[180deg] scale-y-[-100%] w-[443.348px]">
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
          </div>

          {/* Right side plate group */}
          <div className="absolute contents left-[1687.92px] top-[171.74px]">
            <div className="absolute flex inset-[20.92%_-0.48%_16.88%_80.99%] items-center justify-center">
              <div className="flex-none h-[510.692px] rotate-[180deg] scale-y-[-100%] w-[405.975px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-0.29%_-0.37%]">
                    <Image
                      src={imgRectangle126}
                      alt=""
                      fill
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Texture overlays */}
            <div className="absolute contents inset-[20.92%_-0.48%_16.88%_80.99%]">
              <div className="absolute inset-[20.92%_-0.48%_16.88%_81.11%] mix-blend-overlay opacity-30">
                <Image
                  src={imgMetal1Overlay}
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
              <div className="absolute inset-[20.92%_-0.48%_16.88%_80.99%] mix-blend-lighten opacity-[0.19]">
                <Image
                  src={imgGrungeOverlay}
                  alt=""
                  fill
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                />
              </div>
              <div className="absolute flex inset-[20.92%_-0.48%_16.88%_80.99%] items-center justify-center mix-blend-soft-light">
                <div className="flex-none h-[510.692px] rotate-[180deg] scale-y-[-100%] w-[405.975px]">
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
            {/* Socket screws */}
            <SocketScrew className="absolute bottom-[210.23px] h-[27.526px] right-[-10.37px] w-[35.105px]" direction="right" />
            <div className="absolute left-[1687.92px] size-[21.252px] top-[255.7px]">
              <SocketScrew className="absolute inset-0" direction="left" />
            </div>
            <div className="absolute right-[-8.66px] size-[21.252px] top-[237.14px]">
              <SocketScrew className="absolute inset-0" direction="right" />
            </div>
          </div>

          {/* Silver plate - Right */}
          <div className="absolute h-[491px] left-[1643.3px] top-[191.43px] w-[44px]">
            <div className="absolute flex inset-0 items-center justify-center">
              <div className="flex-none h-[491px] rotate-[180deg] scale-y-[-100%] w-[44px]">
                <div className="relative size-full">
                  <div className="absolute inset-[-0.38%_-4.22%]">
                    <Image
                      src={imgRectangle124}
                      alt=""
                      fill
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-[0_-1.65%] mix-blend-overlay opacity-70">
              <Image
                src={imgMetal1Overlay}
                alt=""
                fill
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              />
            </div>
            <div className="absolute bottom-[2.92%] flex items-center justify-center left-[22.73%] right-[22.73%] top-1/2">
              <div className="flex-none h-[24px] rotate-[270deg] w-[231.161px]">
                <p className="font-['Space_Mono',sans-serif] leading-[1.2] opacity-25 relative text-[10.369px] text-white uppercase w-full">
                  In this strange, beautiful world, the ones who remained weren't humans
                </p>
              </div>
            </div>
          </div>

          {/* Border plate */}
          <div className="absolute bg-gradient-to-b border-[#101922] border-[3.173px] border-solid from-[#171e24] h-[235.452px] left-[1642.1px] to-[#1b2229] top-[-43.78px] w-[513.898px]">
            <div className="absolute inset-[-1.587px] pointer-events-none shadow-[inset_6.346px_6.346px_1.269px_0px_rgba(226,239,255,0.15)]" />
          </div>

          {/* Decorative group */}
          <div className="absolute h-[355.599px] left-[1714.3px] top-[-221.23px] w-[419.868px]">
            <div className="absolute inset-[-0.66%_-0.56%]">
              <Image
                src={imgGroup136}
                alt=""
                fill
                className="block max-w-none size-full"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute content-stretch flex gap-[6.938px] items-center left-[1732.3px] top-[246.32px]">
            <div className="flex items-center justify-center relative shrink-0 size-[10.648px]">
              <div className="flex-none rotate-[45deg]">
                <div className="bg-[#252b39] size-[7.529px]" />
              </div>
            </div>
            <div className="h-[11.555px] relative shrink-0 w-[37.029px]">
              <div className="absolute inset-[-8.01%_0]">
                <Image
                  src={imgFrame109}
                  alt=""
                  fill
                  className="block max-w-none size-full"
                />
              </div>
            </div>
          </div>

          {/* Air vents */}
          <div className="absolute content-stretch flex gap-[4.442px] items-center left-[1909.53px] top-[227.79px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border-[#141a20] border-[2.28px] border-solid h-[35.393px] relative rounded-[31.157px] shadow-[0px_0px_0.76px_0px_rgba(255,255,255,0.02),0px_0.76px_0.38px_0px_rgba(226,239,255,0.15)] shrink-0 w-[3.634px]"
              >
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1.52px_1.52px_0px_rgba(0,0,0,0.35),inset_0px_2.66px_2.28px_0px_rgba(20,23,28,0.25)]" />
              </div>
            ))}
          </div>

          {/* Orange blur */}
          <div className="absolute flex h-[415.623px] items-center justify-center left-[1971.68px] top-[-85.83px] w-[99.855px]">
            <div className="flex-none rotate-[270deg]">
              <div className="bg-[#ff8b32] blur-[85.358px] filter h-[99.855px] opacity-60 w-[415.623px]" />
            </div>
          </div>

          {/* Subtract line */}
          <div className="absolute flex h-[1148.855px] items-center justify-center right-0 top-[567.21px] w-[75.749px]">
            <div className="flex-none rotate-[90deg] scale-y-[-100%]">
              <div className="h-[75.749px] relative w-[1148.855px]">
                <div className="absolute inset-[-1.68%_-0.28%_-6.7%_-0.28%]">
                  <Image
                    src={imgSubtract}
                    alt=""
                    fill
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Large C0 text */}
          <p className="absolute font-['Stick_No_Bills',sans-serif] font-normal leading-[0.82] left-[1720.37px] opacity-[0.15] text-[#d4dce8] text-[277.875px] uppercase top-[266.99px]">
            C0
          </p>
        </div>

        {/* Vines - Hidden on mobile */}
        <div className="hidden lg:block absolute h-[399.394px] left-[1550.48px] top-0 w-[206.809px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={imgVines1}
              alt=""
              fill
              className="absolute h-[106.96%] left-[-106.56%] max-w-none top-0 w-[206.56%]"
            />
          </div>
        </div>

        {/* Image 220 - Hidden on mobile */}
        <div className="hidden lg:block absolute h-[249.457px] left-[347.05px] top-0 w-[279.414px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={imgImage220}
              alt=""
              fill
              className="absolute h-[140.98%] left-[-9.12%] max-w-none top-[-27.49%] w-[113.94%]"
            />
          </div>
        </div>
      </div>

      {/* Orange blur at top - Hidden on mobile */}
      <div className="hidden lg:block absolute bg-[#ff8b32] blur-[85.358px] filter h-[76.928px] left-[1051.42px] opacity-60 top-[-69.66px] w-[631.929px]" />
    </footer>
  );
}

