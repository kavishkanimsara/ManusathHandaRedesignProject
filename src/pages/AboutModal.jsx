import React from 'react'
import { Carousel } from 'flowbite-react';
import AboutUs from '../components/AboutUs';
const aboutData = [
    {
        title: 'What is Manusath Handa?',
        imageUrl: 'https://blog.rotaractmora.org/content/images/wordpress/slider173/manusathhanda1.jpeg',
        description: 'An initiative of Rotaract Mora to uplift the education for the visually impaired students through audiobooks'
    },
    {
        title: 'What is Manusath Handa?',
        imageUrl: 'https://manusathhanda.rotaractmora.org/images/photo%20manusath2.jpg',
        description: 'This project intends to provide massive support for the visually impaired students in Sri Lanka by offering them audiobooks that cover the subject matter which they learn using the Braille technique. It has been discovered that audiobooks are far more effective, comfortable and can cover the content in a commendable manner while helping the students to hear and learn beyond what they have imagined.'
    },
    {
        title: 'What is Manusath Handa?',
        imageUrl: 'https://blog.rotaractmora.org/content/images/wordpress/slider173/manusathhanda1.jpeg',
        description: 'මෙම ව්‍යාපෘතිය ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුවේ සහ විජය පුවත්පත් සමාගමේ අවසරය මත සිදු කරන ලද්දකි.'
    },
    {
        title: 'What is Manusath Handa?',
        imageUrl: 'https://manusathhanda.rotaractmora.org/images/photo%20manusath2.jpg',
        description: 'මනුසත් හඬ යනු ශ්‍රී ලංකාවේ දෘශ්‍යාබාධිත සිසුන්ගේ අධ්‍යාපනික හා සාහිත්‍යමය දැනුම වර්ධනය කරලීම සඳහා මොරටුව විශ්ව විද්‍යාලයේ රොටරැක්ට් සමාජය විසින් කරනු ලබන සමාජ සත්කාරක ව්‍යාපෘතියකි'
    }

]
const AboutModal = () => {

    return (
        <>
            <div className="h-[100vh] sm:h-64 xl:h-80 2xl:h-98 my-8 ">
                <Carousel>
                    {aboutData.map((data, index) => (
                        <div key={index}>
                            <AboutUs title={data.title} imageUrl={data.imageUrl} description={data.description} />
                        </div>
                    ))}

                </Carousel>
            </div>
        </>
    )
}

export default AboutModal