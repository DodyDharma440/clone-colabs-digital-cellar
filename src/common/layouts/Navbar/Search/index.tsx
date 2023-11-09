import React, { useState, useRef } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { mergeCn } from "@/common/utils/classnames";

type NavbarSearchProps = {
  fixedOpen?: boolean;
};

const NavbarSearch: React.FC<NavbarSearchProps> = ({ fixedOpen = false }) => {
  const [isOpen, setIsOpen] = useState(fixedOpen);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex justify-end">
      <input
        ref={inputRef}
        className={mergeCn(
          "bg-body bg-opacity-80 shadow-linear backdrop-blur-md rounded-full focus:outline-none absolute px-5 py-3 -right-2 -top-2 -bottom-2 transition-all duration-700 pr-16",
          {
            ["w-[320px] opacity-1"]: isOpen && !fixedOpen,
            ["w-[101%] opacity-1"]: isOpen && fixedOpen,
            ["w-[100px] opacity-0"]: !isOpen,
          }
        )}
        placeholder="Search here..."
      />
      <button
        onClick={() => {
          if (!fixedOpen) {
            setIsOpen((prev) => {
              const nextState = !prev;
              if (nextState) {
                inputRef.current?.focus();
              }
              return nextState;
            });
          }
        }}
        className="bg-body bg-opacity-70 backdrop-blur-md p-2 rounded-full flex items-center justify-center shadow-linear"
      >
        <LiaSearchSolid size={24} />
      </button>
    </div>
  );
};

export default NavbarSearch;
