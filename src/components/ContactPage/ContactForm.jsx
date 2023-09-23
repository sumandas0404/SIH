import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col bg-[#B2C2D3]">
      <h1 className="text-4xl leading-10 font-bold text-[#263238]">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </h1>
      <p className="text-[#263238] font-semibold">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;