import React from 'react'
import CTAButton from "../../../components/core/Home/Button";
import { FaArrowRight } from "react-icons/fa";
import tutor from "../../../assets/tutor.jpg";


const TutorSection = () => {
  return (
    <div>
        <div className="flex flex-col w-11/12 p-20 m-auto lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={tutor}
              alt=""
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[80%] text-4xl font-bold ">
              Become a <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-5xl font-bold lg:w-[70%] ">Tutor</span>
              {/* <HighlightText text={"instructor"} /> */}
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            </p>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Become a Tutor
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TutorSection