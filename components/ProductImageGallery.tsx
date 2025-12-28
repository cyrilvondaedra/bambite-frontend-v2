// Product Image Gallery component
"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const mainImage = images[selectedImageIndex] || images[0];

  return (
    <div className="content-stretch flex gap-[21px] items-start w-full">
      {/* Thumbnail strip - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:flex content-stretch flex-col gap-[15px] items-start relative shrink-0 w-[92px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`h-[115.942px] relative shrink-0 w-full transition-opacity ${
              selectedImageIndex === index ? "opacity-100" : "opacity-60 hover:opacity-80"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              sizes="92px"
              className="object-cover rounded"
            />
            {selectedImageIndex === index && (
              <div className="absolute inset-[-7.76%_-10.87%_-9.49%_-10.87%] border-2 border-white rounded" />
            )}
          </button>
        ))}
      </div>

      {/* Main image display */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[665.016px] relative shrink-0 w-full md:w-[527.688px]">
        <Image
          src={mainImage}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 527px"
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}

