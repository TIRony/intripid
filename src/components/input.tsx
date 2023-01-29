import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string;
}

export const Input: FC<Props> = ({ classname = "", ...rest }) => {
  return (
    <input
      className={[
        "h-[56px] py-4 px-6 bg-background-softGrey border border-solid border-text-smoke rounded-[8px] w-full",
        classname,
      ].join(" ")}
      
      {...rest}
    />
  );
};
