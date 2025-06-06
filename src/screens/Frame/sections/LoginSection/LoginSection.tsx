import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const LoginSection = (): JSX.Element => {
  // Social login options data
  const socialLogins = [
    {
      name: "Google",
      icon: "/group-18838.png",
      alt: "Google icon",
    },
    {
      name: "Facebook",
      icon: "/social-icon.svg",
      alt: "Facebook icon",
    },
  ];

  return (
    <div className="flex h-screen w-full bg-[#f2f6f9]">
      {/* Left side with illustration */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8">
        <div className="relative h-[380px] w-[366px]">
          <div className="relative h-[380px]">
            <div className="absolute w-[366px] h-[374px] top-1.5 left-0">
              <img
                className="absolute w-[58px] h-9 top-[338px] left-[231px]"
                alt="Vector"
                src="/vector-42.svg"
              />
              <img
                className="absolute w-[35px] h-[18px] top-[338px] left-[232px]"
                alt="Vector"
                src="/vector-49.svg"
              />
              <img
                className="absolute w-[51px] h-[19px] top-[351px] left-[233px]"
                alt="Vector"
                src="/vector-47.svg"
              />
              <img
                className="absolute w-[52px] h-[52px] top-[322px] left-9"
                alt="Vector"
                src="/vector-48.svg"
              />
              <img
                className="absolute w-[35px] h-[23px] top-[322px] left-[43px]"
                alt="Vector"
                src="/vector-51.svg"
              />
              <img
                className="absolute w-[99px] h-[357px] top-3 left-[39px]"
                alt="Vector"
                src="/vector-57.svg"
              />
              <img
                className="absolute w-60 h-[179px] top-[168px] left-[43px]"
                alt="Vector"
                src="/vector-54.svg"
              />
              <img
                className="absolute w-[89px] h-[181px] top-[166px] left-[185px]"
                alt="Vector"
                src="/vector-7.svg"
              />
              <img
                className="absolute w-3.5 h-[15px] top-[190px] left-[164px]"
                alt="Vector"
                src="/vector-2.svg"
              />
              <img
                className="absolute w-[22px] h-[27px] top-[195px] left-[149px]"
                alt="Vector"
                src="/vector.svg"
              />
              <img
                className="absolute w-[29px] h-[71px] top-[178px] left-[177px]"
                alt="Vector"
                src="/vector-1.svg"
              />
              <img
                className="absolute w-9 h-[21px] top-[234px] left-[184px]"
                alt="Vector"
                src="/vector-3.svg"
              />
              <img
                className="absolute w-[99px] h-[108px] top-[84px] left-[158px]"
                alt="Vector"
                src="/vector-34.svg"
              />
              <img
                className="absolute w-[109px] h-[98px] top-[90px] left-[218px]"
                alt="Vector"
                src="/vector-17.svg"
              />
              <img
                className="absolute w-[79px] h-[73px] top-[115px] left-[248px]"
                alt="Vector"
                src="/vector-21.svg"
              />
              <img
                className="absolute w-[95px] h-[113px] top-[61px] left-[271px]"
                alt="Vector"
                src="/vector-8.svg"
              />
              <img
                className="absolute w-[7px] h-px top-[55px] left-[227px]"
                alt="Vector"
                src="/vector-24.svg"
              />
              <img
                className="absolute w-0.5 h-px top-14 left-[228px]"
                alt="Vector"
                src="/vector-9.svg"
              />
              <img
                className="absolute w-px h-px top-14 left-[229px]"
                alt="Vector"
                src="/vector-20.svg"
              />
              <img
                className="absolute w-[37px] h-[47px] top-[49px] left-[206px]"
                alt="Vector"
                src="/vector-14.svg"
              />
              <img
                className="absolute w-[25px] h-[13px] top-[83px] left-[206px]"
                alt="Vector"
                src="/vector-4.svg"
              />
              <img
                className="absolute w-[41px] h-[55px] top-[30px] left-[202px]"
                alt="Vector"
                src="/vector-12.svg"
              />
              <img
                className="absolute w-[18px] h-[19px] top-[42px] left-[227px]"
                alt="Vector"
                src="/vector-13.svg"
              />
              <img
                className="absolute w-1.5 h-0.5 top-[52px] left-[236px]"
                alt="Vector"
                src="/vector-16.svg"
              />
              <img
                className="absolute w-1.5 h-0.5 top-[70px] left-[235px]"
                alt="Vector"
                src="/vector-33.svg"
              />
              <img
                className="absolute w-3 h-2.5 top-[73px] left-[221px]"
                alt="Vector"
                src="/vector-44.svg"
              />
              <img
                className="absolute w-2.5 h-3 top-14 left-[207px]"
                alt="Vector"
                src="/vector-18.svg"
              />
              <img
                className="absolute w-7 h-2 top-[58px] left-[212px]"
                alt="Vector"
                src="/vector-5.svg"
              />
              <img
                className="absolute w-24 h-[114px] top-[60px] left-[270px]"
                alt="Vector"
                src="/vector-6.svg"
              />
              <img
                className="absolute w-[154px] h-[133px] top-[25px] left-px"
                alt="Vector"
                src="/vector-52.svg"
              />
              <img
                className="absolute w-[150px] h-[67px] top-[91px] left-[5px]"
                alt="Vector"
                src="/vector-10.svg"
              />
              <img
                className="absolute w-[154px] h-[25px] top-px left-px"
                alt="Vector"
                src="/vector-22.svg"
              />
              <img
                className="absolute w-[154px] h-[23px] top-[3px] left-px"
                alt="Vector"
                src="/vector-26.svg"
              />
              <img
                className="absolute w-[156px] h-[134px] top-[25px] left-0"
                alt="Vector"
                src="/vector-29.svg"
              />
              <img
                className="absolute w-[55px] h-[55px] top-[38px] left-[50px]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[47px] h-[51px] top-[42px] left-[59px]"
                alt="Vector"
                src="/vector-11.svg"
              />
              <img
                className="absolute w-[86px] h-4 top-[106px] left-[35px]"
                alt="Vector"
                src="/vector-40.svg"
              />
              <img
                className="absolute w-[86px] h-4 top-[106px] left-[35px]"
                alt="Vector"
                src="/vector-28.svg"
              />
              <img
                className="absolute w-[156px] h-[26px] top-0 left-0"
                alt="Vector"
                src="/vector-70.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[11px] left-2.5"
                alt="Vector"
                src="/vector-23.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[11px] left-[22px]"
                alt="Vector"
                src="/vector-23.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[11px] left-[34px]"
                alt="Vector"
                src="/vector-23.svg"
              />
              <img
                className="absolute w-[30px] h-1.5 top-[11px] left-[11px]"
                alt="Vector"
                src="/vector-66.svg"
              />
              <img
                className="absolute w-8 h-2 top-2.5 left-2.5"
                alt="Vector"
                src="/vector-50.svg"
              />
              <img
                className="absolute w-[38px] h-4 top-[132px] left-[59px]"
                alt="Vector"
                src="/vector-19.svg"
              />
              <img
                className="absolute w-[38px] h-4 top-[132px] left-[59px]"
                alt="Vector"
                src="/vector-30.svg"
              />
              <img
                className="absolute w-[87px] h-[18px] top-[105px] left-[34px]"
                alt="Vector"
                src="/vector-27.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[111px] left-[43px]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-[42px]"
                alt="Vector"
                src="/vector-32.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[111px] left-[53px]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-[53px]"
                alt="Vector"
                src="/vector-38.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[111px] left-16"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-16"
                alt="Vector"
                src="/vector-32.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[111px] left-[75px]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-[74px]"
                alt="Vector"
                src="/vector-32.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[111px] left-[86px]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-[85px]"
                alt="Vector"
                src="/vector-32.svg"
              />
              <img
                className="absolute w-1.5 h-1.5 top-[111px] left-[97px]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-24"
                alt="Vector"
                src="/vector-32.svg"
              />
              <img
                className="absolute w-[7px] h-[7px] top-[110px] left-[107px]"
                alt="Group"
                src="/group.png"
              />
              <img
                className="absolute w-[39px] h-[18px] top-[132px] left-[58px]"
                alt="Group"
                src="/group-1.png"
              />
              <img
                className="absolute w-[41px] h-[50px] top-[43px] left-[55px]"
                alt="Group"
                src="/group-2.png"
              />
              <img
                className="absolute w-14 h-14 top-[37px] left-[50px]"
                alt="Group"
                src="/group-3.png"
              />
              <img
                className="absolute w-[85px] h-[72px] top-[121px] left-[171px]"
                alt="Group"
                src="/group-4.png"
              />
              <img
                className="absolute w-[67px] h-[119px] top-[84px] left-[138px]"
                alt="Group"
                src="/group-5.png"
              />
              <img
                className="absolute w-[33px] h-[55px] top-[148px] left-[138px]"
                alt="Group"
                src="/group-6.png"
              />
              <img
                className="absolute w-[38px] h-[99px] top-[104px] left-[146px]"
                alt="Group"
                src="/group-7.png"
              />
              <img
                className="absolute w-[52px] h-[51px] top-[87px] left-[300px]"
                alt="Group"
                src="/group-8.png"
              />
              <img
                className="absolute w-[52px] h-11 top-[18px] left-[266px]"
                alt="Group"
                src="/group-9.png"
              />
              <img
                className="absolute w-[74px] h-[122px] top-[186px] left-3"
                alt="Group"
                src="/group-10.png"
              />
            </div>
            <img
              className="absolute w-[52px] h-[21px] top-0 left-48"
              alt="Group"
              src="/group-11.png"
            />
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-none shadow-none">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col gap-3">
                <h2 className="font-heading-h2 text-[#293447] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)]">
                  Welcome to Modernize
                </h2>
                <p className="font-big text-[#293447] text-[length:var(--big-font-size)] tracking-[var(--big-letter-spacing)] leading-[var(--big-line-height)]">
                  Your admin dashboard
                </p>
              </div>

              {/* Social login buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {socialLogins.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex items-center justify-center gap-3 h-12 flex-1 bg-white border-[#eaeef4] rounded-lg"
                  >
                    <img
                      className="w-6 h-6"
                      alt={social.alt}
                      src={social.icon}
                    />
                    <span className="font-semibold text-[#293447] text-sm tracking-[-0.14px]">
                      Sign in with {social.name}
                    </span>
                  </Button>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <Separator className="flex-grow" />
                <span className="text-[#596a84] text-sm tracking-[-0.28px] font-normal">
                  or sign in with
                </span>
                <Separator className="flex-grow" />
              </div>

              {/* Login form */}
              <div className="flex flex-col gap-6">
                {/* Username field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="username"
                    className="font-semibold text-[#293447] text-sm tracking-[-0.14px]"
                  >
                    Username
                  </label>
                  <Input
                    id="username"
                    className="h-12 bg-white border-[#eaeef4] rounded-lg"
                  />
                </div>

                {/* Password field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="font-semibold text-[#293447] text-sm tracking-[-0.14px]"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    className="h-12 bg-white border-[#eaeef4] rounded-lg"
                  />
                </div>

                {/* Remember device and forgot password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-[#293447] text-sm tracking-[-0.28px] font-normal cursor-pointer"
                    >
                      Remember this device
                    </label>
                  </div>
                  <button className="font-semibold text-[#5d87ff] text-sm tracking-[-0.14px]">
                    Forgot password?
                  </button>
                </div>

                {/* Sign in button */}
                <Button className="w-full h-12 bg-[#5d87ff] text-white font-semibold text-base">
                  Sign In
                </Button>

                {/* Create account link */}
                <div className="flex items-center gap-2">
                  <span className="text-[#293447] text-sm tracking-[-0.28px] font-normal">
                    New to Modernize?
                  </span>
                  <button className="font-semibold text-[#5d87ff] text-sm tracking-[-0.14px]">
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
