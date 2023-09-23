import React from 'react'

import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    // console.log("ye rha mera form type");
    // console.log(formtype)
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 items-center'>

        <div className='w-11/12 max-w-[450px] ' >
            <h1
            className='text-[#053B50] font-bold text-[1.875rem] leading-[2.375rem]' 
            >
                {title}
            </h1>

            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-richblack-800 font-semibold'>{desc1}</span>
                <br/>
                <span className='text-blue-800 italic font-semibold'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[590px] '>
            {/* <img className='' src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/> */}

            <img src={image}
                alt="Students"
                width={600}
                height={550}
                loading="lazy"
                className=''
                />    
        </div>

    </div>
  )
}

export default Template
