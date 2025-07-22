import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'    
import Footer from '../components/Footer'
import FreeBook from '../components/FreeBook'

function home() {
  return (
    <>

            <Navbar/>
      <div> <Banner/></div>
      <div><FreeBook/></div>
      <div><Footer/></div>
    
    </>
  )
}

export default home
