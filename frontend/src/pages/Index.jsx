import React from "react";

const Index = () => {
  return (
    <>
      <div className="bg-[#18191b] h-screen w-full">
        <div className="bg-[#252627] shadow-md">
          <div className="w-[93%] m-auto py-3">
            <div className="flex justify-between items-center">
              <div className="w-[80px] h-[48px]">
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
              </div>
              <div className="flex gap-4">
                <button
                  className="py-2 w-[80px]
                        text-center bg-blue-500 rounded-sm text-white transition-all hover:bg-blue-600 rounded-[5px]"
                >
                  signIn
                </button>
                <button
                  className="py-2 w-[80px]
                        text-center bg-purple-500 rounded-sm text-white transition-all hover:bg-purple-600 rounded-[5px]"
                >
                  signUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-96 justify-center items-center p-4">
          <div className="py-5 flex justify-center items-center flex-col gap-6">
            <h2 className="text-5xl text-white font-bold">What will you design?</h2>
            <span className="text-white text-2xl font-medium">
              canva makes it easy to create and share professional design.
            </span>
            <button
              className="py-2 w-[150px]
                        text-center bg-purple-500 rounded-sm text-white transition-all hover:bg-purple-600 rounded-[5px]"
            >
              signUp for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
