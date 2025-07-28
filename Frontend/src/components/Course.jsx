import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Course() {

 const[book,setBook] = useState([]);

 useEffect(() => {
  const getBook = async () => {
    try {
      const res=await axios.get("http://localhost:4001/book"); 
      console.log(res.data);
      setBook(res.data);
      
    } catch (error) {
      console.log( error);
    }
  }
  getBook();
  },[]);

  return (
    <>

    <div className='bg-white dark:bg-slate-900 dark:text-white'>

  
    <div className='dark:bg-slate-900 dark:text-white'>
       
      <Navbar />
      <div className='dark:bg-slate-900 dark:text-white'>
        <h1 className='text-4xl text-center pt-30 mb-5 font-bold dark:bg-slate-900 dark:text-white '>
          We are delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className='text-xl mx-10'>Explore our paid courses that are designed to enhance your knowledge and skills. Each course is crafted with care to provide you with the best learning experience. Happy learning!</p>
      </div>

      <Link to="/">
       <div className='flex justify-center items-center'>
        <button className='bg-pink-500 text-white px-4 py-2 rounded-lg ml-10 mb-5 hover:bg-pink-600 transition duration-300'> Back to Free Books</button>
      </div>
       </Link>
     
       
       <div className="mx-auto ">    
       <div className=" ml-10 mr-10 grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto  ">  
            {book.map((course)=>( <Card item={course} key={course.id} />))}
       </div>
       </div>  

      <Footer/>
    </div>

      </div>
    </>
  )
}

export default Course
