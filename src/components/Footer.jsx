import React from 'react';

function Footer() {
  return (
    <div className="w-full min-h-screen bg-zinc-800">
      <div className="px-12 py-10 w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full font-grotesk text-[10vw] uppercase leading-[0.77]">
          <h1>eye-</h1>
          <h1>opening</h1>
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="font-grotesk text-[10vw] uppercase leading-[0.77]">
            presentations
          </h1>
          <div className="flex flex-row md:flex-row-reverse w-full font-montreal my-10">
            <div className="w-1/2">
              <p className="py-6">M:</p>
              {[
                'Home',
                'Services',
                'Our work',
                'About us',
                'Insights',
                'Contact us',
              ].map((item, index) => {
                return (
                  <a href="" className="block underline" key={index}>
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="w-1/2">
              <p className="py-6">S:</p>
              {['Instagram', 'Behence', 'Facebook', 'Linkedin'].map(
                (item, index) => {
                  return (
                    <a href="" className="block underline" key={index}>
                      {item}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
