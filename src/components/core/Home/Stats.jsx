import React from "react";

const Stats = [
  { count: "5K", label: "Active Users" },
  { count: "10+", label: "App Users" },
  { count: "200+", label: "Courses Registered" },
  { count: "50+", label: "NGO Registered" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-[#00336E] w-full">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-full max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[30px] font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;