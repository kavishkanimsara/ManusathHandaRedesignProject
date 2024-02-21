import React from 'react'
import heroImage from '../assets/hero_headphone_image.png'
import NavBar from './NavBar'
const Hero = () => {
    return (
        <div>
            <div className='h-auto md:max-h-screen bg-white'>
                <NavBar />
                <div className='flex flex-col-reverse justify-between items-center  px-12 mx-auto md:mx-16  md:flex-row '
                >
                    <div className=' text-gray-700 py-8 md:w-1/2'>
                        <div className='text-center md:text-left'>
                            <h1 className='text-6xl md:text-7xl font-semibold '>e-<span className='text-[#FF0064] text-5xl md:text-6xl '>Library</span></h1>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl my-5 font-semibold '>The Smarter way</h2>
                            <h2 className='text-2xl sm:text-3xl md:text-5xl my-5 font-semibold '>To Learn <span className=' text-[#FF0064]'>Anything</span></h2>
                        </div>
                        <div className=' my-3 font-normal text-center md:text-left '>
                            <p className='md:pr-12'>An initiative of <span className=' text-[#FF0064]'>Rotaract Mora</span> to uplift the education for the
                                visually impaired students through audiobooks.</p>
                        </div>
                        <div>
                        </div>
                        
                        <div className='mx-12 md:mx-0'>
                            <button className='py-3 mt-8 px-8 rounded-full bg-gradient-to-b from-[#FF0064] to-[#D60070] text-white font-medium '>Start Learning</button>
                        </div>

                    </div>
                    <div className=''>
                        <img src={heroImage} alt='/' className='mx-auto h-[350px] md:h-[480px]  '></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero