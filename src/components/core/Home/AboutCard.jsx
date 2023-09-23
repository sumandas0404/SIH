import React from "react"
import Heading from "../../common/Heading"
import "./about.css"
import { homeAbout } from "../../../data/dummydata"
import image from "../../../assets/roles.png"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={image} alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='DUMMY TEXTS' title='Descriptive Texts goes here :)' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default AboutCard