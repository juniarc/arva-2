import ImageSwiper from "@/components/swipers/ImageSwiper";
import Image, { StaticImageData } from "next/image";
import dummyBanner1 from "@/../public/images/dummy-banner.jpg";
import dummyBanner2 from "@/../public/images/dummy-banner-2.jpg";

const AdImage = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="w-full aspect-video overflow-hidden">
      <Image
        src={image}
        className="w-full h-full object-cover object-center rounded-lg"
        alt="Ad Image"
        priority
        placeholder="blur"
        sizes="100%"
      />
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="lg:px-20 2xl:px-32 flex items-center lg:gap-5 overflow-hidden">
      <div className="w-screen lg:w-2/3 p-3 md:p-7 lg:p-0">
        <ImageSwiper />
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-between gap-5 lg:w-1/3">
        <AdImage image={dummyBanner1} />
        <AdImage image={dummyBanner2} />
      </div>
    </section>
  );
}
