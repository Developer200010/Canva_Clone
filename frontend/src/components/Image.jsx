import React from 'react'

const Image = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13].map((_,i)=>(
                        <div className="w-full h-[100px] overflow-hidden rounded-md cursor-pointer">
                            <img className='w-full h-full object-fill' src="https://cdn.pixabay.com/photo/2022/08/07/20/28/night-7371349_1280.jpg" alt="" />
                        </div>
                    ))
                }
            </div>
  )
}

export default Image