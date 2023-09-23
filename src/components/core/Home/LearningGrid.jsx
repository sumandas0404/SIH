import React from "react";
import CTAButton from "../Home/Button"
import image1 from "../../../assets/ruraledu.png"

const LearningGridArray = [
  {
    order: -1,
    heading: "DUMMY TEXTS",
    
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    BtnText: "Know More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    image: image1
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: image1
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: image1
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: image1
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: image1
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12  ">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-[#B2C2D3] h-[294px] text-[#263238]"
                : card.order % 2 === 0
                ? "bg-[#00336E] h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl text-[#00336E] font-bold mb-12 ">
                  {card.heading}
                  {/* <HighlightText text={card.highlightText} /> */}
                </div>
                <p className="text-richblack-800 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8 justify-center items-center ">
                
                {/* <h1 className="text-[white] font-bold underline text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p> */}
                <img src={card.image} className="w-full h-full hover:transition ease-in-out delay-170 hover:-translate-y-1 hover:scale-110  duration-300 hover:box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; " alt="" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;