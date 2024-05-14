import React from "react";
import ProductGallery from "./ProductGallery";
import { Product } from "@/types";

const ProductImage = ({ product }: { product: Product }) => {
  return (
    <section className="sm:p-0 p-5 sm:bg-white md:bg-white md2:bg-transparent rounded-lg w-full  md2:max-w-[568px] xl:max-w-[700px] lg:max-w-[768px] md2:p-0 md2:sticky top-[10px] ">
      <div className="flex flex-col gap-1 items-start md:flex-row md:items-center md:justify-between md2:hidden">
        <h1 className="text-dark leading-[28.13px] text-[24px] font-robot-c font-medium">
          {product.title}
        </h1>
      </div>
      <ProductGallery product={product} />
    </section>
  );
};

export default ProductImage;
