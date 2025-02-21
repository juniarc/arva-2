"use client";

import { Drawer } from "@material-tailwind/react";
import Image from "next/image";
import dummyPhoto from "@/../public/images/dummy-photo-product.jpg";
import Link from "next/link";
import LineDivider from "@/components/dividers/LineDivider";
import { useScreenSizeContext } from "@/providers/ScreenSizeProvider";
import CloseButton from "@/components/buttons/CloseButton";

const CartItem = () => {
  return (
    <>
      <div className="w-full flex gap-2 md:gap-5 items-start">
        <div className="size-[35%] md:size-16 md:min-w-16 aspect-square overflow-hidden">
          <Image
            src={dummyPhoto}
            alt="Product Image"
            className="w-full h-full object-cover object-center rounded"
          />
        </div>
        <div className="text-xxs w-full overflow-hidden">
          <p className="max-w-full truncate capitalize text-black md:text-sm">
            Product
          </p>
          <p className=" text-dark-gray truncate capitalize md:text-sm">
            Variant Name
          </p>
          <p className="font-bold text-black truncate md:text-sm">
            1 x Rp. 2000
          </p>
        </div>
      </div>
      <LineDivider classname="mt-3" />
    </>
  );
};

export default function CartDrawer({
  isOpen,
  onCloseDrawer,
}: {
  isOpen: boolean;
  onCloseDrawer: () => void;
}) {
  const { deviceType } = useScreenSizeContext();

  const size =
    deviceType === "mobile" ? 219 : deviceType === "tablet" ? 414 : 600;
  return (
    <Drawer
      open={isOpen}
      onClose={onCloseDrawer}
      placement="right"
      size={size}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="w-full h-full relative">
        <CloseButton onClose={onCloseDrawer} />
        <div className="px-5 pt-12 md:pt-20 pb-5">
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-2 text-black">
              <h3 className="leading-none text-primary">Cart</h3>
              <span className="text-xxxs md:text-xs">(02)</span>
            </div>
            <Link
              href="*"
              className="text-xxs md:text-base text-dark-green underline font-bold"
            >
              See
            </Link>
          </div>
          <LineDivider classname="my-3" />
          <div className="flex flex-col">
            <CartItem />
          </div>
        </div>
      </div>
    </Drawer>
  );
}
