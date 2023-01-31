import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IslandIcon, UserTieIcon } from "../icons";
import { Typography } from "./typography";

type Props = {
  title: string;
  desc: React.ReactElement | string;
  icon: React.ReactElement;
};

const Card = ({ title = "", desc = "", icon }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-2 justify-center">
        {icon}
        <Typography variant="heading3b" classname="text-primary-brand w-full">
          {title}
        </Typography>
      </div>
      <Typography
        variant="subhead300"
        classname="text-primary-brand text-center sm:text-start"
      >
        {desc}
      </Typography>
    </div>
  );
};

const CTAButton = ({
  selected = false,
  isRight = false,
  text = "",
  setStep,
  id = "",
}) => {
  const onClick = () => {
    setStep(id);
  };

  return (
    <button
      id={id}
      onClick={onClick}
      className={[
        "w-[324px] h-[59px] bg-background-softGrey border-border-soft",
        selected &&
          "border-b-primary-orange border-t-[8px] border-b-[8px] bg-background-hardElevation border-t-background-hardElevation",
        isRight ? "rounded-r-[8px]" : "rounded-l-[8px]",
      ].join(" ")}
    >
      <Typography variant="subhead400" classname="text-text-black">
        {text}
      </Typography>
    </button>
  );
};

export const Step = () => {
  const [step, setStep] = useState<"step1" | "step2">("step1");

  const data = {
    step1: {
      imgUrl: "step1.png",
      title: "The Perfect Destination",
      titleMobile: "Step 1",
      icon: <IslandIcon className="w-[50px] fill-primary-brand" />,
      desc: (
        <span>
          Answer a few, quick questions about when you’re available to travel,
          your budget, etc. <br />
          <br /> A Travel Advisor will use your answers and Intripid’s augmented
          intelligence tools to analyze all the places in the world you{" "}
          <span className="font-bold italic">could</span> go and recommend the
          perfect destination you{" "}
          <span className="font-bold italic">should</span> go.
          <br />
          <br />
          Within 24-hours, you’ll receive an email with the recommended
          destination, an explanation of why it’s perfect for your trip, photos,
          some of the top attractions to explore there, etc. <br />
          <br /> If you don’t love your destination, simply request another —
          Intripid is so confident in our technology and advisors that you get
          unlimited recommendations.
        </span>
      ),
    },
    step2: {
      imgUrl: "step2.png",
      title: "The Trip Details",
      icon: <UserTieIcon className="w-[50px] fill-primary-brand" />,
      titleMobile: "Step 2",
      desc: (
        <span>
          This is the fun part, and it can be done at your leisure.
          <br />
          <br /> You know where & when you’re traveling, now you get to dream
          and plan the details of your getaway! <br />
          <br /> If you want or need help, Intripid can quickly match you with a
          Travel Advisor who has expertise in your destination — they can help
          book flights, accommodations, local excursions, etc. <br />
          <br /> A Travel Advisor can often secure special deals and perks, so
          definitely consider hiring one!
        </span>
      ),
    },
  };

  return (
    <div className="flex flex-col x:flex-row items-center gap-20 x:gap-0 w-full x:justify-between x:h-[688px]">
      <LazyLoadImage
        className={[
          "w-[489px] h-[482px] x:w-[564px] x:h-[480px] hidden sm:block",
        ].join(" ")}
        src={`/assets/landing/${data[step].imgUrl}`}
      />
      <div className="flex-col gap-[80px] hidden sm:flex x:h-full x:w-[540px] 2xl:w-[655px]">
        <div className="flex">
          <CTAButton
            id="step1"
            selected={step === "step1"}
            text="Step1"
            setStep={setStep}
          />
          <CTAButton
            id="step2"
            selected={step === "step2"}
            isRight
            text="Step2"
            setStep={setStep}
          />
        </div>
        <Card
          icon={data[step].icon}
          title={data[step].title}
          desc={data[step].desc}
        />
      </div>
      <div className="flex flex-col gap-20 sm:hidden">
        <div className="flex flex-col gap-10">
          <LazyLoadImage
            className={[].join(" ")}
            src={`/assets/landing/${data["step1"].imgUrl}`}
          />
          <Card
            icon={data["step1"].icon}
            title={data["step1"].titleMobile}
            desc={data["step1"].desc}
          />
        </div>
        <div className="flex flex-col gap-10">
          <LazyLoadImage
            className={[].join(" ")}
            src={`/assets/landing/${data["step2"].imgUrl}`}
          />
          <Card
            icon={data["step2"].icon}
            title={data["step2"].titleMobile}
            desc={data["step2"].desc}
          />
        </div>
      </div>
    </div>
  );
};
