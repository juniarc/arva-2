"use client";

import { Menu, MenuList, MenuHandler } from "@material-tailwind/react";
import { UserIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function UserNav() {
  const [open, setOpen] = useState(false);
  //   return (
  //     <button className="flex items-center justify-center gap-2 btn-hover py-1 px-3">
  //           <UserIcon className="size-5 md:size-[1.875rem]" />
  //           <span>Login</span>
  //         </button>
  //   )
  return (
    <Menu open={open} handler={setOpen} placement="bottom-end">
      <MenuHandler>
        <button className="flex items-center justify-center gap-2 btn-hover py-1 px-3 overflow-hidden max-w-40">
          <div className="size-8 min-w-8 min-h-8">
            <Image
              alt="User Avatar"
              className="w-full h-full min-h-full min-w-full object-cover object-center rounded-full"
              src="/images/dummy-photo-product.jpg"
              width={90}
              height={90}
            />
          </div>
          <span className="font-bold truncate">Usernawdawdawdame</span>
        </button>
      </MenuHandler>
      <MenuList
        className="p-5"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link
          href="8"
          className="flex items-center gap-3 rounded-lg py-2 px-3 btn-hover text-black"
        >
          <UserIcon className="size-5 md:size-[1.875rem]" />
          <span>My Profile</span>
        </Link>
        <button className="w-full flex items-center gap-3 rounded-lg py-2 px-3 btn-hover text-red mt-5">
          <ArrowUpTrayIcon className="size-5 md:size-[1.875rem] -rotate-90" />
          <span>Sign Out</span>
        </button>
      </MenuList>
    </Menu>
  );
}
