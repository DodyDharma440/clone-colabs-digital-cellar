import React, { useEffect, useMemo, useState } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";
import NavigationCardButton from "./Button";

type ChildCn = Partial<Record<"link" | "image" | "circleImage", string>>;

type NavigationCardProps = {
  imageUrl?: string;
  imageContainer?: "circle" | "fill";
  href?: string;
  linkProps?: Omit<
    JSX.IntrinsicElements["a"] & Omit<LinkProps, "href" | "className">,
    "ref" | "children"
  >;
  isSliderContent?: boolean;
  classNames?: ((isHover: boolean) => ChildCn) | ChildCn;
  isHover?: boolean;
};

const NavigationCard = extendElement<"div", NavigationCardProps>(
  ({
    className,
    imageUrl,
    href,
    linkProps,
    children,
    isSliderContent,
    imageContainer = "fill",
    classNames: _classNames,
    isHover: defaultIsHover,
    ...props
  }) => {
    const [isHover, setIsHover] = useState(defaultIsHover || false);
    const classNames = useMemo(() => {
      if (_classNames instanceof Function) {
        return _classNames(isHover);
      }
      return _classNames;
    }, [_classNames, isHover]);

    useEffect(() => {
      if (typeof defaultIsHover !== "undefined") {
        setIsHover(defaultIsHover);
      }
    }, [defaultIsHover]);

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
              <div
                className={mergeCn(
                  "mx-auto aspect-square bg-black relative h-full rounded-full overflow-hidden",
                  classNames?.circleImage
                )}
              >
                <Image
                  src={imageUrl}
                  fill
                  alt="Background"
                  className={mergeCn(
                    classNames?.image,
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
                className={mergeCn(classNames?.image, "object-cover")}
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

        <NavigationCardButton
          isHover={
            href || typeof defaultIsHover !== "undefined" ? isHover : undefined
          }
        />
      </div>
    );

    if (href) {
      return (
        <Link
          href={href}
          onMouseEnter={() =>
            typeof defaultIsHover === "undefined" ? setIsHover(true) : {}
          }
          onMouseLeave={() =>
            typeof defaultIsHover === "undefined" ? setIsHover(false) : {}
          }
          className={mergeCn("block", classNames?.link)}
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
