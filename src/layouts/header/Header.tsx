"use client";

import Logo from "@/components/logo/Logo";
import Navs from "./Navs";
import HeaderSecondary from "./desktop/HeaderSecondary";
import NavsDesktop from "./desktop/NavsDesktop";

export default function Header() {
  return (
    <>
      <HeaderSecondary />
      <header className="w-full h-fit lg:h-[86px] sticky inset-0 bg-dark-green lg:bg-white z-50">
        <div className="w-full lg:h-full flex items-center justify-between py-3 px-5 md:px-7 lg:px-20 2xl:px-32 lg:gap-5 relative">
          <Logo />
          <Navs />
          <NavsDesktop />
        </div>
      </header>
    </>
  );
}
