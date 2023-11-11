import React from "react";
import { Container, HeroVideo, NavigationCard } from "@/common/components";
import CountStats from "./CountStats";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <section className="section mt-[10px]">
      <Container className="h-auto md:h-[95vh] min-h-[630px]">
        <div className="flex flex-col md:flex-row items-center gap-3 h-full">
          <HeroVideo
            fileName="colabs-hero"
            title="Making space for transformative innovation"
          />

          <div className="md:w-[260px] w-full h-full gap-2 flex flex-col">
            <CountStats />
            <div className="flex flex-col gap-2 flex-1 min-h-[400px] md:min-h-[0px]">
              <NavigationCard
                href="#"
                classNames={{
                  link: "min-h-[170px] md:min-h-[140px] h-[46%] md:h-[40%] grid",
                  image: "transform scale-150",
                }}
                imageUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"
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
