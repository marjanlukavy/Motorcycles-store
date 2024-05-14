import Image from "next/image";
import React, { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Product } from "@/types";

const ProductGallery = ({ product }: { product: Product }) => {
  return (
    <section className="">
      <div className="xl:mx-auto max-w-6xl">
        {/* Main Image Swiper */}
        <div className="flex items-center justify-center bg-white md:bg-transparent md2:bg-white md2:px-1 relative rounded-lg">
          <div className="bg-pink shadow-product-card py-[6.5px] px-2 md:order-1 absolute top-5 left-5 z-[10000] sm:hidden md:hidden md2:block">
            акція
          </div>
          <div className="relative w-[1100px] h-[500px]">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Thumbnails Swiper */}
      </div>
    </section>
  );
};

export default ProductGallery;
