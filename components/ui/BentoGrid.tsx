"use client";

import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { GradientAnimation } from "./GradientAnimation";
import { VerticalMovingCards } from "./VerticalScroll";
import { WorldConnect } from "./WorldConnect";

import MagicButton from "./MagicButton";
import { MdCallMade } from "react-icons/md";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-5 gap-4 max-w-7xl lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  img,
  className,
  titleClassName,
  imgClassName,
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const frontEndTechs = [
    "ReactJS",
    "NextJs",
    "Laravel",
    "Express",
    "GraphQL",
    "React Native",
    "Flutter",
  ];
  const programmingLang = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "PHP",
    "Java",
    "SQL",
    "MongoDB",
  ];
  const desingTech = [
    "Figma",
    "AdobeXD",
    "Sketch",
    "Filmora",
    "Premiere Pro",
    "After Effect",
    "Photoshop",
    "Illustrator",
  ];

  const [copied, setCopied] = React.useState(false);

  return (
    <div
      className={cn(
        className,
        "row-span-1 relative rounded-3xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-transparent dark:border-0 bg-gradient-to-t from-[rgba(4,7,29,0.7)] to-[rgba(12,14,35,0.8)] border border-transparent justify-between flex flex-col space-y-4"
      )}
    >
      <div
        className={`${id === 6 && "flex justify-center items-center"} h-full`}
      >
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover")}
            />
          </div>
        )}

        {id === 6 && (
          <GradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </GradientAnimation>
        )}
      </div>
      <div
        className={cn(
          titleClassName,
          "h-full group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col p-5"
        )}
      >
        <div className="font-sans font-bold text-neutral-600 text-base lg:text-xl max-w-[480px] z-20 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div
          className={`${
            id == 5 && "lg:max-w-56"
          } max-w-80 font-sans font-extralight text-neutral-600 text-base dark:text-neutral-50 z-50`}
        >
          {description}
        </div>

        {id === 4 && <WorldConnect />}

        {id === 5 && (
          <div className="flex w-full h-60 relative lg:absolute justify-end">
            <div className="flex gap-1 lg:gap-3 w-fit h-full lg:pr-10">
              {/* tech stack lists */}
              <VerticalMovingCards
                direction="up"
                items={programmingLang}
                speed="slow"
              />
              <VerticalMovingCards
                direction="down"
                items={desingTech}
                speed="slow"
              />
              <VerticalMovingCards
                direction="up"
                items={frontEndTechs}
                speed="slow"
              />
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="relative w-full">
            <MagicButton
              title={
                copied ? "Merci de nous avoir fait confiance" : "Contacter-nous"
              }
              position="right"
              icon={<MdCallMade />}
            />
          </div>
        )}
      </div>
    </div>
  );
};
