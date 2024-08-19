import React from "react";

const MagicButton = ({
  icon,
  position,
  title,
  handleClick,
}: {
  icon?: React.ReactNode;
  position?: string;
  title?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none m-2"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm text-white backdrop-blur-3xl gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
