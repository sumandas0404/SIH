import React from 'react'
import logo from "../../assets/Logo3.png"
import {Link, NavLink} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={35} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-[#A0A0A0] flex gap-x-6 text-lg'>
                <li className='hover:underline hover:text-[#00336E]'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='hover:underline hover:text-[#00336E]'>
                    <NavLink to="/Schemes">Schemes</NavLink>
                </li>
                <li className='hover:underline hover:text-[#00336E]'>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-[#00336E] text-[#EEEEEE] py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-[#00336E] text-[#EEEEEE] py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-[#00336E] text-[#EEEEEE] py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-[#00336E] text-[#EEEEEE] py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
