import { motion } from 'motion/react';
import React from 'react';

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="w-full h-screen lg:h-full overflow-hidden bg-zinc-900 pt-1"
    >
      <div className="textstructure md:my-28 px-14 h-1/2 md:h-max flex items-start justify-center flex-col ">
        {['We Create', 'Eye-Opening', 'Presentations'].map((item, index) => (
          <div className="masker flex items-baseline " key={index}>
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '9vw' }}
                transition={{ ease: 'circOut' }}
                className="mr-[1vw] w-[8vw] h-[6vw] rounded-md bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-center"
              ></motion.div>
            )}
            <h1
              className="uppercase text-[10vw]  
        font-grotesk leading-[8vw]"
            >
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 flex md:flex-row  flex-col items-start md:items-center   justify-evenly md:justify-between px-14 py-2 font-montreal text-sm md:text-base h-1/2 md:h-min">
        {[
          'For public and private companies',
          'From the first pitch to IPO',
        ].map((item, index) => (
          <p className=" font-light" key={index}>
            {item}
          </p>
        ))}
        <div className="start">
          <div className="px-2 py-1 border-[1px] border-zinc-700 rounded-full uppercase font-light  w-fit">
            Start the project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
