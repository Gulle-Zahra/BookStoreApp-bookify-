import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contactpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center z-50 dark:bg-slate-700">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative dark:bg-slate-800 dark:text-white">
              <Link
                to="/"
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-4xl font-bold"
              >
                &times;
              </Link>

              <h3 className="font-bold text-lg text-center mb-4">Contact Us</h3>

              <div className="mb-4">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
                  {...register("Name", { required: true })}
                />
                {errors.Name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
                  {...register("Email", { required: true })}
                />
                {errors.Email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label>Message</label>
                <input
                  type="text"
                  placeholder="Type your message"
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
                  {...register("Message", { required: true })}
                />
                {errors.Message && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button className="btn bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contactpage;
