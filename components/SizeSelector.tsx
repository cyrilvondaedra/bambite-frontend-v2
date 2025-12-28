// Size Selector component
"use client";

type SizeOption = {
  id: string;
  label: string;
  price?: number;
};

type SizeSelectorProps = {
  options: SizeOption[];
  selectedSize: string;
  onSizeChange: (sizeId: string) => void;
};

export default function SizeSelector({
  options,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[40px] shadow-[0px_2px_1px_0px_rgba(226,239,255,0.15)] shrink-0 w-full">
      {options.map((option) => {
        const isSelected = selectedSize === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onSizeChange(option.id)}
            className={`basis-0 bg-[#181e24] content-stretch flex grow h-[58.372px] items-center justify-between min-h-px min-w-px px-[23px] py-[134px] relative rounded-[999px] shadow-[0px_2px_1px_0px_rgba(226,239,255,0.08)] shrink-0 transition-all ${
              isSelected ? "ring-2 ring-[#1d63be]" : ""
            }`}
          >
            <p className="font-['DM_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[17px] text-[rgba(255,255,255,0.75)] text-nowrap">
              {option.label}
            </p>
            {isSelected && (
              <div className="flex h-[11.561px] items-center justify-center relative shrink-0 w-[23.416px]">
                <div className="flex-none rotate-[153.724deg] skew-x-[31.302deg]">
                  <div className="bg-[#1d63be] rounded-[1.737px] size-[13.057px]" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.35)]" />
          </button>
        );
      })}
    </div>
  );
}

