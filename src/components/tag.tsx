import { FC } from "react";
import { Typography } from "./typography";

type Props = {
  text: string;
  classname?: string;
};

export const Tag: FC<Props> = ({ text, classname = "" }) => {
  return (
    <div
      className={[classname, "px-8 py-2 bg-primary-brand rounded-[32px]"].join(
        " "
      )}
    >
      <Typography classname="text-white" variant="subhead400">
        {text}
      </Typography>
    </div>
  );
};
