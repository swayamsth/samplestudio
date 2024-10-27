import React from "react";
import { contact } from "../constants";
import Button from "../components/Button";

const Contact = () => {
  const contactStatus = true;
  return (
    <section className="bg-[url('/images/contact.webp')] h-screen w-full bg-cover bg-top relative">
      {contact.map(({ title, button }, index) => (
        <div
          key={index}
          className="grid place-content-center text-center gap-y-3 p-8 w-full h-full top-1/4 absolute sm:gap-y-4 2xl:gap-y-6 2xl:top-1/3"
        >
          <h1 className="font-satoshi text-4xl leading-tight font-normal sm:text-5xl lg:text-6xl  2xl:text-7xl text-contact">
            {title}
          </h1>
          <div className="mx-auto mt-6">
            <Button button={button} contact={contactStatus} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
