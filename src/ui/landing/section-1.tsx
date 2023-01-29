import { Button, Input, Spacer, Typography } from "../../components";
import { maxWidth, Padding } from "../../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SectionOne = () => {
  return (
    <div className={["flex flex-col", Padding, maxWidth].join(" ")}>
      <Spacer classname="h-[42px]" />
      <div className="flex flex-col x:flex-row w-full x:justify-between x:items-center 2xl:max-w-[1320px] 2xl:mx-auto x:h-[544px] relative h-[730px] sm:h-[1100px]">
        <div className="flex flex-col gap-6  sm:gap-[30px] 2xl:w-[613px] x:w-[587px]">
          <Typography variant="heading1" classname="text-primary-brand">
            Plan Less. Travel More.
          </Typography>
          <div className="flex flex-col gap-8 sm:gap-10">
            <Typography variant="subhead300">
              Finding and planning a great itinerary can be stressful and time
              consuming{" "}
              <span className="font-bold italic">
                — Intripid makes it easy.
              </span>
            </Typography>
            <div className="flex flex-col gap-[6.8px]">
              <div className="flex gap-2">
                <Input
                  classname="max-w-[190px] sm:max-w-[441px] x:max-w-[350px]"
                  placeholder="Enter your email"
                />
                <Button
                  variant="Primary-B"
                  classname="w-[114px] h-[56px] rounded-[8px]"
                >
                  <Typography variant="subhead400" classname="text-white">
                    Join Now
                  </Typography>
                </Button>
              </div>
              <Typography variant="subtitle400" classname="text-text-grey">
                Become one of our members and get an exclusive travel
                experience!
              </Typography>
            </div>
          </div>
        </div>
        <LazyLoadImage
          className="w-[315px]  sm:w-[654px] x:w-[590px] absolute x:right-0 -bottom-[20px] sm:-bottom-[40px]"
          alt="hero image"
          src="/assets/landing/hero-image.png"
        />
      </div>
      <Spacer classname="h-[120px]" />
    </div>
  );
};

export default SectionOne;
