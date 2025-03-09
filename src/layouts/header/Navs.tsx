"use client";

import { FiMenu, FiSearch } from "react-icons/fi";
import { Suspense, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import CartDrawer from "./drawers/CartDrawer";
import IconButton from "@/components/buttons/IconButton";
import MenuDrawer from "./drawers/MenuDrawer";
import SearchDrawer from "./drawers/SearchDrawer";

export default function Navs() {
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isCartbarOpen, setCartbarOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const openCartbar = () => setCartbarOpen(true);
  const closeCartbar = () => setCartbarOpen(false);

  const openSearchbar = () => {
    setSearchbarOpen(!isSearchbarOpen);
  };
  return (
    <nav className="lg:hidden">
      <ul className="flex items-start gap-5 text-white">
        <li>
          <IconButton
            onClick={openSearchbar}
            label="Search nav"
            Icon={FiSearch}
          />
          <Suspense>
            <SearchDrawer
              isOpen={isSearchbarOpen}
              onClose={() => setSearchbarOpen(false)}
            />
          </Suspense>
        </li>
        <li>
          <IconButton onClick={openCartbar} label="Cart nav" className="">
            <span className="absolute top-0 right-0 bg-red rounded-full align-middle text-center text-[0.5rem] md:text-xs leading-none py-[2px] px-[4px] md:p-1 md:px-2">
              1
            </span>
            <BsHandbag className="text-lg md:text-3xl" />
          </IconButton>
          <div className="w-screen h-screen fixed inset-0 bg-transparent pointer-events-none z-10">
            <CartDrawer isOpen={isCartbarOpen} onCloseDrawer={closeCartbar} />
          </div>
        </li>
        <li>
          <IconButton onClick={openDrawer} label="Search nav" Icon={FiMenu} />
          <div className="w-screen h-screen fixed inset-0 bg-transparent pointer-events-none z-10">
            <MenuDrawer isOpen={isDrawerOpen} onCloseDrawer={closeDrawer} />
          </div>
        </li>
      </ul>
    </nav>
  );
}
