import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null });

      toast.success("Logout successful");
      setTimeout(() => {
        localStorage.removeItem("Users");
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Logout failed:", error.message);
      setTimeout(() => {}, 3000);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 cursor-pointer transition duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
