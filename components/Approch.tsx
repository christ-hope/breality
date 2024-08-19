"use client";

import React from "react";
import { approchs } from "@/data";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const Approch = () => {
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
      className="w-full flex flex-col items-center mb-20"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl w-full px-10">
        <motion.div
          className="mb-10"
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          variants={titleVariants}
        >
          <p className="text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
            Notre Approche
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {approchs.map((item, index) => (
            <Card key={index} element={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Approch;
