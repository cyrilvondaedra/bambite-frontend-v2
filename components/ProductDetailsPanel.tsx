// Product Details Panel component
"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import SizeSelector from "./SizeSelector";
import FAQAccordion from "./FAQAccordion";

type SizeOption = {
  id: string;
  label: string;
  price?: number;
};

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type ProductDetailsPanelProps = {
  productId: string;
  title: string;
  titleThai: string;
  price: number;
  currency?: string;
  description: string;
  image?: string;
  sizes: SizeOption[];
  faqs: FAQ[];
  onAddToCart?: (quantity: number, sizeId: string) => void;
  onBuyNow?: (quantity: number, sizeId: string) => void;
};

export default function ProductDetailsPanel({
  productId,
  title,
  titleThai,
  price,
  currency = "THB",
  description,
  image,
  sizes,
  faqs,
  onAddToCart,
  onBuyNow,
}: ProductDetailsPanelProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.id || "");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    // Add to cart context
    const sizeLabel = sizes.find((s) => s.id === selectedSize)?.label || "";
    // Add all quantity at once (cart context will handle grouping)
    addItem({
      id: productId,
      title,
      titleThai,
      price,
      image: image || "/product-images/product-1.png",
      size: sizeLabel,
    });
    // If quantity > 1, add additional items
    for (let i = 1; i < quantity; i++) {
      addItem({
        id: productId,
        title,
        titleThai,
        price,
        image: image || "/product-images/product-1.png",
        size: sizeLabel,
      });
    }
    // Also call optional callback if provided
    if (onAddToCart) {
      onAddToCart(quantity, selectedSize);
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(quantity, selectedSize);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center w-full max-w-[520px]">
      {/* Product Info */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0.82] relative shrink-0 w-full">
          <p className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#f9f9f9] not-italic relative shrink-0 text-[32px] sm:text-[36px] md:text-[40px] to-[#a6b5c0] w-full">
            {title}
          </p>
          <p className="font-['Noto_Sans_Thai_Looped',sans-serif] font-medium relative shrink-0 text-[15px] sm:text-[17px] text-[rgba(255,255,255,0.75)] w-full">
            {titleThai}
          </p>
        </div>
        <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] items-center justify-center pb-[7px] pt-[5px] px-[10px] relative rounded-[7px] shrink-0">
          <p className="font-['Space_Mono',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[18px] sm:text-[20px] text-[#489adc] text-nowrap">
            {price} {currency}
          </p>
        </div>
        <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[15px] sm:text-[17px] text-[rgba(255,255,255,0.55)] w-full">
          {description}
        </p>
      </div>

      {/* Size Selector */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <p className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#f9f9f9] leading-[0.82] not-italic relative shrink-0 text-[18px] sm:text-[20px] to-[#a6b5c0] w-full">
          Size
        </p>
        <SizeSelector
          options={sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />
      </div>

      {/* Add to Cart Section */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-[180deg] w-full">
            <div className="bg-gradient-to-b border border-[#193551] border-solid content-stretch flex from-[#074980] h-[50px] sm:h-[54px] md:h-[58px] items-center relative to-[#172743] w-full rounded-lg overflow-hidden">
              {/* Texture overlays */}
              <div className="absolute contents inset-[-0.5px_calc(-0.08%-0.5px)_-0.5px_-0.5px]">
                <div className="absolute inset-[0_-0.08%_0_0.57%] mix-blend-overlay opacity-30">
                  <Image
                    src="/product-assets/metal-overlay.png"
                    alt=""
                    fill
                    sizes="520px"
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none"
                  />
                </div>
                <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
                  <div className="flex-none h-full scale-y-[-100%] w-full">
                    <div className="opacity-[0.34] relative size-full">
                      <Image
                        src="/product-assets/grunge-overlay.png"
                        alt=""
                        fill
                        sizes="520px"
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
                  <div className="flex-none h-full rotate-[180deg] scale-y-[-100%] w-full">
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

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px pl-[12px] pr-[20px] py-0 relative shrink-0 z-10"
              >
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <div className="content-stretch flex items-center p-[6px] relative rounded-[8px]">
                      <div className="overflow-clip relative shrink-0 size-[24px]">
                        <Image
                          src="/product-assets/shopping-cart-icon.svg"
                          alt=""
                          width={22}
                          height={22}
                          className="block max-w-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                  <div className="flex-none rotate-[180deg] w-full">
                    <div className="content-stretch flex gap-[16px] items-center relative w-full">
                      <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[11px] sm:text-[12.583px] text-[rgba(255,255,255,0.9)] text-nowrap uppercase">
                        add to cart
                      </p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Separator */}
              <div className="flex h-[55.645px] items-center justify-center relative shrink-0 w-[1.919px] z-10">
                <div className="flex-none rotate-[90deg]">
                  <div className="h-[1.919px] relative w-[55.645px]">
                    <Image
                      src="/product-assets/break-line.svg"
                      alt=""
                      fill
                      sizes="2px"
                      className="block max-w-none"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="content-stretch flex gap-[4px] sm:gap-[8px] h-full items-center justify-center px-[12px] sm:px-[14px] py-[8px] relative shrink-0 z-10">
                <button
                  onClick={handleDecrement}
                  className="flex items-center justify-center relative shrink-0"
                >
                  <div className="flex-none rotate-[180deg]">
                    <div className="content-stretch flex items-center p-[5px] sm:p-[8px] relative rounded-[3px] sm:rounded-[8px]">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <Image
                          src="/product-assets/minus-icon.svg"
                          alt="Decrease quantity"
                          width={16}
                          height={16}
                          className="block max-w-none"
                        />
                      </div>
                    </div>
                  </div>
                </button>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative text-[14px] sm:text-[16px] text-nowrap text-white uppercase">
                      {quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleIncrement}
                  className="flex items-center justify-center relative shrink-0"
                >
                  <div className="flex-none rotate-[180deg]">
                    <div className="content-stretch flex items-center p-[5px] sm:p-[8px] relative rounded-[3px] sm:rounded-[8px]">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <Image
                          src="/product-assets/plus-icon.svg"
                          alt="Increase quantity"
                          width={16}
                          height={16}
                          className="block max-w-none"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="absolute inset-[-0.5px] pointer-events-none shadow-[inset_3.77px_3.77px_1.153px_0px_rgba(226,239,255,0.15)]" />
            </div>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-[180deg] w-full">
            <button
              onClick={handleBuyNow}
              className="bg-gradient-to-b border border-[#070f17] border-solid content-stretch flex from-[#171e24] h-[50px] sm:h-[54px] md:h-[58px] items-center relative to-[#1b2229] w-full rounded-lg overflow-hidden"
            >
              {/* Texture overlays */}
              <div className="absolute contents inset-[-0.5px_calc(-0.08%-0.5px)_calc(0%-0.5px)_-0.5px]">
                <div className="absolute inset-[0_-0.08%_0_0.57%] mix-blend-overlay opacity-30">
                  <Image
                    src="/product-assets/metal-overlay.png"
                    alt=""
                    fill
                    sizes="520px"
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none"
                  />
                </div>
                <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-lighten">
                  <div className="flex-none h-full scale-y-[-100%] w-full">
                    <div className="opacity-[0.34] relative size-full">
                      <Image
                        src="/product-assets/grunge-overlay.png"
                        alt=""
                        fill
                        sizes="520px"
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[0_-0.08%_0_0] items-center justify-center mix-blend-soft-light">
                  <div className="flex-none h-full rotate-[180deg] scale-y-[-100%] w-full">
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

              {/* Button Content */}
              <div className="basis-0 content-stretch flex gap-[24px] grow h-full items-center min-h-px min-w-px pl-[12px] pr-[20px] py-0 relative shrink-0 z-10">
                <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                  <div className="flex-none rotate-[180deg] w-full">
                    <div className="content-stretch flex font-['Space_Mono',sans-serif] items-center justify-between leading-none not-italic relative text-[11px] sm:text-[12.583px] text-nowrap uppercase w-full">
                      <p className="relative shrink-0 text-[rgba(255,255,255,0.9)]">Buy Now</p>
                      <p className="relative shrink-0 text-white">{price} {currency}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-[-0.5px] pointer-events-none shadow-[inset_3.77px_3.77px_1.153px_0px_rgba(226,239,255,0.12)]" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <FAQAccordion faqs={faqs} />
    </div>
  );
}

