import { FC } from "react";
import { Typography } from "./typography";

type Props = {
  classname?: string;
  text?: string;
  link?: string;
  type?: "mobile" | "web";
};

export const Nav: FC<Props> = ({ classname, text, link, type = "web" }) => {
  return (
    <nav
      className={[
        "items-center flex border-b-2 hover:border-b-primary-orange border-b-transparent hover:cursor-pointer",
        type === "web" ? "h-[35px]" : "h-[51px]",
      ].join(" ")}
    >
      <a href={link}>
        <Typography variant="subhead400" classname="text-primary-brand">
          {text}
        </Typography>
      </a>
    </nav>
  );
};
