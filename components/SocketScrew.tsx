// Reusable Socket Screw component
import Image from "next/image";

type SocketScrewProps = {
  className?: string;
  direction?: "left" | "right";
  color?: "black" | "blue";
  size?: "small" | "default";
};

export default function SocketScrew({
  className,
  direction = "left",
  color = "black",
  size = "default",
}: SocketScrewProps) {
  const bgColor = color === "blue" ? "#13243c" : "#111518";
  const screwSize = size === "small" ? "16.708px" : "35.105px";
  const iconSize = size === "small" ? "10.385px" : "21.82px";

  if (direction === "right") {
    return (
      <div className={className}>
        <div className="absolute contents inset-0">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none scale-y-[-100%]" style={{ width: screwSize, height: screwSize }}>
              <div
                className="relative rounded-bl-[999px] rounded-tl-[999px] shadow-[-1px_1px_1px_0px_rgba(226,239,255,0.15)] size-full"
                style={{ backgroundColor: bgColor }}
              >
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_3px_0px_rgba(0,0,0,0.35),inset_0px_4px_3px_0px_rgba(20,23,28,0.25)]" />
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[18.92%_18.93%_18.93%_18.91%] items-center justify-center">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]" style={{ width: iconSize, height: iconSize }}>
              <div className="relative size-full">
                <div className="absolute inset-[-9.17%_-22.91%_-36.66%_-22.91%]">
                  <Image
                    src="/footer-assets/screw-icon.svg"
                    alt=""
                    fill
                    className="block max-w-none size-full"
                    sizes="24px"
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
          <div className="flex-none rotate-[180deg] scale-y-[-100%]" style={{ width: screwSize, height: screwSize }}>
            <div
              className="relative rounded-bl-[999px] rounded-tl-[999px] shadow-[1px_1px_1px_0px_rgba(226,239,255,0.15)] size-full"
              style={{ backgroundColor: bgColor }}
            >
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_3px_0px_rgba(0,0,0,0.35),inset_0px_4px_3px_0px_rgba(20,23,28,0.25)]" />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[18.92%_18.93%_18.93%_18.91%] items-center justify-center">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]" style={{ width: iconSize, height: iconSize }}>
            <div className="relative size-full">
              <div className="absolute inset-[-9.17%_-22.91%_-36.66%_-22.91%]">
                <Image
                  src="/footer-assets/screw-icon.svg"
                  alt=""
                  fill
                  className="block max-w-none size-full"
                  sizes="24px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

