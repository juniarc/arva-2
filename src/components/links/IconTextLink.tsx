import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { createElement } from "react";

interface CategoryLinkProps {
  href: string;
  icon: IconType | StaticImageData;
  label: string;
  className?: string;
}

export default function IconTextLink({
  href,
  icon,
  label,
  className,
}: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className="btn-hover flex items-center gap-2 py-1 px-3 rounded-lg text-nowrap"
    >
      {typeof icon === "object" ? (
        <Image src={icon} className="size-5 md:size-[1.875rem]" alt={label} />
      ) : (
        createElement(icon, {
          className: `text-xl md:text-3xl text-black ${className}`,
        })
      )}
      <p>{label}</p>
    </Link>
  );
}
