import React from 'react'

const MyImages = () => {
  return (
    <div>
        <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 text-white mb-3 cursor-pointer">
            <label htmlFor="image" className='text-center cursor-pointer'>Upload Image</label>
            <input type="file" name="image" className='hidden' />
        </div>
        <div className="h-[77vh] overflow-x-auto p-3 scrollbar-hide">
            <div className="grid grid-cols-2 gap-2">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13].map((_,i)=>(
                        <div className="w-full h-[100px] overflow-hidden rounded-md cursor-pointer">
                            <img className='w-full h-full object-fill' src="https://cdn.pixabay.com/photo/2022/08/07/20/28/night-7371349_1280.jpg" alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MyImages