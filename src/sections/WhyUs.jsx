import React from "react";
import { whyUs, whyUsHeading } from "../constants";

const WhyUs = () => {
  return (
    <section>
      {whyUsHeading.map(({ title, description, button }, index) => (
        <div
          key={index}
          className="p-8 flex justify-between max-sm:flex-col max-sm: gap-3"
        >
          <h1 className="font-cabinet text-3xl font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl w-[8ch]">
            {title}
          </h1>

          <div className="flex flex-col gap-5 justify-start items-start max-w-prose">
            <p className="font-satoshi font-light text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              {description}
            </p>

            <button className="font-satoshi text-base font-light sm:text-lg lg:text-xl  2xl:text-2xl underline underline-offset-4">
              {button.title}
            </button>
          </div>
        </div>
      ))}

      <div className="p-8">
        <div>
          <h1 className="font-cabinet text-3xl font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl">
            {whyUs[0].id}
          </h1>
          <h2 className="font-cabinet text-2xl font-medium sm:text-3xl lg:text-4xl 2xl:text-5xl">
            {whyUs[0].title}
          </h2>
          <p className="font-satoshi font-light text-base max-w-prose  sm:text-lg lg:text-xl 2xl:text-2xl">
            {whyUs[0].description}
          </p>
        </div>

        <div className="flex justify-center items-center relative border-2 border-red-600">
          <div className="absolute left-0 top-0 transform -rotate-90 origin-top-left translate-y-10 border-2 border-green-600">
            <h3 className="font-satoshi font-light text-xl tracking-widest">
              {whyUs[0].image.title}
            </h3>
          </div>
          <img
            src={whyUs[0].image.src}
            alt={whyUs[0].image.title}
            className="size-1/4 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
