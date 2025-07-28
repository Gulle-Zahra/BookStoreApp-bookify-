import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async(data) => {
    const userInfo = {
      email: data.Email,
      password: data.Password,
    };
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res) => {
      console.log( res.data);
      if(res.data){
        toast.success("Login successful! ");
        document.getElementById("my_modal_5").close();
        setTimeout(() => {  window.location.reload();
           localStorage.setItem("Users",JSON.stringify(res.data.user))
        },2000)
      
        //document.getElementById("my_modal_5").showModal();
      }
      //store user data in localStorage
     
    })
    .catch((err) => {
      console.error("Error during sign-up:", err);
      toast.error("Incorrect email or password" );
      setTimeout(() => {}, 1000);
    });
  };

  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white">
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle dark:bg-slate-800 dark:text-white"
        >
          <div className="modal-box dark:bg-slate-800 dark:text-white">
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-bold text-lg mb-8">Login</h3>
              <button
                className="btn dark:bg-slate-800 dark:text-white"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>

            {/* Form Starts */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <div>
                Email
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-1 rounded w-80 border border-gray-300 outline-none"
                  {...register("Email", { required: true })}
                />
                {errors.Email && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-6">
                Password
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="px-3 py-1 rounded w-80 border border-gray-300 outline-none"
                  {...register("Password", { required: true })}
                />
                {errors.Password && (
                  <span className="text-red-500 text-sm">This field is required</span>
                )}
              </div>

              {/* Buttons and Links */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-pink-500 rounded-md"
                >
                  Login
                </button>
                <div>
                  <span>Not registered? </span>
                  <Link
                    to="/signup"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Sign-up
                  </Link>
                </div>
              </div>
            </form>
            {/* Form Ends */}
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
