import { Button, IconButton, Spacer, Typography } from "../../components";
import { maxWidth, Padding } from "../../constants";
import { ArrowRight, CircleCheck, CircleXMark, LeftQoute } from "../../icons";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SectionSix = () => {
  return (
    <div className="relative overflow-hidden  bg-pattern1">
      <img
        src="/assets/landing/dots-1.svg"
        className="absolute hidden sm:block -right-[55px] top-0"
        alt="dots"
      />
      <div
        className={[
          "flex flex-col relative py-10 sm:py-[60px] xl:py-[63px] x:py-[66px] xl:items-end",
          Padding,
          maxWidth,
        ].join(" ")}
      >
        <img
          src="/assets/landing/group1.png"
          className="max-w-full absolute -left-[410px] w-[671px] -top-[70px] z-0 xl:-left-[30px] xl:w-[630px] x:left-[50px] xl:-top-[35px]"
          alt="people"
        />

        <div className="sm:ml-[85px] flex flex-col gap-6 items-start relative z-10  xl:items-end xl:w-[570px]">
          <div className="flex flex-col gap-4 bg-white shadow-cardShadow1 rounded-[24px] p-8 h-[336px] sm:h-[284px] w-full ">
            <Typography variant="heading5" classname="text-primary-brand">
              A more compassionate world through increased travel.
            </Typography>
            <Typography variant="body400" classname="">
              Travel exposes us to the lives of others. Our mission is to
              encourage more people to travel by making it easier to plan, book,
              and execute amazing trips.
            </Typography>
          </div>
          <Button
            variant="Primary-A"
            classname="h-[59px] w-[310px] sm:w-[240px] x:w-[297px] xl:self-start"
          >
            <Typography variant="subhead400" classname="text-primart-brand">
              Join the Mission
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
