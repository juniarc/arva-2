import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";
import { CiHeart, CiShop } from "react-icons/ci";
import LogoImage from "@/../public/logos/logo-green.svg";
import Logo from "@/components/logo/Logo";
import SearchBar from "./search-bar/SearchBar";
import IconTextLink from "@/components/links/IconTextLink";
import CartNav from "./CartNav";
import UserNav from "./UserNav";

export default function HeaderDesktop() {
  return (
    <div>
      <div className="w-full flex items-center gap-5 justify-end bg-primary text-white lg:px-20 2xl:px-32 py-1">
        <p className="text-white">Languange</p>
        <div className="w-[1px] h-3 bg-white"></div>
        <p className="text-white">Bulk Order Inquiries</p>
        <div className="w-[1px] h-3 bg-white"></div>
        <div className="flex items-center gap-5">
          <p className="text-white">Follow Us on</p>
          <div className="flex items-center gap-3">
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaTiktok />
          </div>
        </div>
        <div className="w-[1px] h-3 bg-white"></div>
        <p className="text-white">Help Center</p>
      </div>
      <header className="header-desktop w-full h-[86px] bg-white">
        <div className="w-full h-full flex items-center justify-between lg:px-20 2xl:px-32 gap-5">
          <Logo image={LogoImage} classname="w-[106px] min-w-[106px]" />
          <SearchBar />
          <div className="flex items-center gap-3 ml-auto">
            <IconTextLink href="/wishlist" icon={CiHeart} label="Wishlist" />

            <CartNav />
            <div className="w-[1px] h-4 bg-black"></div>
            <IconTextLink href="/my-shop" icon={CiShop} label="My Shop" />
            <UserNav />
          </div>
        </div>
      </header>
    </div>
  );
}
