import React from 'react';

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full bg-[#cdea68] rounded-tl-2xl rounded-tr-2xl text-black font-montreal"
    >
      <h1 className="lg:text-[3.25rem] md:text-5xl text-3xl font-normal leading-none px-12 pt-10 md:pt-20">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to{' '}
        <span className="underline">
          {' '}
          raise funds, sell prod­ucts, ex­plain com­plex ideas,
        </span>{' '}
        and <span className="underline"> hire great peo­ple.</span>
      </h1>
      <div className="grid md:grid-cols-12 my-10 md:my-20  gap-10 border-t-[1px] border-[#a1b562] px-12 py-4">
        <div className="md:col-span-4 lg:col-span-6">
          <p>What you can expect:</p>
        </div>
        <div
          className="md:col-span-4 lg:col-span-4
        flex flex-col item-center justify-between gap-y-10 max-w-[17rem] "
        >
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="md:col-span-4 lg:col-span-2 flex flex-col md:justify-end md:items-start">
          <a href="" className="underline">
            Instagram{' '}
          </a>
          <a href="" className="underline">
            Behance
          </a>
          <a href="" className="underline">
            Facebook
          </a>
          <a href="" className="underline">
            Linkedin
          </a>
        </div>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] py-4 px-12 flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
          <h1 className="lg:text-[3.25rem] md:text-4xl text-3xl">
            Our approach:
          </h1>
          <button className=" flex items-center gap-8 bg-zinc-800 text-white uppercase text-sm px-6 py-4 rounded-full mt-4 group hover:bg-black transition-all ease-linear duration-200">
            Read More
            <div className="flex items-center justify-center w-2 h-2 bg-zinc-100 rounded-full group-hover:scale-[3] transition-all ease-linear duration-200">
              <div className="text-black text-[6px] opacity-0 group-hover:opacity-100 ">
                ↗
              </div>
            </div>
          </button>
        </div>
        <div className="md:w-1/2 w-full rounded-xl overflow-hidden group hover:scale-95 transition-all ease-linear duration-700">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
            className="w-full object-cover group-hover:scale-110 transition-all ease-linear duration-700"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
