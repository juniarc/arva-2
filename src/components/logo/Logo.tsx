import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/../public/logos/logo.svg";
import LogoImageDesktop from "@/../public/logos/logo-green.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={LogoImage}
        alt="Arva Logo"
        className="md:w-[90px] w-[72px] h-auto lg:hidden"
        priority
      />
      <Image
        src={LogoImageDesktop}
        alt="Arva Logo"
        className="hidden lg:block lg:w-[106px] lg:min-w-[106px] h-auto"
        priority
      />
    </Link>
  );
}
