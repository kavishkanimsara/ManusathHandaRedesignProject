import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    
    const navLinkStyle= ({isActive}) =>{
      return {
        fontWeight: isActive? 'bold' : 'normal',
  
      }
    }
    return (
      <section className="md:hidden font-poppins">
        <div className="max-w-6xl px-4 mx-auto">
          <nav className="flex items-center justify-between py-4">
            <div className="lg:flex">
              <button
                className="flex items-center px-3 py-2 text-primary border border-primary rounded navbar-burger hover:text-blue-800 hover:border-blue-300"
                onClick={toggleNavbar}
              >
                <IoMenu />
              </button>
            </div>
            <div className="hidden lg:block flex-none">
          
            </div>
          </nav>
          {/* Mobile Sidebar */}
          {isOpen && (
            <>
              <div className="fixed inset-0 w-full bg-gray-800 opacity-50 dark:bg-gray-500" onClick={toggleNavbar}></div>
              <div
                className={`fixed inset-0 z-10 h-screen p-3 text-red-400 transform bg-red-50 dark:bg-gray-800 w-80 lg:w-96 lg:block transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div className="px-4">
                  <div className="flex justify-end">
                    <button className="p-2 text-gray-700 rounded-md lg:block" onClick={toggleNavbar}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        className="bi bi-x-circle text-red-600" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                  <ul className="text-left mt-7">
                  <li className=' my-4'><NavLink className="text-sm text-gray-700 hover:text-blue-700"  style={{navLinkStyle}} to='/'>Home</NavLink></li>
                  <li className=' my-4'><AnchorLink className="text-sm text-gray-700 hover:text-blue-700" onClick={toggleNavbar} style={{navLinkStyle}} href='#category'>Category</AnchorLink></li>
                  <li className=' my-4'><AnchorLink className="text-sm text-gray-700 hover:text-blue-700" onClick={toggleNavbar} style={{navLinkStyle}} href='#about'>About</AnchorLink></li>
                  <li className=' my-4'><NavLink className="text-sm text-gray-700 hover:text-blue-700"  style={{navLinkStyle}} to='/team'>Our Team</NavLink></li>
                    {/* Add similar list items for other links */}
                  </ul>
                
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    )
  }
  
  export default SideNav