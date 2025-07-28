import React from 'react'
import Home from './home/Home'
import Courses from './course/Courses'
import Signup from './components/Signup'
import {Navigate, Route,Routes} from "react-router-dom"
import ContactUs from './contact/ContactUs'
import About from './about/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider.jsx'

function App() {

    //using context API for authentication
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  
  return (
    <>
    
    <div className=' dark:bg-slate-900 dark:text-white'>
       <Toaster/>
     <Routes>
       
      <Route path="/" element={<Home />} />
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup" />} />
       <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<About/>} />
      
     </Routes>
     </div>
      
   
    </>
  )
}

export default App
