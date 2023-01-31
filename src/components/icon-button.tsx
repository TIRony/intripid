import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classname: string;
  withStar?: boolean;
}

export const IconButton: FC<Props> = ({
  children,
  classname = "",
  ...rest
}) => {
  return (
    <button {...rest} className={[classname].join(" ")}>
      {children}
    </button>
  );
};
