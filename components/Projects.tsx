"use client";

import React from "react";
import { PinContainer } from "./ui/3DPinAnmation";
import { motion } from "framer-motion";
import { companies, projects } from "@/data";
import Image from "next/image";

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="w-full flex flex-col items-center mb-20"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      variants={sectionVariants}
    >
      <div className="w-full max-w-7xl">
        <motion.div
          className="w-full"
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          variants={titleVariants}
        >
          <p className="text-3xl sm:text-4xl text-center mx-10 font-medium lg:font-bold leading-snug text-white">
            Decouvrez nos Projets les plus recents
            <br />
            Des Realisations qui font{" "}
            <span className="text-transparent font-black bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
              la Difference
            </span>
          </p>
        </motion.div>

        <div className="w-full relative mt-10 sm:px-10 flex flex-wrap items-center justify-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="w-fit h-96 flex items-center justify-center "
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {item.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">{item.description}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                    <Image
                      src={item.img}
                      width="300"
                      height="300"
                      className="object-cover h-full w-full inset-0"
                      alt={item.title}
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Projects;
