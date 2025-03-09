import React, { createElement } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CiCoffeeBean } from "react-icons/ci";
import SpinachIcon from "@/../public/icons/spinach-icon.svg";
import FruitsIcon from "@/../public/icons/fruits-icon.svg";
import FertilizersIcon from "@/../public/icons/fertilizer-icon.svg";
import EquipmentsIcon from "@/../public/icons/gardening-icon.svg";
import { IconType } from "react-icons";

const categoryData = [
  {
    id: 1,
    href: "/products/seeds",
    icon: CiCoffeeBean,
    label: "Seeds",
  },
  {
    id: 2,
    href: "/products/vegetables",
    icon: SpinachIcon,
    label: "Vegetables",
  },
  {
    id: 3,
    href: "/products/fruits",
    icon: FruitsIcon,
    label: "Fruits",
  },
  {
    id: 4,
    href: "/products/fertilizers",
    icon: FertilizersIcon,
    label: "Fertilizers",
  },
  {
    id: 5,
    href: "/products/equipments",
    icon: EquipmentsIcon,
    label: "Equipments",
  },
];

function IconTextLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconType | StaticImageData;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="aspect-square flex flex-col items-center justify-center bg-secondary gap-1 md:gap-2 p-1 rounded-lg text-nowrap w-auto hover:bg-secondary/50 transition-colors duration-300"
    >
      {typeof icon === "object" ? (
        <Image src={icon} className="size-5 md:size-[2.25rem]" alt={label} />
      ) : (
        createElement(icon, { className: "text-xl md:text-4xl text-black" })
      )}
      <p className="text-[2.2vw]">{label}</p>
    </Link>
  );
}

export default function HomeCategories() {
  return (
    <div className="lg:hidden w-full px-3 md:px-7">
      <div className="w-full h-full grid grid-cols-5 gap-1 sm:gap-5 md:gap-3 items-center justify-center rounded-lg shadow-lg bg-white p-3 md:p-5">
        {categoryData.map((item) => (
          <IconTextLink
            key={item.id}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}
