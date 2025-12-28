// Cart Item component
"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/contexts/CartContext";

type CartItemProps = {
  item: CartItemType;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
};

export default function CartItem({
  item,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  const handleDecrement = () => {
    onQuantityChange(item.id, item.quantity - 1);
  };

  const handleIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0 w-full">
      {/* Product Image */}
      <div className="h-[151.229px] relative shrink-0 w-[120px] flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="120px"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="basis-0 content-stretch flex flex-col gap-[51px] grow items-start min-h-px min-w-px relative shrink-0">
        {/* Title and Info */}
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[119px]">
          <p
            className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-[0.82] min-w-full not-italic relative shrink-0 text-[18px] sm:text-[20px] to-[#315273] w-[min-content]"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            {item.title}
          </p>
          {item.size && (
            <p
              className="bg-clip-text bg-gradient-to-b font-['DM_Sans',sans-serif] font-normal from-[#1b232a] leading-[1.2] min-w-full relative shrink-0 text-[12px] sm:text-[14px] to-[#315273] w-[min-content]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Size: {item.size}
            </p>
          )}
          {item.variant && (
            <p
              className="bg-clip-text bg-gradient-to-b font-['DM_Sans',sans-serif] font-normal from-[#1b232a] leading-[1.2] min-w-full relative shrink-0 text-[12px] sm:text-[14px] to-[#315273] w-[min-content]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {item.variant}
            </p>
          )}
          <div className="content-stretch flex font-['DM_Sans',sans-serif] font-normal gap-[6px] items-center leading-[1.2] relative shrink-0 text-[12px] sm:text-[14px] text-nowrap">
            <p
              className="bg-clip-text bg-gradient-to-b from-[#1b232a] relative shrink-0 to-[#315273]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {item.quantity}
            </p>
            <p
              className="bg-clip-text bg-gradient-to-b from-[#1b232a] relative shrink-0 to-[#315273]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              x
            </p>
            <p
              className="bg-clip-text bg-gradient-to-b from-[#1b232a] relative shrink-0 to-[#315273]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {item.price} THB
            </p>
          </div>
        </div>

        {/* Quantity Controls and Remove */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Quantity Controls */}
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative">
                {/* Decrement Button */}
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <button
                      onClick={handleDecrement}
                      className="content-stretch flex items-center p-[8px] relative rounded-[8px] hover:bg-black/10 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-[#273b4f]"
                        >
                          <path
                            d="M4 8H12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                {/* Quantity Display */}
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative text-[14px] sm:text-[16px] text-[#273b4f] text-nowrap uppercase">
                      {item.quantity}
                    </p>
                  </div>
                </div>
                {/* Increment Button */}
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <button
                      onClick={handleIncrement}
                      className="content-stretch flex items-center p-[8px] relative rounded-[8px] hover:bg-black/10 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-[#273b4f]"
                        >
                          <path
                            d="M8 4V12M4 8H12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Remove Button */}
          <button
            onClick={() => onRemove(item.id)}
            className="content-stretch flex gap-[5px] items-center px-0 py-[8px] relative shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Remove item"
          >
            <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[11px] sm:text-[13px] text-[#273b4f] text-nowrap uppercase">
              Remove
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

