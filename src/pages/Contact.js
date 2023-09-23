import React from "react"


import ContactDetails from "../components/ContactPage/Contactdetails"
import ContactForm from "../components/ContactPage/ContactForm"
import contactImg from "../assets/contact.png"
import Footer from "../components/common/Footer"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">

         
          <img src={contactImg}
                alt="Contact Image"
                width={558}
                height={490}
                loading="lazy"
                className=' mt-0'
                />    
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>

      </div>
      
      <div className="h-[200px]"></div>
      <Footer/>
    </div>
  )
}

export default Contact