import { Typography } from "../components";
import { Padding } from "../constants";
import { ChevronRight, GlobeIcon } from "../icons";
import {
  MenuButton,
  MenuItem,
  ControlledMenu,
  useMenuState,
} from "@szhsin/react-menu";
import { useRef, useState } from "react";

const LanguageSelector = () => {
  const [selected, setSelected] = useState<string>("English");
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: false });

  const languages = [
    {
      name: "English",
    },
    {
      name: "Español",
    },
    {
      name: "Français",
    },
    {
      name: "Liechtenstein",
    },
    {
      name: "Svenska",
    },
    {
      name: "日本語 Nihongo ",
    },
  ];

  console.log(menuProps.state)

  return (
    <div
      className={["h-10 bg-background-softGrey flex justify-end", Padding].join(
        " "
      )}
    >
      <div
        id="language-selector"
        className="flex gap-2.5 items-center h-[37px] w-fit justify-center hover:cursor-pointer px-4"
      >
        <GlobeIcon
          className={[
            "w-[14px] language-selector-child fill-primary-brand",
            menuProps.state === "open" && "fill-text-pink",
          ].join(" ")}
        />
        <MenuButton
          onClick={() => toggleMenu()}
          className={["h-full"].join(" ")}
          ref={ref}
        >
          <div className="flex gap-2.5 items-center">
            <Typography
              variant="subtitle400"
              classname={[
                "text-primary-brand  language-selector-child",
                menuProps.state === "open" && "text-text-pink",
              ].join(" ")}
            >
              {selected}
            </Typography>
            <ChevronRight
              className={[
                "rotate-90 fill-primary-brand w-[13px] language-selector-child",
                menuProps.state === "open" && "-rotate-90 fill-text-pink",
              ].join(" ")}
            />
          </div>
        </MenuButton>
        <ControlledMenu
          {...menuProps}
          anchorRef={ref}
          menuClassName=""
          direction="bottom"
          align="end"
          onPointerLeave={() => toggleMenu(false)}
          // onClose={() => toggleMenu(false)}
        >
          <div
            className="rounded-[12px]  border border-text-smoke bg-white"
            style={{
              filter:
                "drop-shadow(0px 4px 14px rgba(46, 24, 182, 0.14)) drop-shadow(0px 4px 55px rgba(145, 36, 231, 0.08))",
            }}
          >
            {languages.map(({ name }, index) => (
              <MenuItem
                onClick={() => setSelected(name)}
                className={[
                  "w-[240px] h-[53px] flex items-center px-4 hover:cursor-pointer hover:bg-background-softGrey",
                  index !== languages.length - 1 &&
                    "border-b border-b-text-smoke",
                  index === 0 && "rounded-t-[12px]",
                  index === languages.length - 1 && "rounded-b-[12px]",
                ].join(" ")}
              >
                <Typography
                  variant="subtitle400"
                  classname="text-primary-brand"
                >
                  {name}
                </Typography>
              </MenuItem>
            ))}
          </div>
        </ControlledMenu>
      </div>
    </div>
  );
};

export default LanguageSelector;
