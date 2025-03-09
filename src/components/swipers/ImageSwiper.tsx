"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ImageSwiper.module.css";
import Image from "next/image";
import Link from "next/link";
import dummyBanner1 from "@/../public/images/dummy-banner.jpg";
import dummyBanner2 from "@/../public/images/dummy-banner-2.jpg";
import dummyBanner3 from "@/../public/images/dummy-banner-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function ImageSwiper() {
  const heroImages = [dummyBanner1, dummyBanner2, dummyBanner3];

  return (
    <div className="w-full">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        loop={true}
        className={`${styles.swiperActive}`}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href="/">
              <div className="w-full aspect-video relative">
                <Image
                  src={image}
                  className="object-cover object-center rounded-lg"
                  alt="Banner"
                  priority
                  fill
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
