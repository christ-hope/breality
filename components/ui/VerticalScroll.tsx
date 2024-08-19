"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const VerticalMovingCards = ({
  items,
  direction = "up",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: string[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "up") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col gap-3 min-w-full shrink-0 py-4",
          start && "animate-vertical-scroll ",
          pauseOnHover && "text-slate-50 hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="lg:px-3 py-4 px-3 font-light text-xs text-slate-500 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
