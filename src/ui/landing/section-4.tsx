import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Spacer, Table, Tag, Typography } from "../../components";
import { maxWidth, Padding, screen } from "../../constants";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { CircleCheck, CircleXMark, SvgComponent } from "../../icons";

const Card = ({
  title = "",
  desc = "",
  type,
}: {
  title: string | React.ReactElement;
  desc: string;
  type: "warning" | "success";
}) => {
  const typeMapping = {
    warning: "text-text-warning",
    success: "text-text-deepPink",
  };

  return (
    <div
      className={[
        "flex flex-col w-full max-w-[312px]  rounded-[16px] p-8 gap-4 x:max-w-[373px] xl:max-w-[346px]",
        type === "warning"
          ? "bg-background-softGrey border border-text-smoke"
          : "bg-white border border-text-deepPink",
      ].join(" ")}
    >
      <div className="relative w-full max-w-[248px] xl:max-w-full">
        <Typography
          variant="heading5b"
          classname={[typeMapping[type]].join(" ")}
        >
          {title}
          {` `}
          {type === "success" ? (
            <FontAwesomeIcon icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} />
          )}
        </Typography>
      </div>

      <Typography variant="subhead300">{desc}</Typography>
    </div>
  );
};

const data = [
  {
    title: (
      <span>
        <span className="xl:hidden">Legacy Custom— but expensive!</span>
        <span className="hidden xl:inline">
          Legacy Custom—
          <br /> but expensive!
        </span>
      </span>
    ),
    desc: "Takes hundreds of dollars to employ an agent who will spend hours—or even days!—researching a small number of potential locations.",
    type: "warning",
  },
  {
    title: (
      <span>
        <span className="xl:hidden">
          Legacy Pre-Packaged—
          <br /> not customized!
        </span>
        <span className="hidden xl:inline">
          Legacy Pre-Packaged— <br />
          not customized!
        </span>
      </span>
    ),
    desc: "A  microwave dinner of a trip - these are travel packages built to sell at volume, built for...definitely not you!",
    type: "warning",
  },
  {
    title: "Personalized, Fast, and Affordable!—Intripid",
    desc: "Intripid 's proprietary tech enables highly-personalized results, delivered fast - and at super-low cost",
    type: "success",
  },
];

const SectionFour = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window === undefined) return;
    const { innerWidth } = window;

    if (innerWidth > 1440) {
      return;
    }
    if (innerWidth >= 1280) {
      return;
    }
    if (innerWidth > 767) {
      const margin = (innerWidth - screen.medium.width) / 2;
      setWidth(screen.medium.width - screen.medium.padding + margin);
      return;
    }
    if (innerWidth > 359) {
      const margin = (innerWidth - screen.small.width) / 2;
      setWidth(screen.small.width - screen.small.padding + margin);
      return;
    }
    setWidth(innerWidth);
  }, [window]);

  return (
    <div className="relative overflow-hidden">
      <div className={["flex flex-col relative", Padding, maxWidth].join(" ")}>
        <Spacer classname="h-[120px] xl:h-[160px] x:h-[166px]" />
        <div className="flex flex-col z-10 items-center w-full mx-auto">
          <div className="flex flex-col items-center gap-4  xl:px-40">
            <Tag text="How Intripid Compares" />
            <Typography
              variant="heading3"
              classname="text-primary-brand text-center"
            >
              Better, Affordable, and Faster Travels with Us
            </Typography>
          </div>
        </div>
        <Spacer classname="h-[80px] sm:h-[120px] x:h-[160px] xl:h-[136px]" />
        <div
          style={{
            width: `${width}px`,
          }}
          className="overflow-auto mx-auto relative xl:w-fit bg-transparent z-20 shadow-tableShadow rounded-l-[30px] x:rounded-[30px]"
        >
          <Table />
        </div>
        <LazyLoadImage
          className="absolute top-[510px] -left-[100px] sm:top-[480px] sm:-left-[40px]  z-0 w-[1398px] max-w-[1398px] h-[691px] max-h-[691px] x:left-[20px] x:top-[485px] xl:-left-[30px] xl:top-[460px]"
          src="/assets/landing/Vector 2.png"
        />

        <Spacer classname="h-[80px] sm:h-[120px] x:h-[160px]" />
        <div className="flex flex-wrap gap-6 justify-center xl:gap-10">
          {data.map(({ title, desc, type }) => {
            return (
              <Card
                title={title}
                desc={desc}
                type={type as "warning" | "success"}
              />
            );
          })}
        </div>
        <Spacer classname="h-[80px] xl:h-[71px]" />
        <Button
          variant="Primary-B"
          classname="h-[59px] w-[310px] sm:w-[245px] x:w-[297px] mx-auto"
        >
          <Typography variant="subhead400" classname="text-white">
            Our Affordable Pricing
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default SectionFour;
