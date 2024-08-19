"use client";

import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import { services } from "@/data";
import { motion } from "framer-motion";

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="w-full relative"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      variants={sectionVariants}
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="w-full max-w-7xl"
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          variants={titleVariants}
        >
          <p className="text-4xl lg:text-6xl mx-10 font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
            Nos Services
          </p>
        </motion.div>
      </div>
      <StickyScroll content={services} />
    </motion.section>
  );
};

export default Services;
