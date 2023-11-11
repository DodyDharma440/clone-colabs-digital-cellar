import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { ProgressSliderIndicator } from "@/common/components";
import { sliderData } from "@/modules/home/constants";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <div className="relative h-full">
      <Swiper
        slidesPerView={1}
        className="h-full z-[1]"
        autoplay={{
          delay: 6000,
        }}
        allowTouchMove={false}
        modules={[Autoplay]}
        loop
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
      >
        {sliderData.map(({ label, highlighted }, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="p-5 text-black"
                dangerouslySetInnerHTML={{
                  __html: label.replaceAll(
                    highlighted,
                    `<span class="text-green-yellow">${highlighted}</span>`
                  ),
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute left-0 right-0 bottom-5 w-[calc(100%-58px)] h-2 px-5 flex gap-[6px] z-[2]">
        {sliderData.map((_, index) => {
          return (
            <ProgressSliderIndicator
              duration={6000}
              isActive={activeSlide === index}
              key={index}
              onClick={() => {
                swiperRef?.autoplay.stop();
                swiperRef?.slideTo(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlider;
