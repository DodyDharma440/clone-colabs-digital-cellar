import React from "react";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";

type Position = "top" | "bottom" | "left" | "right";

type CornerShapeProps = {
  offsetIn?: Position;
  placement?: Position;
};

const CornerShape = extendElement<"svg", CornerShapeProps>(
  ({ className, offsetIn = "bottom", placement = "bottom", ...props }) => {
    const offsetClasses: Record<Position, string> = {
      top: "-top-[20px] md:-top-[30px]",
      bottom: "-bottom-[20px] md:-bottom-[30px]",
      left: "-left-[20px] md:-left-[30px]",
      right: "-right-[20px] md:-right-[30px]",
    };

    const placementClasses: Record<Position, string> = {
      top: "top-0",
      bottom: "bottom-0",
      left: "left-0",
      right: "right-0",
    };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={mergeCn(
          "text-body absolute w-[20px] md:w-[30px]",
          offsetClasses[offsetIn],
          placementClasses[placement],
          className
        )}
        viewBox="0 0 100 100"
        {...props}
      >
        <path
          d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  },
  "CornerShape"
);

export default CornerShape;
