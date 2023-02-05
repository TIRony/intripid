import { FC } from "react";
import Footer from "./footer";
import Header from "./header";
import LanguageSelector from "./language-selector";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[94px] sm:mt-[110px] overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
