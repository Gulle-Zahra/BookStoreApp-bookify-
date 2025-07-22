import React from 'react'

function Card({item}) 
{
  
    return (
  <>
  <div>
<div className="card bg-base-100 w-90 h-90 shadow-sm mx-auto mx-10  bg-sky-50 hover:scale-105 duration-200  dark:bg-slate-800 dark:text-white">
  <figure className="h-50">
    <img  src={item.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline  ">{item.price}-Rupees</div>
      <div className=" badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Card
