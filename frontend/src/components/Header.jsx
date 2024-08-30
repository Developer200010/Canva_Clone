import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const saveImage = () =>{

    }

    const downloadImage = () =>{
            
    }

  return (
    <>
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
        <div className="flex justify-between px-10 items-center text-gray-300 h-full">
            <Link to="/">
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
            </Link>
            <span>Mini Canva</span>
            <div className="flex justify-center gap-2 text-gray-300">
                <button onClick={saveImage} className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm'>save</button>
                <button onClick={downloadImage} className='px-3 py-[6px] outline-none bg-[#252627] rounded-sm'>download</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header