import { Product } from "@/types";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const ProductSummaryCard = ({ product }: { product: Product }) => {
  return (
    <div
      className="flex flex-col gap-3 border-b pb-3 border-gray"
      id="about-product"
    >
      <div className="md2:flex flex-col hidden gap-3">
        <h1 className="text-dark leading-[37.5px] text-[32px] font-robot-c font-medium xl:text-[40px] xl:leading-[46.88px] 2xl:text-[40px] 2xl:leading-[46.88px]">
          {product.title}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <span className="font-robot-c font-medium text-dark text-[24px] leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
            {product.price} UAH
          </span>
        </div>
        <button className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-blue transition duration-300 flex items-center gap-2">
          <span>Add to Cart</span>
          <CiShoppingCart size={25} />
        </button>
      </div>
      <div className="flex items-end justify-between"></div>
    </div>
  );
};

export default ProductSummaryCard;
