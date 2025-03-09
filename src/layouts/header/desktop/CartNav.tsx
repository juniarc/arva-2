"use client";

import { BsHandbag } from "react-icons/bs";
import { Menu, MenuList, MenuHandler } from "@material-tailwind/react";
import LineDivider from "@/components/dividers/LineDivider";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CartNav() {
  const [open, setOpen] = useState(false);
  return (
    <Menu open={open} handler={setOpen} placement="bottom-end">
      <MenuHandler>
        <button className="flex items-center justify-center gap-2 rounded-lg py-1 px-3 btn-hover">
          <span className="w-full h-full relative">
            <BsHandbag className="text-lg md:text-3xl lg:text-2xl text-black" />
            <span className="absolute top-0 right-0 min-w-3 min-h-3 bg-red text-white rounded align-middle text-center text-xxs">
              1
            </span>
          </span>
          <span>Cart</span>
        </button>
      </MenuHandler>
      <MenuList
        className="min-w-[29rem] max-w-[300px]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="w-full h-full py-5">
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-2 px-5">
              <h3>Cart</h3>
              <span className="text-black">(01)</span>
            </div>
            <Link href="*" className="text-primary underline font-bold">
              See All
            </Link>
          </div>
          <LineDivider classname="my-3 px-5" />
          <div>
            <div className="w-full flex justify-between items-center max-w-full btn-hover cursor-pointer px-3 py-2">
              <div className="flex gap-2 items-center overflow-hidden">
                <div className="size-12">
                  <Image
                    alt="Product Image"
                    src="/images/dummy-photo-product.jpg"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover object-center rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden w-[70%]">
                  <p className="truncate">
                    Banana Fruits f ali awdadaawdawdadwadawwd
                  </p>
                  <p className="font-light truncate">Variant Name</p>
                </div>
              </div>
              <p className="font-bold text-nowrap">1 x Rp. 2000</p>
            </div>
            <LineDivider classname="my-3" />
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
