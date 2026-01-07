// ProductCardSkeleton component matching Figma design
"use client";

type ProductCardSkeletonProps = {
  size?: "default" | "small";
};

export default function ProductCardSkeleton({
  size = "default",
}: ProductCardSkeletonProps) {
  const isSmall = size === "small";

  return (
    <div
      className={`relative flex flex-col rounded-[9px] overflow-hidden bg-gradient-to-br from-[#c8d5d9]/30 via-[#ececec]/30 to-[#c8d5d9]/30 ${
        isSmall
          ? "w-full h-[280px] sm:h-[320px]"
          : "w-full h-[360px] sm:h-[400px] lg:h-[450px]"
      }`}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(200, 213, 217, 0.3) 15.279%, rgba(236, 236, 236, 0.3) 45.078%, rgba(236, 236, 236, 0.3) 56.771%, rgba(200, 213, 217, 0.3) 86.099%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Product image skeleton */}
      <div
        className={`relative ${
          isSmall
            ? "h-[160px] sm:h-[180px]"
            : "h-[200px] sm:h-[240px] lg:h-[280px]"
        } w-full bg-gradient-to-br from-[#8fa5ae]/20 to-[#c8d5d9]/20`}
      />

      {/* Content skeleton */}
      <div className="flex-1 p-4 space-y-3">
        {/* Title skeleton */}
        <div className="h-6 bg-gradient-to-r from-[#8fa5ae]/20 to-[#c8d5d9]/20 rounded w-3/4" />

        {/* Thai title skeleton */}
        <div className="h-4 bg-gradient-to-r from-[#8fa5ae]/15 to-[#c8d5d9]/15 rounded w-2/3" />

        {/* Price skeleton */}
        <div className="h-5 bg-gradient-to-r from-[#8fa5ae]/25 to-[#c8d5d9]/25 rounded w-1/3" />

        {/* Description skeleton */}
        <div className="space-y-2 pt-2">
          <div className="h-3 bg-gradient-to-r from-[#8fa5ae]/15 to-[#c8d5d9]/15 rounded w-full" />
          <div className="h-3 bg-gradient-to-r from-[#8fa5ae]/15 to-[#c8d5d9]/15 rounded w-5/6" />
        </div>
      </div>

      {/* Button skeleton */}
      <div className="p-4 pt-0">
        <div className="h-12 bg-gradient-to-r from-[#8fa5ae]/25 to-[#c8d5d9]/25 rounded" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
}
