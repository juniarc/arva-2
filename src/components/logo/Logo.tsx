import Image from "next/image";
import Link from "next/link";

export default function Logo({ image }: { image: string }) {
  return (
    <Link href="/">
      <Image
        src={image}
        alt="Arva Logo"
        className="md:w-[90px] w-[72px] lg:w-[106px] lg:min-w-[106px] h-auto"
        priority
      />
    </Link>
  );
}
