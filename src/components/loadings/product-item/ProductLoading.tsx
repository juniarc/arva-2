"use client";

import { useScreenSizeContext } from "@/providers/ScreenSizeProvider";

export default function ProductLoading() {
  const { deviceType } = useScreenSizeContext();
  const skeletonCount =
    deviceType === "mobile" ? 2 : deviceType === "tablet" ? 6 : 8;
  return (
    <div className="mt-3 flex flex-nowrap lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-3 overflow-x-scroll pb-1 no-scrollbar">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div
          key={index}
          className="shadow-md w-48 md:w-56 h-80 md:h-96 min-w-48 md:min-w-56 lg:w-auto lg:h-80 lg:min-w-fit bg-white rounded-lg flex flex-col relative"
        >
          <div className="w-full h-1/2 bg-gray animate-pulse"></div>
          <div className="w-full h-full p-3 flex flex-col justify-between gap-1">
            <div className="bg-gray w-20 h-3 animate-pulse rounded mb-1"></div>
            <div className="bg-gray w-full h-4 animate-pulse rounded mb-7"></div>
            <div className="bg-gray w-30 h-3 animate-pulse rounded mb-1"></div>
            <div className="bg-gray w-24 h-4 animate-pulse rounded mb-1"></div>
            <div className="bg-gray w-15 h-4 animate-pulse rounded mb-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
