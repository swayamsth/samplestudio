import React from "react";
import { whyUs } from "../constants";

const SetApart = () => {
  return (
    <section className="p-8 grid grid-rows-6 grid-cols-2 w-full h-[300vh]">
      {/* First Section */}

      <div className="row-start-1 row-span-1 col-start-1 col-span-1">
        <h1 className="font-cabinet text-3xl mb-3 font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl">
          {whyUs[0].id}
        </h1>
        <h2 className="font-cabinet text-2xl font-medium mb-1 sm:text-3xl lg:text-4xl 2xl:text-5xl">
          {whyUs[0].title}
        </h2>
        <p className="font-satoshi font-light text-base max-w-prose sm:text-lg lg:text-xl 2xl:text-2xl">
          {whyUs[0].description}
        </p>
      </div>

      <div className="relative row-start-1 row-span-2 col-start-2 col-span-1 size-[90%] rounded-xl object-cover justify-self-end">
        <img src={whyUs[0].image.src} alt={whyUs[0].image.title} className="" />

        <div className="absolute left-0 top-1/3 origin-bottom-left -translate-y-1/2 -rotate-90 transform">
          <p className="whitespace-nowrap font-light text-base tracking-widest font-satoshi sm:text-lg lg:text-xl">
            {whyUs[0].image.title}
          </p>
        </div>
      </div>

      {/* Second Section */}

      <div className="row-start-3 row-span-1 col-start-2 col-span-1">
        <h1 className="font-cabinet text-3xl mb-3 font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl">
          {whyUs[1].id}
        </h1>
        <h2 className="font-cabinet text-2xl mb-1 font-medium sm:text-3xl lg:text-4xl 2xl:text-5xl">
          {whyUs[1].title}
        </h2>
        <p className="font-satoshi font-light text-base max-w-prose sm:text-lg lg:text-xl 2xl:text-2xl">
          {whyUs[1].description}
        </p>
      </div>

      <div className="relative w-3/4 h-auto row-start-2 row-span-2 col-start-1 col-span-1">
        <img
          src={whyUs[1].image.src}
          alt={whyUs[1].image.title}
          className="rounded-xl object-cover"
        />

        <div className="absolute bottom-24 -right-[15.75rem] origin-bottom-left -translate-y-1/2 -rotate-90 transform">
          <p className="whitespace-nowrap font-light text-base tracking-widest font-satoshi sm:text-lg lg:text-xl">
            {whyUs[1].image.title}
          </p>
        </div>
      </div>

      {/* Third Section */}

      <div className="row-start-4 row-span-1 col-start-1 col-span-1">
        <h1 className="font-cabinet text-3xl mb-3 font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl">
          {whyUs[2].id}
        </h1>
        <h2 className="font-cabinet text-2xl font-medium mb-1 sm:text-3xl lg:text-4xl 2xl:text-5xl">
          {whyUs[2].title}
        </h2>
        <p className="font-satoshi font-light text-base max-w-prose sm:text-lg lg:text-xl 2xl:text-2xl">
          {whyUs[2].description}
        </p>
      </div>

      <div className="relative row-start-4 row-span-2 col-start-2 col-span-1 w-10/12 h-auto justify-self-end">
        <img
          src={whyUs[2].image.src}
          alt={whyUs[2].image.title}
          className="rounded-xl object-cover"
        />

        <div className="absolute left-0 top-1/3 origin-bottom-left -translate-y-1/2 -rotate-90 transform">
          <p className="whitespace-nowrap font-light text-base tracking-widest font-satoshi sm:text-lg lg:text-xl">
            {whyUs[2].image.title}
          </p>
        </div>
      </div>

      {/* Fourth Section */}

      <div className="row-start-6 row-span-1 col-start-2 col-span-1">
        <h1 className="font-cabinet text-3xl mb-3 font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl">
          {whyUs[3].id}
        </h1>
        <h2 className="font-cabinet text-2xl mb-1 font-medium sm:text-3xl lg:text-4xl 2xl:text-5xl">
          {whyUs[3].title}
        </h2>
        <p className="font-satoshi font-light text-base max-w-prose sm:text-lg lg:text-xl 2xl:text-2xl">
          {whyUs[3].description}
        </p>
      </div>

      <div className="relative w-10/12 h-auto row-start-5 row-span-2 col-start-1 col-span-1">
        <img
          src={whyUs[3].image.src}
          alt={whyUs[3].image.title}
          className="rounded-xl object-cover"
        />

        <div className="absolute bottom-24 -right-[19rem] origin-bottom-left -translate-y-1/2 -rotate-90 transform">
          <p className="whitespace-nowrap font-light text-base tracking-widest font-satoshi sm:text-lg lg:text-xl">
            {whyUs[3].image.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SetApart;
