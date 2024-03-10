import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import AboutModal from './AboutModal'
import { getpages } from '../firebase';
import Footer from '../components/Footer';

const LandingPage = () => {

  const [data, setData] = useState([]);
  const [loadError, setLoadError] = useState(false);


    //////////////////////////////////
   ////  fetch data from firebase ///
  //////////////////////////////////

  // useEffect(() => {
  //   getpages("/").then((d) => {
  //     setData(d);
  //     console.log(data);
  //   }).catch((e) => {
  //     console.error(e); setLoadError(true);
  //   });
  // }, []);


    ////////////////////////////////////
   // or get data from data object  ///
  ////////////////////////////////////


  const categoryData = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        name: 'MAGAZINES',
        description: 'Listen to an ever-growing collection of the most popular children\'s magazines in sinhala and tamil',
        link: '/magazines'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        name: 'PAST PAPERS',
        description: 'Listen to the past papers of G.C.E. O/L and G.C.E. A/L exams in sinhala and tamil mediums.',
        link: '/past_papers'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        name: 'SHORT STORIES',
        description: 'Listen to many short stories. They are fun and interesting. You can enjoy them whenever you want.',
        link: '/short_stories'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        name: 'Spoken English course - Andurata Athwelak',
        description: 'Listen to a series of a day to day conversions to improve your spoken english skills.',
        link: '/english_course'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        name: 'Basic Computer Knowledge course - Andurata Athwelak',
        description: 'Listen to a growing collection that gives basic computer knowledge for day to day life ',
        link: '/computer_knowledge'
    },
];

useEffect(() => {
  setData([{categories:categoryData}]);
}, []);


  // end 

  return (
    <>
     <Hero/>
     {(loadError) ? (<div style={{textAlign:'center',padding:'50px 0px',height:'100px',position:'relative'}}>Error!</div>) : (

data.length>0?<Categories categoryData={data[0].categories} />:<div style={{textAlign:'center',padding:'50px 0px',height:'100px',position:'relative'}}>Loading...</div>

)}
     <AboutModal/>
     <Footer/>
    </>
  )
}
export default LandingPage