import React, { useState } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";
import { HiOutlineArrowRight } from "react-icons/hi";
import { CornerShape } from "..";

type NavigationCardProps = {
  imageUrl?: string;
  imageClassName?: string;
  href?: string;
  linkClassName?: string;
  linkProps?: Omit<
    JSX.IntrinsicElements["a"] & Omit<LinkProps, "href" | "className">,
    "ref" | "children"
  >;
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
    ...props
  }) => {
    const [isHover, setIsHover] = useState(false);

    const content = (
      <div
        className={mergeCn("rounded-primary relative text-white", className, {
          ["h-full"]: href,
        })}
        {...props}
      >
        {imageUrl ? (
          <div className="absolute inset-0 overflow-hidden rounded-primary z-[1]">
            <Image
              src={imageUrl}
              fill
              objectFit="cover"
              alt="Background"
              className={imageClassName}
              loader={({ src }) => src}
            />
          </div>
        ) : null}

        <div className="px-5 py-4 w-full h-full z-[2] relative">{children}</div>

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
          <button
            className="rounded-full bg-black p-4 text-white"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <HiOutlineArrowRight
              className={mergeCn("transform transition-all duration-300", {
                ["scale-[1.4] -rotate-[25deg]"]: isHover,
              })}
            />
          </button>
        </div>
      </div>
    );

    if (href) {
      return (
        <Link
          href={href}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={linkClassName}
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
