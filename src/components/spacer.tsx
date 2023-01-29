import { FC } from "react";

type Props = {
  classname: string;
};

export const Spacer: FC<Props> = ({ classname }) => {
  return <div className={classname} />;
};
