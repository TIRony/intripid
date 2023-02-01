// @ts-nocheck
import { Button, IconButton, Typography } from "../components";
import { Padding } from "../constants";
import { BarsIcon } from "../icons";

const Header = () => {
  return (
    <header className="bg-white h-[94px] top-0 sm:h-[110px] fixed w-full z-50">
      <div
        className={[
          "flex items-center h-full justify-between top-0 w-full mx-auto x:max-w-desktop-s 2xl:max-w-desktop-5xl",
          Padding,
        ].join(" ")}
      >
        <div className="bg-mobileLogo sm:bg-desktopLogo h-[56px] w-[49px] sm:w-[136px] sm:h-[42px] bg-no-repeat bg-cover" />
        <div className="flex items-center gap-4 x:gap-10">
          <div className="gap-10 hidden x:flex">
            <a href="/faq">
              <Typography variant="subhead400">About</Typography>
            </a>
            <a href="/faq">
              <Typography variant="subhead400">Travel Solutions</Typography>
            </a>
            <a href="/faq">
              <Typography variant="subhead400">Our Travelers</Typography>
            </a>
            <a href="/faq">
              <Typography variant="subhead400">Pricing</Typography>
            </a>
            <a href="/faq">
              <Typography variant="subhead400">FAQ</Typography>
            </a>
          </div>
          <Button
            variant="Primary-B"
            classname="h-[48px] w-[161px] sm:w-[221px] sm:h-[59px]"
          >
            <Typography variant="subhead400" classname="text-white">
              Be a Member
            </Typography>
          </Button>
          <IconButton classname="py-2.5 px-4 x:hidden">
            <BarsIcon className="w-[25px] h-[42px]" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
export default Header;
