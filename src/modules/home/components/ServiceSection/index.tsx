import { Container, NavigationCard } from "@/common/components";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { mergeCn } from "@/common/utils/classnames";
import { servicesData } from "../../constants";

const ServiceSection = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <>
      <section className="my-10 md:my-20">
        <Container>
          <div className="md:px-10">
            <h2 className="max-w-[860px] tracking-tighter text-[34px] md:text-[54px]">
              We design, build and run collaborative spaces where bio-led
              science, technology and people can thrive
            </h2>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="mb-[30px]">
          <div className="md:px-10">
            <div className="rounded-full px-[10px] py-[5px] w-fit border border-gray-800">
              <p className="font-light text-gray-800 text-[18px]">
                Our Services
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className="md:pl-10 pr-[60px] md:pr-[100px]">
            <Swiper
              slidesPerView={1}
              className="!overflow-visible"
              // autoplay={{
              //   delay: 3000,
              // }}
              breakpoints={{
                576: { slidesPerView: 2 },
                1280: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
              loop
              spaceBetween={10}
              onSwiper={setSwiperRef}
              initialSlide={1}
            >
              {[...servicesData, ...servicesData, ...servicesData].map(
                ({ background, image, title }, index) => {
                  return (
                    <SwiperSlide key={index} style={{ height: "auto" }}>
                      <NavigationCard
                        className={mergeCn(
                          background,
                          "h-full hover:transform hover:-translate-y-[5px] transition-transform duration-300 relative px-[30px] py-[30px] md:py-5"
                        )}
                        classNames={{
                          circleImage: "w-[90%] md:w-[60%]",
                        }}
                        href="#"
                        imageUrl={image}
                        imageContainer="circle"
                        isSliderContent
                      >
                        <div className="px-[30px] py-5 flex flex-col h-full justify-between">
                          <p className="text-[24px] md:text-[34px]">{title}</p>
                          <p className="mr-[46px] -mb-[5px] text-right text-base md:text-[20px] font-light">
                            Learn More
                          </p>
                        </div>
                      </NavigationCard>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceSection;
