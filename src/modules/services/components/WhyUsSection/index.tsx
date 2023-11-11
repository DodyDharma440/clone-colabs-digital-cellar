import React from "react";
import { Badge, Container } from "@/common/components";
import { whyColabsData } from "../../constants";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section className="section">
      <Container>
        <h3 className="max-w-[950px] font-medium my-10 md:my-20">
          By facilitating systems innovation we believe we can generate social,
          economic and environmental outcomes that will benefit the health and
          well-being of people and the planet.
        </h3>

        <div className="lg:px-10">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full mb-[30px] lg:mb-0 lg:w-[200px]">
              <Badge>Why CoLabs</Badge>
            </div>
            <div className="grid grid-cols-3 w-full gap-[10px]">
              {whyColabsData.map((item, index) => {
                return (
                  <div
                    className="col-span-3 flex flex-row-reverse gap-5 lg:gap-0 lg:flex-col lg:col-span-1 rounded-[20px] p-5 bg-white border border-gray-300"
                    key={index}
                  >
                    <div className="w-full flex-1">
                      <h4 className="mb-[5px] lg:mb-[15px] tracking-tighter max-w-[260px] font-medium">
                        {item.title}
                      </h4>
                      <div className="lg:mb-[50px] font-light tracking-[0.1px]">
                        {item.description}
                      </div>
                    </div>

                    <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[40px] relative">
                      <Image
                        src={item.image}
                        fill
                        className="object-contain"
                        alt={`${item.title} Icon`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
