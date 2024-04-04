import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface Props {
  className?: string;
}
const Search = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center basis-[70%]">
        <MagnifyingGlass className="translate-x-9 " />
        <input
          type="search"
          placeholder="Search for cities or particular school"
          className="w-full h-10 p-2 border-2 border-gray-300 outline-none indent-8"
        />
      </div>
      <button className="block h-10 px-4 py-2 text-white text-ellipsis sm:px-8 bg-primary">
        Find
      </button>
    </div>
  );
};

export default Search;
