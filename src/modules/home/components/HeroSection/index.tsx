import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";
import { Container, CornerShape, NavigationCard } from "@/common/components";
import CountStats from "./CountStats";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <section className="section mt-[10px]">
      <Container className="h-auto md:h-[95vh] min-h-[630px]">
        <div className="flex flex-col md:flex-row items-center gap-3 h-full">
          <div className="h-[500px] relative w-full md:h-full rounded-tr-primary rounded-tl-primary rounded-br-primary overflow-hidden">
            <video
              src="/assets/hero/colabs-hero.mp4"
              loop
              autoPlay
              playsInline
              muted
              className="absolute w-full h-full inset-0 object-cover"
            ></video>
            <div className="bg-body absolute bottom-0 left-0 right-1/3 md:right-1/2 pt-5 pr-5 rounded-tr-primary">
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
              <h1 className="text-[42px] md:text-[60px] tracking-tighter">
                Making space for transformative innovation
              </h1>

              <button className="p-4 hidden md:block border border-solid border-black rounded-full mx-[10px] mb-[10px] mt-8 [&>svg]:transform [&>svg]:hover:scale-[1.4]">
                <HiOutlineArrowDown className="transition-all duration-200" />
              </button>
            </div>
          </div>
          <div className="md:w-[260px] w-full h-full gap-2 flex flex-col">
            <CountStats />
            <div className="flex flex-col gap-2 flex-1 min-h-[400px] md:min-h-[0px]">
              <NavigationCard
                href="#"
                linkClassName="min-h-[170px] md:min-h-[140px] h-[46%] md:h-[40%]"
                imageUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"
                imageClassName="transform scale-150"
              >
                <p>Join the Lab</p>
              </NavigationCard>
              <NavigationCard
                className="min-h-[160px] flex-1 bg-bright-green"
                isSliderContent
              >
                <HeroSlider />
              </NavigationCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
