import React, { useState , useRef, useEffect} from 'react';
import Accordion from '../components/Accordinate'; 
import '../App.css'


const Page = () => {

    const [data, setData] = useState([]);



    return (
        <div>
            {/* <h1>About</h1> */}
            <Accordion data={data} /> {/* corrected prop name */}
        </div>
    );


}

export default Page;
