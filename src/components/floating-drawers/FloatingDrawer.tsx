"use client";

import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { Discount, Product, ProductDetail, Shop, Variant } from "@/types/types";
import Button from "../buttons/Button";

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
      <div className="w-screen bg-white fixed bottom-0 left-0 right-0 z-20 shadow-[0_-4px_4px_0_rgba(0,0,0,0.1)] lg:hidden">
        <div className="w-full h-full flex items-center justify-between p-2.5 gap-2.5">
          <Button handleClick={handleWishlist}>
            {wishlist ? (
              <FaHeart className="text-xl text-red transition-colors" />
            ) : (
              <FaRegHeart className="text-primary text-xl" />
            )}
          </Button>
          <div className="w-full flex items-center gap-2.5">
            <Button
              handleClick={() => setIsBuyNowtModalOpen(true)}
              className="w-1/2"
            >
              Buy Now
            </Button>
            <Button
              handleClick={() => setIsAddToCartModalOpen(true)}
              variant="green"
              className="w-1/2 flex items-center justify-center gap-2.5"
            >
              <BsHandbag className="text-base" /> Add To Chart
            </Button>
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
