import React from "react";
import { CornerShape } from "..";
import { HiOutlineArrowDown } from "react-icons/hi";

type HeroVideoProps = {
  fileName: string;
  title: string;
};

const HeroVideo: React.FC<HeroVideoProps> = ({ fileName, title }) => {
  return (
    <div className="h-[500px] relative w-full md:h-full rounded-tr-primary rounded-tl-primary rounded-br-primary overflow-hidden">
      <video
        src={`/assets/hero/${fileName}.mp4`}
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
        <h1 className="text-[42px] md:text-[60px] tracking-tighter">{title}</h1>

        <button className="p-4 hidden md:block border border-solid border-black rounded-full mx-[10px] mb-[10px] mt-8 [&>svg]:transform [&>svg]:hover:scale-[1.4]">
          <HiOutlineArrowDown className="transition-all duration-200" />
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;
