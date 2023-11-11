import React from "react";
import { Container, HeroVideo } from "@/common/components";

const HeroSection = () => {
  return (
    <section className="section mt-[10px]">
      <Container className="h-auto md:h-[95vh] min-h-[630px]">
        <HeroVideo
          fileName="lab-vortex"
          title="Co-Labs gives people a place to experiment and create"
          extraTitleSpace
        />
      </Container>
    </section>
  );
};

export default HeroSection;
