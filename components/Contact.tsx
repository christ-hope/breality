"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";

const Contact = () => {
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
      id="contact"
      className="w-full flex flex-col items-center mt-10 mb-20"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      variants={sectionVariants}
    >
      <div className="w-full max-w-7xl px-5 sm:px:10">
        <motion.div
          className="w-full flex flex-col items-center justify-center space-y-4"
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          variants={titleVariants}
        >
          <div className="w-full absolute left-0 bottom-0 min-h-96">
            <Image
              src="/footer-grid.svg"
              alt="grid"
              className="w-full h-full opacity-50"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-3xl text-center text-white font-bold lg:max-w-[50vw]">
            Prêt à propulser votre présence digitale au niveau supérieur &
            donner <span className="text-pink-600">Vie</span> à votre{" "}
            <span className="font-black text-pink-600">Vision</span>
          </h1>
          <p className="text-xl text-white-200 md:mt-10 my-5 text-center">
            Nous nous ferons une joie de vous accompagnez dans ce voyage
          </p>

          <MagicButton title="Nous Contacter" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
