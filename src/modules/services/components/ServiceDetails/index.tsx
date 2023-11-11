import React, { use, useEffect, useState } from "react";
import { Container } from "@/common/components";
import ServiceCard from "../ServiceCard";
import { serviceDetailsData as services } from "../../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { mergeCn } from "@/common/utils/classnames";

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");
      const spacer = 30;
      const minScale = 0.9;
      const distributor = gsap.utils.distribute({
        base: minScale,
        amount: 0.1,
      });

      cards.forEach((card: any, index) => {
        const scaleVal = distributor(index, cards[index], cards);

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top bottom-=100`,
            invalidateOnRefresh: true,
            scrub: true,
          },
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} 170`,
          endTrigger: "#service-scroll",
          end: "bottom 190",
          pin: true,
          pinSpacing: false,
          id: "pin",
          invalidateOnRefresh: true,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section">
      <Container className="relative">
        <div className="flex items-center justify-center gap-[5px] lg:gap-5 mx-auto sticky top-[120px] z-[2] mb-4">
          {services.map((service, index) => {
            return (
              <button
                className={mergeCn(
                  "md:py-[15px] md:px-[20px] px-[15px] py-[10px] rounded-full border text-xs md:text-[20px]"
                )}
                style={{
                  borderColor: service.bgColor
                    .replace("bg-[", "")
                    .replace("]", ""),
                }}
                key={index}
              >
                {service.name}
              </button>
            );
          })}
        </div>
        <div
          id="service-scroll"
          className="relative z-[1] flex flex-col gap-[500px]"
        >
          {services.map((service, index) => {
            return <ServiceCard service={service} key={index} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetails;
