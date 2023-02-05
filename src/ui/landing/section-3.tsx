import { Planing, Spacer, Step, Tag, Typography } from "../../components";
import { maxWidth, Padding } from "../../constants";

const SectionThree = () => {
  return (
    <div className={["flex flex-col", Padding, maxWidth].join(" ")}>
      <Spacer classname="h-[120px] sm:h-[160px]" />
      <div className="flex flex-col z-10 items-center w-full mx-auto">
        <div className="flex flex-col items-center gap-4 x:gap-[14px]">
          <Tag text="How Intripid works" />
          <div className="flex flex-col text-center gap-6">
            <Typography variant="heading3" classname="text-primary-brand">
              2 Simple Steps
            </Typography>
            <Typography
              classname="text-primary-brand sm:w-[648px] x:w-[791px]"
              variant="subhead300"
            >
              Best travel advisors powerful machine learning and cloud computing
              tools that <br /> evaluate thousands of cities—based on weather,
              attractions, travel time, flight availability—in seconds!
            </Typography>
          </div>
        </div>
        <Spacer classname="h-20 xl:h-[111px] sm:h-[120px]" />
        <Step />
        <Spacer classname="h-[120px] xl:h-[111px]" />
        <Planing />
      </div>
    </div>
  );
};

export default SectionThree;
