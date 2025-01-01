import React, { useState } from 'react';
import cardsData from '../components/cardsData';
import { motion } from 'motion/react';

function Featured() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="w-full py-14 font-montreal">
      <div className="w-full px-12 border-b-[1px] border-zinc-700 py-8 ">
        <h1 className="lg:text-[3.25rem] md:text-5xl text-3xl tracking-wide">
          Featured projects
        </h1>
      </div>
      <div className="px-12">
        <div className="cards w-full flex flex-wrap py-10 ">
          {cardsData.map((item, index) => {
            return (
              <div
                className="cardcontainer p-2 w-full md:w-1/2 relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                key={index}
              >
                <h1
                  className={`absolute text-[#cdea68] z-[9] font-grotesk uppercase lg:text-8xl sm:text-6xl text-3xl top-1/2 -translate-y-1/2 text-nowrap overflow-hidden flex ${
                    index % 2
                      ? `right-1/2 md:right-full translate-x-1/2`
                      : `md:left-full left-1/2 -translate-x-1/2`
                  }`}
                >
                  {item.name.split('').map((char, charIndex) => (
                    <motion.span
                      initial={{ y: '100%' }}
                      animate={
                        hoveredCard === index ? { y: '0' } : { y: '100%' }
                      }
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.06,
                      }}
                      key={charIndex}
                      className="inline-block "
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Featured;
