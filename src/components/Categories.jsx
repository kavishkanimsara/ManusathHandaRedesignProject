import React from 'react'
import { CategoryPath } from '../firebase';


const Categories = (props) => {
    return (
        <>
            <section id='category'>
                <div className='py-12 px-8 md:px-16 bg-rose-100'>
                    <h1 className=' text-3xl md:text-4xl text-gray-700 font-semibold text-center my-8'>Select Category</h1>
                    <div className=' flex flex-wrap gap-8 justify-center'>
                        { props.categoryData.map((data, index) => (
                            <div key={index} class="md:max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow ">
                                <a href={"/"+CategoryPath+data.link}>
                                    <img class="rounded-t-lg" src={data.imageUrl} alt={data.name + 'image'} />
                                </a>
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className=' flex-grow'>
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-800 ">{data.name}</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-sm text-gray-700">{data.description}</p>
                                    </div>
                                    <div className=' mt-auto'>
                                        <a href={"/"+CategoryPath+data.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-b from-primary to-[#D60070] rounded-full">
                                            Here Voice
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                
                    </div>
                </div>
            </section >
        </>
    )
                    
}

export default Categories