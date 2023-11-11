import React, { useState } from "react";
import Image from "next/image";
import { ArrowButton } from "@/common/components";
import { mergeCn } from "@/common/utils/classnames";
import { IServiceDetail } from "../../interfaces";

type ServiceCardProps = {
  service: IServiceDetail;
  index: number;
  isHidden?: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={mergeCn(
        "service-card rounded-primary px-10 py-[50px] flex flex-col lg:flex-row gap-[60px] h-[70vh]",
        service.bgColor
      )}
    >
      <div className="w-full lg:w-[32%] aspect-square relative rounded-[20px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full lg:w-[55%]">
        <h3 className="mb-[30px]">{service.title}</h3>
        <h3 className={mergeCn("mb-[30px]", service.textColor)}>
          {service.subtitle}
        </h3>
        <div
          className="cursor-pointer flex items-center w-fit mt-[30px]"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <p className="font-light mr-5">Learn More</p>
          <ArrowButton isHovered={isHover} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
