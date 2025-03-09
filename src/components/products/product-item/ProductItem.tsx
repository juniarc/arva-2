"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import DummyPhoto from "@/../public/images/dummy-photo-product.jpg";
import Link from "next/link";
import { Product } from "@/types/types";
import uriHelpers from "@/utils/uriHelpers";
import { useMemo } from "react";

export default function ProductItem({
  product_id,
  product_name,
  image,
  category,
  discount,
  shop,
  ratings,
  sold,
  variant,
  product_type,
}: Product) {
  const firstImageUrl = useMemo(() => {
    const defaultUrl = DummyPhoto;

    const isValidUrl = (url: string) => {
      try {
        new URL(url); // Jika URL tidak valid, ini akan melempar error
        return true;
      } catch {
        return false;
      }
    };
    return typeof image?.[0] === "string" && isValidUrl(image[0])
      ? image[0]
      : defaultUrl;
  }, [image]);

  // State for AddToCartModal
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // Formated product and shop name for URL
  const formatedShopnameForUrl = uriHelpers.formatStringForUrl(
    shop.shop_name ?? "shop"
  );
  const formatedProductnameForUrl = uriHelpers.formatStringForUrl(product_name);

  // Formated price from first variant
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
  const formattedRatings = ratings
    ? parseFloat(parseFloat(ratings).toFixed(2))
    : 0;
  return (
    <div className="shadow-md w-48 md:w-56 h-80 md:h-96 min-w-48 md:min-w-56 lg:w-auto lg:h-80 lg:min-w-fit bg-white rounded-lg flex flex-col relative">
      {product_type === "organice" && (
        <div className="absolute top-0 right-0 pb-1 px-3 bg-secondary rounded-tr-lg rounded-bl-lg">
          <span className="capitalize text-xxs md:text-sm lg:text-xxs text-primary font-semibold">
            Organic
          </span>
        </div>
      )}
      <div className="w-full h-1/2 min-h-[50%] overflow-hidden relative">
        <Image
          src="https://fastly.picsum.photos/id/826/200/300.jpg?hmac=OsVdvGZW1U_-FFoJfJrFVB-9hw0tx1H9ZyEqEaA1W10"
          fill
          className="object-cover object-center rounded-t-lg"
          alt="Product Image"
          priority
        />
      </div>
      <div className="w-full h-full p-3 flex flex-col justify-between gap-1">
        <p className="text-dark-gray text-[0.5rem] md:text-xs lg:text-[0.5rem] capitalize desktop:text-xs">
          {category}
        </p>
        <div className=" min-h-[40.1px] flex items-center">
          <Link
            href={`/${formatedShopnameForUrl}-${shop.shop_id}/${formatedProductnameForUrl}-${product_id}`}
            className="text-sm md:text-base lg:text-sm line-clamp-2 capitalize hover:underline"
          >
            {product_name}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-semibold text-primary md:text-xl lg:text-base">
            {getFormatedPrice}
          </p>
          {discountValue && (
            <p className="text-red text-xs md:text-base lg:text-xs bg-light-red p-1">
              {discountValue.discount_value}%
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow text-xs md:text-base lg:text-xs" />
            <p className="text-xxs md:text-sm lg:text-xxs">
              {formattedRatings}
            </p>
          </div>
          <div className="h-auto">|</div>
          <p className="text-xxs md:text-sm lg:text-xxs">{sold} Sold</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-dark-gray">
          <FaLocationDot className="text-xxs md:text-sm lg:text-xxs" />
          <p className="capitalize text-xxs md:text-sm lg:text-xxs">
            {shop.shop_address_city}
          </p>
        </div>
      </div>
      <div className="absolute bottom-3 right-3">
        <button
          //   onClick={() => setIsOpen(true)}
          data-modal-target="addToCartModal"
          data-modal-toggle="addToCartModal"
          className="bg-secondary p-1 md:p-2 lg:p-1 rounded flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors ease-in"
        >
          <BsHandbag className="md:text-2xl" />
        </button>
        {/* <AddToCartModal
          isOpen={isOpen}
          handleCloseModal={() => setIsOpen(false)}
          {...{ product_id, product_name, category, variant, discount }}
          imageUrl={firstImageUrl}
          token={token}
          userId={userId}
        /> */}
      </div>
    </div>
  );
}
