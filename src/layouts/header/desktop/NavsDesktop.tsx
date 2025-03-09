import IconTextLink from "@/components/links/IconTextLink";
import SearchBar from "./search-bar/SearchBar";
import CartNav from "./CartNav";
import UserNav from "./UserNav";
import { CiHeart, CiShop } from "react-icons/ci";

export default function NavsDesktop() {
  return (
    <>
      <SearchBar />
      <nav className="hidden lg:flex items-center gap-3 ml-auto">
        <IconTextLink href="/wishlist" icon={CiHeart} label="Wishlist" />

        <CartNav />
        <div className="w-[1px] h-4 bg-black"></div>
        <IconTextLink href="/my-shop" icon={CiShop} label="My Shop" />
        <UserNav />
      </nav>
    </>
  );
}
