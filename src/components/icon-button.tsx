import { FC } from "react";

type Props = {
  children: React.ReactElement;
  classname: string;
};

export const IconButton: FC<Props> = ({ children, classname = "" }) => {
  return <button className={[classname].join(" ")}>{children}</button>;
};
