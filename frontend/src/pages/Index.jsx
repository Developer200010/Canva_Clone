import React, { useState } from "react";
// import {IoMdClose} from "react-icons"
const Index = () => {
  const [type, setType] = useState();
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <>
      <div className="  bg-[#18191b] h-screen w-full">
        <div
          className={`w-screen ${
            show ? "visible opacity-100" : "invisible opacity-30"
          } transition-all duration-500 h-screen fixed flex bg-[#262627] justify-center items-center`}
        >
          <div className="w-[350px] bg-gray-900 m-auto px-6 py-4 rounded-md relative">
            <div
              className="absolute right-4 top-4 text-xl cursor-pointer text-white"
              onClick={() => setShow(false)}
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
            <h2 className="text-white pb-4 text-center">
              {" "}
              Login or sing up in second
            </h2>
            {type === "signin" && (
              <form action="">
                <div className="flex flex-col gap3 mb-3 text-white">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter you email id"
                    value={state.email}
                    className="px-3 py-2 rounded-md outline-none border border-red-600 hover:border-purple-500 bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap3 mb-3 text-white">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter you password"
                    value={state.email}
                    className="px-3 py-2 rounded-md outline-none border border-red-600 hover:border-purple-500 bg-transparent"
                  />
                </div>
                <div>
                  <button className="px-3 py-2 rounded-md bg-purple-500 w-full hover:bg-purple-600 ">
                    Sign in
                  </button>
                </div>
                <div className="flex py-4 justify-between items-center px-3">
                  <div className="w-[45%] h-[1px] bg-white"></div>
                  <div className="text-white w-[6%] flex text-center pb-1">
                    or
                  </div>
                  <div className="w-[45%] h-[1px] bg-white"></div>
                </div>
                <div className="pb-4">
                  <div className="px-3 flex justify-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800 items-center">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                    <span>Login with Gmail</span>
                  </div>
                </div>
                <div className="pb-4">
                  <div className="px-3 flex justify-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800 items-center">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                    <span>Login with Facebook</span>
                  </div>
                </div>
              </form>
            )}
            {type === "signup" && (
              <form action="">
                <div className="flex flex-col gap3 mb-3 text-white">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter you name "
                    value={state.name}
                    className="px-3 py-2 rounded-md outline-none border border-red-600 hover:border-purple-500 bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap3 mb-3 text-white">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter you email id"
                    value={state.email}
                    className="px-3 py-2 rounded-md outline-none border border-red-600 hover:border-purple-500 bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap3 mb-3 text-white">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter you password"
                    value={state.password}
                    className="px-3 py-2 rounded-md outline-none border border-red-600 hover:border-purple-500 bg-transparent"
                  />
                </div>
                <div>
                  <button className="px-3 py-2 rounded-md bg-purple-500 w-full hover:bg-purple-600 ">
                    Sign in
                  </button>
                </div>
                <div className="flex py-4 justify-between items-center px-3">
                  <div className="w-[45%] h-[1px] bg-white"></div>
                  <div className="text-white w-[6%] flex text-center pb-1">
                    or
                  </div>
                  <div className="w-[45%] h-[1px] bg-white"></div>
                </div>
                <div className="pb-4">
                  <div className="px-3 flex justify-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800 items-center">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                    <span>Login with Gmail</span>
                  </div>
                </div>
                <div className="pb-4">
                  <div className="px-3 flex justify-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800 items-center">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                    <span>Login with Facebook</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="bg-[#252627] shadow-md">
          <div className="w-[93%] m-auto py-3">
            <div className="flex justify-between items-center">
              <div className="w-[80px] h-[48px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#F06225"
                    d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
                  ></path>
                  <path
                    fill="#F06225"
                    d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  ></path>
                </svg>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setType("signin");
                    setShow(true);
                  }}
                  className="py-2 w-[80px]
                        text-center bg-blue-500 rounded-sm text-white transition-all hover:bg-blue-600 rounded-[5px]"
                >
                  signIn
                </button>
                <button
                   onClick={() =>{
                    setType("signup")
                    setShow(true)
                  }}
                  className="py-2 w-[80px]
                        text-center bg-purple-500 rounded-sm text-white transition-all hover:bg-purple-600 rounded-[5px]"
                >
                  signUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-96 justify-center items-center p-4">
          <div className="py-5 flex justify-center items-center flex-col gap-6">
            <h2 className="text-5xl text-white font-bold">
              What will you design?
            </h2>
            <span className="text-white text-2xl font-medium">
              canva makes it easy to create and share professional design.
            </span>
            <button
               onClick={() =>{
                setType("signup")
                setShow(true)
              }}
              className="py-2 w-[150px]
                        text-center bg-purple-500 rounded-sm text-white transition-all hover:bg-purple-600 rounded-[5px]"
            >
              signUp for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
