import { MenuItem } from "@szhsin/react-menu";
import {
  Buildings,
  HandHoldingBox,
  IslandIcon,
  NavigationDropDown,
  TicketsAirline,
  TreePalm,
  UserTieIcon,
} from "../icons";
import { Typography } from "./typography";

export const DesktopMenu = () => {
  return (
    <MenuItem
      style={{
        filter:
          "drop-shadow(0px 4px 14px rgba(46, 24, 182, 0.14)) drop-shadow(0px 4px 55px rgba(145, 36, 231, 0.08))",
      }}
      className="w-[941px] flex rounded-[12px] border border-text-smoke bg-white"
    >
      <div className="flex flex-col p-8 w-[385px] gap-2">
        <div className="flex  justify-between items-center h-[52px]">
          <Typography variant="heading6" classname="text-accent-orange">
            Travel Solutions
          </Typography>
          <NavigationDropDown className="w-9 h-9" />
        </div>
        <Typography variant="body300" classname="text-primary-brand">
          Our solutions are designed primarily to assist travelers by providing
          solutions that takes the stress and burden of the upfront leisure
          travel planning.
        </Typography>
      </div>
      <div className="w-[556px] border-l-[0.5px] border-l-text-smoke flex flex-col p-8">
        <div className="flex px-8 py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center h-[59px] hover:cursor-pointer hover:bg-background-softGrey">
          <Typography variant="body400" classname="text-primary-brand">
            Personalized Destinations
          </Typography>
          <TreePalm className="w-5 fill-primary-brand" />
        </div>
        <div className="flex p-8 py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center h-[59px] hover:cursor-pointer hover:bg-background-softGrey">
          <Typography variant="body400" classname="text-primary-brand">
            Expert Travel Advisor
          </Typography>
          <UserTieIcon className="w-4 h-[27px] fill-primary-brand" />
        </div>
        <div className="flex p-8 py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center h-[59px] hover:cursor-pointer hover:bg-background-softGrey">
          <Typography variant="body400" classname="text-primary-brand">
            Corporate Travel Planning
          </Typography>
          <Buildings className="w-[18px] fill-primary-brand" />
        </div>
        <div className="flex p-8 py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center h-[59px] hover:cursor-pointer hover:bg-background-softGrey">
          <Typography variant="body400" classname="text-primary-brand">
            Travel Sponsorship
          </Typography>
          <HandHoldingBox className="w-[21px] fill-primary-brand" />
        </div>
        <div className="flex p-8 py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center h-[59px] hover:cursor-pointer hover:bg-background-softGrey">
          <Typography variant="body400" classname="text-primary-brand">
            Travel Points & Rewards Integration
          </Typography>
          <TicketsAirline className="w-[18px] fill-primary-brand" />
        </div>
      </div>
    </MenuItem>
  );
};
