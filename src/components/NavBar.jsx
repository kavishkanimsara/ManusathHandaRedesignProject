
import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import manusath_handa_logo from '../assets/manusath_handa_logo.png'
import SideNav from './SideNav'

const NavBar = () => {
    const [nav,setNav]= useState(false)
  const handleNav = ()=>{
    setNav(!nav);
  }
  const navLinkStyle= ({isActive}) =>{
    return {
      fontWeight: isActive? 'bold' : 'normal',

    }
  }
  return (
    <div>
         <div className=' text-gray-700 justify-between flex h-24 items-center  mx-8 px-4 md:px-16 md:mx-16 my-3 py-3'>
    <div>
    <SideNav/>
        <img src={manusath_handa_logo} alt="manusath_handa_logo" className='h-auto hidden md:block md:max-w-sm' />
    </div>
    <ul className=' hidden md:flex font-medium text-lg gap-8'>
            <li><NavLink className="text-lg  text-gray-700 hover:text-[#FF0064]"  style={navLinkStyle} to='/'>Home</NavLink></li>
            <li><NavLink className="text-lg text-gray-700 hover:text-[#FF0064]"  style={navLinkStyle} to='/about'>Category</NavLink></li>
            <li><NavLink className="text-lg text-gray-700 hover:text-[#FF0064]"  style={navLinkStyle} to='/projects'>About</NavLink></li>
            <li><NavLink className="text-lg text-gray-700 hover:text-[#FF0064]"  style={navLinkStyle} to='/blog'>Our Team</NavLink></li>
            
    </ul>
   
    <div className=' flex items-center gap-8'>
    <button className='py-3 px-4 md:px-8 rounded-full bg-gradient-to-b from-[#FF0064] to-[#D60070] text-white text-sm font-semibold'>Donate Voice</button>
        </div>

    </div>
    </div>
  )
}

export default NavBar