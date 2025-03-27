"use client";

import React, { useMemo, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import ShopingBag from "@/../public/icons/shopping-bag-white.svg";
import Image from "next/image";
import { ProductDetail, Variant } from "@/types/types";
import { Spinner } from "@material-tailwind/react";
import { formatPrice } from "@/utils/formatHelpers";
import Button from "@/components/buttons/Button";
interface SelectionSectionProps {
  product_id: ProductDetail["product_id"];
  product_name: ProductDetail["product_name"];
  variant: ProductDetail["variant"];
  discount: ProductDetail["discount"];
  wishlistId: number;
  isWishlist: boolean;
}

export default function SelectionSection({
  product_id,
  product_name,
  variant,
  discount,
  isWishlist,
  wishlistId,
}: SelectionSectionProps) {
  const [wishlist, setWishlist] = useState(isWishlist);
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variant[0]);
  const [quantity, setQuantity] = useState(1);

  const getFormatedPrice = useMemo(() => {
    const totalPrice = quantity * selectedVariant.variant_price;
    return formatPrice(totalPrice);
  }, [selectedVariant, quantity]);

  const handleWishlist = async () => {};
  return (
    <div className="hidden lg:block w-fit bg-secondary rounded-lg p-5 mt-5">
      {variant?.length !== 0 && (
        <>
          <div className="flex items-center gap-5 mb-5">
            <p className="font-semibold min-w-20">Variants</p>
            <div className="grid grid-cols-4 gap-5 w-full">
              {variant?.map((item, index) => (
                <button
                  onClick={() => setSelectedVariant(item)}
                  className={`text-xs py-2 px-2 rounded capitalize ${selectedVariant?.variant_name === item.variant_name ? "bg-[#76BF9B] text-white transition-all ease-in " : "bg-white"}`}
                  key={index}
                >
                  {item.variant_name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="flex items-center gap-5 w-full my-5">
        <p className="font-semibold min-w-20">Quantity</p>
        <div className="bg-white flex items-center border-solid border-black border w-fit rounded-lg py-1 px-5">
          <button
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            <LuMinus />
          </button>
          <input
            type="number"
            minLength={1}
            maxLength={selectedVariant?.variant_stock ?? 0}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-24 text-center text-black bg-transparent"
            disabled
          />
          <button
            onClick={() => {
              if (quantity < (selectedVariant?.variant_stock ?? 0))
                setQuantity(quantity + 1);
            }}
          >
            <LuPlus />
          </button>
        </div>
      </div>
      <div className="my-5 w-full h-[1px] bg-white"></div>
      <div className="flex items-center gap-5 font-bold">
        <p className="min-w-20">Total</p>
        <span>{getFormatedPrice}</span>
      </div>
      <div className="mt-5">
        <div className="w-full h-full flex items-center justify-between gap-2.5">
          <Button handleClick={handleWishlist}>
            {wishlist ? (
              <FaHeart className="text-xl text-red transition-colors" />
            ) : (
              <FaRegHeart className="text-primary text-xl" />
            )}
          </Button>
          <div className="w-full flex items-center gap-2.5">
            <Button handleClick={() => {}} className="w-1/2">
              Buy Now
            </Button>
            <Button
              handleClick={() => {}}
              variant="green"
              className="w-1/2 flex items-center gap-2.5 justify-center"
            >
              {false ? (
                <Spinner
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              ) : (
                <>
                  <Image src={ShopingBag} alt="Cart Icon" />{" "}
                  <span>Add To Chart</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
