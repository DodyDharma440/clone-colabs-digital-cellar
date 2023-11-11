import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Badge, Container, ProgressSliderIndicator } from "@/common/components";
import { blogsData } from "../../constants";
import { Autoplay } from "swiper/modules";
import NavigationCardButton from "@/common/components/NavigationCard/Button";
import Link from "next/link";
import { mergeCn } from "@/common/utils/classnames";

const CommunitySlider = () => {
  const [imageSlider, setImageSlider] = useState<SwiperClass | null>(null);
  const [titleSlider, setTitleSlider] = useState<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [isHover, setIsHover] = useState(false);

  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-3 md:gap-[10px]">
          <div className="col-span-3 lg:col-span-2">
            <div className="rounded-t-[20px] md:rounded-[20px] overflow-hidden">
              <Swiper
                slidesPerView="auto"
                allowTouchMove={false}
                onSwiper={setImageSlider}
                loop
              >
                {blogsData.map((blog, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-[8/5]">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="rounded-b-[20px] md:rounded-[20px] overflow-hidden h-full bg-white-blue relative">
              <Swiper
                className="h-full"
                grabCursor
                autoplay={{ delay: 6000, disableOnInteraction: true }}
                modules={[Autoplay]}
                slidesPerView={1}
                loop
                onSwiper={setTitleSlider}
                onSlideNextTransitionStart={() => imageSlider?.slideNext(550)}
                onSlidePrevTransitionStart={() => imageSlider?.slidePrev(550)}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.realIndex);
                }}
              >
                {blogsData.map((blog, index) => {
                  const bg = index % 2 === 0 ? "bg-white-blue" : "bg-[#a8c3f2]";

                  return (
                    <SwiperSlide key={index}>
                      <div
                        className={mergeCn(
                          "p-[30px] h-full pb-[80px] md:pb-0",
                          bg,
                          "md:bg-white-blue"
                        )}
                      >
                        <Badge className="mb-[20px]">{blog.tag.label}</Badge>
                        <h4 className="font-medium">{blog.title}</h4>
                        <div className="mt-[20px] max-w-[450px] font-light tracking-normal">
                          {blog.description}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="absolute inset-x-0 bottom-0 w-full px-5 flex justify-between z-[2]">
                <div className="flex items-end pb-[20px] gap-[6px]">
                  {blogsData.map((_, index) => {
                    return (
                      <ProgressSliderIndicator
                        duration={6000}
                        isActive={activeSlide === index}
                        key={index}
                        background="bg-[#0046c7]"
                        className="w-[22px]"
                        classNames={{
                          progress: "bg-opacity-100",
                        }}
                        onClick={() => {
                          titleSlider?.autoplay.stop();
                          titleSlider?.slideTo(index);
                        }}
                      />
                    );
                  })}
                </div>

                <Link
                  href="#"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <div className="flex">
                    <div className="mr-[60px] pb-[15px] font-light">
                      Read More
                    </div>
                    <NavigationCardButton isHover={isHover} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitySlider;
