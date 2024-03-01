import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Accordion from '../components/Accordinate'
import AboutUs from '../components/AboutUs'
import { getpages } from '../firebase'

const LandingPage = () => {

  const [data, setData] = useState([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    getpages("/").then((d) => {
      setData(d);
      console.log(data);
    }).catch((e) => {
      console.error(e); setLoadError(true);
    });
  }, []);



  return (
    <>
      <Hero />
      {(loadError) ? (<div style={{textAlign:'center',padding:'50px 0px',height:'100px',position:'relative'}}>Error!</div>) : (

      data.length>0?<Categories categoryData={data[0].categories} />:<div style={{textAlign:'center',padding:'50px 0px',height:'100px',position:'relative'}}>Loading...</div>
      
      )}
      <AboutUs />
    </>
  )
}

export default LandingPage