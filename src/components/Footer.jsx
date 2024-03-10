import React from 'react';
import embemOfSrilanka from '../assets/Emblem_of_Sri_Lanka.png';
import { MdCall,MdAlternateEmail  } from "react-icons/md";
import { FaTwitter,FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import rotractWhiteLogo from '../assets/white logo2.png'
const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-8 px-4 md:px-0">
      <div className="container mx-auto">
        <div className=" md:flex justify-between">
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-white">Related Links</h4>
            <div className="flex items-center mb-4 ">
              <img className="w-12 md:w-16" alt="Sri Lanka National Emblem" src={embemOfSrilanka} />
              <p className=' px-4'>This E library is accredited by the <a href="https://doenets.lk/" className=" hover:text-red-700">Department of Examinations of Sri Lanka</a></p>
            </div>
            <h4 className="text-lg font-bold text-white">About Us</h4>
            <p className="mb-4">Rotaract Mora has grown tremendously to a present member base of over 250 members. Rotaract Mora over the years has earned much recognition in the Rotaract movement, bagging multiple local, as well as international awards, and doing projects with high quality, sustainability and continuity.</p>
          </div>

          <div className="w-full lg:w-1/3 md:flex justify-end">
          <div>
              <h4 className="text-lg font-bold mb-4 text-white">Reach Us</h4>
              <ul className="mb-4">
                <li className="mb-2 ">
                  Rotaract Club of University of Moratuwa,<br /> University of Moratuwa,<br /> Bandaranayake Mawatha,<br /> Moratuwa. <br /> 10400
                </li>
                <li>
                  <div className='mb-4'>
                      <p className=' font-medium text-white mb-2'>Janith Bimsara</p>
                      <div className=' flex gap-3  text-sm items-center'>
                          <MdCall  size={22}/>
                          <a href="tel:+94719108576" className=" hover:text-red-700">(+94)71 910 8576</a><br />
                      </div>
                      <div className=' flex gap-3  text-sm items-center'>
                          <MdAlternateEmail  size={22}/>
                          <a href="mailto:jbimsara98@gmail.com" className=" hover:text-red-700">jbimsara98@gmail.com</a><br />
                      </div>
                      
                  </div>
                  <div>
                      <p className=' font-medium text-white mb-2'>Sithira Liyanage</p>
                      <div className=' flex gap-3  text-sm items-center'>
                          <MdCall  size={22}/>
                          <a href="tel:+94712998848" className=" hover:text-red-700">(+94)71 299 8848</a><br />
                      </div>
                      <div className=' flex gap-3  text-sm items-center'>
                          <MdAlternateEmail  size={22}/>
                          <a href="mailto:sithiraliyanage@gmail.com" className=" hover:text-red-700">sithiraliyanage@gmail.com</a>
                      </div>      
                  </div>
                </li>
              </ul>
          </div>
          </div>
          <div className="w-full md:w-1/3 md:flex justify-center">
            <div>
                <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
                <ul className="mb-4">
                  <li className='flex gap-3 '><FaTwitter /><a href="https://twitter.com/RotaractMora" className=" hover:text-red-700"> Twitter</a></li>
                  <li className='flex gap-3 '><FaFacebook /> <a href="https://www.facebook.com/rotaractmora/" className=" hover:text-red-700">Facebook</a></li>
                  <li className='flex gap-3 '><FaInstagram /><a href="https://www.instagram.com/rotaractmora/" className=" hover:text-red-700"> Instagram</a></li>
                  <li className='flex gap-3 '><FaLinkedin/><a href="https://www.linkedin.com/company/rotaract-club-of-university-of-moratuwa/about/" className=" hover:text-red-700">LinkedIn</a></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center ">
          &copy; 2024
          <a href="http://rotaractmora.org" className="block mt-4">
            <img src={rotractWhiteLogo} className="w-32 mx-auto" alt="Rotaract Club of University of Moratuwa" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
