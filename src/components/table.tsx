import {
  ChartPieIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  MoneyBill,
  RemoveIcon,
  TimeIcon,
  UsersIcon,
} from "../icons";
import { Typography } from "./typography";

export const Table = () => {
  return (
    <div className="relative p-6 sm:p-[56px] w-fit bg-white rounded-[30px] shadow-tableShadow x:shadow-none x:mr-0">
      <img
        src="/assets/landing/Dots.svg"
        className="absolute top-0 left-[58px]"
        alt="dots svg"
      />
      {/* <div className="absolute left-0 bg-table-scroll w-[215px] h-full z-20 top-0">
        dwqdwqwwq
      </div> */}
      <div className="flex shrink-0 w-full">
        <div className="flex flex-col w-[220px] xl:w-[266px] x:w-[249px] shrink-0">
          <div className="h-[117px]" />
          <div className="flex w-full h-[76px] sm:h-[72px] items-center gap-3 justify-end pr-4 sm:pr-8 x:pr-[44px]">
            <Typography variant="heading6" classname="text-primary-brand">
              Speed
            </Typography>
            <TimeIcon className="w-[25px] fill-primary-brand" />
          </div>
          <div className="flex w-full h-[76px] sm:h-[72px] items-center gap-3 justify-end pr-4 sm:pr-8 x:pr-[44px]">
            <Typography variant="heading6" classname="text-primary-brand">
              Cost
            </Typography>
            <MoneyBill className="w-[25px] fill-primary-brand" />
          </div>
          <div className="flex w-full h-[76px] sm:h-[72px] items-center gap-3 justify-end pr-4 sm:pr-8 x:pr-[44px]">
            <Typography variant="heading6" classname="text-primary-brand">
              Research
            </Typography>
            <MagnifyingGlassIcon className="w-[25px] fill-primary-brand" />
          </div>
          <div className="flex w-full h-[76px] sm:h-[72px] items-center gap-3 justify-end pr-4 sm:pr-8 x:pr-[44px]">
            <Typography variant="heading6" classname="text-primary-brand">
              Peresonalization
            </Typography>
            <ChartPieIcon className="w-[25px] fill-primary-brand" />
          </div>
          <div className="flex w-full h-[76px] sm:h-[72px] items-center gap-3 justify-end pr-4 sm:pr-8 x:pr-[44px]">
            <Typography variant="heading6" classname="text-primary-brand">
              Experts Match
            </Typography>
            <UsersIcon className="w-[25px] fill-primary-brand" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-[149px] sm:w-[165px] x:w-[261px] xl:w-[229px] bg-table">
            <div className="flex h-[117px] px-20 justify-center items-center">
              <Typography
                variant="heading5b"
                classname="text-primary-brand text-center"
              >
                Legacy Custom
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px] x:px-20 items-center justify-center">
              <Typography variant="heading6" classname=" text-text-warning">
                Very Slow
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname=" text-text-warning">
                Very High
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-primary-brand">
                Medium
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-primary-brand">
                Medium
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <RemoveIcon className="w-[14px] fill-text-warning" />
            </div>
          </div>
          <div className="flex flex-col w-[174px] sm:w-[190px] x:w-[286px] xl:w-[254px] bg-table shrink-0">
            <div className="flex h-[117px] px-20 justify-center items-center">
              <Typography
                variant="heading5b"
                classname="text-primary-brand text-center"
              >
                Legacy Packaged
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-primary-brand">
                Medium
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-primary-brand">
                Low
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname=" text-text-warning">
                Very Low
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname=" text-text-warning">
                Very Low
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <RemoveIcon className="w-[14px] fill-text-warning" />
            </div>
          </div>
          <div className="flex flex-col w-[179px] sm:w-[233px] x:w-[329px] xl:w-[258px] border-[2px] border-text-pink rounded-[22px] bg-white shrink-0">
            <div className="flex h-[117px] x:px-20 justify-center items-center">
              <img
                src="/assets/logos/logo1.svg"
                className="w-[130px] sm:w-[169px]"
                alt="logo"
              />
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-text-pink">
                Very Fast
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-text-pink">
                Very Low
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-text-pink">
                Very High
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <Typography variant="heading6" classname="text-text-pink">
                Very High
              </Typography>
            </div>
            <div className="flex w-full h-[76px] sm:h-[72px]  x:px-20 items-center justify-center">
              <CheckIcon className="w-[14px] fill-text-pink" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
