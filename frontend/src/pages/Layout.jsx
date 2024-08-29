import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const {pathname} = useLocation()
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-[#18191b] h-screen w-full">
        <div className="bg-[#252627] shadow-md fixed left-0 top-0 w-full z-20">
          <div className="w-[93%] m-auto py-3">
            <div className="flex justify-between items-center">
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
              <div className="flex gap-4 justify-center items-center">
                <button className="py-2 px-4 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[5px] font-medium hover:bg-[#9553fa]">
                  Create a design
                </button>
                <div className="cursor-pointer">
                  <img
                    onClick={() => setShow(!show)}
                    src="https://images.pexels.com/photos/27514901/pexels-photo-27514901/free-photo-of-woman-in-hat-sitting-with-hand-on-cheek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-[45px] h-[45px] rounded-full"
                    alt="profile"
                  />
                </div>
                <div
                  className={` ${
                    show ? "visible opacity-100" : "invisible opacity-30"
                  } absolute top-[70px] right-0 w-[250px] bg-[#313030] p-3 border-gray-700 transition duration-500 rounded-sm`}
                >
                  <div className="flex px-2 py-2 gap-4 items-center  ">
                    <img
                      src="https://images.pexels.com/photos/27514901/pexels-photo-27514901/free-photo-of-woman-in-hat-sitting-with-hand-on-cheek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="w-[40px] h-[40px] rounded-full"
                      alt="profile"
                    />
                    <div className="flex justify-center items-start flex-col text-[#fff] text-">
                      <span>name</span>
                      <span className="text-md font-bold">name@gmail.com</span>
                    </div>
                  </div>
                  <hr />
                  <ul className="text-[#fff] font-semibold">
                    <li className="p-2 cursor-pointer">setting</li>
                    <li className="p-2 cursor-pointer">Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-16">
          <div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed">
            <div className="px-2 py-2 flex justify-start gap-5 items-center mb-3">
              <img
                src="https://images.pexels.com/photos/27514901/pexels-photo-27514901/free-photo-of-woman-in-hat-sitting-with-hand-on-cheek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="rounded-full w-[40px] h-[40px]"
                alt="pic"
              />
              <div className="flex justify-center flex-col items-start">
                <span className="text-[#e0dddd] font-bold text-sm">name</span>
                <span className="text-[#c040c0] text-sm">Free</span>
              </div>
            </div>
            <ul className="px-4 flex flex-col gap-2">
              <li>
                <Link to="/" className={`text-white px-2 py-2 flex justify-start items-center gap-2 ${pathname === "/"  ? "bg-[#ffffff26]":""} rounded-md`}>
                  <span className="text-xl">
                    <i class="fa-solid fa-house"></i>
                  </span>
                  <span className="font-medium">Home</span>
                </Link>
                <Link to="/projects" className={`text-white px-2 py-2 flex justify-start items-center gap-2 ${pathname === "/projects"  ? "bg-[#ffffff26]":""} rounded-md`}>
                  <span className="text-xl">
                  <i class="fa-solid fa-folder"></i>
                  </span>
                  <span className="font-medium">Projects</span>
                </Link>
                <Link to="/templates" className={`text-white px-2 py-2 flex justify-start items-center gap-2 ${pathname === "/templates"  ? "bg-[#ffffff26]":""} rounded-md`}>
                  <span className="text-xl">
                  <i class="fa-solid fa-table-cells"></i>
                  </span>
                  <span className="font-medium">Templates</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-[300px] w-[calc(100%-300px)]">
            <div className="py-y pr-8">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
