import React, { useState } from 'react';
import Accordion from '../components/Accordinate'; // corrected import
import '../App.css'
import NavBar from '../components/NavBar';

const Page = () => {
    const [data, setData] = useState([
        { 
            id: '1',
            title: 'අභ්‍යවකාශය',
            body: 'new',
            record: [
                { topic: 'rec-1', rec: ['recording-1', 'recording-2'] },
                { topic: 'rec-2', rec: ['recording-3'] }
            ]
        },
        { 
            id: '2',
            title: 'ඉතිහාසය',
            body: 'new1',
            record: [
                { topic: 'rec-2', rec: ['recording-4'] }
            ]
        },
        { 
            id: '3',
            title: 'කලාව හා ආගම',
            body: 'new2',
            record: [
                { topic: 'rec-3', rec: ['recording-5', 'recording-6'] }
            ]
        }
    ]);



    return (
        <div>
            <NavBar/>
            {/* <h1>About</h1> */}
            <Accordion data={data} /> {/* corrected prop name */}
        </div>
    );
}

export default Page;
