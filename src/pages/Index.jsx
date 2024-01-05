import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const user = [
    {
      id: 1,
      username: "Sree2604",
      password: "123456",
    },
  ];

  const handleSubmission = (e) => {
    e.preventDefault();
    if (userName == user[0].username) {
      if (passWord == user[0].password) {
        sessionStorage.setItem("Login", true);
        navigate("/home");
      } else {
        toast.error("Password is Incorrect...!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error("Username is Incorrect...!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="grid place-content-center mt-64">
      <ToastContainer />
      <p className="flex justify-center mb-10">Welcome to our E-comerce Page</p>
      <form className="w-full max-w-sm" onSubmit={handleSubmission}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <input
              className="shadow bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Sign Up"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Index;
