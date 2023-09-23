import React from 'react'
import Slider from "../components/core/Slider/Slider"
import image from "../assets/homeimg.png"
import StatsComponent from '../components/core/Home/Stats'
import LearningGrid from "../components/core/Home/LearningGrid"
import TutorSection from "../components/core/Home/TutorSection"
import Footer from "../components/common/Footer"
import card1 from "../assets/a.jpg"
import card2 from "../assets/b.jpg"
import card3 from "../assets/c.jpg"
import UpdateBar from "../components/core/Home/Updatesbar"
import Roles from "../components/core/Home/AboutCard"

const Home = ({isLoggedIn}) => {
  return (
    <div>
      {/* Section 1 */}
      <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black mt-2'>
        <Slider/>
      </div>
        <UpdateBar />
      <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black mt-2'>
          <section>
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
              <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                <h1 className="bg-gradient-to-br from-[#1FA2FF] via-[#00336E] to-[#1FA2FF] bg-clip-text text-5xl font-bold text-transparent lg:w-[70%] ">
                  About Disha - 
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                </p>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                </p>
              </div>

              <div>
                <img
                  src={image}
                  alt="About us Image"
                  className="shadow-[0_0_20px_0] shadow-[#00336E] rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#00336E] via-[#12D8FA] to-[#00336E] bg-clip-text text-5xl font-bold text-transparent lg:w-[70%] ">
                  Our Vision
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                </p>
              </div>
              <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-b from-[#00336E] via-[#12D8FA] to-[#00336E] text-transparent bg-clip-text text-5xl font-bold lg:w-[70%] ">
                Our Mission
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
        

     
      <StatsComponent/>
      <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black mt-2'>

      {/* Section 2 */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        
      </section>
      </div>
       {/* Section 3 */}
       <Roles />
       <div className="relative mx-auto my-0 flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-[#00336E] text-white">
        {/* Become a instructor section */}
        
        

              <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-black mt-2'>

              <section className="">
              <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                <header className="mx-auto py-20 text-5xl font-bold lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetuer.
                <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-5xl font-bold lg:w-[80%] text-center items-center ">
                Lorem ipsum dolor
                </span>
                  {/* <HighlightText text={"Brighter Future"} /> */}
                  <p className="mx-auto mt-10 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                  </p>
                </header>
                <div className="sm:h-[70px] lg:h-[150px]"></div>
                <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5 z-1">
                  <img src={card2} alt="" className='shadow-[0_0_20px_0] shadow-[#00336E]' />
                  <img src={card2} alt="" className='shadow-[0_0_20px_0] shadow-[#00336E]' />
                  <img src={card2} alt="" className='shadow-[0_0_20px_0] shadow-[#00336E]' />
                </div>
              </div>
            </section>

              </div>
        <section className="border-b border-[#B2C2D3]">
        <Footer />
        </section>
        </div>
        {/* <div className='relative mx-auto my-20 flex w-full  max-w-maxContent flex-col items-center justify-between gap-8 bg-[#B2C2D3] text-white z-0'> */}
               
        {/* </div> */}


      

    </div>
    
  )
}

export default Home
