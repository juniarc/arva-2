"use client";

import { useState } from "react";
import { FaStar, FaCircle } from "react-icons/fa6";
import ReviewItem from "./ReviewItem";
import MoreButton from "@/components/buttons/MoreButton";

interface ReviewItemProps {
  name: string;
  review: string;
  rating: number;
  date: string;
  imageUrl: string;
}
interface ReviewSectionProps {
  reviews: ReviewItemProps[];
}
export default function ReviewSection({ reviews }: ReviewSectionProps) {
  const [showMoreOpen, setShowMoreOpen] = useState<boolean>(false);
  const totalRating = (
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
  ).toFixed(1);

  const handleShowMoreButton = () => {
    setShowMoreOpen((prev) => !prev);
  };

  return (
    <div className="mt-8">
      <div>
        <h2>Product Reviews</h2>
        <div className="flex items-center text-xs md:text-sm gap-2.5 mt-3">
          <span className="flex items-center gap-1 text-sm text-black font-semibold">
            <FaStar className="text-yellow" /> {totalRating}
          </span>
          <p className="text-dark-gray ">from {reviews.length} ratings</p>
          <FaCircle className="text-[0.25rem] text-dark-gray " />
          <span className="text-dark-gray ">{reviews.length} reviews</span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 mt-3">
        {reviews
          .slice(0, showMoreOpen ? reviews.length : 1)
          .map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))}
      </div>
      <MoreButton
        handleShowMoreButton={handleShowMoreButton}
        showMoreOpen={showMoreOpen}
        text="reviews"
      />
    </div>
  );
}
