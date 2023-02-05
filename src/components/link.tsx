import { FC } from "react";

type Props = {
  url: string;
  children: React.ReactElement;
  className?: string;
};

export const Link: FC<Props> = ({ url, children, className }) => {
  return (
    <a
      href={url}
      className={["hover:underline underline-offset-2 w-fit", className].join(
        " "
      )}
    >
      {children}
    </a>
  );
};
