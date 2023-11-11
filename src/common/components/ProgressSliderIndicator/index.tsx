import React, { useEffect, useState } from "react";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";

type ProgressSliderIndicatorProps = {
  isActive: boolean;
  background?: string;
  duration: number;
  classNames?: {
    progress?: string;
  };
};

const ProgressSliderIndicator = extendElement<
  "button",
  ProgressSliderIndicatorProps
>(
  ({
    isActive: defaultActive,
    background = "bg-black",
    duration,
    className,
    classNames,
    ...props
  }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      setIsActive(defaultActive);
    }, [defaultActive]);

    return (
      <button
        className={mergeCn(
          "bg-opacity-30 rounded-full h-[6px] w-full overflow-hidden",
          background,
          className
        )}
        {...props}
      >
        <div className={mergeCn("w-full h-full", { ["opacity-0"]: !isActive })}>
          <div
            className={mergeCn(
              "bg-opacity-40 h-full transition-all",
              {
                ["w-full"]: isActive,
                ["w-0"]: !isActive,
              },
              background,
              classNames?.progress
            )}
            style={{
              transitionDuration: `${duration / 1000}s`,
            }}
          />
        </div>
      </button>
    );
  },
  "ProgressSliderIndicator"
);
export default ProgressSliderIndicator;
