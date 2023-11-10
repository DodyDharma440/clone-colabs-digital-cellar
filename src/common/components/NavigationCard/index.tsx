import React, { useState } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ArrowButton, CornerShape } from "..";

type NavigationCardProps = {
  imageUrl?: string;
  imageClassName?: string;
  imageContainer?: "circle" | "fill";
  href?: string;
  linkClassName?: string;
  linkProps?: Omit<
    JSX.IntrinsicElements["a"] & Omit<LinkProps, "href" | "className">,
    "ref" | "children"
  >;
  isSliderContent?: boolean;
};

const NavigationCard = extendElement<"div", NavigationCardProps>(
  ({
    className,
    imageUrl,
    href,
    linkProps,
    linkClassName,
    children,
    imageClassName,
    isSliderContent,
    imageContainer = "fill",
    ...props
  }) => {
    const [isHover, setIsHover] = useState(false);

    const content = (
      <div
        className={mergeCn(
          "rounded-t-primary rounded-bl-primary relative text-white text-[20px] md:text-[26px] font-medium overflow-hidden",
          className,
          {
            ["h-full"]: href,
          }
        )}
        {...props}
      >
        {imageUrl ? (
          <>
            {imageContainer === "circle" ? (
              <div className="mx-auto w-[90%] md:w-[60%] aspect-square bg-black relative h-full rounded-full overflow-hidden">
                <Image
                  src={imageUrl}
                  fill
                  alt="Background"
                  className={mergeCn(
                    imageClassName,
                    "object-cover transform transition-transform duration-300",
                    {
                      ["scale-110"]: isHover,
                    }
                  )}
                />
              </div>
            ) : (
              <Image
                src={imageUrl}
                fill
                alt="Background"
                className={mergeCn(imageClassName, "object-cover")}
              />
            )}
          </>
        ) : null}

        <div
          className={mergeCn("p-5 w-full h-full z-[2] absolute inset-0", {
            ["p-0"]: isSliderContent,
          })}
        >
          {children}
        </div>

        <div className="pl-[10px] pt-[10px] bg-body absolute bottom-0 right-0 rounded-tl-primary z-[3]">
          <CornerShape
            offsetIn="top"
            placement="right"
            className="transform rotate-180 md:w-[20px] md:-top-[20px]"
          />
          <CornerShape
            offsetIn="left"
            placement="bottom"
            className="transform rotate-180 md:w-[20px] md:-left-[20px]"
          />
          <ArrowButton isHovered={href ? isHover : undefined} />
        </div>
      </div>
    );

    if (href) {
      return (
        <Link
          href={href}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={mergeCn("grid", linkClassName)}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }
    return content;
  },
  "NavigationCard"
);

export default NavigationCard;
