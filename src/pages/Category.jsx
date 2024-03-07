import React, { useState, useEffect} from 'react';
import '../App.css'
import { getpages, getRelativeURL } from '../firebase';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar';
import Audios from '../components/Audios';


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
        
        
        if(data.length>0){
            if(data[0].categories.length>0 && data[0].files.length>0){
                return(
                    <>
                    <NavBar />
                    <Categories categoryData={data[0].categories} />
                    <Audios data={data[0].files}></Audios>
                    </>
                )
            }
            if(data[0].categories.length>0){
                return(
                    <>
                    <NavBar />
                    <Categories categoryData={data[0].categories} />
                    </>
                )
            }
            if(data[0].files.length>0){
                return(
                    <>
                    <NavBar />
                    <Audios data={data[0].files}></Audios>
                    </>
                )
            }
            else{
                return(
                    <>
                    <NavBar />
                    <div style={{textAlign:'center',padding:'50px 0px',height:'100px',position:'relative'}}>No Files or folders</div>
                    </>
                );
            }


        }
        else{
                return(
                    <>
                    <NavBar />
                    <div style={{textAlign:'center',padding:'50px 0px',height:'100px',position:'relative'}}>Loading...</div>
                    </>
                );
        }        



    }
    else{
        return(
            <>
            <NavBar />
            <div>Error!</div>
            </>
        );
    }

}

export default Category;



