import React, { forwardRef } from "react";

type MergedProps<T extends keyof JSX.IntrinsicElements, P = {}> = P &
  JSX.IntrinsicElements[T];

export const extendElement = <
  T extends keyof JSX.IntrinsicElements = "div",
  P = {}
>(
  callback: (
    props: MergedProps<T, P>,
    ref: React.ForwardedRef<React.ElementRef<T>>
  ) => JSX.Element,
  displayName: string
) => {
  const Component = forwardRef<React.ElementRef<T>, MergedProps<T, P>>(
    (props, ref) => {
      return <>{callback(props, ref)}</>;
    }
  );

  Component.displayName = displayName;

  return Component;
};
