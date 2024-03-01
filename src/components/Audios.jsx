import React from 'react'
import Accordion from './Accordinate';


const Audios = (props) => {    
    return (
        <>
            <section id='category'>
                <div className='py-12 px-8 md:px-16 bg-rose-100'>
                    <h1 className=' text-3xl md:text-4xl text-gray-700 font-semibold text-center my-8'>Listen To Audio</h1>
                    <Accordion data={props.data}></Accordion>
                </div>
            </section>
        </>
    );
}

export default Audios;