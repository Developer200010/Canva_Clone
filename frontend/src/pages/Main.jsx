import React, { Component, useState } from "react";
import Header from "../components/Header";
import TemplateDesign from "../components/Main/TemplateDesign";
import MyImages from "../components/Main/Myimages";
import Project from "../components/Project";
import Image from "../components/Image";
import CreateComponent from "../components/CreateComponent";
const Main = () => {
  const [state, setState] = useState();
  const [ currentComponent, setCurrentComponent] = useState('')
  const [show, setShow] = useState({
    status: true,
    name: "",
  });

  const createBar = (type, name) => {
    setState(type);
    setShow({
      status: false,
      name: name,
    });
  };

  const moveElement = () =>{
      console.log("move")
  }

  const resizeElement = () =>{
    console.log("resize")
  }

  const rotateElement = () =>{
    console.log("rotate")
  }

  const removeComponent = () =>{
    console.log("remove")
  }
  const [component,setComponent] = useState([
    {
      name : "main_frame",
      type : "react",
      id : Math.floor(Math.random() * 100 + 10),
      height : 450,
      width: 650,
      z_index : 1,
      image : '',
      color:"#fff",
      setCurrentComponent : (a) => setCurrentComponent(a )
    }
  ]);
  console.log(currentComponent)

  return (
    <>
      <div className="min-w-screen h-screen bg-black">
        <Header />
        <div className="flex h-[calc(100%-60px)] w-screen">
          <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto scrollbar-hide">
            <div
              onClick={() => createBar("design", "design")}
              className={` ${
                show.name === "design" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">Design</span>
            </div>
            <div
              onClick={() => createBar("shape", "shape")}
              className={` ${
                show.name === "shape" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">Shapes</span>
            </div>
            <div
              onClick={() => createBar("upload", "upload")}
              className={` ${
                show.name === "upload" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">Upload</span>
            </div>
            <div
              onClick={() => createBar("text", "text")}
              className={` ${
                show.name === "text" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">Text</span>
            </div>
            <div
              onClick={() => createBar("project", "project")}
              className={` ${
                show.name === "project" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">Project</span>
            </div>
            <div
              onClick={() => createBar("image", "image")}
              className={` ${
                show.name === "image" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">Images</span>
            </div>
            <div
              onClick={() => createBar("background", "background")}
              className={` ${
                show.name === "background" ? "bg-[#252627]" : ""
              } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}
            >
              <span className="text-2xl">
                <i class="fa-solid fa-border-all"></i>
              </span>
              <span className="text-sm font-b">background</span>
            </div>
          </div>
          <div className="h-full w-[calc(100%-75)]">
            <div
              className={`${
                show.status ? "p-0 -left-[350px]" : "px-8 left-[75px] py-5"
              } bg-[#252627] h-full fixed transition-all duration-500 w-[350px] z-30`}
            >
              <div
                onClick={() => setShow({ name: "", status: true })}
                className="flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-purple-500 top-[40%] cursor-pointer h-[100px] rounded-sm"
              >
                <i class="fa-regular fa-envelope"></i>
              </div>
              {state === "design" && (
                <div className="">
                  <div className="grid grid-cols-2 gap-2">
                    <TemplateDesign />
                  </div>
                </div>
              )}
              {state === "shape" && (
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-[90px] bg-white cursor-pointer"></div>
                  <div className="h-[90px] bg-white cursor-pointer rounded-full"></div>
                  <div
                    style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
                    className="h-[90px] bg-white cursor-pointer"
                  ></div>
                </div>
              )}
              {state === "upload" && (
                <div className="">
                  <MyImages />
                </div>
              )}
              {state === "text" && (
                <div className="flex justify-center items-center bg-white p-2 rounded-md">
                  <div>Add to text</div>
                </div>
              )}
              {state === "image" && (
                <div className="">
                  <div className="h-[80vh] overflow-x-auto p-3 scrollbar-hide">
                    <Image />
                  </div>
                </div>
              )}
              {state === "project" && (
                <div className="">
                  <div className="h-[80vh] overflow-x-auto p-3 scrollbar-hide">
                    <Project />
                  </div>
                </div>
              )}
              {state === "background" && (
                <div className="">
                  <div className="h-[80vh] overflow-x-auto p-3 scrollbar-hide">
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                        (_, i) => (
                          <div className="w-full h-[100px] overflow-hidden rounded-md cursor-pointer">
                            <img
                              className="w-full h-full object-fill"
                              src="https://cdn.pixabay.com/photo/2022/08/07/20/28/night-7371349_1280.jpg"
                              alt=""
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full flex">
            <div className={`flex justify-center relative items-center h-full ${!currentComponent ? "w-full" : "w-[calc(100%-250px)] overflow-hidden bg-slate-500"}`}>
              <div className="m-w-[650px] m-h-[480px] flex justify-center items-center overflow-hidden">
                <div className="w-auto relative h-auto overflow-hidden" id="main_design">
                  {
                    component.map((c,i)=>(
                      <CreateComponent key={i} info={c} current_component={currentComponent} removeComponent = {removeComponent}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          {
            currentComponent && <div className="text-white h-full w-[250px] bg-[#252627] px-3 py-2">something</div>
          }
        </div>
      </div>
    </>
  );
};

export default Main;
