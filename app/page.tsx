// Home Page
"use client";

import HeroSection from "@/components/HeroSection";
import NewTasteSection from "@/components/NewTasteSection";
import ExploreCuisineSection from "@/components/ExploreCuisineSection";
import MyHomeToYoursSection from "@/components/MyHomeToYoursSection";
import HiImBamSection from "@/components/HiImBamSection";
import { Product } from "@/components/MenuSection";

// Sample product data for New Taste section
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

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* New Taste Section */}
      <NewTasteSection products={sampleProducts} />

      {/* Explore All New Cuisine Section */}
      <ExploreCuisineSection />

      {/* My Home to Yours Section */}
      <MyHomeToYoursSection />

      {/* Hi, I'm Bam Section */}
      <HiImBamSection />
    </main>
  );
}
