import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { DashboardPreviewSection } from "./sections/DashboardPreviewSection/DashboardPreviewSection";
import { LoginSection } from "./sections/LoginSection/LoginSection";
import { SignUpSection } from "./sections/SignUpSection";

export const Frame = (): JSX.Element => {
  // Technology badges data
  const techBadges = [
    {
      id: 1,
      name: "NextJs",
      icon: "/vector-105.svg",
      groupIcon: "/group-24.png",
    },
    {
      id: 2,
      name: "ASP.Net",
      icon: "/vector-105.svg",
      groupIcon: "/group-25.png",
    },
  ];

  // Sidebar icons data
  const sidebarIcons = [
    {
      id: 1,
      src: "/group-26.png",
      style: "w-[20.33px] h-5 bg-[100%_100%]",
      type: "div",
    },
    { id: 2, src: "/frame.svg", style: "w-[18.98px] h-5", type: "img" },
    { id: 3, src: "/frame-1.svg", style: "w-5 h-5", type: "img" },
    {
      id: 4,
      src: "/image-21-1.png",
      style: "w-5 h-5 object-cover",
      type: "img",
    },
    { id: 5, src: "/layer-1.svg", style: "w-[13.33px] h-5", type: "img" },
  ];

  return (
    <main className="bg-transparent flex flex-col justify-center w-full">
      <div className="w-full relative">
        {/* Main sections */}
        <section className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex-1">
            <LoginSection />
          </div>
          <div className="flex-1">
            <SignUpSection />
          </div>
        </section>

        <section className="flex flex-col md:flex-row w-full gap-4 mt-8">
          <div className="flex-1">
            <DashboardPreviewSection />
          </div>

          <div className="flex flex-row gap-4">
            {/* Technology badges */}
            {techBadges.map((badge) => (
              <Card key={badge.id} className="w-20 h-20 bg-[#eaf4fc]">
                <CardContent className="p-0 h-full flex flex-col items-center justify-between">
                  <div className="w-[42px] h-8 mt-[17px]">
                    <div className="relative h-8">
                      <img
                        className="absolute w-[31px] h-8 top-0 left-0"
                        alt="Vector"
                        src={badge.icon}
                      />
                      <img
                        className="absolute w-[31px] h-8 top-0 left-[11px]"
                        alt="Group"
                        src={badge.groupIcon}
                      />
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-3 font-bold text-blackblack text-base bg-transparent border-0"
                  >
                    {badge.name}
                  </Badge>
                </CardContent>
              </Card>
            ))}

            {/* Dashboard preview with sidebar */}
            <Card className="w-[520px] h-[286px] [background:linear-gradient(180deg,rgba(221,225,235,1)_0%,rgba(254,254,254,1)_100%)] relative">
              <CardContent className="p-0 h-full">
                {/* Sidebar */}
                <div className="flex flex-col w-[50px] h-full items-center absolute top-0 left-0 bg-[#ffffff] overflow-hidden shadow-[0px_0px_36.6px_#858da43b]">
                  <div className="flex flex-col items-center justify-center gap-1 px-2 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff]">
                    {sidebarIcons.map((icon) => (
                      <div
                        key={icon.id}
                        className="flex w-7 h-7 items-center justify-center relative rounded-[96px] overflow-hidden"
                      >
                        {icon.type === "div" ? (
                          <div
                            className={`relative ${icon.style}`}
                            style={{ backgroundImage: `url(${icon.src})` }}
                          />
                        ) : (
                          <img
                            className={`relative ${icon.style}`}
                            alt={`Icon ${icon.id}`}
                            src={icon.src}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2.5 px-2.5 py-0 relative flex-1 self-stretch w-full grow ml-[-24.00px] mr-[-24.00px] bg-[#ffffff] border-r [border-right-style:solid] border-[#e1e3ea] -rotate-90">
                    <div className="relative w-fit font-semibold text-[#2a3447] text-[11px] text-center tracking-[0] leading-[normal]">
                      App Router
                    </div>
                  </div>
                </div>

                {/* Dashboard preview */}
                <div className="absolute w-[450px] h-[286px] top-0 left-[70px]">
                  <div className="absolute w-[431px] h-[249px] top-[19px] left-0 bg-[#ffffff] rounded-lg shadow-[0px_8px_50px_-10px_#585e6f30]" />
                  <div className="absolute w-[149px] h-[286px] top-0 left-[301px] bg-[#151b25]" />
                  <img
                    className="absolute w-[431px] h-[267px] top-[19px] left-0"
                    alt="Dashboard preview"
                    src="/group-7-1.png"
                  />
                  <div className="absolute w-[9px] h-[30px] top-64 left-0 bg-[#ffffff]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};
