import React from 'react';
import banner from "../../public/Banner.jpg"

function Banner() {
  return (

    <>



    <div className="mx-auto flex flex-col md:flex-row  ">
     <div className="py-20 px-8 w-full order-2 md:w-1/2 md:mt-40 ">
       <h1 className="  text-4xl font-bold">Hello there,You can find your favourite book here !
        <span className="text-pink-600">new books everyday</span>
         </h1>

  <div>
      <p className='py-5 '>Your favourite books are avalaible on reasonable prices . Explore new books everyday . Buy new books and expand your personal E-libaray . Happy Reading :)</p></div>

      <label className="input validator dark:bg-slate-800 dark:text-white">
  <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email"  placeholder="xyz@gmail.com" required />
</label>
<div className="validator-hint hidden  dark:bg-slate-800 dark:text-white ">Enter valid email address</div>

<div>
  <button className=" my-5 btn btn-secondary">Get Started</button>
</div>


  </div>
        

        

       <div className="w-full order-1 md:w-1/2 md:order-2">
       <img className=" w-150 py-8 "src={banner} alt="" />
       </div>

    </div>

    </>
    
  )
}

export default Banner
