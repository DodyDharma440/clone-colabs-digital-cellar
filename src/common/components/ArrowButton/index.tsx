import React, { useEffect, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { extendElement } from "@/common/utils/element";
import { mergeCn } from "@/common/utils/classnames";

type ArrowButtonProps = {
  isHovered?: boolean;
};

const ArrowButton = extendElement<"button", ArrowButtonProps>(
  ({ className, isHovered: defaultHover, ...props }) => {
    const [isHover, setIsHover] = useState(defaultHover || false);

    useEffect(() => {
      if (typeof defaultHover !== "undefined") {
        setIsHover(defaultHover);
      }
    }, [defaultHover]);

    return (
      <button
        className={mergeCn("rounded-full bg-black p-4 text-white", className)}
        onMouseEnter={() => {
          if (typeof defaultHover === "undefined") setIsHover(true);
        }}
        onMouseLeave={() => {
          if (typeof defaultHover === "undefined") setIsHover(false);
        }}
        {...props}
      >
        <HiOutlineArrowRight
          className={mergeCn(
            "transform transition-all duration-300 text-base",
            {
              ["scale-[1.4] -rotate-[25deg]"]: isHover,
            }
          )}
        />
      </button>
    );
  },
  "ArrowButton"
);

export default ArrowButton;
