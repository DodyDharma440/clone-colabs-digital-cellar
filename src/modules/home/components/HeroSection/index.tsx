import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";
import { Container, CornerShape } from "@/common/components";

const HeroSection = () => {
  return (
    <section>
      <Container className="h-[95vh] min-h-[630px] mt-[10px] mb-20">
        <div className="flex flex-col md:flex-row items-center gap-3 h-full">
          <div className="relative w-full h-full rounded-tr-primary rounded-tl-primary rounded-br-primary overflow-hidden">
            <video
              src="/assets/hero/colabs-hero.mp4"
              loop
              autoPlay
              playsInline
              muted
              className="absolute w-full h-full inset-0 object-cover"
            ></video>
            <div className="bg-body absolute bottom-0 left-0 right-1/2 pt-5 pr-5 rounded-tr-primary">
              <CornerShape
                offsetIn="top"
                placement="left"
                className="transform -rotate-90"
              />
              <CornerShape
                offsetIn="right"
                placement="bottom"
                className="transform -rotate-90"
              />
              <h1 className="text-[60px] leading-[66px] tracking-tighter font-medium">
                Making space for transformative innovation
              </h1>

              <button className="p-4 border border-solid border-black rounded-full mx-[10px] mb-[10px] mt-8 [&>svg]:transform [&>svg]:hover:scale-[1.4]">
                <HiOutlineArrowDown className="transition-all duration-200" />
              </button>
            </div>
          </div>
          <div className="md:w-[320px] w-full"></div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
