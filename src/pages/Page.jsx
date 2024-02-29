import React, { useState , useRef, useEffect} from 'react';
import Accordion from '../components/Accordinate'; 
import '../App.css'
import { getpages } from '../firebase';

const getRelativeURL=(url)=>{
    let path = url.split("/");
    path = path.filter((p)=>p!=='');
    path = path.slice(1);
    return '/'+path.join('/');
}

const Page = () => {

    const [data, setData] = useState([]);
    const [loadError, setLoadError] = useState(false);

    useEffect(()=>{
        const relativePath = getRelativeURL(window.location.pathname);
        getpages(relativePath).then((d) => {
            console.log(d);
            setData(d);
        }).catch((e)=>{
            console.error(e);setLoadError(true);
        });
    },[]);

    if(!loadError){
    return(<div>
            {data.length<=0?"loading...":data[0].categories.map((d)=>(
                <div>
                    <h1 style={{fontSize:'xx-large',color:'red'}}>catagories</h1>
                    <label >name: </label><div style={{display:'inline'}}>{d.name}</div><br />
                    <label >desc: </label><p style={{display:'inline'}}>{d.description}</p><br />
                    <label >link: </label><a href={"/new"+d.link}>click hear to view page</a><br />
                    <hr />
                </div>
            ))}
            {data.length<=0?"...":data[0].files.map((d)=>(
                <div key={d.name}>
                    <h1 style={{fontSize:'xx-large',color:'red'}}>files</h1>
                    <label >name: </label><div style={{display:'inline'}}>{d.name}</div><br />
                    <label >type: </label><p style={{display:'inline'}}>{d.type}</p><br />
                    <audio controls>
                        <source src={d.link} type={d.type} />
                    </audio>
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    );
    }
    else{
        return(
            <div>
                Error!
            </div>
        );
    }

    // return (
    //     <div>
    //         {/* <h1>About</h1> */}
    //         <Accordion data={data} /> {/* corrected prop name */}
    //     </div>
    // );


}

export default Page;
