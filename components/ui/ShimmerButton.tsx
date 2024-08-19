"use client"

import React from "react";

const ShimmerButton = ({
  icon,
  title,
  style,
  handleClick,
}: {
  icon?: React.ReactNode;
  title: string;
  style?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      className={`${style} inline-flex animate-shimmer h-12 items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#1e3a8a4c,45%,#6366fcab,55%,#1e3a8a4c)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md:mt-10 gap-2`}
      onClick={handleClick}
    >
      {title}
      {icon}
    </button>
  );
};

export default ShimmerButton;
