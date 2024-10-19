import React from "react";
import { aboutUs } from "../constants";
import Button from "../components/Button";

const About = () => {
  return (
    <section>
      {aboutUs.map(({ title, description, button, image }) => (
        <div className="p-6 sm:p-7 lg:p-8 flex justify-between items-center gap-8 max-sm:block">
          <div className="mt-16 sm:mt-24">
            <h1 className="font-cabinet text-3xl font-medium mb-3 sm:text-4xl sm:mb-5 lg:text-5xl 2xl:text-6xl">
              {title}
            </h1>
            <p className="font-satoshi font-light text-base sm:text-lg lg:text-xl 2xl:text-2xl">
              {description}
            </p>
            <div className="mt-12">
              <Button button={button} />
            </div>
          </div>

          <div>
            <img src={image} alt="" className="w-full max-sm:mt-8 rounded-xl" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;