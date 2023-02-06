// @ts-nocheck
import { useEffect, useState } from "react";
import {
  Button,
  CustomMenu,
  IconButton,
  Typography,
  DesktopMenu,
  Nav,
  Accordion,
} from "../components";
import { BarsIcon, RemoveIcon } from "../icons";
import LanguageSelector from "./language-selector";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <header className="bg-white top-0 fixed w-full z-50">
      <LanguageSelector />
      <div
        className={[
          "flex items-center h-[94px] sm:h-[110px]  justify-between top-0 w-full mx-auto x:max-w-desktop-s 2xl:max-w-desktop-5xl px-6 sm:px-10 x:px-[120px] xl:px-[100px] 2xl:px-0",
        ].join(" ")}
      >
        <img
          src="/assets/logos/logo-black.svg"
          alt="intripid logo web"
          className="w-[240px] hidden sm:block"
        />
        <img
          src="/assets/logos/Logo-mobile-beta.svg"
          alt="intripid logo mobile"
          className="w-[93px] sm:hidden"
        />
        <div className="flex items-center sm:gap-4  xl:gap-10">
          <div className="gap-10 hidden xl:flex">
            <Nav text="About" />
            <CustomMenu
              menuButtonText="Travel Solutions"
              menuContainerClassname="position-menu"
            >
              <DesktopMenu />
            </CustomMenu>
            <Nav text="Our Travelers" />
            <Nav text="Pricing" />
            <Nav text="FAQ" />
          </div>
          <Button
            variant="Primary-B"
            classname="h-[48px] w-[161px] sm:w-[221px] sm:h-[59px]"
          >
            <Typography variant="subhead400" classname="text-white">
              Be a Member
            </Typography>
          </Button>
          <IconButton
            classname="py-2.5 pl-4 xl:hidden"
            onClick={() => setShowMenu(true)}
          >
            <BarsIcon className="w-[25px] h-[42px]" />
          </IconButton>
        </div>
        <div
          style={{
            transition: "0.3s",
            opacity: showMenu ? 1 : 0,
            left: showMenu ? "0%" : "100%",
          }}
          className={[
            "w-full fixed flex flex-col  bg-white  overflow-y-scroll z-50 h-full top-0 px-6 sm:px-[56px] pt-8",
          ].join(" ")}
        >
          <div className="flex justify-between">
            <img
              src="/assets/logos/logo-black.svg"
              alt="Intripid logo"
              className="w-[238px]"
            />
            <IconButton
              onClick={() => setShowMenu(false)}
              classname="w-[50px] flex justify-between items-center"
            >
              <RemoveIcon className="w-[18px] mx-auto fill-button-hoverPink" />
            </IconButton>
          </div>
          <div className="flex flex-col">
            <Nav text="About" type="mobile" />
            <Accordion title="Travel Solutions" />
            <Nav text="Our Travelers" type="mobile" />
            <Nav text="Pricing" type="mobile" />
            <Nav text="FAQ" type="mobile" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
