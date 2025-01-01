import React from 'react';

function Cards() {
  return (
    <div className="w-full lg:min-h-screen bg-zinc-500">
      <div className="grid gap-4 sm:grid-cols-12 px-12 lg:py-20 py-10">
        <div className="cardcontainer sm:col-span-12 lg:col-span-4 xl:col-span-6 h-[65vh] rounded-xl overflow-hidden">
          <div className="relative card w-full h-full  flex items-center justify-center bg-[#004D43]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
              className="w-36 h-16"
            />
            <button className="absolute bottom-6 left-6 px-3 py-1 border-[1px] rounded-full border-[#CDEA68] text-[#CDEA68] text-sm">
              ©2019-2022
            </button>
          </div>
        </div>
        <div className="cardcontainer sm:col-span-6 lg:col-span-4 xl:col-span-3  h-[65vh] rounded-xl overflow-hidden">
          <div className="relative card w-full h-full  flex items-center justify-center  bg-[#212121]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
              className="w-36 h-20"
            />
            <button className="absolute bottom-6 left-6 px-3 py-1 border-[1px] rounded-full text-white text-sm uppercase hover:text-black hover:bg-white transition-all ease-in-out">
              rating 5.0 on clutch
            </button>
          </div>
        </div>
        <div className="cardcontainer sm:col-span-6 lg:col-span-4 xl:col-span-3  h-[65vh] rounded-xl overflow-hidden">
          <div className="relative card w-full h-full  flex items-center justify-center  bg-[#212121]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
              className="max-w-28 max-h-28"
            />
            <button className="absolute bottom-6 left-6 px-3 py-1 border-[1px] rounded-full text-white text-sm uppercase hover:text-black hover:bg-white transition-all ease-in-out">
              business bootcamp alumni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
