// @ts-nocheck
import { FC } from "react";

type Variants =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading3b"
  | "heading4"
  | "heading5"
  | "heading6"
  | "subhead200"
  | "subhead300"
  | "subhead400"
  | "subhead500"
  | "body300"
  | "body400"
  | "body500"
  | "subtitle500"
  | "subtitle400"
  | "subtitle300";

type Props = {
  variant?: Variants;
  classname?: string;
  children?: React.ReactNode;
};

export const Typography: FC<Props> = ({
  classname = "",
  variant = "body400",
  children,
}) => {
  const variantMapping: Record<Variants, string> = {
    heading1:
      "text-[51px] leading-[59px] sm:text-[90px] font-readex font-semibold sm:leading-[104px] -tracking-[.04em]",
    heading2:
      "text-[38px] leading-[44px] sm:text-[67px] font-readex font-semibold sm:leading-[77px] -tracking-[.04em]",
    heading3:
      "text-[51px] leading-[59px] sm:text-[67px] font-readex font-semibold sm:leading-[77px] -tracking-[.04em]",
    heading3b:
      "text-[51px] leading-[59px] -tracking-[.04em] font-readex font-semibold",
    subhead400:
      "font-jakarta text-[18px] leading-[27px] -tracking-[.02em] font-medium",
    subhead300:
      "font-jakarta text-[18px] leading-[27px] -tracking-[.02em] font-normal",
    subtitle400:
      "font-jakarta text-[14px] leading-[21px] -tracking-[.02em] font-medium",
    heading5:
      "text-[28px] leading-[32px] sm:text-[38px] font-readex font-semibold sm:leading-[44px] -tracking-[.04em]",
  };

  return (
    <span className={[variantMapping[variant], classname, ""].join(" ")}>
      {children}
    </span>
  );
};
