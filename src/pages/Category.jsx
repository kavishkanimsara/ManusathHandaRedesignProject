import React, { useState, useEffect} from 'react';
import '../App.css'
import { getpages, getRelativeURL } from '../firebase';
import Categories from '../components/Categories';


const Category = () => {

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


           {(loadError) ? (<div>Error!</div>) : (
            data.length>0?<Categories categoryData={data[0].categories} />:<div>Loading...</div>
            )}



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

}

export default Category;
