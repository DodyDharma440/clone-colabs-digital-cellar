import React from "react";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";

const Container = extendElement(({ className, children, ...props }) => {
  return (
    <div
      className={mergeCn(
        className,
        "max-w-[1800px] px-[10px] sm:px-5 lg:px-[40px] mx-auto"
      )}
      {...props}
    >
      {children}
    </div>
  );
}, "Container");

export default Container;
