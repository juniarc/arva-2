import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { ProductDetail } from "@/types/types";
import uriHelpers from "@/utils/uriHelpers";
import Placeholder from "@/../public/images/dummy-photo-product.jpg";

export default function ShopInfo({
  shop_image,
  shop_name,
  shop_address_city,
  shop_id,
}: ProductDetail["shop"]) {
  const formatedShopNameToUrl = uriHelpers.formatStringForUrl(shop_name);
  return (
    <div className="w-full flex items-center justify-between lg:justify-normal lg:gap-20">
      <div className="flex items-center gap-2.5">
        <div className="size-16">
          <Image
            src={shop_image ? shop_image : Placeholder}
            width={60}
            height={60}
            alt="Shop Image"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="h-full">
          <h4 className="font-poppins font-bold capitalize mb-0.5">
            {shop_name}
          </h4>
          <span className="flex items-center text-xs md:text-sm gap-1 text-dark-gray capitalize mb-0.5">
            <FaLocationDot /> {shop_address_city}
          </span>
          <span className="flex items-center text-xs md:text-sm gap-1 text-dark-gray">
            <FaStar /> 3.4 (1000)
          </span>
        </div>
      </div>
      <Link
        href={`/${formatedShopNameToUrl}-${shop_id}`}
        className="bg-gray font-semibold text-xs md:text-sm py-1 px-2.5 rounded"
      >
        Visit
      </Link>
    </div>
  );
}
