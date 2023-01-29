import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[94px] sm:mt-[110px]">{children}</main>
      <Footer />
    </>
  );
};
