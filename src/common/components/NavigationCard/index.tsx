import React, { useMemo, useState } from "react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { mergeCn } from "@/common/utils/classnames";
import { extendElement } from "@/common/utils/element";
import { ArrowButton, CornerShape } from "..";

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
    ...props
  }) => {
    const [isHover, setIsHover] = useState(false);
    const classNames = useMemo(() => {
      if (_classNames instanceof Function) {
        return _classNames(isHover);
      }
      return _classNames;
    }, [_classNames, isHover]);

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
