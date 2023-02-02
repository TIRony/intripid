import { Button, IconButton, Spacer, Typography } from "../../components";
import { maxWidth, Padding } from "../../constants";
import { ArrowRight, CommentIcon, LeftQoute } from "../../icons";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";

const Card = ({
  name,
  desc,
  prof,
  imageUrl,
}: {
  name: string;
  desc: string;
  prof: string;
  imageUrl: string;
}) => {
  return (
    <div
      className={[
        "relative flex flex-col w-full max-w-[310px]  rounded-[32px] gap-6 sm:max-w-[654px] items-center p-8 border border-text-smoke bg-white h-[643px] sm:h-[467px] sm:py-[50px] xl:max-w-[799px] xl:h-[329px] sm:px-10 sm:pt-[50px] xl:px-[50px] xl:pt-[40px] mx-auto",
      ].join(" ")}
    >
      <div className="flex flex-col sm:gap-10 xl:flex-row ">
        <LazyLoadImage
          width={207}
          height={207}
          className="rounded-full mx-auto"
          src={`/assets/landing/${imageUrl}`}
        />
        <div className="flex-col gap-[13px] hidden xl:flex absolute bottom-[27px] left-[51px]">
          <div className="h-[4px] w-[192px] rounded-[10px] bg-background-lightPink" />
          <div className="h-[4px] w-[139px] rounded-[10px] bg-background-lightPink" />
          <div className="h-[4px] w-[192px] rounded-[10px] bg-background-lightPink" />
        </div>

        <div className="flex flex-col gap-6 sm:gap-4 xl:gap-6">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-1 xl:justify-start">
            <Typography variant="heading6">{name}</Typography>
            <Typography variant="heading6" classname="font-normal">
              {prof}
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center sm:flex-row sm:gap-8 xl:gap-4 xl:items-start">
            <LeftQoute className="w-[32px] h-[44px] fill-text-deepPink shrink-0" />
            <Typography
              variant="subhead400"
              classname="text-primary-brand w-full"
            >
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    desc: "Highly recommend 👏 Very Friendly, Reliable & Informative. Intripid  will provide you every single detail you need on your travel!",
    name: "Rosie Miller,",
    prof: "Tourist",
    imgUrl: "review1.png",
  },
  {
    desc: "I  have been contacting them for my flight bookings. They never fail to give me affordable flights. One loyal customer here! Thank you so much, Intripid!",
    name: "Stephen McKulley,",
    prof: "Adventurer",
    imgUrl: "review2.png",
  },
];

const SectionFive = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef<Slider>(null);

  const handleLeftArrowClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleRightArrowClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="relative overflow-hidden">
      <div className={["flex flex-col relative", Padding, maxWidth].join(" ")}>
        <Spacer classname="h-[120px] sm:h-[160px]" />
        <div className="flex flex-col items-center relative">
          <Typography
            variant="heading3"
            classname="text-primary-brand text-center"
          >
            What They Say About{" "}
            <span className="sm:text-text-deepPink">Intripid</span>
          </Typography>
          {/* <CommentIcon className="w-[67px] h-[67px] absolute bottom-0" /> */}
        </div>
      </div>
      <div className={["flex flex-col relative", maxWidth].join(" ")}>
        <Spacer classname="sm:h-[80px] xl:h-[120px] h-10" />
        <div className="relative xl:mx-auto xl:w-[830px] w-full ">
          <IconButton
            onClick={handleLeftArrowClick}
            classname="bg-background-pink rounded-full sm:w-[59px] sm:h-[59px] flex justify-center items-center w-[48px] h-[48px] top-[292px] absolute z-20 left-2 sm:top-1/2 sm:-translate-y-1/2 sm:left-[27px] xl:-left-4"
          >
            <ArrowRight className="w-[18px] fill-white h-[27px]" />
          </IconButton>
          <IconButton
            onClick={handleRightArrowClick}
            classname="bg-background-pink rounded-full sm:w-[59px] sm:h-[59px] flex justify-center items-center w-[48px] h-[48px] top-[292px] absolute z-20 right-2 sm:top-1/2 sm:-translate-y-1/2 sm:right-[27px] xl:-right-4"
          >
            <ArrowRight className="w-[18px] fill-white h-[24px] rotate-180" />
          </IconButton>
          <Slider ref={sliderRef} {...settings}>
            {data.map(({ desc, imgUrl, name, prof }) => {
              return (
                <Card desc={desc} imageUrl={imgUrl} name={name} prof={prof} />
              );
            })}
          </Slider>
        </div>
        <Spacer classname="h-[80px] xl:h-[120px]" />
      </div>

      <div
        className={["flex flex-col items-center", Padding, maxWidth].join(" ")}
      >
        <Button
          variant="Primary-B"
          classname="h-[59px] w-[310px] sm:w-[358px] x:w-[297px] mx-auto"
        >
          <Typography variant="subhead400" classname="text-white">
            See Our Travelers’ Adventures
          </Typography>
        </Button>
        <Spacer classname="h-[120px] sm:h-[200px]" />
      </div>
    </div>
  );
};

export default SectionFive;
