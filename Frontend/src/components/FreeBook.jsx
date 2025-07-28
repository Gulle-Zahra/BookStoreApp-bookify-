import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

function FreeBook() {

  const[book,setBook] = useState([]);

 useEffect(() => {
  const getBook = async () => {
    try {
      const res=await axios.get("http://localhost:4001/book"); 
      const FreeBook =res.data.filter((data)=>data.category==="Free")
      console.log(FreeBook);
      setBook(FreeBook);
      
    } catch (error) {
      console.log( error);
    }
  }
  getBook();
  },[]);


  
    


    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className="px-8">
      <h1 className="font-bold text-2xl">Some Free offered books for you !</h1>
      <p className='mb-10'>You can read these books if you can not afford our paid books.  </p>

    </div>

    <div>
       <div className="slider-container ">
      <Slider  {...settings}>
       {book.map((item)=>(<Card item={item} key={item.id}/> ))}

      </Slider>
    </div>
    </div>
    
    
    </>
  )
}

export default FreeBook
