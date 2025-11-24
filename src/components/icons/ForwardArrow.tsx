import type { FC } from "react";
import { BackArrow, type ArrowProps } from "./BackArrow";

export const ForwardArrow: FC<ArrowProps> = (props) => {
  return (
    <BackArrow 
      {...props} 
      style={{ transform: 'scaleX(-1)', ...props.style }} 
    />
  );
};