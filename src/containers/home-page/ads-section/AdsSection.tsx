import Image, { StaticImageData } from "next/image";
import dummyAdsPhoto from "@/../public/images/dummy-ads.jpg";
import Link from "next/link";

const adsData = [
  {
    image: dummyAdsPhoto,
    category: "fruit",
    teks: "Healty Fruits",
    href: "/products/fruit",
  },
  {
    image: dummyAdsPhoto,
    category: "fruit",
    teks: "Healty Fruits",
    href: "/products/fruit",
  },
  {
    image: dummyAdsPhoto,
    category: "fruit",
    teks: "Healty Fruits",
    href: "/products/fruit",
  },
];

interface AdsItemProps {
  image: StaticImageData;
  category: string;
  teks: string;
  href: string;
}
function AdsItem({ image, category, teks, href }: AdsItemProps) {
  return (
    <div className="relative w-80 min-w-80 md:w-[70vw] md:min-w-[40vw] lg:w-auto lg:min-w-fit flex items-center p-5">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        <Image
          src={image}
          width={350}
          height={126}
          alt={category}
          className="w-full h-full object-cover object-center rounded-lg"
          priority
        />
      </div>
      <div className="z-10">
        <h3>{teks}</h3>
        <p className="text-xs mb-5">Save up to 20%</p>
        <Link
          href={href}
          className="font-semibold bg-primary hover:bg-black transition-colors duration-300 text-white px-10 py-1 rounded"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default function AdsSection() {
  return (
    <section className="px-3 md:px-7 lg:px-0 mt-5 overflow-hidden">
      <div className="w-full flex flex-nowrap lg:grid lg:grid-cols-2 gap-3 overflow-x-scroll pb-1 no-scrollbar">
        {adsData.map((item, index) => (
          <AdsItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
