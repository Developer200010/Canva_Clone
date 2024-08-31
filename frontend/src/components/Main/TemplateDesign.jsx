import React from 'react'

const TemplateDesign = () => {
  return (
    <>
    {
        [1,2,3,4].map((_,i)=>{
            return (
                <div key={i} className="group w-full rounded-md overflow-hidden bg-[#ffffff12] cursor-pointer">
            <img className='w-full h-full rounded-md overflow-hidden' src="https://cdn.pixabay.com/photo/2024/07/21/10/22/vulture-8910009_1280.jpg" alt="" />
        </div> )
        }
            )
            
        } 
    </>
  )
}

export default TemplateDesign