import React from 'react'
import Home from './home/Home'
import Courses from './course/Courses'
import Signup from './components/Signup'
import {Route,Routes} from "react-router-dom"
import ContactUs from './contact/ContactUs'
import About from './about/About'

function App() {
  return (
    <>
    
    <div className=' dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses/>} />
       <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<About/>} />
     </Routes>
     </div>
      
   
    </>
  )
}

export default App
