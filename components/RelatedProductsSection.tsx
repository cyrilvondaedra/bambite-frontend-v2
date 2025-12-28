// Related Products Section component
import ProductCard from "./ProductCard";
import { Product } from "./MenuSection";

type RelatedProductsSectionProps = {
  products: Product[];
  title?: string;
};

export default function RelatedProductsSection({
  products,
  title = "You may also like",
}: RelatedProductsSectionProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-none not-italic text-[32px] sm:text-[40px] md:text-[48px] to-[#315273] mb-8 sm:mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
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
  );
}

