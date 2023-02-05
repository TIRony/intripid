import { Button, Card, Spacer, Typography } from "../../components";
import { maxWidth, Padding } from "../../constants";
import { ChatIcon, PlaneIcon, Shape, SvgShape, TicketIcon } from "../../icons";

const SectionTwo = () => {
  return (
    <div className="bg-pattern overflow-hidden relative mx-auto">
      <Shape className="absolute w-[602px] h-[540px] -z-0 -left-[240px] -top-[130px] " />
      <SvgShape className="absolute -z-0 -right-[200px]  -bottom-[160px] w-[604px] h-[484px] hidden x:block" />
      <div className={["flex flex-col", Padding, maxWidth].join(" ")}>
        <Spacer classname="h-[120px] sm:h-[160px]" />
        <div className="flex flex-col text-center z-10">
          <Typography variant="heading2" classname="text-white">
            Enjoy access to the world's best travel advisors & travel deals
          </Typography>
          <Spacer classname="h-[80px] sm:h-[120px]" />
          <div className="flex flex-wrap gap-8 w-full sm:gap-6 justify-center xl:gap-8 2xl:gap-10">
            <Card
              title={<span>Unlimited & Personalized</span>}
              desc="Members get limitless recommendations of destinations based on their
        customization"
              icon={<PlaneIcon className="w-[100px] h-[100px]" />}
            />
            <Card
              title="Travel Experts & Advisors"
              desc={
                <span>
                  No more doubts because of professional advices from <br />
                  <br /> seasoned travelers
                </span>
              }
              icon={<ChatIcon className="w-[100px] h-[100px]" />}
            />
            <Card
              title="Killer perks & packages"
              desc={
                <span>
                  Free upgrades, vouchers, flash
                  <br />
                  <br /> deals, and marvelous experiences!
                </span>
              }
              icon={<TicketIcon className="w-[100px] h-[100px]" />}
            />
          </div>
          <Spacer classname="h-10 sm:h-20" />
          <div className="flex flex-col gap-4 items-center">
            <Button
              withStar
              classname="w-[310px] sm:w-[374px] h-[59px]"
              variant="Primary-A"
            >
              Be an Exclusive Member Now
            </Button>
            <Typography variant="subhead400" classname="text-white">
              Have a trip for as low as $28!
            </Typography>
          </div>
        </div>
        <Spacer classname="h-[120px] sm:h-[160px]" />
      </div>
    </div>
  );
};

export default SectionTwo;
