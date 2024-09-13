import React, { useState, useEffect} from 'react';
import '../App.css'
import { getpages, getRelativeURL } from '../firebase';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar';
import Audios from '../components/Audios';
import ReactGA from 'react-ga4';

import Footer from '../components/Footer';


const Category = () => {

    ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: "Categories" });

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
                    <Footer />
                    </>
                )
            }
            if(data[0].categories.length>0){
                return(
                    <>
                    <NavBar />
                    <Categories categoryData={data[0].categories} />
                    <Footer />
                    </>
                )
            }
            if(data[0].files.length>0){
                return(
                    <>
                    <NavBar />
                    <Audios data={data[0].files}></Audios>
                    <Footer />
                    </>
                )
            }
            else{
                return(
                    <>
                    <NavBar />
                    <div className='py-12 px-8 md:px-16 bg-rose-100'>
                        <div className=' flex flex-wrap gap-8 justify-center'>
                        <div className="bg-orange-100 border border-orange-500 text-orange-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Sorry ! </strong>
                            <span className="block sm:inline">Page content is not yet uploaded</span>
                        </div>
                        </div>
                    </div>
                    <Footer />
                    </>
                );
            }


        }
        else{
                return(
                    <>
                    <NavBar />
                    <div className='py-12 px-8 md:px-16 bg-rose-100' style={{paddingTop:'20%',paddingBottom:'20%'}}>
                        <div className=' flex flex-wrap gap-8 justify-center'>
                            <span className='relative flex h-5 w-5'>
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            </span>
                        </div>
                    </div>
                    <Footer />
                    </>
                );
        }        



    }
    else{
        return(
            <>
            <NavBar />
            <div className='py-12 px-8 md:px-16 bg-rose-100'>
                <div className=' flex flex-wrap gap-8 justify-center'>
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error ! </strong>
                        <span className="block sm:inline">can't load the content</span>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }

}

export default Category;



