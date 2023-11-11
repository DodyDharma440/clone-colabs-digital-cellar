import React from "react";
import { CornerShape, ArrowButton } from "../..";

type NavigationCardButtonProps = {
  isHover?: boolean;
  onNavigate?: () => void;
};

const NavigationCardButton: React.FC<NavigationCardButtonProps> = ({
  isHover,
  onNavigate,
}) => {
  return (
    <div className="pl-[10px] pt-[10px] bg-body absolute bottom-0 right-0 rounded-tl-primary z-[3]">
      <CornerShape
        offsetIn="top"
        placement="right"
        className="transform rotate-180 md:w-[20px] md:-top-[20px]"
      />
      <CornerShape
        offsetIn="left"
        placement="bottom"
        className="transform rotate-180 md:w-[20px] md:-left-[20px]"
      />
      <ArrowButton onClick={onNavigate} isHovered={isHover} />
    </div>
  );
};

export default NavigationCardButton;
