import { FC } from "react";

type Props = {
  url: string;
  children: React.ReactElement;
};

export const Link: FC<Props> = ({ url, children }) => {
  return <a href={url} className="hover:underline underline-offset-2 w-fit">{children}</a>;
};
