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
        imageUrl: 'https://www.english-study-online.com/wordpress/wp-content/uploads/2019/04/ECFF9F3B-9C38-40E3-8FFF-E92708518FC0-300x166.jpeg',
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
    

     {(loadError) ? (
    <div className='py-12 px-8 md:px-16 bg-rose-100'>
      <div className=' flex flex-wrap gap-8 justify-center'>
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error ! </strong>
          <span className="block sm:inline">can't load the content</span>
        </div>
      </div>
   </div>
     ) : (

data.length>0?<Categories categoryData={data[0].categories} />:
<div className='py-12 px-8 md:px-16 bg-rose-100'>
  <div className=' flex flex-wrap gap-8 justify-center'>
    <span className='relative flex h-5 w-5'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
    </span>
  </div>
</div>


)}
     <AboutModal/>
     <Footer/>
    </>
  )
}
export default LandingPage