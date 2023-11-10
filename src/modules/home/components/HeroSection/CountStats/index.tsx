import React, { useEffect, useRef, useState } from "react";
import SwiperClass from "swiper";
import { useCountUp } from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { mergeCn } from "@/common/utils/classnames";
import { countsData } from "@/modules/home/constants";

type CounterProps = {
  value: number;
  isActiveSlide: boolean;
};

const Counter: React.FC<CounterProps> = ({ value, isActiveSlide }) => {
  const countUpRef = React.useRef<HTMLElement>(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: value,
    duration: 5,
  });

  useEffect(() => {
    if (isActiveSlide) {
      start();
    }
  }, [isActiveSlide, start]);

  return <span ref={countUpRef} />;
};

const CountStats = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  return (
    <div className="rounded-primary md:rounded-full bg-light-brown overflow-hidden relative">
      <Swiper
        slidesPerView={1}
        className="h-[260px]"
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
        {countsData.map((countData, index) => {
          const isActive = activeSlide === index;

          return (
            <SwiperSlide key={index} style={{ width: "100%" }}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h2
                  className={mergeCn(
                    "font-semibold",
                    {
                      ["text-[80px]"]: !countData.smallerFont,
                      ["text-[50px]"]: countData.smallerFont,
                    },
                    "leading-[1.1]"
                  )}
                >
                  <Counter value={countData.value} isActiveSlide={isActive} />
                  {countData.unit}
                </h2>
                <p className="text-xl text-center w-[70%] leading-6 font-light">
                  {countData.label}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-col md:flex-row absolute right-[30px] top-0 bottom-0 md:right-0 md:top-[unset] md:bottom-[30px] gap-3 z-10 md:left-0 justify-center">
        {countsData.map((_, index) => {
          const isActive = activeSlide === index;

          return (
            <button
              className={mergeCn("w-[10px] h-[10px] rounded-full bg-black", {
                ["bg-opacity-40"]: !isActive,
              })}
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

export default CountStats;
