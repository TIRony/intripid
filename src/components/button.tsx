import React, { ButtonHTMLAttributes, FC } from "react";
import { StarIcon } from "../icons";

type Variants = "Primary-A" | "Primary-B" | "Secondary";

type Border = "Rounded" | "Square";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: Variants;
  classname: string;
  withStar?: boolean;
}

export const Button: FC<Props> = ({
  children,
  variant = "Primary-A",
  classname = "",
  withStar = false,
  ...rest
}) => {
  const variantMapping: Record<Variants, string> = {
    "Primary-A":
      "bg-white border-[1px] border-text-smoke hover:shadow-buttonShadow rounded-[32px] flex justify-center items-center",
    "Primary-B": "bg-primary-orange hover:bg-button-hover rounded-[32px]",
    Secondary: "",
  };

  return (
    <button
      className={[variantMapping[variant], classname].join(" ")}
      {...rest}
    >
      <div className="flex items-center gap-1 justify-center">
        {children}
        {withStar && <StarIcon className="w-[18px] text-primary-brand" />}
      </div>
    </button>
  );
};
