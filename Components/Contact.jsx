import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-cyan-300 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              How can we help you?
            </div>
          </div>
          <Image
            src="/contact.svg"
            width={300}
            height={200}
            alt=""
            className=" pt-4"
          />
        </div>
        <form novalidate="" className="space-y-6">
          <div>
            <label for="name" className="text-sm font-bold">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="email" className="text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="message" className="text-sm font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-cyan-500 dark:bg-violet-800 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

