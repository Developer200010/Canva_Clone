import React from 'react'
import Image from '../Image'

const MyImages = () => {
  return (
    <div>
        <div className="w-full h-[40px] flex justify-center items-center bg-purple-500 text-white mb-3 cursor-pointer">
            <label htmlFor="image" className='text-center cursor-pointer'>Upload Image</label>
            <input type="file" name="image" className='hidden' />
        </div>
        <div className="h-[77vh] overflow-x-auto p-3 scrollbar-hide">
           <Image/>
        </div>
    </div>
  )
}

export default MyImages