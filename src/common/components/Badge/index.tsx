import React from "react";
import { extendElement } from "@/common/utils/element";
import { mergeCn } from "@/common/utils/classnames";

type BadgeVariant = "outline" | "fill";

type BadgeProps = {
  variant?: BadgeVariant;
  color?: string;
};

const Badge = extendElement<"div", BadgeProps>(
  ({ className, children, variant = "outline", color, ...props }) => {
    return (
      <div
        className={mergeCn(
          "rounded-full px-[10px] py-[5px] border font-light w-fit",
          className,
          {
            ["border-gray-800 text-gray-800 bg-transparent"]:
              variant === "outline",
            [`${color}`]: variant === "fill",
          }
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
  "Badge"
);

export default Badge;
