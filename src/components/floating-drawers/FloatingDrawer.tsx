"use client";

import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { Discount, Product, ProductDetail, Shop, Variant } from "@/types/types";

interface FloatingRawerProps {
  product_id: ProductDetail["product_id"];
  product_name: ProductDetail["product_name"];
  image: ProductDetail["image"];
  category: ProductDetail["category"];
  variant: ProductDetail["variant"];
  discount: ProductDetail["discount"];
  sold: ProductDetail["sold"];
  isWishlist: boolean;
}

export default function FloatingDrawer({
  product_id,
  product_name,
  image,
  category,
  variant,
  discount,
  sold,
  isWishlist,
}: FloatingRawerProps) {
  const [isAddToCartModalOpen, setIsAddToCartModalOpen] =
    useState<boolean>(false);
  const [isBuyNowModalOpen, setIsBuyNowtModalOpen] = useState<boolean>(false);
  const handleCloseATCModal = () => setIsAddToCartModalOpen(false);
  const hanldeCloseBuyNowModal = () => setIsBuyNowtModalOpen(false);

  const [wishlist, setWishlist] = useState(isWishlist);
  const handleWishlist = async () => {
    // if (wishlist) {
    //   setWishlist(false);
    //   try {
    //     await api.deleteWishlist(wishlistId, token);
    //   } catch (error) {
    //     setWishlist(true);
    //   }
    // } else {
    //   setWishlist(true);
    //   try {
    //     await api.addToWishlist(product_id, token);
    //   } catch (error) {
    //     setWishlist(false);
    //   }
    // }
  };

  return (
    <>
      <div className="w-screen bg-white fixed bottom-0 left-0 right-0 z-20 shadow-[0_-4px_4px_0_rgba(0,0,0,0.1)]">
        <div className="w-full h-full flex items-center justify-between p-2.5 gap-2.5">
          <button
            onClick={handleWishlist}
            className="border border-primary border-solid p-2.5 rounded-lg"
          >
            {wishlist ? (
              <FaHeart className="text-xl text-red transition-colors" />
            ) : (
              <FaRegHeart className="text-primary text-xl" />
            )}
          </button>
          <div className="w-full flex items-center gap-2.5">
            <button
              onClick={() => setIsBuyNowtModalOpen(true)}
              className="border w-1/2 border-primary border-solid p-2.5 rounded-lg text-sm font-bold text-primary"
            >
              Buy Now
            </button>
            <button
              onClick={() => setIsAddToCartModalOpen(true)}
              className="bg-primary p-2.5 w-1/2 rounded-lg text-sm font-bold text-white flex items-center gap-2.5 justify-center"
            >
              <BsHandbag className="text-base" /> Add To Chart
            </button>
          </div>
        </div>
      </div>
      {/* <AddToCartModal
        isOpen={isAddToCartModalOpen}
        handleCloseModal={handleCloseATCModal}
        {...{ product_id, product_name, category, variant, discount }}
        imageUrl={image}
        userId={userId}
      />
      <BuyNowModal
        isOpen={isBuyNowModalOpen}
        handleCloseModal={hanldeCloseBuyNowModal}
        {...{ product_id, product_name, category, variant, discount }}
        imageUrl={image}
        shop={shop}
        shipping_cost={shipping_cost}
      /> */}
    </>
  );
}
