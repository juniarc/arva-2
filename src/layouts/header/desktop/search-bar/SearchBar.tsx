"use client";

import { useSearch } from "@/actions/search";
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  const { inputValue, onInputChange, submitSearch } = useSearch();

  return (
    <div className="hidden lg:flex items-center max-w-[500px] w-full h-10">
      <input
        type="text"
        placeholder="Search Arva"
        className="w-full h-full text-dark-gray text-sm focus:outline-none border-solid border border-gray px-5 rounded-s-lg"
        value={inputValue}
        onChange={onInputChange}
      />
      <button
        onClick={submitSearch}
        className="aspect-square h-full px-3 bg-primary rounded-e-lg text-white flex items-center justify-center"
      >
        <LuSearch />
      </button>
    </div>
  );
}
