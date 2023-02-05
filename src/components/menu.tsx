import { Menu, MenuButton } from "@szhsin/react-menu";
import { ChevronRight } from "../icons";
import { Typography } from "./typography";

type Props = {
  children?: React.ReactNode;
  menuData?: any;
  menuButtonText?: string;
  menuContainerClassname?: string;
  menuButtonChild?: React.ReactElement;
};

export const CustomMenu: React.FC<Props> = ({
  children,
  menuButtonText,
  menuContainerClassname = "",
}) => {
  return (
    <Menu
      menuClassName={menuContainerClassname}
      menuButton={({ open }) => (
        <MenuButton
          className={[
            " border-b-2 h-[35px]",
            open ? "border-b-primary-orange" : "border-b-white",
          ].join(" ")}
        >
          <div className="flex gap-2 items-center">
            <Typography variant="subhead400" classname="text-primary-brand">
              {menuButtonText}
            </Typography>
            <ChevronRight className="rotate-90 fill-primary-brand" />
          </div>
        </MenuButton>
      )}
    >
      {children}
    </Menu>
  );
};
