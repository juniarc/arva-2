"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { ProductDetail } from "@/types/types";

export default function ImagesSection({
  image,
}: {
  image: ProductDetail["image"];
}) {
  const [selectedImage, setSelectedImage] = useState(image[0].image_data);
  const handleSelectImage = (image_data: string) => {
    setSelectedImage(image_data);
  };
  return (
    <div className="w-full md:px-[150px] lg:px-0">
      <div className="w-full aspect-square">
        <Image
          src={selectedImage}
          width={300}
          height={300}
          className="w-full h-full object-cover object-center lg:rounded-lg"
          alt="Product Image"
          priority
          quality={100}
        />
      </div>
      <div className="w-auto max-w-full overflow-x-scroll flex justify-center gap-2.5 mt-2.5 md:mt-8 lg:mt-5 px-5">
        {image.map((item, index) => (
          <button
            onClick={() => handleSelectImage(item.image_data)}
            key={index}
            className="w-[60px] md:w-[80px] aspect-square rounded"
          >
            <Image
              src={item.image_data}
              width={60}
              height={60}
              className={`w-full h-full object-cover object-center rounded ${selectedImage === item.image_data && "border-2 border-solid border-primary"}`}
              alt="Product Image"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
