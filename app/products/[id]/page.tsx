// Product Details Page
"use client";

import { useParams } from "next/navigation";
import ProductDetailsBackground from "@/components/ProductDetailsBackground";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductDetailsPanel from "@/components/ProductDetailsPanel";
import RelatedProductsSection from "@/components/RelatedProductsSection";
import { Product } from "@/components/MenuSection";

// Sample product data - replace with actual API call
type ProductData = {
  id: string;
  title: string;
  titleThai: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  sizes: { id: string; label: string }[];
  faqs: { id: string; question: string; answer: string }[];
};

const getProduct = (id: string): ProductData | null => {
  // This would typically be an API call
  const products: Record<string, ProductData> = {
    "1": {
      id: "1",
      title: "Bam's Bites",
      titleThai: "ก้อนเซโมลินา",
      price: 120,
      currency: "THB",
      description: "A semolina treat full of natural flavor, a little sweet, made to lift your mood.",
      images: [
        "/product-images/product-1.png",
        "/product-images/product-2.png",
        "/product-images/product-3.png",
        "/product-images/product-4.png",
        "/product-images/product-5.png",
      ],
      sizes: [
        { id: "small", label: "Small" },
        { id: "big", label: "Big" },
      ],
      faqs: [
        {
          id: "1",
          question: "What is Bam's bites?",
          answer: "Lorem ipsum dolor sit amet consectetur. Id pharetra ullamcorper odio ut arcu fermentum odio. Dolor venenatis felis elementum ac cras enim.",
        },
        {
          id: "2",
          question: "How should I store Bam's bites?",
          answer: "Store in a cool, dry place. Best consumed within 3 days of purchase.",
        },
      ],
    },
  };
  return products[id] || products["1"] || null;
};

const getRelatedProducts = (): Product[] => {
  // This would typically be an API call
  return [
    {
      id: "2",
      title: "Bam's Bites",
      titleThai: "ก้อนเซโมลินา",
      price: 120,
      description: "Full of natural flavor, a little sweet, made to lift your mood.",
      image: "/product-images/product-2.png",
      category: "noodles",
    },
    {
      id: "3",
      title: "Bam's Bites",
      titleThai: "ก้อนเซโมลินา",
      price: 120,
      description: "Full of natural flavor, a little sweet, made to lift your mood.",
      image: "/product-images/product-3.png",
      category: "noodles",
    },
    {
      id: "4",
      title: "Bam's Bites",
      titleThai: "ก้อนเซโมลินา",
      price: 120,
      description: "Full of natural flavor, a little sweet, made to lift your mood.",
      image: "/product-images/product-4.png",
      category: "noodles",
    },
  ];
};

export default function ProductDetailsPage() {
  const params = useParams();
  const id = (params?.id as string) || "";

  // Use direct function calls instead of useEffect for synchronous data
  const product = getProduct(id);
  const relatedProducts = getRelatedProducts();

  if (!product) {
    return (
      <ProductDetailsBackground>
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="text-white text-xl">Product not found</div>
        </div>
      </ProductDetailsBackground>
    );
  }


  const handleAddToCart = (quantity: number, sizeId: string) => {
    console.log("Add to cart:", { quantity, sizeId, productId: id });
    // Implement cart logic here
  };

  const handleBuyNow = (quantity: number, sizeId: string) => {
    console.log("Buy now:", { quantity, sizeId, productId: id });
    // Implement checkout logic here
  };

  return (
    <ProductDetailsBackground>
      <div className="min-h-screen w-full">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Image Gallery */}
            <div className="w-full">
              <ProductImageGallery
                images={product.images}
                productName={product.title}
              />
            </div>

            {/* Right Column - Product Details */}
            <div className="w-full flex justify-center lg:justify-start">
              <ProductDetailsPanel
                productId={product.id}
                title={product.title}
                titleThai={product.titleThai}
                price={product.price}
                currency={product.currency}
                description={product.description}
                image={product.images?.[0]}
                sizes={product.sizes}
                faqs={product.faqs}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <RelatedProductsSection products={relatedProducts} />
      </div>
    </ProductDetailsBackground>
  );
}

