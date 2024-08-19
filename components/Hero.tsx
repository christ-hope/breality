import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { AnimateBrand, TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { TiLocationArrow } from "react-icons/ti";
import { Navbar } from "./ui/Navbar";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";

const Hero = () => {
  return (
    <div className="relative pb-10 pt-36">
      <BackgroundBeams />
      <Navbar navItems={navItems} />
      <div className="flex justify-center">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-[0.5rem] font-light text-xs text-center text-white">
            Transformez vos Idées en Solutions Numériques
          </h2>
          <TextGenerateEffect
            className="text-center font-medium text-3xl md:text-5xl lg:text-6xl"
            words="Faire des Concepts des Experiences Fluides & Innovantes"
            duration={1.5}
          />
          <AnimateBrand className="mt-2 mb-4">
            <p className="text-center font-light md:tracking-widest text-white-100 text-sm mb-2 md:text-lg lg:text-xl">
              Nous sommes Breality.
              <span className="p-2 bg-blue-900 rounded-md font-medium mx-2">
                studio
              </span>
            </p>
          </AnimateBrand>
          <div className="flex justify-center items-center">
            <ShimmerButton
              icon={<TiLocationArrow size={24} />}
              title={"Decouvrir"}
              style={"my-2 px-7"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
