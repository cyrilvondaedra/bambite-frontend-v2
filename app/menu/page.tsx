// Food Menu Page

"use client";

import { useState } from "react";
import MenuBackground from "@/components/MenuBackground";
import FilterPanel from "@/components/FilterPanel";
import { Product } from "@/components/MenuSection";
import ProductCard from "@/components/ProductCard";

// Sample product data - replace with actual data from API
const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Bam's Bites",
    titleThai: "ก้อนเซโมลินา",
    price: 120,
    description:
      "Full of natural flavor, a little sweet, made to lift your mood.",
    image: "/product-images/product-1.png",
    category: "noodles",
  },
  {
    id: "2",
    title: "Bam's Bites",
    titleThai: "ก้อนเซโมลินา",
    price: 120,
    description:
      "Full of natural flavor, a little sweet, made to lift your mood.",
    image: "/product-images/product-2.png",
    category: "noodles",
  },
  {
    id: "3",
    title: "Bam's Bites",
    titleThai: "ก้อนเซโมลินา",
    price: 120,
    description:
      "Full of natural flavor, a little sweet, made to lift your mood.",
    image: "/product-images/product-3.png",
    category: "noodles",
  },
  {
    id: "4",
    title: "Bam's Bites",
    titleThai: "ก้อนเซโมลินา",
    price: 120,
    description:
      "Full of natural flavor, a little sweet, made to lift your mood.",
    image: "/product-images/product-4.png",
    category: "noodles",
  },
  {
    id: "5",
    title: "Bam's Bites",
    titleThai: "ก้อนเซโมลินา",
    price: 120,
    description:
      "Full of natural flavor, a little sweet, made to lift your mood.",
    image: "/product-images/product-5.png",
    category: "noodles",
  },
  {
    id: "6",
    title: "Bam's Bites",
    titleThai: "ก้อนเซโมลินา",
    price: 120,
    description:
      "Full of natural flavor, a little sweet, made to lift your mood.",
    image: "/product-images/product-1.png",
    category: "noodles",
  },
];

export default function FoodMenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Noodles", "Rice", "Desserts"];

  const filteredProducts =
    activeCategory.toLowerCase() === "all"
      ? sampleProducts
      : sampleProducts.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const handleAddToCart = (productId: string) => (quantity: number) => {
    console.log("Add to cart:", { productId, quantity });
    // Implement cart logic here
  };

  return (
    <MenuBackground>
      <div className="min-h-screen w-full relative">
        {/* Header */}
        <div className="relative z-10 pt-8 sm:pt-12 md:pt-16 pb-8 px-4 sm:px-6 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <h1
              className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#f9f9f9] leading-none not-italic text-[28px] sm:text-[32px] md:text-[40px] to-[#a6b5c0] tracking-[-0.8px] mb-2"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              BamBite Menu
            </h1>
            <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(255,255,255,0.75)]">
              All the best in one place
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[282px_1fr] gap-8 lg:gap-12 pb-16">
            {/* Filter Panel */}
            <div className="w-full lg:w-auto">
              <FilterPanel
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Products Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    titleThai={product.titleThai}
                    price={product.price}
                    description={product.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuBackground>
  );
}
