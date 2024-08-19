'use client'

import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center px-5 py-10 sm:px-10">

      <div className="max-w-7xl w-full flex mt-16 space-y-6 md:space-y-0 md:flex-row flex-col justify-between items-center">
        <p className="text-white md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Breality{" "}
          <span className="p-2 bg-blue-900 rounded-md font-medium">
            studio
          </span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((social) => (
            <div
              key={social.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={social.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
