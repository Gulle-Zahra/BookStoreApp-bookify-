import React from "react";
import { Link , useLocation , useNavigate} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-hot-toast';

function Signup() {

   const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.Email,
      password: data.Password,
    };
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
      console.log( res.data);
      if(res.data){
        toast.success("Sign-up successful! ");
        navigate(from, { replace: true });
        //document.getElementById("my_modal_5").showModal();
      }
      //store user data in localStorage
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    })
    .catch((err) => {
      console.error("Error during sign-up:", err);
      toast.error("Error")
  })
}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center z-50 dark:bg-slate-700">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative dark:bg-slate-800 dark:text-white">
            <Link
              to="/"
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-4xl font-bold"
            >
              &times;
            </Link>

            <h3 className="font-bold text-lg text-center mb-4">Sign-up</h3>

            <div className="mb-4">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
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
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
                {...register("Password", { required: true })}
              />
              {errors.Password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <button className="btn bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                Sign-up
              </button>
              <div>
                <span>Have account?</span>{" "}
                <button
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
