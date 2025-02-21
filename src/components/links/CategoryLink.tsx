import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { createElement } from "react";

interface CategoryLinkProps {
  href: string;
  icon: IconType | StaticImageData;
  label: string;
}

export default function CategoryLink({ href, icon, label }: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 btn-hover p-2 rounded-lg w-full"
    >
      {typeof icon === "object" ? (
        <Image src={icon} className="size-5 md:size-[1.875rem]" alt={label} />
      ) : (
        createElement(icon, { className: "text-xl md:text-3xl text-black" })
      )}
      <p>{label}</p>
    </Link>
  );
}
