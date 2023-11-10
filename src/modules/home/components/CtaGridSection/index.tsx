import React from "react";
import { Container, NavigationCard } from "@/common/components";
import { extendElement } from "@/common/utils/element";
import { mergeCn } from "@/common/utils/classnames";

const TextContent = extendElement(({ children, className, ...props }) => {
  return (
    <div
      className={mergeCn("p-[24px] flex flex-col h-full justify-between")}
      {...props}
    >
      <p className="text-[24px] md:text-[34px] max-w-[500px] font-medium pr-[25px]">
        {children}
      </p>
    </div>
  );
}, "TextContent");

const CtaGridSection = () => {
  const cardClassName =
    "h-full relative px-[30px] py-[10px] md:py-[44px] !rounded-[20px]";

  return (
    <section className="pb-3">
      <Container>
        <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
          <div className="col-span-2 row-span-2 md:col-span-1">
            <NavigationCard
              className={mergeCn(cardClassName, "bg-saddle-brown")}
              href="#"
              classNames={{
                circleImage: "w-[60%] md:w-[55%]",
              }}
              imageUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/06/87591_river_flowing_downstream_over_rocks_By_Omri_Ohana_Artlist_HD-1.jpg"
              imageContainer="circle"
              isSliderContent
            >
              <TextContent>
                We believe biology is the future of technology
              </TextContent>
            </NavigationCard>
          </div>
          <div className="col-span-2 row-span-2 md:row-span-1 md:col-span-1">
            <NavigationCard
              className={cardClassName}
              classNames={(isHover) => ({
                image: mergeCn("transform transition-scale duration-300", {
                  ["scale-105"]: isHover,
                }),
                link: "h-[200px] md:h-full",
              })}
              href="#"
              imageUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/bigideas.jpg"
              isSliderContent
            >
              <TextContent>
                Join a thriving ecosystem that supports big ideas
              </TextContent>
            </NavigationCard>
          </div>
          <div className="col-span-2 row-span-2 md:row-span-1 md:col-span-1">
            <NavigationCard
              className={mergeCn(
                cardClassName,
                "bg-moss-green hover:bg-[#545423] transition-colors duration-300"
              )}
              classNames={{
                link: "h-[200px] md:h-full",
              }}
              href="#"
              isSliderContent
            >
              <TextContent>
                {
                  "We've helped launch ideas in less than a week -- let's collaborate"
                }
              </TextContent>
            </NavigationCard>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaGridSection;
