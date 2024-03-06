import React from 'react'

const AboutUs = ({imageUrl, description , title}) => {
    return (
        <div>
            <div className=" block md:grid grid-cols-3 items-start bg-white md:flex-row md:max-w-full md:justify-between px-12 py-12">
                <div>
                    <img src={imageUrl}
                    alt={title}
                    className='w-full rounded-md object-cover'
                    
                    />
                </div>
                <div class="col-span-2 justify-between py-4 px-8 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs