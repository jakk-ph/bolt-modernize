import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for dashboard preview cards
const dashboardCards = [
  {
    id: 1,
    title: "App Directory Based",
    subtitle: "Next.Js 14 Admin Dashboard",
    features:
      "2 Dashboards,  9+ Apps , i18n Language, RTL, Dark, 6 Theme Options, Live customizer & much more",
    version: "v3.0",
    techIcons: [
      { src: "/image-15.png", alt: "Tech Icon 1" },
      { src: "/image-11.png", alt: "Tech Icon 2" },
      { src: "/image-12-2.png", alt: "Tech Icon 3" },
      { src: "/image-13.png", alt: "Tech Icon 4" },
      { src: "/image-14.png", alt: "Tech Icon 5" },
    ],
    previewImage: "/image-9-2.png",
    bgImage: "/mask-group.png",
  },
  {
    id: 2,
    title: "Vue3 + Vuetify Based",
    subtitle: "Admin Dashboard Template",
    features:
      "2 Dashboards,  9+ Apps , i18n Language, RTL, Dark, 6 Theme Options, Live customizer & much more",
    techIcons: [
      { src: "/image-16.png", alt: "Tech Icon 1" },
      { src: "/image-19.png", alt: "Tech Icon 2" },
      { src: "/image-20.png", alt: "Tech Icon 3" },
      { src: "/image-12-2.png", alt: "Tech Icon 4" },
      { src: "/image-21.png", alt: "Tech Icon 5" },
    ],
    previewImage: "/image-9-2.png",
    bgImage: "/mask-group-1.png",
  },
  {
    id: 3,
    title: "ASP.Net Core & MVC Bootstrap",
    subtitle: "Admin Dashboard",
    features:
      "2 Dashboards,  .Net Identity ready,  RTL, Dark, 6 Theme Options, Live customizer & much more",
    version: "v1.0",
    techIcons: [
      { src: "/image-22.png", alt: "Tech Icon 1" },
      { src: "/image-23.png", alt: "Tech Icon 2" },
      { src: "/image-12-2.png", alt: "Tech Icon 3" },
      { src: "/image-17-2.png", alt: "Tech Icon 4" },
      { src: "/image-24.png", alt: "Tech Icon 5" },
    ],
    previewImage: "/image-9-2.png",
    bgImage: "/mask-group-2.png",
  },
];

// Data for technology option cards
const technologyCards = [
  {
    id: 1,
    tech: "Next.Js",
    description: "Typescript",
    buttonColor: "bg-[#5d87ff]",
    techColor: "text-[#5d87ff]",
    iconSrc: "/image-15.png",
  },
  {
    id: 2,
    tech: "VueJS",
    description: "Typescript",
    buttonColor: "bg-[#41b883]",
    techColor: "text-[#41b883]",
    iconSrc: "/image-16.png",
  },
  {
    id: 3,
    tech: "Bootstrap",
    description: "HTML",
    buttonColor: "bg-[#8913ff]",
    techColor: "text-[#8712fe]",
    iconSrc: "/image-17-2.png",
  },
  {
    id: 4,
    tech: "Angular 16+",
    description: "",
    buttonColor: "bg-[#db1f35]",
    techColor: "text-[#ff1111]",
    iconSrc: "/image-18.png",
  },
];

export const DashboardPreviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Dashboard preview cards */}
        <div className="flex flex-col gap-6">
          {dashboardCards.slice(0, 2).map((card) => (
            <Card
              key={card.id}
              className="relative h-auto border-none shadow-none"
            >
              <CardContent className="p-0 flex flex-row h-full bg-white">
                <div className="p-5 flex-1">
                  {/* Logo and brand */}
                  <div className="flex items-center h-[35px] mb-10">
                    <div className="relative w-[34px] h-[26px]">
                      <img
                        className="absolute w-[25px] h-[26px] top-0 left-0"
                        alt="Ellipse"
                        src="/ellipse-61.svg"
                      />
                      <img
                        className="absolute w-[25px] h-[26px] top-0 left-[9px]"
                        alt="Ellipse"
                        src="/ellipse-62.svg"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="font-bold text-[#293447] text-base leading-5">
                        Modernize
                      </div>
                      <div className="font-light text-black text-[8px] leading-5">
                        by AdminMart
                      </div>
                    </div>

                    {card.version && (
                      <Badge className="ml-4 h-3.5 bg-[#ff7b7b] rounded-[30px] px-2">
                        <span className="text-white text-[7px] font-semibold">
                          {card.version}
                        </span>
                      </Badge>
                    )}
                  </div>

                  {/* Title and description */}
                  <div className="mb-6">
                    <div className="text-[#2a3447] text-xl">
                      <span className="font-bold leading-6">{card.title}</span>
                      <br />
                      <span className="font-light text-base leading-6">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="text-[#2a3447] text-[10px] leading-5 mb-8">
                    {card.features.split(",").map((feature, index) => {
                      // Check if the feature contains a number at the beginning
                      const hasNumber = /^\s*\d+/.test(feature);
                      const parts = feature.trim().split(" ");

                      if (hasNumber) {
                        return (
                          <span key={index}>
                            <span className="font-extrabold">{parts[0]}</span>
                            <span className="font-light">
                              {parts.slice(1).join(" ")}
                            </span>
                            {index < card.features.split(",").length - 1 && ","}
                          </span>
                        );
                      } else if (feature.includes("i18n")) {
                        return (
                          <span key={index}>
                            <span className="font-extrabold"> i18n</span>
                            <span className="font-light"> Language</span>
                            {index < card.features.split(",").length - 1 && ","}
                          </span>
                        );
                      } else {
                        return (
                          <span key={index} className="font-light">
                            {feature}
                            {index < card.features.split(",").length - 1 && ","}
                          </span>
                        );
                      }
                    })}
                  </div>

                  {/* Technology icons */}
                  <div className="flex items-center gap-3">
                    {card.techIcons.map((icon, index) => (
                      <img
                        key={index}
                        className="h-5 object-contain"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                  </div>
                </div>

                {/* Preview image */}
                <div
                  className="w-[262px] h-[300px] bg-[#f1f5ff]"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  <img
                    className="w-[149px] h-[286px] m-2 object-cover"
                    alt="Dashboard Preview"
                    src={card.previewImage}
                  />
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Third dashboard card */}
          <Card className="relative h-auto border-none shadow-none">
            <CardContent className="p-0 flex flex-row h-full bg-white">
              <div className="p-5 flex-1">
                {/* Logo and brand */}
                <div className="flex items-center h-[35px] mb-10">
                  <div className="relative w-[34px] h-[26px]">
                    <img
                      className="absolute w-[25px] h-[26px] top-0 left-0"
                      alt="Ellipse"
                      src="/ellipse-61.svg"
                    />
                    <img
                      className="absolute w-[25px] h-[26px] top-0 left-[9px]"
                      alt="Ellipse"
                      src="/ellipse-62.svg"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-[#293447] text-base leading-5">
                      Modernize
                    </div>
                    <div className="font-light text-black text-[8px] leading-5">
                      by AdminMart
                    </div>
                  </div>

                  <Badge className="ml-4 h-3.5 bg-[#ff7b7b] rounded-[30px] px-2">
                    <span className="text-white text-[7px] font-semibold">
                      {dashboardCards[2].version}
                    </span>
                  </Badge>
                </div>

                {/* Title and description */}
                <div className="mb-6">
                  <div className="text-[#2a3447] font-bold text-base leading-6">
                    {dashboardCards[2].title}
                    <br />
                    {dashboardCards[2].subtitle}
                  </div>
                </div>

                {/* Features */}
                <div className="text-[#2a3447] text-[10px] leading-5 mb-8">
                  {dashboardCards[2].features
                    .split(",")
                    .map((feature, index) => {
                      // Check if the feature contains a number at the beginning
                      const hasNumber = /^\s*\d+/.test(feature);
                      const parts = feature.trim().split(" ");

                      if (hasNumber) {
                        return (
                          <span key={index}>
                            <span className="font-extrabold">{parts[0]}</span>
                            <span className="font-light">
                              {parts.slice(1).join(" ")}
                            </span>
                            {index <
                              dashboardCards[2].features.split(",").length -
                                1 && ","}
                          </span>
                        );
                      } else {
                        return (
                          <span key={index} className="font-light">
                            {feature}
                            {index <
                              dashboardCards[2].features.split(",").length -
                                1 && ","}
                          </span>
                        );
                      }
                    })}
                </div>

                {/* Technology icons */}
                <div className="flex items-center gap-3">
                  {dashboardCards[2].techIcons.map((icon, index) => (
                    <img
                      key={index}
                      className="h-5 object-contain"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>

              {/* Preview image */}
              <div
                className="w-[262px] h-[300px] bg-[#f1f5ff]"
                style={{
                  backgroundImage: `url(${dashboardCards[2].bgImage})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <img
                  className="w-[149px] h-[286px] m-2 object-cover"
                  alt="Dashboard Preview"
                  src={dashboardCards[2].previewImage}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Technology option cards */}
        <div className="flex flex-col gap-6">
          {technologyCards.map((card) => (
            <Card
              key={card.id}
              className="rounded-3xl border border-solid border-[#cccccc3d]"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6 h-[110px]">
                  <div className="flex flex-col gap-4">
                    {/* Logo and brand */}
                    <div className="flex items-center">
                      <div className="relative w-[34px] h-[26px]">
                        <img
                          className="absolute w-[25px] h-[26px] top-0 left-0"
                          alt="Ellipse"
                          src="/ellipse-61.svg"
                        />
                        <img
                          className="absolute w-[25px] h-[26px] top-0 left-[9px]"
                          alt="Ellipse"
                          src="/ellipse-62.svg"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="font-bold text-[#293447] text-base leading-5">
                          Modernize
                        </div>
                        <div className="font-light text-black text-[8px] leading-5">
                          by AdminMart
                        </div>
                      </div>
                    </div>

                    {/* Technology description */}
                    <div className="text-base leading-6">
                      <span className="font-bold text-[#2a3447]">
                        Also Available in{" "}
                      </span>
                      <span className={`font-bold ${card.techColor}`}>
                        {card.tech}
                      </span>
                      {card.description && (
                        <span className="text-[#2a3447]">
                          {" "}
                          {card.description}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Technology icon */}
                    <img
                      className="w-12 h-12 object-contain"
                      alt={`${card.tech} Icon`}
                      src={card.iconSrc}
                    />

                    {/* Action button */}
                    <Button
                      className={`${card.buttonColor} text-white rounded-3xl h-[52px] w-[158px]`}
                    >
                      Check Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
