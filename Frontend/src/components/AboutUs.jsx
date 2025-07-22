import React from "react";

function AboutUs() {
  return (
    <>
      <div>
        <h1 className="flex items-center text-4xl font-bold justify-center w-full bg-pink-600 text-white h-20">
          About Us
        </h1>

        <p className="text-xl mt-10 mx-[30px]">
          <span className="text-pink-600 text-2xl">Welcome to Bookify</span> –
          your daily dose of literary treasure! At Bookify, we believe that
          everyone deserves access to great books. That’s why we offer 6
          handpicked free books every single day — from timeless classics to
          hidden gems across genres. Whether you're a casual reader or a book
          lover, there's always something new for you to explore. But that’s not
          all! For those who crave the latest releases and trending titles, our
          paid collection is updated daily with fresh, high-quality books. We
          work hard to bring you a diverse range of reads so you never run out
          of pages to turn.
        </p>

        <h2 className="text-pink-600 text-2xl mt-10 mx-[30px]">Why Bookify?</h2>

        <div className="flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-start text-left space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start gap-2">
              <span className="text-2xl text-pink-600">&#9733;</span>
              <span>6 New Free Books Every Day</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl text-pink-600">&#9733;</span>
              <span>Constantly Updated Paid Library</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl text-pink-600">&#9733;</span>
              <span>Curated Selections by Book Lovers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl text-pink-600">&#9733;</span>
              <span>Fresh Content Daily</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl text-pink-600">&#9733;</span>
              <span>Affordable, Accessible, and Reader-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
