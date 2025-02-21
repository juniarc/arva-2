"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSearch } from "@/actions/search";

gsap.registerPlugin(useGSAP);

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const { inputValue, onInputChange, submitSearch } = useSearch();

  const [isReady, setIsReady] = useState(false);

  useGSAP(
    () => {
      if (isReady) {
        const tl = gsap.timeline({ paused: true });

        tl.fromTo(
          bgRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          }
        );

        tl.fromTo(
          ref.current,
          {
            translateY: "-100%",
          },
          {
            translateY: "0",
            duration: 0.5,
            ease: "power2.out",
          },
          0
        );
        if (isOpen) tl.play();
        else tl.reverse(1);
      }

      setIsReady(true);
    },
    { dependencies: [isOpen] }
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);
  return (
    <div
      ref={bgRef}
      className="absolute top-full left-0 opacity-0 w-screen h-screen pointer-events-none z-[9995] bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div
        className={`overflow-hidden border-t border-t-white ${!isOpen && "pointer-events-none"}`}
      >
        <div
          ref={ref}
          className="w-screen tablet:h-[114px] px-5 py-3 tablet:py-10 bg-dark-green"
        >
          <div className="w-full h-full bg-white rounded flex items-center justify-between gap-6 py-2 px-3">
            <input
              type="text"
              placeholder="Search Arva"
              className="w-full h-full text-dark-gray text-sm md:text-base focus:outline-none"
              value={inputValue}
              onChange={onInputChange}
            />
            <button
              onClick={submitSearch}
              className="p-1 bg-primary rounded text-white flex items-center justify-center"
            >
              <LuSearch className="text-lg md:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
