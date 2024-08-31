import React, { useState } from "react";
import Header from "../components/Header";
import TemplateDesign from "../components/Main/TemplateDesign";

const Main = () => {
    const [state, setState] = useState();
    const [show,setShow] = useState({
        status : true,
        name : '',
    })

    const createBar = (type,name) =>{
        setState(type);
        setShow({
            status:false,
            name:name
        })
    }

  return (
    <>
      <div className="min-w-screen h-screen bg-black">
        <Header />
        <div className="flex h-[calc(100%-60px)] w-screen">
            <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto">
                <div onClick={()=> createBar("design", 'design')} className={` ${show.name === "design" ? "bg-[#252627]" : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Design</span>
                </div>
                <div onClick={()=> createBar("shape", 'shape')}  className={` ${show.name === "shape" ? "bg-[#252627]" : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Shapes</span>
                </div>
                <div onClick={()=> createBar("upload", 'upload')} className={` ${show.name === "upload" ? "bg-[#252627]" : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Upload</span>
                </div>
                <div onClick={()=> createBar("text", 'text')} className={` ${show.name === "text" ? "bg-[#252627]" : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Text</span>
                </div>
                <div onClick={()=> createBar("project", 'project')} className={` ${show.name === "project" ? "bg-[#252627]" : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Project</span>
                </div>
                <div onClick={()=> createBar("image", 'image')} className={` ${show.name === "image" ? "bg-[#252627]" : ""} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                    <span className="text-2xl"><i class="fa-solid fa-border-all"></i></span>
                    <span className="text-sm font-b">Images</span>
                </div>
            </div>
            <div className="h-full w-[calc(100%-75)]">
                <div className={`${show.status ? "p-0 -left-[350px]":"px-8 left-[75px] py-5"} bg-[#252627] h-full fixed transition-all duration-500 w-[350px] z-30`}>
                    <div onClick={() => setShow({name:"", status:true})} className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-purple-500 top-[40%] cursor-pointer h-[100px] rounded-sm"><i class="fa-regular fa-envelope"></i></div>
                    {
                        state === "design" && <div className="">
                            <div className="grid grid-cols-2 gap-2">
                                <TemplateDesign/>
                            </div>
                        </div>
                    }
                    {
                        state === "shape" && <div className="">shape</div>
                    }
                    {
                        state === "upload" && <div className="">upload</div>
                    }
                    {
                        state === "text" && <div className="">text</div>
                    }
                    {
                        state === "image" && <div className="">image</div>
                    }
                    {
                        state === "project" && <div className="">project</div>
                    }
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Main;
