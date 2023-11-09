import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeCn = (...classes: ClassArray) => {
  return twMerge(clsx(classes).split(" "));
};
