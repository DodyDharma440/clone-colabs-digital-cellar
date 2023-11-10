import React from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Container } from "@/common/components";
import { mergeCn } from "@/common/utils/classnames";

const PrincipleSection = () => {
  return (
    <section className="section">
      <Container>
        <div className="rounded-primary h-[85vh] relative overflow-hidden flex flex-col justify-center items-center text-[#eae9dc]">
          <video
            src="/assets/principles/homepage-cells.mp4"
            loop
            autoPlay
            playsInline
            muted
            className="absolute w-full h-full inset-0 object-cover z-[1]"
          />

          <ul className="relative z-[2] text-center flex flex-col items-center mb-[20px]">
            {[
              "Reposition Science",
              "Redefine our Approach",
              "Rethink Entrepreneurship",
              "Regenerate our Planet",
            ].map((words, index) => {
              return (
                <li
                  key={index}
                  className={mergeCn(
                    "text-[24px] tracking-tighter md:text-[36px] whitespace-nowrap font-medium bg-moss-green w-fit rounded-[20px] pt-[10px] px-[20px] pb-[15px]",
                    {
                      ["-mb-[15px]"]: index !== 3,
                    }
                  )}
                >
                  {words}
                </li>
              );
            })}
          </ul>

          <Link href="#" className="relative z-[2]">
            <div className="flex items-center gap-[10px]">
              <div className="rounded-full bg-moss-green py-[5px] px-[15px] text-base md:text-[20px] font-light">
                Our Principles
              </div>
              <button className="rounded-full bg-moss-green p-[14px]">
                <HiOutlineArrowRight size={24} />
              </button>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PrincipleSection;
