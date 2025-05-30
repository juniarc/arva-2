import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { formatDistanceToNow } from "date-fns";

interface ReviewItemProps {
  name: string;
  review: string;
  rating: number;
  date: string;
  imageUrl: string;
}
export default function ReviewItem({
  name,
  rating,
  date,
  review,
  imageUrl,
}: ReviewItemProps) {
  const dateTimeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
  return (
    <div className="border-solid border border-gray rounded-lg p-4 min-h-44">
      <div>
        <div className="flex items-center gap-2.5">
          <div className="size-6 aspect-square">
            <Image
              src={imageUrl}
              className="w-full h-full rounded-full object-cover object-center"
              width={24}
              height={24}
              alt="User's profile"
            />
          </div>
          <p className="font-semibold text-sm">{name}</p>
        </div>
        <div className="mt-2 flex items-center gap-2.5">
          <div className="flex items-center text-gray text-xs md:text-sm">
            <FaStar className={rating >= 1 ? "text-yellow" : ""} />
            <FaStar className={rating >= 2 ? "text-yellow" : ""} />
            <FaStar className={rating >= 3 ? "text-yellow" : ""} />
            <FaStar className={rating >= 4 ? "text-yellow" : ""} />
            <FaStar className={rating >= 5 ? "text-yellow" : ""} />
          </div>
          <p className="text-dark-gray text-xs md:text-sm">{dateTimeAgo}</p>
        </div>
      </div>
      <p className="text-xs mt-2.5 md:text-sm">{review}</p>
    </div>
  );
}
