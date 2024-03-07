import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import AboutModal from './AboutModal'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
     <Hero/>
     <Categories/>
     <AboutModal/>
     <Footer/>
    </>
  )
}
export default LandingPage