import React, { FC } from "react";
import { Typography } from "./typography";

type Props = {
  title: string | React.ReactElement;
  icon: React.ReactElement;
  desc: string | React.ReactElement;
};

export const Card: FC<Props> = ({ title, icon, desc }) => {
  return (
    <div className="w-[316px] min-h-[368px] sm:min-h-[392px] sm:w-[315.5px] 2xl:w-[416px] 2xl:h-[365px] border-text-smoke bg-white rounded-[32px] shadow-cardShadow gap-4 flex flex-col p-8 text-start">
      {icon}
      <Typography variant="heading5" classname="text-primary-brand">
        {title}
      </Typography>
      <Typography variant="subhead300" classname="text-primary-brand">
        {desc}
      </Typography>
    </div>
  );
};
