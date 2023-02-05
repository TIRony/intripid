import { FC, useState } from "react";
import {
  Buildings,
  ChevronRight,
  HandHoldingBox,
  NavigationDropDown,
  TicketsAirline,
  TreePalm,
  UserTieIcon,
} from "../icons";
import { Typography } from "./typography";

type Props = {
  title: string;
  content: string;
};

export const Accordion: FC<Props> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="cursor-pointer bg-white" onClick={toggleExpanded}>
      <div
        className={[
          "border-b-2 items-center h-[51px] select-none flex flex-row gap-2",
          expanded ? "border-b-primary-orange" : "border-b-white",
        ].join(" ")}
      >
        <Typography variant="subhead400" classname="text-primary-brand">
          {title}
        </Typography>
        <ChevronRight className="rotate-90" />
      </div>
      <div
        className={`px-4 overflow-hidden transition-[max-height] duration-100 ease ${
          expanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center h-[52px]">
            <Typography variant="heading6" classname="text-accent-orange">
              Travel Solutions
            </Typography>
            <NavigationDropDown className="w-9 h-9" />
          </div>
          <Typography
            variant="body300"
            classname="text-primary-brand max-w-[321px]"
          >
            Our solutions are designed primarily to assist travelers by
            providing solutions that takes the stress and burden of the upfront
            leisure travel planning.
          </Typography>
        </div>

        <div className="flex flex-col ">
          <div className="flex py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center min-h-[59px] hover:cursor-pointer hover:bg-background-softGrey gap-4">
            <Typography variant="body400" classname="text-primary-brand">
              Personalized Destinations
            </Typography>
            <TreePalm className="w-5 fill-primary-brand" />
          </div>
          <div className="flex  py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center min-h-[59px] hover:cursor-pointer hover:bg-background-softGrey gap-4">
            <Typography variant="body400" classname="text-primary-brand">
              Expert Travel Advisor
            </Typography>
            <UserTieIcon className="w-4 h-[27px] fill-primary-brand" />
          </div>
          <div className="flex  py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center min-h-[59px] hover:cursor-pointer hover:bg-background-softGrey gap-4">
            <Typography variant="body400" classname="text-primary-brand">
              Corporate Travel Planning
            </Typography>
            <Buildings className="w-[18px] fill-primary-brand" />
          </div>
          <div className="flex  py-4 justify-between border-b-[0.5px] border-b-text-smoke items-center min-h-[59px] hover:cursor-pointer hover:bg-background-softGrey gap-4">
            <Typography variant="body400" classname="text-primary-brand">
              Travel Sponsorship
            </Typography>
            <HandHoldingBox className="w-[21px] fill-primary-brand" />
          </div>
          <div className="flex  py-4 justify-between items-center min-h-[59px] hover:cursor-pointer hover:bg-background-softGrey gap-4">
            <Typography variant="body400" classname="text-primary-brand">
              Travel Points & Rewards Integration
            </Typography>
            <TicketsAirline className="w-[18px] fill-primary-brand" />
          </div>
        </div>
      </div>
    </div>
  );
};
