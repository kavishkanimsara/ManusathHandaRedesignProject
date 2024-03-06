import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import AboutModal from './AboutModal'
import { getpages } from '../firebase';

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
     <Hero/>
     <Categories/>
     <AboutModal/>
    </>
  )
}
export default LandingPage