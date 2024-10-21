import React from "react";
import { whyUs, whyUsHeading } from "../constants";

const WhyUs = () => {
  return (
    <section>
      {whyUsHeading.map(({ title, description, button }, index) => (
        <div key={index} className="p-8 flex justify-between">
          <h1 className="font-cabinet text-3xl font-medium sm:text-4xl lg:text-5xl 2xl:text-6xl w-[8ch]">
            {title}
          </h1>

          <div className="flex flex-col gap-5 justify-start items-start max-w-prose">
            <p className="font-satoshi font-light text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              {description}
            </p>

            <button className="font-satoshi text-lg font-light sm:text-xl lg:text-xl  2xl:text-2xl underline underline-offset-4">
              {button.title}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyUs;
