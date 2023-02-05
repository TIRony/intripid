import { Link, Typography } from "../components";
import { Padding } from "../constants";

const Footer = () => {
  return (
    <div className="bg-background-lightBlue">
      <div
        className={[
          Padding,
          "flex flex-col pt-20 pb-10 sm:pb-6 max-w-mobile sm:max-w-tablet w-full mx-auto x:max-w-desktop-s 2xl:max-w-desktop-5xl xl:max-w-full",
        ].join(" ")}
      >
        <div className="flex flex-col gap-10 sm:gap-20 xl:flex-row">
          <div className="flex flex-col gap-6 max-w-[312px] w-full sm:max-w-[384px] items-center sm:items-start">
            <img
              className="w-[216px]"
              src="/assets/logos/desktop-logo.svg"
              alt="logo"
            />
            <div className="flex flex-col gap-10">
              <Typography variant="body300" classname="text-primary-brand text-center sm:text-start">
                An online platform that encourages travel by removing stress
                from personal, leisure travel planning.
              </Typography>
              <div className="flex gap-8 w-fit mx-auto sm:mx-0">
                <a href="facebook.com">
                  <img
                    src="/assets/logos/Facebook.png"
                    className="w-10 h-10"
                    alt="facebook logo"
                  />
                </a>
                <a href="instagram.com">
                  <img
                    src="/assets/logos/Instagram.png"
                    className="w-10 h-10"
                    alt="instagram logo"
                  />
                </a>
                <a href="facebook.com">
                  <img
                    src="/assets/logos/LinkedIn.png"
                    className="w-10 h-10"
                    alt="linkedin logo"
                  />
                </a>
                <a href="facebook.com">
                  <img
                    src="/assets/logos/Twitter.png"
                    className="w-[48px] h-10"
                    alt="twitter logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4  gap-y-10 xl:gap-x-8">
            <div className="flex flex-col w-[148px] gap-4 sm:w-[311px]  x:w-[224px] xl:w-[196px]">
              <Typography variant="heading6" classname="text-primary-brand">
                About
              </Typography>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  About Intripid
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Our Travelers
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Contact Us
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  FAQ
                </Typography>
              </Link>
            </div>
            <div className="flex flex-col w-[148px] gap-4 sm:w-[311px]  x:w-[224px] xl:w-[196px]">
              <Typography variant="heading6" classname="text-primary-brand">
                Solutions
              </Typography>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Personalized Destinations
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Expert Travel Advisors
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Corporate Travel Planning
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Travel Sponsorship
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Travel Points & Rewards Integration
                </Typography>
              </Link>
            </div>
            <div className="flex flex-col w-[148px] gap-4 sm:w-[311px]  x:w-[224px] xl:w-[196px]">
              <Typography variant="heading6" classname="text-primary-brand">
                Pricing
              </Typography>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Membership Plans
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Deals & Packages
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Vouchers
                </Typography>
              </Link>
            </div>
            <div className="flex flex-col w-[148px] gap-4 sm:w-[311px]  x:w-[224px] xl:w-[196px]">
              <Typography variant="heading6" classname="text-primary-brand">
                Resources
              </Typography>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Intripid Brochure
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Executive Cutsheet
                </Typography>
              </Link>
            </div>
            <div className="flex flex-col w-[148px] gap-4 sm:w-[311px]  x:w-[224px] xl:w-[196px]">
              <Typography variant="heading6" classname="text-primary-brand">
                Support
              </Typography>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Help Center
                </Typography>
              </Link>
            </div>
            <div className="flex flex-col w-[148px] gap-4 sm:w-[311px]  x:w-[224px] xl:w-[196px]">
              <Typography variant="heading6" classname="text-primary-brand">
                Privacy & Safety
              </Typography>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Terms & Conditions
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Privacy & Cookies Statement
                </Typography>
              </Link>
              <Link url="adaa">
                <Typography variant="body300" classname="text-primary-brand">
                  Security
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex sm:justify-between mt-10 sm:mt-20 flex-col sm:flex-row items-center gap-y-4 xl:px-[40px] x:px-0">
          <Typography variant="subtitle300" classname="text-primary-brand">
            All rights reserved © 2023 Intripid
          </Typography>
          <Link url="dada">
            <Typography variant="subtitle300" classname="text-primary-brand">
              Privacy/Terms & Conditions
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
