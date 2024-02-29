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
      {(loadError) ? (<div>Error!</div>) : (

      data.length>0?<Categories categoryData={data[0].categories} />:<div>Loading...</div>
      
      )}
      <AboutUs />
    </>
  )
}

export default LandingPage