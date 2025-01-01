import { motion } from 'motion/react';
import React from 'react';

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      // data-scroll-speed="-0.1"
      className="w-full rounded-tl-2xl rounded-tr-2xl bg-[#004D43] py-10 relative"
    >
      <div className="text border-t-[1px] border-b-[1px] border-[#1B6057] flex whitespace-nowrap font-grotesk overflow-hidden ">
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 5,
          }}
          className="uppercase text-[25vw] leading-none
          -mb-[2%] -mt-[5%] pr-10
         "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 5,
          }}
          className="uppercase text-[25vw] leading-none
          -mb-[2%] -mt-[5%] pr-10
         "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
