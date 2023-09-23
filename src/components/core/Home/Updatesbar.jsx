import React from 'react'
import "./Updates.css";
import { FaRegNewspaper } from "react-icons/fa";
const Updatesbar = () => {
  return (
    <div class="news-container">
        <div class="title">
            Latest Informations <FaRegNewspaper className='ml-3'/>
        </div>

        <ul>
            <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam! 
            </li>
            
            <li>
                Lorem ipsum dolor sit 
            </li>

            <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam!
            </li>
        </ul>
    </div>
  )
}

export default Updatesbar