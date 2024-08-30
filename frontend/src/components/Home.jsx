import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState();
  const [state, setState] = useState({
    width: 0,
    height : 0,
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const create = () =>{
    navigate("/design/create",{
      state:{
        type:"create",
        width : state.width,
        height : state.height
      }
    })
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <div className="pt-4">
      <div className="w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] rounded-md relative overflow-hidden">
        <button onClick={()=> setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] absolute top-3 right-3'>customize size</button>
        <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? "visible opacity-100":"invisible opacity-30"} transition-all duration-500`}>
          <div className="grid grid-cols-2 pb-4 gap-3">
            <div className="flex gap-2 justify-center items-center flex-col">
              <label htmlFor="width">width</label>
              <input onChange={inputHandle} type="number" name="width" id="width" className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md ' />
            </div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <label htmlFor="height">Height</label>
              <input onChange={inputHandle} type="number" name="height" id="height" className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md ' />
            </div>
          </div>
          <button onClick={create} className='px-4 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] w-full'>Create new design</button>
        </div>
        <div className="text-3xl pb-10 pt-10 font-semibold text-white">
          What will you design today?
        </div>
      </div>
      <h2 className="text-xl pb-10 py-6 font-semibold text-white">Your recent design</h2>
      <div>
        <Carousel
        autoPlay={true}
        infinite={true}
        responsive={responsive}
        transitionDuration={500}
        >
         { [1,2,3,4,5,6,7,8,9,10].map((_,i)=>{
          return <div key={i} className='relative group w-full h-[170px] px-2'>
              <Link className='w-full h-full block bg-[#ffffff12] rounded-md p-4'>
              <img className='w-full h-full rounded-md overflow-hidden' src="https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              </Link>
              <div className="absolute hidden cursor-pointer top-2 right-2 text-red-500 p-2 transition-all duration-500 group-hover:block"><i class="fa-solid fa-trash"></i></div>
            </div>

          })}
        </Carousel>
      </div>
    </div>
    </>
  )
}

export default Home