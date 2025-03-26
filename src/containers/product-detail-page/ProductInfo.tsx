"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { FaStar, FaLocationDot } from "react-icons/fa6";
import { checkIsTextClamped } from "@/utils/elementHelpers";
import { ProductDetail } from "@/types/types";
import MoreButton from "@/components/buttons/MoreButton";

interface ProductInfoProps {
  product_name: ProductDetail["product_name"];
  category: ProductDetail["category"];
  description: ProductDetail["description"];
  shop: ProductDetail["shop"];
  variant: ProductDetail["variant"];
  discount: ProductDetail["discount"];
  sold: ProductDetail["sold"];
  ratings: ProductDetail["rating"];
  //   isWishlist: boolean;
}

export default function ProductInfo({
  product_name,
  category,
  description,
  shop,
  variant,
  discount,
  sold,
  ratings,
}: ProductInfoProps) {
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const [isTexClamped, setIsTexClamped] = useState<boolean>(false);
  const [descMoreOpen, setDescMoreOpen] = useState<boolean>(false);

  useEffect(() => {
    const isTexClamped = descRef.current
      ? checkIsTextClamped(descRef.current)
      : false;
    setIsTexClamped(isTexClamped);
  }, [descRef]);
  const handleDescMoreButton = () => {
    setDescMoreOpen((prev) => !prev);
  };

  const getFormatedPrice = useMemo(() => {
    if (variant?.length !== 0) {
      return Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(variant?.[0].variant_price ?? 0);
    }
    return "Rp. 0";
  }, [variant]);

  const discountValue = useMemo(
    () => discount?.find((item) => item.discount_type === "percentage"),
    [discount]
  );

  return (
    <div className="py-5">
      <div className="w-full">
        <p className="text-xs text-dark-gray capitalize mb-2.5">{category}</p>
        <p className="text-2xl font-semibold mb-5">{product_name}</p>
        <div className="flex items-center gap-2.5 md:gap-5 mb-5">
          <div className="flex items-center gap-2.5">
            <p className="font-bold text-primary text-lg">{getFormatedPrice}</p>
            <span className="text-dark-gray text-xs tablet:text-sm capitalize">
              /{variant[0].variant_unit}
            </span>
          </div>
          {discountValue && (
            <p className="text-red text-base bg-light-red px-3">
              {discountValue?.discount_value} %
            </p>
          )}
        </div>
        <div className="flex items-center text-xs gap-2.5 mb-1">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow" />
            <p>{ratings ?? 0}</p>
          </div>
          <div>|</div>
          <p>{sold} Sold</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-dark-gray">
          <FaLocationDot />
          <p className="capitalize">{shop.shop_address_city}</p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-3">Description</h3>
        <p
          ref={descRef}
          className={`text-xs text-dark-gray leading-5 first-letter:uppercase ${descMoreOpen ? "" : "line-clamp-4"}`}
        >
          {description}
        </p>
        {isTexClamped && (
          <MoreButton
            handleShowMoreButton={handleDescMoreButton}
            showMoreOpen={descMoreOpen}
            text="description"
          />
        )}
      </div>
    </div>
  );
}
