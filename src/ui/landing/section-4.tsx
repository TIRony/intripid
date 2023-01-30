import {
  Planing,
  Spacer,
  Step,
  Table,
  Tag,
  Typography,
} from "../../components";
import { maxWidth, Padding } from "../../constants";
import { SvgComponent } from "../../icons";

const SectionFour = () => {
  return (
    <div className="relative overflow-hidden">
      <div className={["flex flex-col ", Padding, maxWidth].join(" ")}>
        <Spacer classname="h-[120px] sm:h-[160px]" />
        <div className="flex flex-col z-10 items-center w-full mx-auto">
          <div className="flex flex-col items-center gap-4 x:gap-[14px]">
            <Tag text="How Intripid Compares" />
            <Typography
              variant="heading3"
              classname="text-primary-brand text-center"
            >
              Better, Affordable, and Faster Travels with Us
            </Typography>
          </div>
        </div>
        <Spacer classname="h-[80px] sm:h-[120px]" />
      </div>

      <div className="overflow-auto mx-auto relative w-full x:w-fit bg-transparent px-6  z-20 shadow-tableShadow rounded-l-[30px] x:rounded-[30px]">
        <Table />
      </div>
      {/* <SvgComponent className="absolute top-0  z-0 w-[1398px] h-[691px]" /> */}

      <div className={["flex flex-col ", Padding, maxWidth].join(" ")}>
        <Spacer classname="h-[120px] sm:h-[160px]" />
      </div>
    </div>
  );
};

export default SectionFour;
