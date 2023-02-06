import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CheckIcon, ListCheckIcon } from "../icons";
import { Button } from "./button";
import { Typography } from "./typography";

export const Planing = () => {
  const data = [
    "planning the day-to-day details of trip",
    "booking flights, accommodations, and excursions",
    "individual, team,  and corporate trip types and  specializations",
    "Expert Travel Advisor at transparent hourly rates",
  ];

  return (
    <div className="flex xl:flex-row flex-col gap-20 xl:gap-[64px] x:gap-20">
      <div className="flex flex-col gap-10">
        <div className="relative">
          <ListCheckIcon className="w-[38px] fill-primary-brand absolute left-0 top-[5px]" />
          <Typography variant="heading3b" classname="text-primary-brand">
            &#8201;&nbsp;&nbsp;&nbsp;Planning and Booking Assistance
          </Typography>
        </div>

        <div className="flex flex-col gap-4">
          {data.map((x) => (
            <div className="flex gap-2 items-start">
              <CheckIcon className="w-[24px] fill-primary-orange" />
              <Typography variant="subhead300">{x}</Typography>
            </div>
          ))}
        </div>
        <Button variant="Primary-B" classname="h-[59px] w-[310px] sm:w-[245px]">
          <Typography variant="subhead400" classname="text-white">
            Plan Trip With Us
          </Typography>
        </Button>
      </div>
      <LazyLoadImage
        src="/assets/landing/Planning.png"
        effect="blur"
        alt="image"
        placeholderSrc="/assets/landing/Planning.webp"
        className="max-w-full xl:max-w-[660px]"
      />
    </div>
  );
};
