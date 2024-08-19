"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    className?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-950)",
    "var(--black)",
    "var(--gray-300)",
    "var(--gray-950)",
    "var(--neutral-950)",
    "var(--tw-bg-opacity)",
  ];

  const linearGradients = [
    "linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))",
    "linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))",
    "linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))",
    "linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))",
    "linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))",
    "linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex relative space-x-10 rounded-md px-5"
      ref={ref}
    >
      <div className="w-full relative flex flex-col items-center justify-center lg:mx-16">
        <div className="w-full max-w-7xl px-5 sm:px-10">
          {content.map((item, index) => (
            <div className="w-full flex items-center justify-between space-x-6">
              <div key={item.title + index} className="my-10">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className={`${
                    activeCard === 2 ? "text-black-100" : "text-slate-300"
                  } text-2xl font-bold`}
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  className={`${
                    activeCard === 2 ? "bg-black-100" : "bg-slate-300"
                  } relative h-1 rounded-sm mt-2`}
                  animate={{
                    width: activeCard === index ? 80 : 0,
                  }}
                />
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className={`${
                    activeCard === 2 ? "text-black" : "text-slate-300"
                  } text-base font-medium lg:text-xl max-w-lg mt-10`}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className={`${
                    activeCard === 2 ? "text-black-100" : "text-slate-300"
                  } text-sm font-light lg:text-lg max-w-lg mt-5`}
                >
                  {item.content}
                </motion.div>
              </div>
              <motion.div
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  x: activeCard === index ? 0 : -50,
                  y: activeCard === index ? 0 : -50,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "hidden lg:block h-60 w-96 rounded-md sticky top-10 overflow-hidden",
                  `bg-[${backgroundGradient}]`,
                  contentClassName
                )}
              ></motion.div>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
    </motion.div>
  );
};
