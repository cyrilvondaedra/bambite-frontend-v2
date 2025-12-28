// Back Button component
"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  onClick?: () => void;
};

export default function BackButton({ onClick }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="content-stretch flex items-center p-[6px] rounded-[8px] hover:opacity-80 transition-opacity"
      aria-label="Go back"
    >
      <div className="h-[55px] relative shrink-0 w-[54px]">
        <div className="absolute flex inset-[15.3%_21.23%_17.98%_19.08%] items-center justify-center">
          <div className="flex-none h-[21.353px] rotate-[180deg] scale-y-[-100%] w-[19.101px]">
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 6L6 10.5L12 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

