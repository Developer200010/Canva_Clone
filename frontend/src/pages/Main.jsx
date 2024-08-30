import React from "react";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <div className="min-w-screen h-screen bg-black">
        <Header />
        <div className="flex h-[calc(100%-60px)] w-screen">
            <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto">
                <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Design</span>
                </div>
                <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Shapes</span>
                </div>
                <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Upload</span>
                </div>
                <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Test</span>
                </div>
                <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Project</span>
                </div>
                <div className="w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100">
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Images</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Main;
