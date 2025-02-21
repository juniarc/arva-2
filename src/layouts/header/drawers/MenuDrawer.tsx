"use client";

import { Drawer } from "@material-tailwind/react";
import Image from "next/image";
import { CiShop } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import LineDivider from "@/components/dividers/LineDivider";
import CloseButton from "@/components/buttons/CloseButton";
import CategoryLink from "@/components/links/CategoryLink";
import { categoryData } from "@/services/fixed-data/fixedData";

export default function Sidebar({
  isOpen,
  onCloseDrawer,
}: {
  isOpen: boolean;
  onCloseDrawer: () => void;
}) {
  return (
    <Drawer
      open={isOpen}
      onClose={onCloseDrawer}
      placement="right"
      size={250}
      transition={{ type: "tween", duration: 0.3 }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="w-full h-full bg-white relative">
        <CloseButton onClose={onCloseDrawer} color="text-white" />
        <div className="w-full bg-dark-green px-5 pt-12 pb-5 flex items-center gap-5">
          <div className="size-[60px] md:size-20">
            <Image
              src="/images/dummy-photo-product.jpg"
              className="w-full h-full rounded-full object-cover object-center"
              width={40}
              height={40}
              alt="User Avatar"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-base md:text-xl font-bold text-white truncate">
              Username
            </p>
            <p className="text-xxs md:text-xxs font-extralight text-white truncate">
              email@example.com
            </p>
          </div>
        </div>
        <div className="py-5 px-3">
          <div className="h-full">
            <h3 className="leading-none mb-5 px-2 text-primary">Categories</h3>
            <LineDivider />
            <div className="flex flex-col gap-2 items-start mt-3">
              {categoryData.map((item) => (
                <CategoryLink
                  key={item.id}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
              <LineDivider />
              <CategoryLink href="/my-shop" icon={CiShop} label="My Shop" />
              <LineDivider />
              <CategoryLink href="/login" icon={CiUser} label="Sign In" />
              <LineDivider />

              {/* {isLogin && (
            <button onClick={handleLogout} className="flex items-center gap-8 mt-auto text-red">
              <AiOutlineLogout className="text-xl tablet:text-[2rem]" />
              <p>Log Out</p>
            </button>
          )} */}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
